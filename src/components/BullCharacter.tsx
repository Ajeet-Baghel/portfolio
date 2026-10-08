import { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import * as THREE from "three";

/**
 * Original stylized bull head built from primitives.
 * Head + pupils track the cursor; blinks on a randomized timer.
 */

const COLORS = {
  head: "#101828",
  snout: "#1e293b",
  horn: "#e6edf3",
  sclera: "#e6edf3",
  pupil: "#0a0f1c",
  nostril: "#0a0f1c",
  ring: "#5eead4",
};

function Horn() {
  return (
    <mesh position={[0.55, 0.62, 0]} rotation={[0, 0, -0.1]}>
      <torusGeometry args={[0.3, 0.055, 12, 32, Math.PI * 0.75]} />
      <meshStandardMaterial color={COLORS.horn} roughness={0.35} />
    </mesh>
  );
}

function Bull() {
  const head = useRef<THREE.Group>(null);
  const leftPupil = useRef<THREE.Group>(null);
  const rightPupil = useRef<THREE.Group>(null);
  const eyes = useRef<THREE.Group>(null);

  const pointer = useRef({ x: 0, y: 0 });
  const blinkClock = useRef(0);
  const nextBlink = useRef(2 + Math.random() * 2);
  const blinkPhase = useRef<number | null>(null);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  useFrame((state, delta) => {
    const { x, y } = pointer.current;
    const t = state.clock.elapsedTime;

    // head follows cursor + gentle idle bob
    if (head.current) {
      head.current.rotation.y = THREE.MathUtils.lerp(
        head.current.rotation.y,
        x * 0.45,
        0.06
      );
      head.current.rotation.x = THREE.MathUtils.lerp(
        head.current.rotation.x,
        -y * 0.25,
        0.06
      );
      head.current.position.y = Math.sin(t * 1.2) * 0.045;
    }

    // pupils drift toward cursor
    const px = THREE.MathUtils.clamp(x * 0.05, -0.045, 0.045);
    const py = THREE.MathUtils.clamp(-y * 0.04, -0.04, 0.04);
    for (const p of [leftPupil.current, rightPupil.current]) {
      if (p) {
        p.position.x = THREE.MathUtils.lerp(p.position.x, px, 0.2);
        p.position.y = THREE.MathUtils.lerp(p.position.y, py, 0.2);
      }
    }

    // randomized blink
    blinkClock.current += delta;
    if (blinkPhase.current === null && blinkClock.current > nextBlink.current) {
      blinkPhase.current = 0;
    }
    if (blinkPhase.current !== null && eyes.current) {
      blinkPhase.current += delta / 0.22;
      eyes.current.scale.y = Math.max(
        0.08,
        Math.abs(Math.cos(Math.PI * Math.min(blinkPhase.current, 1)))
      );
      if (blinkPhase.current >= 1) {
        blinkPhase.current = null;
        blinkClock.current = 0;
        nextBlink.current = 2 + Math.random() * 2.5;
        eyes.current.scale.y = 1;
      }
    }
  });

  return (
    <group ref={head}>
      {/* skull */}
      <RoundedBox args={[1.5, 1.15, 1.1]} radius={0.18} smoothness={4}>
        <meshStandardMaterial
          color={COLORS.head}
          roughness={0.5}
          metalness={0.1}
        />
      </RoundedBox>

      {/* snout */}
      <RoundedBox
        args={[0.8, 0.5, 0.5]}
        radius={0.14}
        smoothness={4}
        position={[0, -0.28, 0.55]}
      >
        <meshStandardMaterial color={COLORS.snout} roughness={0.6} />
      </RoundedBox>

      {/* nostrils */}
      {[-0.18, 0.18].map((x) => (
        <mesh key={x} position={[x, -0.3, 0.82]}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshStandardMaterial color={COLORS.nostril} roughness={0.4} />
        </mesh>
      ))}

      {/* nose ring */}
      <mesh position={[0, -0.48, 0.8]} rotation={[Math.PI / 6, 0, 0]}>
        <torusGeometry args={[0.09, 0.018, 12, 32]} />
        <meshStandardMaterial
          color={COLORS.ring}
          emissive={COLORS.ring}
          emissiveIntensity={0.5}
          metalness={0.8}
          roughness={0.25}
        />
      </mesh>

      {/* horns — mirrored pair */}
      <Horn />
      <group scale={[-1, 1, 1]}>
        <Horn />
      </group>

      {/* ears */}
      {[-1, 1].map((s) => (
        <mesh
          key={s}
          position={[s * 0.72, 0.15, -0.05]}
          rotation={[0, 0, s * 0.35]}
          scale={[0.45, 0.22, 0.3]}
        >
          <sphereGeometry args={[0.28, 16, 16]} />
          <meshStandardMaterial color={COLORS.head} roughness={0.55} />
        </mesh>
      ))}

      {/* eyes */}
      <group ref={eyes}>
        {[-1, 1].map((s) => {
          const pupil = s < 0 ? leftPupil : rightPupil;
          return (
            <group key={s} position={[s * 0.32, 0.12, 0.5]}>
              <mesh>
                <sphereGeometry args={[0.14, 24, 24]} />
                <meshStandardMaterial color={COLORS.sclera} roughness={0.25} />
              </mesh>
              <group ref={pupil}>
                <mesh position={[0, 0, 0.115]}>
                  <sphereGeometry args={[0.055, 16, 16]} />
                  <meshStandardMaterial
                    color={COLORS.pupil}
                    roughness={0.15}
                  />
                </mesh>
              </group>
            </group>
          );
        })}
      </group>
    </group>
  );
}

export default function BullCharacter() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 4.2], fov: 40 }}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[3, 4, 5]} intensity={1.4} />
      <pointLight
        position={[-3, 2, 3]}
        intensity={12}
        color={COLORS.ring}
      />
      <Bull />
    </Canvas>
  );
}
