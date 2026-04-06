import { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills, skillCategories, categoryColors } from '../../data/skills';

const proficiencyLabels = ['', 'Learning', 'Beginner', 'Intermediate', 'Advanced', 'Expert'];

// Bubble size mapping based on proficiency (1–5)
const sizeMap = {
  1: 'w-16 h-16 text-xs',
  2: 'w-20 h-20 text-xs',
  3: 'w-24 h-24 text-sm',
  4: 'w-28 h-28 text-sm',
  5: 'w-32 h-32 text-base',
};

// Per-bubble animation parameters for organic feel
function getAnimParams(index) {
  // Staggered durations and offsets so bubbles don't move in sync
  const floatDurations = [4, 4.5, 5, 5.5, 3.8, 4.2, 5.2, 3.5];
  const floatOffsets = [-7, -6, -8, -5, -9, -6, -7, -8];
  const rotations = [2, -1.5, 1.5, -2, 1, -1, 2.5, -1.8];
  const glowDelays = [0, 0.5, 1, 1.5, 0.3, 0.8, 1.2, 0.6];

  const i = index % floatDurations.length;
  return {
    floatDuration: floatDurations[i],
    floatOffset: floatOffsets[i],
    rotation: rotations[i],
    glowDelay: glowDelays[i],
  };
}

function ProficiencyBar({ level, color }) {
  return (
    <div className="flex gap-1 mt-2">
      {[1, 2, 3, 4, 5].map((i) => (
        <motion.div
          key={i}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: i * 0.05, duration: 0.3 }}
          className="w-2 rounded-full origin-bottom"
          style={{
            height: `${8 + i * 3}px`,
            background: i <= level ? color : 'rgba(255,255,255,0.1)',
          }}
        />
      ))}
    </div>
  );
}

