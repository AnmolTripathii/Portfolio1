
import React, { useRef, useEffect, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Float, Environment } from "@react-three/drei";
import * as THREE from "three";
import { gsap } from "gsap";
import Typed from "typed.js";
import hit2 from "../sound/hit2.ogg";
import hit3 from "../sound/hit3.ogg";
import hit4 from "../sound/hit4.ogg";
const TypedText = () => {
  useEffect(() => {
    const typeData = new Typed(".role", {
      strings: [
        "Software Developer",
        "Web Developer",
        "Coder",
        "UI Designer",
      ],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1000,
    });

    return () => {
      typeData.destroy();
    };
  }, []);

  return <span className="role"></span>;
};

const Intro = () => {
  const componentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline()
        .fromTo(
          ".name-animation",
          { x: -100, opacity: 0, rotate: -10 },
          {
            x: 0,
            opacity: 1,
            rotate: 0,
            ease: "elastic.out(1,0.3)",
            duration: 1,
            transformOrigin: "left top",
            stagger: { each: 0.1, from: "random" },
          }
        )
        .fromTo(
          ".job-title",
          {
            y: 20,
            opacity: 0,
            scale: 1.2,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scale: 1,
            ease: "elastic.out(1,0.3)",
          }
        );
    }, componentRef);

    return () => ctx.revert();
  }, []);

  const renderLetters = (name, key) => {
    if (!name) return;
    return name.split("").map((letter, index) => (
      <span
        key={index}
        className={`name-animation name-animation-${key}-index inline-block opacity-0`}
      >
        {letter}
      </span>
    ));
  };

  const geometries = [
    {
      position: [0, 0, 0],
      r: 0.3,
      geometry: new THREE.IcosahedronGeometry(3),
    },
    {
      position: [1, -0.75, 4],
      r: 0.4,
      geometry: new THREE.CapsuleGeometry(0.5, 1.6, 2, 16),
    },
    {
      position: [-1.4, 2, -4],
      r: 0.6,
      geometry: new THREE.DodecahedronGeometry(1.5),
    },
    {
      position: [-0.8, -0.75, 5],
      r: 0.5,
      geometry: new THREE.TorusGeometry(0.6, 0.25, 16, 32),
    },
    {
      position: [1.6, 1.6, -4],
      r: 0.7,
      geometry: new THREE.OctahedronGeometry(1.5),
    },
  ];

  const soundEffects = [
    new Audio(hit2),
    new Audio(hit3),
    new Audio(hit4),
  ];

  const materials = [
    new THREE.MeshNormalMaterial(),
    new THREE.MeshStandardMaterial({ color: 0x2ecc71, roughness: 0 }),
    new THREE.MeshStandardMaterial({ color: 0xf1c40f, roughness: 0.4 }),
    new THREE.MeshStandardMaterial({ color: 0xe74c3c, roughness: 0.1 }),
    new THREE.MeshStandardMaterial({ color: 0x8e44ad, roughness: 0.1 }),
    new THREE.MeshStandardMaterial({ color: 0x1abc9c, roughness: 0.1 }),
    new THREE.MeshStandardMaterial({
      roughness: 0,
      metalness: 0.5,
      color: 0x2980b9,
    }),
    new THREE.MeshStandardMaterial({
      color: 0x2c3e50,
      roughness: 0.1,
      metalness: 0.5,
    }),
  ];

  const Geometry = ({ r, position, geometry }) => {
    const meshRef = useRef();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      const ctx = gsap.context(() => {
        setVisible(true);
        gsap.from(meshRef.current.scale, {
          x: 0,
          y: 0,
          z: 0,
          duration: gsap.utils.random(0.8, 1.2),
          ease: "elastic.out(1,0.3)",
          delay: gsap.utils.random(0, 0.5),
        });
      });
      return () => ctx.revert();
    }, []);

    const getRandomMaterial = () => gsap.utils.random(materials);

    const handleClick = (e) => {
      const mesh = e.object;
      gsap.utils.random(soundEffects).play();
      gsap.to(mesh.rotation, {
        x: `+=${gsap.utils.random(0, 2)}`,
        y: `+=${gsap.utils.random(0, 2)}`,
        z: `+=${gsap.utils.random(0, 2)}`,
        duration: 1.3,
        ease: "elastic.out(1,0.3)",
      });
      mesh.material = getRandomMaterial();
    };

    return (
      <group position={position} ref={meshRef}>
        <Float speed={5 * r} rotationIntensity={6 * r} floatIntensity={5 * r}>
          <mesh
            geometry={geometry}
            onClick={handleClick}
            material={getRandomMaterial()}
            visible={visible}
          ></mesh>
        </Float>
      </group>
    );
  };

  return (
    <section className="container min-h-[50vh]"
      ref={componentRef}
    >
      <div className="mx-auto w-full">
        <div className="grid  grid-cols-1 items-center lg:grid-cols-2">
          <div className="row-span-1 row-start-1 -mt-9 aspect-square md:col-span-1 md:col-start-2 md:mt-0">
            <Canvas
              className="z-0"
              shadows
              gl={{ antialias: false }}
              dpr={[1, 1.5]}
              camera={{ position: [0, 0, 25], fov: 30, near: 1, far: 40 }}
            >
              <Suspense fallback={null}>
                {geometries.map(({ position, r, geometry }) => (
                  <Geometry
                    key={JSON.stringify(position)}
                    position={position.map((p) => p * 2)}
                    geometry={geometry}
                    r={r}
                  />
                ))}
                <ContactShadows
                  position={[0, -3.5, 0]}
                  opacity={0.65}
                  scale={40}
                  blur={1}
                  far={9}
                />
                <Environment preset="studio" />
              </Suspense>
            </Canvas>
          </div>
          <div className="col-start-1 md:row-start-1" data-speed=".2">
            <h1
              className="mb-8 text-center text-7xl lg:text-9xl font-extrabold leading-none tracking-tighter"
              aria-label="Anmol Tripathi"
            >
              <span className="block text-slate-300">
                {renderLetters("Anmol", "first")}
              </span>
              <span className="-mt-[.2em] block text-slate-500">
                {renderLetters("Tripathi", "last")}
              </span>
            </h1>
            <span className="job-title block bg-gradient-to-tr text-center from-yellow-500 via-yellow-200 to-yellow-500 bg-clip-text text-2xl font-bold uppercase tracking-[.2em] text-transparent opacity-0 md:text-3xl">
              <TypedText />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