function SkillBubble({ skill, index, isSelected, onSelect }) {
  const colors = categoryColors[skill.category] || { from: '#818cf8', to: '#6366f1' };
  const anim = getAnimParams(index);

  return (
    <motion.button
      layout
      // Staggered scroll entry
      initial={{ opacity: 0, scale: 0.4, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      // --- Continuous auto-animations (always visible, no hover needed) ---
      animate={{
        // 1. Floating motion (translateY)
        y: [0, anim.floatOffset, 0],
        // 2. Micro rotation (±2deg)
        rotate: [0, anim.rotation, 0, -anim.rotation * 0.5, 0],
        // 3. Subtle glow pulse (boxShadow opacity change)
        boxShadow: [
          `0 0 0px ${colors.from}00`,
          `0 0 20px ${colors.from}30`,
          `0 0 0px ${colors.from}00`,
        ],
      }}
      transition={{
        // Default transition for entry
        delay: Math.min(index * 0.07, 1),
        duration: 0.5,
        type: 'spring',
        stiffness: 180,
        damping: 18,
        // Property-specific transitions
        y: {
          duration: anim.floatDuration,
          repeat: Infinity,
          ease: 'easeInOut',
        },
        rotate: {
          duration: anim.floatDuration * 1.3,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: anim.glowDelay,
        },
        boxShadow: {
          duration: anim.floatDuration * 0.8,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: anim.glowDelay,
        },
      }}
      whileHover={{
        scale: 1.15,
        boxShadow: `0 0 30px ${colors.from}50, 0 0 60px ${colors.from}20`,
      }}
      whileTap={{ scale: 0.95 }}
      onClick={() => onSelect(isSelected ? null : skill.name)}
      className={`
        relative flex flex-col items-center justify-center rounded-full
        cursor-pointer select-none
        border backdrop-blur-sm
        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400
        ${sizeMap[skill.proficiency]}
        ${isSelected
          ? 'border-white/30 shadow-lg shadow-primary-500/25'
          : 'border-white/8 hover:border-white/25'
        }
      `}
      aria-label={`${skill.name} — ${proficiencyLabels[skill.proficiency]} level`}
    >
      {/* Background fill */}
      <div
        className="absolute inset-0 rounded-full transition-all duration-300"
        style={{
          background: isSelected
            ? `linear-gradient(135deg, ${colors.from}30, ${colors.to}15)`
            : 'rgba(255,255,255,0.03)',
        }}
      />

      {/* Ambient glow layer — always subtly pulsing */}
      <motion.div
        className="absolute inset-[-3px] rounded-full pointer-events-none"
        animate={{
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{
          duration: anim.floatDuration * 0.9,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: anim.glowDelay,
        }}
        style={{
          background: `radial-gradient(circle at center, ${colors.from}25, transparent 70%)`,
        }}
      />

      {/* Icon */}
      <skill.icon
        className="relative z-10 mb-1 transition-transform duration-300"
        style={{
          color: colors.from,
          width: skill.proficiency >= 4 ? '1.25rem' : '1rem',
          height: skill.proficiency >= 4 ? '1.25rem' : '1rem',
        }}
      />

      {/* Name */}
      <span className="relative z-10 font-medium text-gray-300 text-center leading-tight px-1">
        {skill.name}
      </span>
    </motion.button>
  );
}

function SkillDetailCard({ skill, onClose }) {
  if (!skill) return null;

  const colors = categoryColors[skill.category] || { from: '#818cf8', to: '#6366f1' };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className="glass-card p-6 max-w-sm mx-auto"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${colors.from}, ${colors.to})`,
            }}
          >
            <skill.icon className="w-6 h-6 text-white" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-gray-200">{skill.name}</h4>
            <span
              className="text-xs font-medium px-2 py-0.5 rounded-full"
              style={{
                background: `${colors.from}20`,
                color: colors.from,
              }}
            >
              {skill.category}
            </span>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-200 hover:bg-white/10 transition-all"
          aria-label="Close detail card"
        >
          ✕
        </button>
      </div>

      {/* Proficiency */}
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-400">Proficiency</span>
        <span className="text-sm font-semibold" style={{ color: colors.from }}>
          {proficiencyLabels[skill.proficiency]}
        </span>
      </div>

      {/* Bar */}
      <div className="mt-2 h-2 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${skill.proficiency * 20}%` }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${colors.from}, ${colors.to})`,
          }}
        />
      </div>

      <ProficiencyBar level={skill.proficiency} color={colors.from} />
    </motion.div>
  );
}

export default function SkillsCloud() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedSkill, setSelectedSkill] = useState(null);

  const filteredSkills = useMemo(
    () =>
      activeCategory === 'All'
        ? skills
        : skills.filter((s) => s.category === activeCategory),
    [activeCategory]
  );

  const selectedSkillData = useMemo(
    () => skills.find((s) => s.name === selectedSkill) || null,
    [selectedSkill]
  );

  const handleCategoryChange = useCallback((cat) => {
    setActiveCategory(cat);
    setSelectedSkill(null);
  }, []);

  const handleSelect = useCallback((name) => {
    setSelectedSkill(name);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="mt-16 lg:mt-24"
    >
      {/* Section Sub-heading */}
      <div className="text-center mb-10">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-200 mb-3">
          Skills &amp; Technologies
        </h3>
        <p className="text-gray-400 max-w-lg mx-auto">
          Technologies I work with — tap any skill to see details
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {skillCategories.map((cat) => (
          <motion.button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300
              ${activeCategory === cat
                ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/25'
                : 'glass text-gray-400 hover:text-gray-200'
              }`}
            aria-pressed={activeCategory === cat}
          >
            {cat}
            {cat !== 'All' && (
              <span className="ml-1.5 text-xs opacity-60">
                {skills.filter((s) => s.category === cat).length}
              </span>
            )}
          </motion.button>
        ))}
      </div>

      {/* Skills Cloud */}
      <motion.div
        layout
        className="flex flex-wrap justify-center items-center gap-4 md:gap-5 lg:gap-6 max-w-4xl mx-auto"
      >
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill, index) => (
            <SkillBubble
              key={skill.name}
              skill={skill}
              index={index}
              isSelected={selectedSkill === skill.name}
              onSelect={handleSelect}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Detail Card */}
      <div className="mt-8">
        <AnimatePresence mode="wait">
          {selectedSkillData && (
            <SkillDetailCard
              key={selectedSkillData.name}
              skill={selectedSkillData}
              onClose={() => setSelectedSkill(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
