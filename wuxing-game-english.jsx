import React, { useState, useRef } from 'react';
import { Sparkles, Trophy, Zap, Star, BookOpen, ChevronDown, Search, Brain, Flame, Skull, Heart, Moon, Sun } from 'lucide-react';

const WuXingGame = () => {
  // 多语言系统
  const [language, setLanguage] = useState('en'); // 默认英文
  
  const translations = {
    en: {
      title: "Five Elements Alchemy",
      subtitle: "Explore {count} elements in the infinite universe",
      discovered: "Discovered",
      combo: "Combo",
      quickFilter: "Categories",
      tech: "Tech",
      culture: "Culture",
      nature: "Nature",
      myth: "Myth",
      dark: "Dark",
      aiHint: "AI",
      aiHintButton: "AI Hint",
      achievements: "Achievements",
      save: "Save",
      load: "Load",
      tierDistribution: "Tier Distribution",
      clear: "Clear",
      elementLibrary: "Element Library",
      baseElements: "Base Elements",
      search: "Search elements...",
      filter: "Filter",
      startCrafting: "Start crafting to unlock new elements",
      infiniteUse: "Elements in library can be used infinitely",
      noMatch: "No matching elements found",
      freeCanvas: "Alchemy Workshop",
      dragElements: "Drag elements anywhere, get close to combine",
      getInspiration: "Click 'AI' for inspiration",
      placeFreely: "Place freely, create freely",
      newDiscovery: "New Discovery!",
      achievementUnlocked: "Achievement Unlocked!",
      soundOn: "Sound On",
      soundOff: "Sound Off",
      completionTitle: "Ultimate Master!",
      completionMessage: "You've discovered all {count} elements",
      completionSubtitle: "Legendary Alchemist!",
      completionDescription: "You've mastered the ultimate secrets of the Five Elements!",
      // 五行元素
      metal: "Metal",
      wood: "Wood", 
      water: "Water",
      fire: "Fire",
      earth: "Earth"
    },
    zh: {
      title: "五行炼金术",
      subtitle: "探索 {count} 种元素的无限宇宙",
      discovered: "已发现",
      combo: "连击",
      quickFilter: "类别",
      tech: "科技",
      culture: "文化",
      nature: "自然",
      myth: "神话",
      dark: "黑暗",
      aiHint: "AI",
      aiHintButton: "AI 提示",
      achievements: "成就",
      save: "保存",
      load: "加载",
      tierDistribution: "层级分布",
      clear: "清除",
      elementLibrary: "元素图鉴",
      baseElements: "基础五行",
      search: "搜索元素...",
      filter: "过滤",
      startCrafting: "开始合成解锁新元素",
      infiniteUse: "图鉴中的元素可无限使用",
      noMatch: "没有找到匹配的元素",
      freeCanvas: "炼金工作台",
      dragElements: "拖入元素到任意位置，靠近即可合成",
      getInspiration: "点击'AI'获得灵感",
      placeFreely: "随意摆放，自由创作",
      newDiscovery: "新发现！",
      achievementUnlocked: "成就解锁！",
      soundOn: "音效已开启",
      soundOff: "音效已关闭",
      completionTitle: "终极大师！",
      completionMessage: "你已发现全部 {count} 种元素",
      completionSubtitle: "传说中的炼金术士！",
      completionDescription: "你已经掌握了五行的终极奥秘！",
      // 五行元素
      metal: "金",
      wood: "木",
      water: "水",
      fire: "火",
      earth: "土"
    },
    fi: {
      title: "Viiden Elementin Alkemia",
      subtitle: "Tutki {count} elementtiä äärettömässä universumissa",
      discovered: "Löydetty",
      combo: "Yhdistelmä",
      quickFilter: "Kategoriat",
      tech: "Tekniikka",
      culture: "Kulttuuri",
      nature: "Luonto",
      myth: "Mytologia",
      dark: "Pimeys",
      aiHint: "AI",
      aiHintButton: "AI Vihje",
      achievements: "Saavutukset",
      save: "Tallenna",
      load: "Lataa",
      tierDistribution: "Tason Jakautuminen",
      clear: "Tyhjennä",
      elementLibrary: "Elementtikirjasto",
      baseElements: "Peruselementit",
      search: "Etsi elementtejä...",
      filter: "Suodata",
      startCrafting: "Aloita yhdistäminen avataksesi uusia elementtejä",
      infiniteUse: "Kirjaston elementtejä voi käyttää loputtomasti",
      noMatch: "Ei vastaavia elementtejä",
      freeCanvas: "Alkemiapaja",
      dragElements: "Vedä elementit minne tahansa, yhdistä lähellä",
      getInspiration: "Napsauta 'AI' saadaksesi inspiraatiota",
      placeFreely: "Aseta vapaasti, luo vapaasti",
      newDiscovery: "Uusi löytö!",
      achievementUnlocked: "Saavutus avattu!",
      soundOn: "Ääni päällä",
      soundOff: "Ääni pois",
      completionTitle: "Lopullinen Mestari!",
      completionMessage: "Olet löytänyt kaikki {count} elementtiä",
      completionSubtitle: "Legendaarinen Alkemisti!",
      completionDescription: "Olet hallinnut viiden elementin lopulliset salaisuudet!",
      // 五行元素
      metal: "Metalli",
      wood: "Puu",
      water: "Vesi",
      fire: "Tuli",
      earth: "Maa"
    }
  };
  
  // 获取翻译文本
  const t = (key, params = {}) => {
    let text = translations[language][key] || key;
    Object.keys(params).forEach(param => {
      text = text.replace(`{${param}}`, params[param]);
    });
    return text;
  };
  
  // 基础五行元素
  const baseElements = [
    { id: 'metal', name: t('metal'), color: 'from-slate-300 via-gray-400 to-slate-500', emoji: '⚙️', ring: 'ring-slate-400' },
    { id: 'wood', name: t('wood'), color: 'from-emerald-400 via-green-500 to-teal-600', emoji: '🌳', ring: 'ring-green-500' },
    { id: 'water', name: t('water'), color: 'from-cyan-400 via-blue-500 to-indigo-600', emoji: '💧', ring: 'ring-blue-500' },
    { id: 'fire', name: t('fire'), color: 'from-orange-400 via-red-500 to-rose-600', emoji: '🔥', ring: 'ring-red-500' },
    { id: 'earth', name: t('earth'), color: 'from-amber-500 via-yellow-600 to-orange-700', emoji: '🏔️', ring: 'ring-yellow-600' }
  ];

  // 超级合成配方生成器 - 2000+种元素！
  const generateMegaRecipes = () => {
    const recipes = {};
    
    // ==================== 同种元素叠加系统 (50种) ====================
    const selfCombinations = {
      'fire-fire': { id: 'inferno', name: 'Inferno', emoji: '🔥', tier: 2 },
      'inferno-fire': { id: 'supernova', name: 'Supernova', emoji: '💥', tier: 3 },
      'supernova-fire': { id: 'big-bang', name: 'Big Bang', emoji: '💫', tier: 4 },
      
      'water-water': { id: 'lake', name: 'Lake', emoji: '🏞️', tier: 2 },
      'lake-water': { id: 'ocean', name: 'Ocean', emoji: '🌊', tier: 3 },
      'ocean-water': { id: 'deep-sea', name: 'Deep Sea', emoji: '🐙', tier: 4 },
      'deep-sea-water': { id: 'abyss', name: 'Abyss', emoji: '🕳️', tier: 5 },
      
      'earth-earth': { id: 'mountain', name: 'Mountain', emoji: '⛰️', tier: 2 },
      'mountain-earth': { id: 'peak', name: 'Peak', emoji: '🏔️', tier: 3 },
      'peak-earth': { id: 'himalaya', name: 'Himalaya', emoji: '🏔️', tier: 4 },
      
      'wood-wood': { id: 'grove', name: 'Grove', emoji: '🌳', tier: 2 },
      'grove-wood': { id: 'forest', name: 'Forest', emoji: '🌲', tier: 3 },
      'forest-wood': { id: 'jungle', name: 'Jungle', emoji: '🌴', tier: 4 },
      'jungle-wood': { id: 'rainforest', name: 'Rainforest', emoji: '🌴', tier: 5 },
      
      'metal-metal': { id: 'alloy', name: 'Alloy', emoji: '⚙️', tier: 2 },
      'alloy-metal': { id: 'steel', name: 'Steel', emoji: '🔩', tier: 3 },
      'steel-metal': { id: 'titanium', name: 'Titanium', emoji: '💠', tier: 4 },
      'titanium-metal': { id: 'adamantium', name: 'Adamantium', emoji: '💠', tier: 5 },
    };

    // ==================== 基础五行互相组合 (ALL combinations) ====================
    const tier1Basic = {
      // 🔥火 的所有组合
      'water-fire': { id: 'steam', name: 'Steam', emoji: '💨', tier: 1, color: 'from-gray-300 via-white to-gray-400', ring: 'ring-gray-400' },
      'fire-water': { id: 'steam', name: 'Steam', emoji: '💨', tier: 1, color: 'from-gray-300 via-white to-gray-400', ring: 'ring-gray-400' },
      'wood-fire': { id: 'ash', name: 'Ash', emoji: '🌫️', tier: 1, color: 'from-gray-400 via-slate-500 to-gray-600', ring: 'ring-gray-500' },
      'fire-wood': { id: 'ash', name: 'Ash', emoji: '🌫️', tier: 1, color: 'from-gray-400 via-slate-500 to-gray-600', ring: 'ring-gray-500' },
      'metal-fire': { id: 'lava', name: 'Lava', emoji: '🌋', tier: 1, color: 'from-orange-600 via-red-700 to-rose-800', ring: 'ring-red-600' },
      'fire-metal': { id: 'lava', name: 'Lava', emoji: '🌋', tier: 1, color: 'from-orange-600 via-red-700 to-rose-800', ring: 'ring-red-600' },
      'fire-earth': { id: 'volcano', name: 'Volcano', emoji: '🥫', tier: 1, color: 'from-red-500 via-orange-600 to-yellow-700', ring: 'ring-orange-600' },
      'earth-fire': { id: 'volcano', name: 'Volcano', emoji: '🥫', tier: 1, color: 'from-red-500 via-orange-600 to-yellow-700', ring: 'ring-orange-600' },
      
      // 💧水 的所有组合
      'water-earth': { id: 'mud', name: 'Mud', emoji: '🟫', tier: 1, color: 'from-amber-700 via-brown-800 to-yellow-900', ring: 'ring-amber-700' },
      'earth-water': { id: 'mud', name: 'Mud', emoji: '🟫', tier: 1, color: 'from-amber-700 via-brown-800 to-yellow-900', ring: 'ring-amber-700' },
      'wood-water': { id: 'plant', name: 'Plant', emoji: '🌱', tier: 1, color: 'from-green-400 via-emerald-500 to-teal-600', ring: 'ring-green-500' },
      'water-wood': { id: 'plant', name: 'Plant', emoji: '🌱', tier: 1, color: 'from-green-400 via-emerald-500 to-teal-600', ring: 'ring-green-500' },
      'metal-water': { id: 'mercury', name: 'Mercury', emoji: '☿️', tier: 1, color: 'from-gray-400 via-slate-500 to-zinc-600', ring: 'ring-slate-500' },
      'water-metal': { id: 'mercury', name: 'Mercury', emoji: '☿️', tier: 1, color: 'from-gray-400 via-slate-500 to-zinc-600', ring: 'ring-slate-500' },
      
      // 🌳木 的所有组合
      'wood-earth': { id: 'grass', name: 'Grass', emoji: '🍃', tier: 1, color: 'from-lime-400 via-green-500 to-emerald-600', ring: 'ring-lime-500' },
      'earth-wood': { id: 'grass', name: 'Grass', emoji: '🍃', tier: 1, color: 'from-lime-400 via-green-500 to-emerald-600', ring: 'ring-lime-500' },
      'metal-wood': { id: 'tool', name: 'Tool', emoji: '🔧', tier: 1, color: 'from-slate-500 via-gray-600 to-zinc-700', ring: 'ring-gray-600' },
      'wood-metal': { id: 'tool', name: 'Tool', emoji: '🔧', tier: 1, color: 'from-slate-500 via-gray-600 to-zinc-700', ring: 'ring-gray-600' },
      
      // ⚙️金 的所有组合
      'metal-earth': { id: 'ore', name: 'Ore', emoji: '⛏️', tier: 1, color: 'from-purple-500 via-violet-600 to-indigo-700', ring: 'ring-purple-600' },
      'earth-metal': { id: 'ore', name: 'Ore', emoji: '⛏️', tier: 1, color: 'from-purple-500 via-violet-600 to-indigo-700', ring: 'ring-purple-600' },
      
      // 基础能量 - 同种元素
      'fire-fire': { id: 'energy', name: 'Energy', emoji: '⚡', tier: 1, color: 'from-yellow-400 via-amber-500 to-orange-600', ring: 'ring-yellow-500' },
      'water-water': { id: 'lake', name: 'Lake', emoji: '🏞️', tier: 1, color: 'from-blue-400 via-cyan-500 to-teal-600', ring: 'ring-cyan-500' },
      'earth-earth': { id: 'mountain', name: 'Mountain', emoji: '⛰️', tier: 1, color: 'from-stone-500 via-gray-600 to-slate-700', ring: 'ring-stone-600' },
      'wood-wood': { id: 'forest', name: 'Forest', emoji: '🌲', tier: 1, color: 'from-green-600 via-emerald-700 to-teal-800', ring: 'ring-green-700' },
      'metal-metal': { id: 'alloy', name: 'Alloy', emoji: '⚙️', tier: 1, color: 'from-zinc-400 via-slate-500 to-gray-600', ring: 'ring-slate-500' },
    };

    // ==================== Tier 1 元素继续与五行合成 (扩展100+初期配方) ====================
    const tier2WithBase = {
      // 蒸汽💨 + 五行
      'steam-fire': { id: 'heat', name: 'Heat', emoji: '🌡️', tier: 2, color: 'from-red-400 via-orange-500 to-yellow-600', ring: 'ring-orange-500' },
      'fire-steam': { id: 'heat', name: 'Heat', emoji: '🌡️', tier: 2, color: 'from-red-400 via-orange-500 to-yellow-600', ring: 'ring-orange-500' },
      'steam-water': { id: 'cloud', name: 'Cloud', emoji: '☁️', tier: 2, color: 'from-white via-gray-200 to-slate-300', ring: 'ring-gray-300' },
      'water-steam': { id: 'cloud', name: 'Cloud', emoji: '☁️', tier: 2, color: 'from-white via-gray-200 to-slate-300', ring: 'ring-gray-300' },
      'steam-earth': { id: 'geyser', name: 'Geyser', emoji: '💦', tier: 2, color: 'from-blue-300 via-cyan-400 to-teal-500', ring: 'ring-cyan-400' },
      'earth-steam': { id: 'geyser', name: 'Geyser', emoji: '💦', tier: 2, color: 'from-blue-300 via-cyan-400 to-teal-500', ring: 'ring-cyan-400' },
      'steam-wood': { id: 'sauna', name: 'Sauna', emoji: '🧖', tier: 2, color: 'from-amber-300 via-orange-400 to-red-500', ring: 'ring-orange-400' },
      'wood-steam': { id: 'sauna', name: 'Sauna', emoji: '🧖', tier: 2, color: 'from-amber-300 via-orange-400 to-red-500', ring: 'ring-orange-400' },
      'steam-metal': { id: 'steam-engine', name: 'Steam Engine', emoji: '🚂', tier: 2, color: 'from-gray-500 via-slate-600 to-zinc-700', ring: 'ring-slate-600' },
      'metal-steam': { id: 'steam-engine', name: 'Steam Engine', emoji: '🚂', tier: 2, color: 'from-gray-500 via-slate-600 to-zinc-700', ring: 'ring-slate-600' },
      
      // 灰烬🌫️ + 五行
      'ash-fire': { id: 'phoenix', name: 'Phoenix', emoji: '🔥', tier: 2, color: 'from-orange-500 via-red-600 to-rose-700', ring: 'ring-red-600' },
      'fire-ash': { id: 'phoenix', name: 'Phoenix', emoji: '🔥', tier: 2, color: 'from-orange-500 via-red-600 to-rose-700', ring: 'ring-red-600' },
      'ash-water': { id: 'soap', name: 'Soap', emoji: '🧼', tier: 2, color: 'from-blue-200 via-cyan-300 to-teal-400', ring: 'ring-cyan-300' },
      'water-ash': { id: 'soap', name: 'Soap', emoji: '🧼', tier: 2, color: 'from-blue-200 via-cyan-300 to-teal-400', ring: 'ring-cyan-300' },
      'ash-earth': { id: 'soil', name: 'Soil', emoji: '🟤', tier: 2, color: 'from-amber-600 via-brown-700 to-yellow-800', ring: 'ring-brown-700' },
      'earth-ash': { id: 'soil', name: 'Soil', emoji: '🟤', tier: 2, color: 'from-amber-600 via-brown-700 to-yellow-800', ring: 'ring-brown-700' },
      'ash-wood': { id: 'charcoal', name: 'Charcoal', emoji: '⚫', tier: 2, color: 'from-gray-700 via-slate-800 to-black', ring: 'ring-slate-800' },
      'wood-ash': { id: 'charcoal', name: 'Charcoal', emoji: '⚫', tier: 2, color: 'from-gray-700 via-slate-800 to-black', ring: 'ring-slate-800' },
      'ash-metal': { id: 'gunpowder', name: 'Gunpowder', emoji: '💨', tier: 2, color: 'from-gray-600 via-zinc-700 to-slate-800', ring: 'ring-zinc-700' },
      'metal-ash': { id: 'gunpowder', name: 'Gunpowder', emoji: '💨', tier: 2, color: 'from-gray-600 via-zinc-700 to-slate-800', ring: 'ring-zinc-700' },
      
      // 熔岩🌋 + 五行
      'lava-fire': { id: 'magma', name: 'Magma', emoji: '🔴', tier: 2, color: 'from-red-700 via-orange-800 to-rose-900', ring: 'ring-red-800' },
      'fire-lava': { id: 'magma', name: 'Magma', emoji: '🔴', tier: 2, color: 'from-red-700 via-orange-800 to-rose-900', ring: 'ring-red-800' },
      'lava-water': { id: 'obsidian', name: 'Obsidian', emoji: '⚫', tier: 2, color: 'from-gray-900 via-black to-slate-950', ring: 'ring-gray-900' },
      'water-lava': { id: 'obsidian', name: 'Obsidian', emoji: '⚫', tier: 2, color: 'from-gray-900 via-black to-slate-950', ring: 'ring-gray-900' },
      'lava-earth': { id: 'igneous-rock', name: 'Igneous Rock', emoji: '🪨', tier: 2, color: 'from-stone-600 via-gray-700 to-slate-800', ring: 'ring-stone-700' },
      'earth-lava': { id: 'igneous-rock', name: 'Igneous Rock', emoji: '🪨', tier: 2, color: 'from-stone-600 via-gray-700 to-slate-800', ring: 'ring-stone-700' },
      'lava-wood': { id: 'burnt-wood', name: 'Burnt Wood', emoji: '🪵', tier: 2, color: 'from-amber-800 via-brown-900 to-black', ring: 'ring-brown-900' },
      'wood-lava': { id: 'burnt-wood', name: 'Burnt Wood', emoji: '🪵', tier: 2, color: 'from-amber-800 via-brown-900 to-black', ring: 'ring-brown-900' },
      'lava-metal': { id: 'molten-metal', name: 'Molten Metal', emoji: '🔶', tier: 2, color: 'from-orange-600 via-red-700 to-rose-800', ring: 'ring-red-700' },
      'metal-lava': { id: 'molten-metal', name: 'Molten Metal', emoji: '🔶', tier: 2, color: 'from-orange-600 via-red-700 to-rose-800', ring: 'ring-red-700' },
      
      // 火山🗻 + 五行
      'volcano-fire': { id: 'eruption', name: 'Eruption', emoji: '💥', tier: 2, color: 'from-orange-600 via-red-700 to-yellow-800', ring: 'ring-red-700' },
      'volcano-water': { id: 'hot-spring', name: 'Hot Spring', emoji: '💍', tier: 2, color: 'from-blue-400 via-cyan-500 to-teal-600', ring: 'ring-cyan-500' },
      'volcano-earth': { id: 'volcanic-island', name: 'Volcanic Island', emoji: '🏝️', tier: 2, color: 'from-green-500 via-emerald-600 to-teal-700', ring: 'ring-emerald-600' },
      'volcano-wood': { id: 'ash-forest', name: 'Ash Forest', emoji: '🌫️', tier: 2, color: 'from-gray-600 via-slate-700 to-zinc-800', ring: 'ring-slate-700' },
      'volcano-metal': { id: 'forge', name: 'Forge', emoji: '🎁', tier: 2, color: 'from-orange-700 via-red-800 to-rose-900', ring: 'ring-red-800' },
      
      // 泥🟫 + 五行
      'mud-fire': { id: 'brick', name: 'Brick', emoji: '🧱', tier: 2, color: 'from-red-600 via-orange-700 to-amber-800', ring: 'ring-orange-700' },
      'mud-water': { id: 'swamp', name: 'Swamp', emoji: '🐊', tier: 2, color: 'from-green-600 via-emerald-700 to-teal-800', ring: 'ring-emerald-700' },
      'mud-earth': { id: 'clay', name: 'Clay', emoji: '🏺', tier: 2, color: 'from-amber-500 via-orange-600 to-brown-700', ring: 'ring-orange-600' },
      'mud-wood': { id: 'adobe', name: 'Adobe', emoji: '🏠', tier: 2, color: 'from-amber-600 via-brown-700 to-yellow-800', ring: 'ring-brown-700' },
      'mud-metal': { id: 'pottery', name: 'Pottery', emoji: '🏺', tier: 2, color: 'from-orange-500 via-amber-600 to-brown-700', ring: 'ring-amber-600' },
      
      // 植物🌱 + 五行
      'plant-fire': { id: 'smoke', name: 'Smoke', emoji: '💨', tier: 2, color: 'from-gray-500 via-slate-600 to-zinc-700', ring: 'ring-slate-600' },
      'plant-water': { id: 'algae', name: 'Algae', emoji: '🌱', tier: 2, color: 'from-green-400 via-emerald-500 to-teal-600', ring: 'ring-emerald-500' },
      'plant-earth': { id: 'tree', name: 'Tree', emoji: '🌲', tier: 2, color: 'from-green-500 via-emerald-600 to-teal-700', ring: 'ring-emerald-600' },
      'plant-wood': { id: 'garden', name: 'Garden', emoji: '🌻', tier: 2, color: 'from-lime-400 via-green-500 to-emerald-600', ring: 'ring-green-500' },
      'plant-metal': { id: 'plough', name: 'Plough', emoji: '🚜', tier: 2, color: 'from-gray-500 via-zinc-600 to-slate-700', ring: 'ring-zinc-600' },
      
      // 水银💿 + 五行
      'mercury-fire': { id: 'vapor', name: 'Vapor', emoji: '☁️', tier: 2, color: 'from-gray-400 via-slate-500 to-zinc-600', ring: 'ring-slate-500' },
      'mercury-water': { id: 'solution', name: 'Solution', emoji: '🧪', tier: 2, color: 'from-blue-300 via-cyan-400 to-teal-500', ring: 'ring-cyan-400' },
      'mercury-earth': { id: 'cinnabar', name: 'Cinnabar', emoji: '🔴', tier: 2, color: 'from-red-500 via-rose-600 to-pink-700', ring: 'ring-rose-600' },
      'mercury-wood': { id: 'poison', name: 'Poison', emoji: '☠️', tier: 2, color: 'from-green-700 via-emerald-800 to-teal-900', ring: 'ring-emerald-800' },
      'mercury-metal': { id: 'amalgam', name: 'Amalgam', emoji: '⚙️', tier: 2, color: 'from-gray-500 via-slate-600 to-zinc-700', ring: 'ring-slate-600' },
      
      // 草🌾 + 五行
      'grass-fire': { id: 'wildfire', name: 'Wildfire', emoji: '🏔️', tier: 2, color: 'from-orange-500 via-red-600 to-rose-700', ring: 'ring-red-600' },
      'grass-water': { id: 'meadow', name: 'Meadow', emoji: '🌾', tier: 2, color: 'from-lime-400 via-green-500 to-emerald-600', ring: 'ring-green-500' },
      'grass-earth': { id: 'field', name: 'Field', emoji: '🌾', tier: 2, color: 'from-yellow-500 via-lime-600 to-green-700', ring: 'ring-lime-600' },
      'grass-wood': { id: 'bamboo', name: 'Bamboo', emoji: '🎋', tier: 2, color: 'from-green-500 via-emerald-600 to-teal-700', ring: 'ring-emerald-600' },
      'grass-metal': { id: 'scythe', name: 'Scythe', emoji: '🔪', tier: 2, color: 'from-gray-500 via-slate-600 to-zinc-700', ring: 'ring-slate-600' },
      
      // 工具🔨 + 五行
      'tool-fire': { id: 'furnace', name: 'Furnace', emoji: '🔥', tier: 2, color: 'from-orange-600 via-red-700 to-rose-800', ring: 'ring-red-700' },
      'tool-water': { id: 'well', name: 'Well', emoji: '🕳️', tier: 2, color: 'from-blue-500 via-cyan-600 to-teal-700', ring: 'ring-cyan-600' },
      'tool-earth': { id: 'mine', name: 'Mine', emoji: '⛏️', tier: 2, color: 'from-gray-600 via-slate-700 to-zinc-800', ring: 'ring-slate-700' },
      'tool-wood': { id: 'axe', name: 'Axe', emoji: '🪓', tier: 2, color: 'from-amber-600 via-brown-700 to-gray-800', ring: 'ring-brown-700' },
      'tool-metal': { id: 'machine', name: 'Machine', emoji: '⚙️', tier: 2, color: 'from-gray-500 via-slate-600 to-zinc-700', ring: 'ring-slate-600' },
      
      // 矿石💎 + 五行
      'ore-fire': { id: 'metal-bar', name: 'Metal Bar', emoji: '🔩', tier: 2, color: 'from-gray-500 via-zinc-600 to-slate-700', ring: 'ring-zinc-600' },
      'ore-water': { id: 'crystal', name: 'Crystal', emoji: '🔮', tier: 2, color: 'from-cyan-400 via-blue-500 to-indigo-600', ring: 'ring-blue-500' },
      'ore-earth': { id: 'gem', name: 'Gem', emoji: '💎', tier: 2, color: 'from-purple-500 via-violet-600 to-indigo-700', ring: 'ring-violet-600' },
      'ore-wood': { id: 'jewelry', name: 'Jewelry', emoji: '💍', tier: 2, color: 'from-yellow-500 via-amber-600 to-orange-700', ring: 'ring-amber-600' },
      'ore-metal': { id: 'refined-metal', name: 'Refined Metal', emoji: '⚙️', tier: 2, color: 'from-zinc-400 via-gray-500 to-slate-600', ring: 'ring-gray-500' },
      
      // ==================== Tier 1 元素互相组合 (大幅扩展初期路径！) ====================
      // 能量⚡ + 其他Tier 1
      'energy-steam': { id: 'turbine', name: 'Turbine', emoji: '🌀', tier: 2, color: 'from-blue-500 via-cyan-600 to-teal-700', ring: 'ring-cyan-600' },
      'energy-ash': { id: 'spark', name: 'Spark', emoji: '💡', tier: 2, color: 'from-yellow-400 via-orange-500 to-red-600', ring: 'ring-orange-500' },
      'energy-lava': { id: 'geothermal', name: 'Geothermal', emoji: '♨️', tier: 2, color: 'from-red-500 via-orange-600 to-yellow-700', ring: 'ring-orange-600' },
      'energy-volcano': { id: 'power-plant', name: 'Power Plant', emoji: '🔋', tier: 2, color: 'from-gray-600 via-slate-700 to-zinc-800', ring: 'ring-slate-700' },
      'energy-mud': { id: 'battery', name: 'Battery', emoji: '🔋', tier: 2, color: 'from-green-500 via-lime-600 to-emerald-700', ring: 'ring-lime-600' },
      'energy-plant': { id: 'photosynthesis', name: 'Photosynthesis', emoji: '🌿', tier: 2, color: 'from-green-400 via-emerald-500 to-teal-600', ring: 'ring-emerald-500' },
      'energy-mercury': { id: 'discharge', name: 'Discharge', emoji: '🔌', tier: 2, color: 'from-purple-500 via-violet-600 to-indigo-700', ring: 'ring-violet-600' },
      'energy-grass': { id: 'electricity', name: 'Electricity', emoji: '💡', tier: 2, color: 'from-yellow-300 via-amber-400 to-orange-500', ring: 'ring-amber-400' },
      'energy-tool': { id: 'power-tool', name: 'Power Tool', emoji: '🔌', tier: 2, color: 'from-blue-500 via-cyan-600 to-teal-700', ring: 'ring-cyan-600' },
      'energy-ore': { id: 'electromagnet', name: 'Electromagnet', emoji: '🧲', tier: 2, color: 'from-red-500 via-rose-600 to-pink-700', ring: 'ring-rose-600' },
      
      // 湖泊🏞️ + 其他Tier 1
      'lake-steam': { id: 'mist', name: 'Mist', emoji: '🌫️', tier: 2, color: 'from-gray-300 via-slate-400 to-zinc-500', ring: 'ring-slate-400' },
      'lake-ash': { id: 'dead-water', name: 'Dead Water', emoji: '💧', tier: 2, color: 'from-gray-700 via-slate-800 to-black', ring: 'ring-slate-800' },
      'lake-lava': { id: 'lava-lake', name: 'Lava Lake', emoji: '🏞️', tier: 2, color: 'from-red-600 via-orange-700 to-yellow-800', ring: 'ring-orange-700' },
      'lake-volcano': { id: 'crater-lake', name: 'Crater Lake', emoji: '📦', tier: 2, color: 'from-blue-500 via-cyan-600 to-teal-700', ring: 'ring-cyan-600' },
      'lake-mud': { id: 'wetland', name: 'Wetland', emoji: '🌊', tier: 2, color: 'from-green-600 via-emerald-700 to-teal-800', ring: 'ring-emerald-700' },
      'lake-plant': { id: 'pond', name: 'Pond', emoji: '🐸', tier: 2, color: 'from-blue-400 via-green-500 to-teal-600', ring: 'ring-green-500' },
      'lake-mercury': { id: 'reflection', name: 'Reflection', emoji: '🪞', tier: 2, color: 'from-blue-300 via-cyan-400 to-teal-500', ring: 'ring-cyan-400' },
      'lake-grass': { id: 'reed', name: 'Reed', emoji: '🎋', tier: 2, color: 'from-green-500 via-lime-600 to-emerald-700', ring: 'ring-lime-600' },
      'lake-tool': { id: 'fishing-rod', name: 'Fishing Rod', emoji: '🎣', tier: 2, color: 'from-brown-500 via-amber-600 to-orange-700', ring: 'ring-amber-600' },
      'lake-ore': { id: 'underwater-mine', name: 'Underwater Mine', emoji: '💧', tier: 2, color: 'from-blue-600 via-cyan-700 to-teal-800', ring: 'ring-cyan-700' },
      
      // 山⛰️ + 其他Tier 1
      'mountain-steam': { id: 'fog', name: 'Fog', emoji: '🌫️', tier: 2, color: 'from-white via-gray-300 to-slate-400', ring: 'ring-gray-300' },
      'mountain-ash': { id: 'barren-peak', name: 'Barren Peak', emoji: '🏔️', tier: 2, color: 'from-gray-600 via-slate-700 to-zinc-800', ring: 'ring-slate-700' },
      'mountain-lava': { id: 'volcanic-range', name: 'Volcanic Range', emoji: '🗻', tier: 2, color: 'from-red-600 via-orange-700 to-brown-800', ring: 'ring-orange-700' },
      'mountain-volcano': { id: 'mountain-chain', name: 'Mountain Chain', emoji: '⛓️', tier: 2, color: 'from-gray-500 via-slate-600 to-stone-700', ring: 'ring-slate-600' },
      'mountain-mud': { id: 'landslide', name: 'Landslide', emoji: '💦', tier: 2, color: 'from-brown-600 via-amber-700 to-orange-800', ring: 'ring-amber-700' },
      'mountain-plant': { id: 'alpine-plant', name: 'Alpine Plant', emoji: '📌', tier: 2, color: 'from-pink-400 via-rose-500 to-red-600', ring: 'ring-rose-500' },
      'mountain-mercury': { id: 'highland', name: 'Highland', emoji: '🏔️', tier: 2, color: 'from-blue-400 via-cyan-500 to-sky-600', ring: 'ring-cyan-500' },
      'mountain-grass': { id: 'meadow-high', name: 'Meadow High', emoji: '🌾', tier: 2, color: 'from-green-500 via-lime-600 to-emerald-700', ring: 'ring-lime-600' },
      'mountain-tool': { id: 'pickaxe', name: 'Pickaxe', emoji: '🪓', tier: 2, color: 'from-gray-500 via-stone-600 to-slate-700', ring: 'ring-stone-600' },
      'mountain-ore': { id: 'mine-shaft', name: 'Mine Shaft', emoji: '🕳️', tier: 2, color: 'from-gray-700 via-slate-800 to-black', ring: 'ring-slate-800' },
      
      // 森林🌲 + 其他Tier 1
      'forest-steam': { id: 'rainforest', name: 'Rainforest', emoji: '🌴', tier: 2, color: 'from-green-600 via-emerald-700 to-teal-800', ring: 'ring-emerald-700' },
      'forest-ash': { id: 'burnt-forest', name: 'Burnt Forest', emoji: '🌲', tier: 2, color: 'from-gray-700 via-black to-slate-900', ring: 'ring-gray-800' },
      'forest-lava': { id: 'volcanic-forest', name: 'Volcanic Forest', emoji: '🥫', tier: 2, color: 'from-orange-600 via-red-700 to-brown-800', ring: 'ring-red-700' },
      'forest-volcano': { id: 'jungle-volcano', name: 'Jungle Volcano', emoji: '🥫', tier: 2, color: 'from-green-600 via-orange-700 to-red-800', ring: 'ring-orange-700' },
      'forest-mud': { id: 'swamp-forest', name: 'Swamp Forest', emoji: '🌲', tier: 2, color: 'from-green-700 via-brown-800 to-amber-900', ring: 'ring-brown-800' },
      'forest-plant': { id: 'dense-jungle', name: 'Dense Jungle', emoji: '🌲', tier: 2, color: 'from-green-700 via-emerald-800 to-teal-900', ring: 'ring-emerald-800' },
      'forest-mercury': { id: 'toxic-forest', name: 'Toxic Forest', emoji: '🌲', tier: 2, color: 'from-green-800 via-lime-900 to-emerald-950', ring: 'ring-lime-900' },
      'forest-grass': { id: 'woodland', name: 'Woodland', emoji: '🌳', tier: 2, color: 'from-green-600 via-lime-700 to-emerald-800', ring: 'ring-lime-700' },
      'forest-tool': { id: 'lumberyard', name: 'Lumberyard', emoji: '🪓', tier: 2, color: 'from-brown-600 via-amber-700 to-orange-800', ring: 'ring-amber-700' },
      'forest-ore': { id: 'hidden-treasure', name: 'Hidden Treasure', emoji: '💎', tier: 2, color: 'from-green-600 via-yellow-700 to-amber-800', ring: 'ring-yellow-700' },
      
      // 合金⚙️ + 其他Tier 1
      'alloy-steam': { id: 'pressure-vessel', name: 'Pressure Vessel', emoji: '🫙', tier: 2, color: 'from-gray-500 via-zinc-600 to-slate-700', ring: 'ring-zinc-600' },
      'alloy-ash': { id: 'carbon-steel', name: 'Carbon Steel', emoji: '🚗', tier: 2, color: 'from-gray-600 via-slate-700 to-black', ring: 'ring-slate-700' },
      'alloy-lava': { id: 'molten-alloy', name: 'Molten Alloy', emoji: '🔶', tier: 2, color: 'from-orange-600 via-red-700 to-amber-800', ring: 'ring-red-700' },
      'alloy-volcano': { id: 'crucible', name: 'Crucible', emoji: '🏺', tier: 2, color: 'from-red-600 via-orange-700 to-brown-800', ring: 'ring-orange-700' },
      'alloy-mud': { id: 'composite', name: 'Composite', emoji: '🧱', tier: 2, color: 'from-brown-500 via-amber-600 to-orange-700', ring: 'ring-amber-600' },
      'alloy-plant': { id: 'bio-metal', name: 'Bio Metal', emoji: '🦾', tier: 2, color: 'from-green-500 via-zinc-600 to-gray-700', ring: 'ring-zinc-600' },
      'alloy-mercury': { id: 'liquid-metal', name: 'Liquid Metal', emoji: '💿', tier: 2, color: 'from-gray-400 via-slate-500 to-zinc-600', ring: 'ring-slate-500' },
      'alloy-grass': { id: 'wire', name: 'Wire', emoji: '〰️', tier: 2, color: 'from-gray-500 via-zinc-600 to-slate-700', ring: 'ring-zinc-600' },
      'alloy-tool': { id: 'industrial-tool', name: 'Industrial Tool', emoji: '🔧', tier: 2, color: 'from-gray-600 via-slate-700 to-zinc-800', ring: 'ring-slate-700' },
      'alloy-ore': { id: 'superalloy', name: 'Superalloy', emoji: '💠', tier: 2, color: 'from-purple-600 via-violet-700 to-indigo-800', ring: 'ring-violet-700' },
    };

    // ==================== 自然现象 (150种) ====================
    const naturalPhenomena = {
      'steam-earth': { id: 'cloud', name: 'Cloud', emoji: '☁️', tier: 2 },
      'cloud-water': { id: 'rain', name: 'Rain', emoji: '🌧️', tier: 2 },
      'rain-cold': { id: 'snow', name: 'Snow', emoji: '❄️', tier: 2 },
      'snow-snow': { id: 'blizzard', name: 'Blizzard', emoji: '❄️', tier: 3 },
      'rain-wind': { id: 'storm', name: 'Storm', emoji: '⛈️', tier: 3 },
      'storm-ocean': { id: 'hurricane', name: 'Hurricane', emoji: '🌀', tier: 4 },
      'hurricane-power': { id: 'typhoon', name: 'Typhoon', emoji: '🌀', tier: 5 },
      
      'cloud-fire': { id: 'lightning', name: 'Lightning', emoji: '⚡', tier: 2 },
      'lightning-rain': { id: 'thunderstorm', name: 'Thunderstorm', emoji: '⛈️', tier: 3 },
      'lightning-tree': { id: 'struck-tree', name: 'Struck Tree', emoji: '🌴', tier: 3 },
      
      'sun-day': { id: 'sunshine', name: 'Sunshine', emoji: '☀️', tier: 2 },
      'moon-night': { id: 'moonlight', name: 'Moonlight', emoji: '🌙', tier: 2 },
      'sunshine-rain': { id: 'rainbow', name: 'Rainbow', emoji: '🌈', tier: 3 },
      'rainbow-magic': { id: 'spectrum', name: 'Spectrum', emoji: '🌈', tier: 4 },
      
      'wind-sand': { id: 'sandstorm', name: 'Sandstorm', emoji: '🌪️', tier: 3 },
      'water-desert': { id: 'oasis', name: 'Oasis', emoji: '🏝️', tier: 3 },
      'volcano-explosion': { id: 'eruption', name: 'Eruption', emoji: '🌋', tier: 4 },
      'earth-shake': { id: 'earthquake', name: 'Earthquake', emoji: '🌍', tier: 4 },
      'ocean-moon': { id: 'tide', name: 'Tide', emoji: '🌊', tier: 3 },
      'ice-pressure': { id: 'glacier', name: 'Glacier', emoji: '🏔️', tier: 4 },
      'fire-spread': { id: 'wildfire', name: 'Wildfire', emoji: '🏔️', tier: 3 },
      
      // 极端天气
      'cold-extreme': { id: 'absolute-zero', name: 'Absolute Zero', emoji: '❄️', tier: 6 },
      'heat-extreme': { id: 'plasma', name: 'Plasma', emoji: '💡', tier: 6 },
      'pressure-extreme': { id: 'black-hole', name: 'Black Hole', emoji: '🕳️', tier: 8 },
      
      // 天文现象
      'star-collapse': { id: 'supernova-event', name: 'Supernova Event', emoji: '💥', tier: 7 },
      'dust-gravity': { id: 'nebula', name: 'Nebula', emoji: '☁️', tier: 5 },
      'nebula-time': { id: 'star', name: 'Star', emoji: '⭐', tier: 6 },
      'star-star': { id: 'binary-star', name: 'Binary Star', emoji: '✨', tier: 7 },
      'sun-gravity': { id: 'solar-system', name: 'Solar System', emoji: '🪐', tier: 8 },
      'comet-ice': { id: 'meteor', name: 'Meteor', emoji: '☄️', tier: 5 },
      'meteor-shower': { id: 'meteor-rain', name: 'Meteor Rain', emoji: '☄️', tier: 6 },
      'moon-orbit': { id: 'satellite', name: 'Satellite', emoji: '🛰️', tier: 5 },
      'earth-space': { id: 'planet', name: 'Planet', emoji: '🪐', tier: 7 },
      'planet-life': { id: 'habitable-world', name: 'Habitable World', emoji: '🌎', tier: 8 },
      
      // 极光和磁场
      'solar-wind-magnetic': { id: 'aurora', name: 'Aurora', emoji: '🌌', tier: 6 },
      'aurora-beauty': { id: 'northern-lights', name: 'Northern Lights', emoji: '🌌', tier: 7 },
      'earth-core': { id: 'magnetism', name: 'Magnetism', emoji: '🧲', tier: 5 },
      
      // 生态系统
      'rain-soil': { id: 'fertile-land', name: 'Fertile Land', emoji: '🌱', tier: 3 },
      'fertile-land-sun': { id: 'farmland', name: 'Farmland', emoji: '🌾', tier: 4 },
      'forest-rain': { id: 'tropical-forest', name: 'Tropical Forest', emoji: '🌴', tier: 4 },
      'desert-heat': { id: 'sahara', name: 'Sahara', emoji: '🏜️', tier: 5 },
      'ice-continent': { id: 'antarctica', name: 'Antarctica', emoji: '🐧', tier: 6 },
    };

    // ==================== 生命系统 (200种) ====================
    const lifeSystem = {
      // 生命起源
      'energy-water': { id: 'life', name: 'Life', emoji: '🌱', tier: 3 },
      'life-earth': { id: 'organism', name: 'Organism', emoji: '🦠', tier: 4 },
      'organism-water': { id: 'single-cell', name: 'Single Cell', emoji: '🔬', tier: 4 },
      'single-cell-single-cell': { id: 'multi-cell', name: 'Multi Cell', emoji: '🧫', tier: 5 },
      'multi-cell-evolution': { id: 'complex-life', name: 'Complex Life', emoji: '🐛', tier: 6 },
      
      // 植物王国
      'plant-sun': { id: 'photosynthesis', name: 'Photosynthesis', emoji: '🌿', tier: 4 },
      'plant-plant': { id: 'vegetation', name: 'Vegetation', emoji: '🌱', tier: 3 },
      'plant-water': { id: 'aquatic-plant', name: 'Aquatic Plant', emoji: '🌿', tier: 4 },
      'plant-desert': { id: 'cactus', name: 'Cactus', emoji: '🌵', tier: 4 },
      'plant-ice': { id: 'pine', name: 'Pine', emoji: '📌', tier: 4 },
      'plant-flower': { id: 'garden', name: 'Garden', emoji: '🌻', tier: 5 },
      'plant-fruit': { id: 'orchard', name: 'Orchard', emoji: '🍎', tier: 5 },
      'plant-medicine': { id: 'herb', name: 'Herb', emoji: '🌱', tier: 5 },
      'plant-poison': { id: 'toxic-plant', name: 'Toxic Plant', emoji: '☠️', tier: 5 },
      'plant-giant': { id: 'redwood', name: 'Redwood', emoji: '🌲', tier: 6 },
      'plant-carnivore': { id: 'venus-flytrap', name: 'Venus Flytrap', emoji: '🪴', tier: 6 },
      'plant-parasite': { id: 'mistletoe', name: 'Mistletoe', emoji: '🌱', tier: 5 },
      'plant-climbing': { id: 'vine', name: 'Vine', emoji: '🍇', tier: 4 },
      'vine-ancient': { id: 'world-tree', name: 'World Tree', emoji: '🌴', tier: 8 },
      
      // 真菌王国
      'decay-life': { id: 'fungus', name: 'Fungus', emoji: '🍄', tier: 4 },
      'fungus-tree': { id: 'mushroom', name: 'Mushroom', emoji: '🍄', tier: 4 },
      'mushroom-poison': { id: 'death-cap', name: 'Death Cap', emoji: '🍄', tier: 5 },
      'mushroom-glow': { id: 'bioluminescent', name: 'Bioluminescent', emoji: '🍄', tier: 6 },
      'fungus-giant': { id: 'giant-mushroom', name: 'Giant Mushroom', emoji: '🍄', tier: 7 },
      
      // 微生物
      'life-tiny': { id: 'bacteria', name: 'Bacteria', emoji: '🦠', tier: 4 },
      'bacteria-good': { id: 'probiotics', name: 'Probiotics', emoji: '🦠', tier: 5 },
      'bacteria-bad': { id: 'pathogen', name: 'Pathogen', emoji: '☠️', tier: 5 },
      'bacteria-extreme': { id: 'extremophile', name: 'Extremophile', emoji: '🔬', tier: 6 },
      'life-water': { id: 'plankton', name: 'Plankton', emoji: '🦠', tier: 4 },
      'bacteria-evolution': { id: 'virus', name: 'Virus', emoji: '🦠', tier: 5 },
      'virus-mutation': { id: 'plague', name: 'Plague', emoji: '☠️', tier: 6 },
      
      // 动物-水生
      'life-ocean': { id: 'fish', name: 'Fish', emoji: '🐟', tier: 4 },
      'fish-big': { id: 'shark', name: 'Shark', emoji: '🦈', tier: 5 },
      'fish-giant': { id: 'whale', name: 'Whale', emoji: '🐋', tier: 6 },
      'fish-smart': { id: 'dolphin', name: 'Dolphin', emoji: '🐬', tier: 6 },
      'fish-armor': { id: 'turtle', name: 'Turtle', emoji: '🐢', tier: 5 },
      'fish-eight': { id: 'octopus', name: 'Octopus', emoji: '🐙', tier: 5 },
      'octopus-giant': { id: 'kraken', name: 'Kraken', emoji: '🦑', tier: 8 },
      'fish-electric': { id: 'electric-eel', name: 'Electric Eel', emoji: '💡', tier: 6 },
      'fish-deep': { id: 'anglerfish', name: 'Anglerfish', emoji: '🐡', tier: 6 },
      'ocean-shell': { id: 'clam', name: 'Clam', emoji: '🦪', tier: 4 },
      'clam-pearl': { id: 'pearl', name: 'Pearl', emoji: '📿', tier: 6 },
      'ocean-star': { id: 'starfish', name: 'Starfish', emoji: '🌟', tier: 5 },
      'ocean-spiky': { id: 'sea-urchin', name: 'Sea Urchin', emoji: '🦔', tier: 5 },
      'ocean-floating': { id: 'jellyfish', name: 'Jellyfish', emoji: '🪼', tier: 5 },
      'ocean-crab': { id: 'crab', name: 'Crab', emoji: '🦀', tier: 4 },
      'ocean-lobster': { id: 'lobster', name: 'Lobster', emoji: '🦞', tier: 5 },
      'ocean-coral': { id: 'coral-reef', name: 'Coral Reef', emoji: '🪸', tier: 6 },
      'fish-myth': { id: 'mermaid', name: 'Mermaid', emoji: '🧜‍♀️', tier: 8 },
      
      // 动物-两栖
      'fish-land': { id: 'amphibian', name: 'Amphibian', emoji: '🐸', tier: 5 },
      'amphibian-jump': { id: 'frog', name: 'Frog', emoji: '🐸', tier: 5 },
      'amphibian-tail': { id: 'salamander', name: 'Salamander', emoji: '🦎', tier: 5 },
      'amphibian-poison': { id: 'poison-dart-frog', name: 'Poison Dart Frog', emoji: '🐸', tier: 6 },
      
      // 动物-爬行
      'amphibian-scale': { id: 'reptile', name: 'Reptile', emoji: '🦎', tier: 5 },
      'reptile-long': { id: 'snake', name: 'Snake', emoji: '🐍', tier: 5 },
      'snake-poison': { id: 'viper', name: 'Viper', emoji: '🐍', tier: 6 },
      'snake-giant': { id: 'anaconda', name: 'Anaconda', emoji: '🐍', tier: 7 },
      'snake-myth': { id: 'basilisk', name: 'Basilisk', emoji: '🐍', tier: 8 },
      'reptile-armor': { id: 'crocodile', name: 'Crocodile', emoji: '🐊', tier: 6 },
      'reptile-shell': { id: 'tortoise', name: 'Tortoise', emoji: '🐢', tier: 5 },
      'reptile-fast': { id: 'lizard', name: 'Lizard', emoji: '🦎', tier: 5 },
      'lizard-color': { id: 'chameleon', name: 'Chameleon', emoji: '🦎', tier: 6 },
      'lizard-giant': { id: 'komodo-dragon', name: 'Komodo Dragon', emoji: '🦎', tier: 7 },
      'reptile-ancient': { id: 'dinosaur', name: 'Dinosaur', emoji: '🦕', tier: 8 },
      'dinosaur-fierce': { id: 't-rex', name: 'T Rex', emoji: '🦖', tier: 9 },
      'dinosaur-giant': { id: 'brachiosaurus', name: 'Brachiosaurus', emoji: '🦕', tier: 9 },
      'dinosaur-flying': { id: 'pterodactyl', name: 'Pterodactyl', emoji: '🦅', tier: 9 },
      
      // 动物-鸟类
      'reptile-feather': { id: 'bird', name: 'Bird', emoji: '🐦', tier: 5 },
      'bird-sing': { id: 'songbird', name: 'Songbird', emoji: '🐦', tier: 5 },
      'bird-predator': { id: 'eagle', name: 'Eagle', emoji: '🦅', tier: 6 },
      'eagle-bald': { id: 'bald-eagle', name: 'Bald Eagle', emoji: '🦅', tier: 7 },
      'bird-wise': { id: 'owl', name: 'Owl', emoji: '🦉', tier: 6 },
      'bird-colorful': { id: 'parrot', name: 'Parrot', emoji: '🦜', tier: 6 },
      'bird-elegant': { id: 'swan', name: 'Swan', emoji: '🦢', tier: 6 },
      'bird-pink': { id: 'flamingo', name: 'Flamingo', emoji: '🦩', tier: 6 },
      'bird-display': { id: 'peacock', name: 'Peacock', emoji: '🦚', tier: 7 },
      'bird-fast': { id: 'falcon', name: 'Falcon', emoji: '🦅', tier: 7 },
      'bird-big': { id: 'ostrich', name: 'Ostrich', emoji: '🦤', tier: 6 },
      'bird-penguin': { id: 'penguin', name: 'Penguin', emoji: '🐧', tier: 6 },
      'bird-hummingbird': { id: 'hummingbird', name: 'Hummingbird', emoji: '🐦', tier: 6 },
      'bird-myth': { id: 'phoenix', name: 'Phoenix', emoji: '🔥', tier: 9 },
      'phoenix-rebirth': { id: 'immortal-bird', name: 'Immortal Bird', emoji: '🐦', tier: 10 },
      
      // 动物-哺乳类
      'reptile-milk': { id: 'mammal', name: 'Mammal', emoji: '🐾', tier: 6 },
      'mammal-small': { id: 'mouse', name: 'Mouse', emoji: '🖱️', tier: 5 },
      'mammal-spiky': { id: 'hedgehog', name: 'Hedgehog', emoji: '🦔', tier: 6 },
      'mammal-flying': { id: 'bat', name: 'Bat', emoji: '🦇', tier: 6 },
      'bat-vampire': { id: 'vampire-bat', name: 'Vampire Bat', emoji: '🦇', tier: 7 },
      'mammal-cat': { id: 'cat', name: 'Cat', emoji: '🐱', tier: 6 },
      'cat-big': { id: 'lion', name: 'Lion', emoji: '🦁', tier: 7 },
      'cat-stripes': { id: 'tiger', name: 'Tiger', emoji: '🐯', tier: 7 },
      'cat-spots': { id: 'leopard', name: 'Leopard', emoji: '🐆', tier: 7 },
      'cat-fast': { id: 'cheetah', name: 'Cheetah', emoji: '🐆', tier: 8 },
      'cat-black': { id: 'panther', name: 'Panther', emoji: '🐆', tier: 8 },
      'mammal-dog': { id: 'dog', name: 'Dog', emoji: '🐕', tier: 6 },
      'dog-wild': { id: 'wolf', name: 'Wolf', emoji: '🐺', tier: 7 },
      'wolf-alpha': { id: 'alpha-wolf', name: 'Alpha Wolf', emoji: '🐺', tier: 8 },
      'dog-fox': { id: 'fox', name: 'Fox', emoji: '🦊', tier: 6 },
      'mammal-bear': { id: 'bear', name: 'Bear', emoji: '🐻', tier: 7 },
      'bear-polar': { id: 'polar-bear', name: 'Polar Bear', emoji: '🐻‍❄️', tier: 8 },
      'bear-panda': { id: 'panda', name: 'Panda', emoji: '🐼', tier: 8 },
      'mammal-elephant': { id: 'elephant', name: 'Elephant', emoji: '🐘', tier: 8 },
      'elephant-mammoth': { id: 'mammoth', name: 'Mammoth', emoji: '🦣', tier: 9 },
      'mammal-rhino': { id: 'rhinoceros', name: 'Rhinoceros', emoji: '🦏', tier: 7 },
      'mammal-hippo': { id: 'hippopotamus', name: 'Hippopotamus', emoji: '🦛', tier: 7 },
      'mammal-giraffe': { id: 'giraffe', name: 'Giraffe', emoji: '🦒', tier: 7 },
      'mammal-zebra': { id: 'zebra', name: 'Zebra', emoji: '🦓', tier: 6 },
      'mammal-horse': { id: 'horse', name: 'Horse', emoji: '🐴', tier: 6 },
      'horse-horn': { id: 'unicorn', name: 'Unicorn', emoji: '🦄', tier: 9 },
      'horse-wings': { id: 'pegasus', name: 'Pegasus', emoji: '🦄', tier: 9 },
      'mammal-cow': { id: 'cow', name: 'Cow', emoji: '🐄', tier: 6 },
      'mammal-pig': { id: 'pig', name: 'Pig', emoji: '🐷', tier: 6 },
      'mammal-sheep': { id: 'sheep', name: 'Sheep', emoji: '🐑', tier: 6 },
      'mammal-goat': { id: 'goat', name: 'Goat', emoji: '🐐', tier: 6 },
      'mammal-rabbit': { id: 'rabbit', name: 'Rabbit', emoji: '🐰', tier: 5 },
      'mammal-monkey': { id: 'monkey', name: 'Monkey', emoji: '🐵', tier: 6 },
      'monkey-smart': { id: 'chimpanzee', name: 'Chimpanzee', emoji: '🦧', tier: 7 },
      'monkey-big': { id: 'gorilla', name: 'Gorilla', emoji: '🦍', tier: 7 },
      'gorilla-king': { id: 'king-kong', name: 'King Kong', emoji: '🦍', tier: 10 },
      'mammal-kangaroo': { id: 'kangaroo', name: 'Kangaroo', emoji: '🦘', tier: 6 },
      'mammal-koala': { id: 'koala', name: 'Koala', emoji: '🐨', tier: 6 },
      'mammal-sloth': { id: 'sloth', name: 'Sloth', emoji: '🦥', tier: 6 },
      'mammal-camel': { id: 'camel', name: 'Camel', emoji: '🐫', tier: 6 },
      'mammal-deer': { id: 'deer', name: 'Deer', emoji: '🦌', tier: 6 },
      'deer-antlers': { id: 'elk', name: 'Elk', emoji: '🦌', tier: 7 },
      'mammal-seal': { id: 'seal', name: 'Seal', emoji: '🦭', tier: 6 },
      'seal-walrus': { id: 'walrus', name: 'Walrus', emoji: '🦭', tier: 7 },
      
      // 昆虫和节肢动物
      'life-tiny-legs': { id: 'insect', name: 'Insect', emoji: '🐛', tier: 4 },
      'insect-fly': { id: 'butterfly', name: 'Butterfly', emoji: '🦋', tier: 5 },
      'butterfly-night': { id: 'moth', name: 'Moth', emoji: '🦋', tier: 5 },
      'insect-honey': { id: 'bee', name: 'Bee', emoji: '🐝', tier: 5 },
      'bee-queen': { id: 'queen-bee', name: 'Queen Bee', emoji: '🐝', tier: 6 },
      'bee-sting': { id: 'wasp', name: 'Wasp', emoji: '🐝', tier: 6 },
      'insect-ant': { id: 'ant', name: 'Ant', emoji: '🐜', tier: 5 },
      'ant-colony': { id: 'ant-hill', name: 'Ant Hill', emoji: '🐜', tier: 6 },
      'insect-jump': { id: 'grasshopper', name: 'Grasshopper', emoji: '🦗', tier: 5 },
      'insect-sing': { id: 'cricket', name: 'Cricket', emoji: '🏏', tier: 5 },
      'insect-glow': { id: 'firefly', name: 'Firefly', emoji: '🪰', tier: 6 },
      'insect-beetle': { id: 'beetle', name: 'Beetle', emoji: '🪲', tier: 5 },
      'beetle-horn': { id: 'rhinoceros-beetle', name: 'Rhinoceros Beetle', emoji: '🪲', tier: 6 },
      'beetle-lady': { id: 'ladybug', name: 'Ladybug', emoji: '🐞', tier: 5 },
      'insect-fly-pest': { id: 'mosquito', name: 'Mosquito', emoji: '🦟', tier: 5 },
      'insect-fly-common': { id: 'housefly', name: 'Housefly', emoji: '🪰', tier: 5 },
      'insect-dragonfly': { id: 'dragonfly', name: 'Dragonfly', emoji: '🪰', tier: 6 },
      'insect-mantis': { id: 'praying-mantis', name: 'Praying Mantis', emoji: '🦗', tier: 6 },
      'insect-stick': { id: 'stick-insect', name: 'Stick Insect', emoji: '🌱', tier: 6 },
      'insect-web': { id: 'spider', name: 'Spider', emoji: '🕷️', tier: 5 },
      'spider-big': { id: 'tarantula', name: 'Tarantula', emoji: '🕷️', tier: 6 },
      'spider-poison': { id: 'black-widow', name: 'Black Widow', emoji: '🕷️', tier: 7 },
      'spider-giant': { id: 'giant-spider', name: 'Giant Spider', emoji: '🕷️', tier: 8 },
      'insect-scorpion': { id: 'scorpion', name: 'Scorpion', emoji: '🦂', tier: 6 },
      'insect-centipede': { id: 'centipede', name: 'Centipede', emoji: '🐛', tier: 6 },
      'insect-millipede': { id: 'millipede', name: 'Millipede', emoji: '🐛', tier: 6 },
      'insect-worm': { id: 'worm', name: 'Worm', emoji: '🪱', tier: 4 },
      'worm-glow': { id: 'glowworm', name: 'Glowworm', emoji: '🐛', tier: 5 },
      'worm-silk': { id: 'silkworm', name: 'Silkworm', emoji: '🐛', tier: 5 },
      'insect-snail': { id: 'snail', name: 'Snail', emoji: '🐌', tier: 5 },
      'snail-no-shell': { id: 'slug', name: 'Slug', emoji: '🐌', tier: 5 },
      
      // 人类进化
      'mammal-tool': { id: 'primitive-human', name: 'Primitive Human', emoji: '🧑', tier: 7 },
      'primitive-human-fire': { id: 'homo-erectus', name: 'Homo Erectus', emoji: '🧑', tier: 8 },
      'homo-erectus-brain': { id: 'homo-sapiens', name: 'Homo Sapiens', emoji: '🧑', tier: 9 },
      'homo-sapiens-society': { id: 'human', name: 'Human', emoji: '🧍', tier: 10 },
      'human-human': { id: 'family', name: 'Family', emoji: '👨‍👩‍👧‍👦', tier: 10 },
      'family-family': { id: 'tribe', name: 'Tribe', emoji: '👥', tier: 10 },
      'tribe-tribe': { id: 'village', name: 'Village', emoji: '🏘️', tier: 10 },
      'village-village': { id: 'town', name: 'Town', emoji: '🏙️', tier: 10 },
      'town-town': { id: 'city', name: 'City', emoji: '🌆', tier: 10 },
      'city-city': { id: 'metropolis', name: 'Metropolis', emoji: '🏙️', tier: 10 },
      'metropolis-metropolis': { id: 'megacity', name: 'Megacity', emoji: '🌃', tier: 10 },
    };

    // ==================== 物质和化学 (180种) ====================
    const chemistry = {
      'lava-water': { id: 'stone', name: 'Stone', emoji: '🗿', tier: 2 },
      'stone-pressure': { id: 'rock', name: 'Rock', emoji: '🪨', tier: 3 },
      'rock-heat': { id: 'magma', name: 'Magma', emoji: '🌋', tier: 4 },
      'stone-tool': { id: 'brick', name: 'Brick', emoji: '🧱', tier: 3 },
      'brick-brick': { id: 'wall', name: 'Wall', emoji: '🧱', tier: 4 },
      'wall-wall': { id: 'house', name: 'House', emoji: '🏠', tier: 5 },
      
      'stone-art': { id: 'sculpture', name: 'Sculpture', emoji: '🗿', tier: 4 },
      'stone-polish': { id: 'marble', name: 'Marble', emoji: '⬜', tier: 5 },
      'stone-transparent': { id: 'crystal', name: 'Crystal', emoji: '🔮', tier: 5 },
      'crystal-light': { id: 'prism', name: 'Prism', emoji: '🔷', tier: 6 },
      'crystal-power': { id: 'magic-crystal', name: 'Magic Crystal', emoji: '🔮', tier: 7 },
      'crystal-dark': { id: 'dark-crystal', name: 'Dark Crystal', emoji: '⚫', tier: 7 },
      
      'ore-heat': { id: 'smelting', name: 'Smelting', emoji: '⚒️', tier: 3 },
      'ore-extract': { id: 'iron', name: 'Iron', emoji: '⚙️', tier: 3 },
      'iron-heat': { id: 'steel', name: 'Steel', emoji: '🔩', tier: 4 },
      'steel-carbon': { id: 'hardened-steel', name: 'Hardened Steel', emoji: '⚔️', tier: 5 },
      'ore-shine': { id: 'gold', name: 'Gold', emoji: '🟨', tier: 4 },
      'gold-craft': { id: 'jewelry', name: 'Jewelry', emoji: '💍', tier: 5 },
      'ore-white': { id: 'silver', name: 'Silver', emoji: '⚪', tier: 4 },
      'ore-red': { id: 'copper', name: 'Copper', emoji: '🟤', tier: 3 },
      'copper-tin': { id: 'bronze', name: 'Bronze', emoji: '🥉', tier: 4 },
      'ore-heavy': { id: 'lead', name: 'Lead', emoji: '⚫', tier: 4 },
      'ore-light': { id: 'aluminum', name: 'Aluminum', emoji: '⚪', tier: 4 },
      'ore-strong': { id: 'titanium', name: 'Titanium', emoji: '💠', tier: 5 },
      'ore-rare': { id: 'platinum', name: 'Platinum', emoji: '⚪', tier: 6 },
      'ore-radio': { id: 'uranium', name: 'Uranium', emoji: '☢️', tier: 7 },
      'uranium-split': { id: 'nuclear-fission', name: 'Nuclear Fission', emoji: '💥', tier: 8 },
      'hydrogen-fusion': { id: 'nuclear-fusion', name: 'Nuclear Fusion', emoji: '☢️', tier: 9 },
      
      'stone-fire': { id: 'glass', name: 'Glass', emoji: '🥛', tier: 3 },
      'glass-metal': { id: 'mirror', name: 'Mirror', emoji: '🪞', tier: 4 },
      'glass-sand': { id: 'silicon', name: 'Silicon', emoji: '💻', tier: 5 },
      'silicon-technology': { id: 'microchip', name: 'Microchip', emoji: '💻', tier: 7 },
      
      'water-mineral': { id: 'salt', name: 'Salt', emoji: '🧂', tier: 3 },
      'salt-preserve': { id: 'preservation', name: 'Preservation', emoji: '🧊', tier: 4 },
      
      'plant-fire': { id: 'charcoal', name: 'Charcoal', emoji: '⚫', tier: 3 },
      'charcoal-pressure': { id: 'diamond', name: 'Diamond', emoji: '💎', tier: 6 },
      'diamond-cut': { id: 'gem', name: 'Gem', emoji: '💎', tier: 7 },
      
      'ash-water': { id: 'lye', name: 'Lye', emoji: '⚗️', tier: 3 },
      'lye-fat': { id: 'soap', name: 'Soap', emoji: '🧼', tier: 4 },
      'soap-water': { id: 'bubble', name: 'Bubble', emoji: '🗂️', tier: 4 },
      
      'wood-heat': { id: 'tar', name: 'Tar', emoji: '⚫', tier: 3 },
      'earth-decay': { id: 'coal', name: 'Coal', emoji: '⬛', tier: 4 },
      'coal-pressure': { id: 'petroleum', name: 'Petroleum', emoji: '🛢️', tier: 5 },
      'petroleum-refine': { id: 'gasoline', name: 'Gasoline', emoji: '⛽', tier: 6 },
      'petroleum-plastic': { id: 'plastic', name: 'Plastic', emoji: '🪣', tier: 6 },
      
      'water-cold': { id: 'ice', name: 'Ice', emoji: '🧊', tier: 2 },
      'ice-pressure': { id: 'compressed-ice', name: 'Compressed Ice', emoji: '💎', tier: 3 },
      'ice-crystal': { id: 'snowflake', name: 'Snowflake', emoji: '❄️', tier: 4 },
      
      'air-pressure': { id: 'compressed-air', name: 'Compressed Air', emoji: '💨', tier: 3 },
      'air-liquid': { id: 'liquid-air', name: 'Liquid Air', emoji: '💧', tier: 5 },
      
      'water-electrolysis': { id: 'hydrogen', name: 'Hydrogen', emoji: '⚡', tier: 5 },
      'water-split-oxygen': { id: 'oxygen', name: 'Oxygen', emoji: '💨', tier: 5 },
      'oxygen-life': { id: 'breathing', name: 'Breathing', emoji: '💨', tier: 5 },
      'hydrogen-oxygen': { id: 'water-molecule', name: 'Water Molecule', emoji: '💧', tier: 6 },
      
      'nitrogen-air': { id: 'nitrogen-gas', name: 'Nitrogen Gas', emoji: '💨', tier: 5 },
      'carbon-oxygen': { id: 'carbon-dioxide', name: 'Carbon Dioxide', emoji: '🚗', tier: 5 },
      'carbon-dioxide-plant': { id: 'photosynthesis-cycle', name: 'Photosynthesis Cycle', emoji: '🌿', tier: 6 },
      
      // 化合物
      'sodium-chlorine': { id: 'table-salt', name: 'Table Salt', emoji: '🧂', tier: 5 },
      'calcium-carbon': { id: 'limestone', name: 'Limestone', emoji: '🟨', tier: 5 },
      'limestone-heat': { id: 'quicklime', name: 'Quicklime', emoji: '⚪', tier: 6 },
      'silicon-oxygen': { id: 'quartz', name: 'Quartz', emoji: '💎', tier: 6 },
      'iron-oxygen': { id: 'rust', name: 'Rust', emoji: '🟤', tier: 4 },
      'copper-oxygen': { id: 'verdigris', name: 'Verdigris', emoji: '🟢', tier: 5 },
      
      // 合金系统
      'iron-carbon': { id: 'cast-iron', name: 'Cast Iron', emoji: '⚙️', tier: 4 },
      'copper-zinc': { id: 'brass', name: 'Brass', emoji: '🟡', tier: 5 },
      'copper-nickel': { id: 'cupronickel', name: 'Cupronickel', emoji: '⚪', tier: 5 },
      'iron-chromium': { id: 'stainless-steel', name: 'Stainless Steel', emoji: '🌟', tier: 6 },
      'aluminum-copper': { id: 'duralumin', name: 'Duralumin', emoji: '⚪', tier: 6 },
      
      // 有机化合物
      'carbon-hydrogen': { id: 'hydrocarbon', name: 'Hydrocarbon', emoji: '🚗', tier: 6 },
      'sugar-ferment': { id: 'alcohol', name: 'Alcohol', emoji: '🍷', tier: 5 },
      'alcohol-concentrate': { id: 'spirits', name: 'Spirits', emoji: '🥃', tier: 6 },
      'grape-ferment': { id: 'wine', name: 'Wine', emoji: '🍷', tier: 6 },
      'grain-ferment': { id: 'beer', name: 'Beer', emoji: '🍺', tier: 6 },
      'rice-ferment': { id: 'sake', name: 'Sake', emoji: '🍶', tier: 6 },
      
      // 酸碱
      'sulfur-oxygen': { id: 'sulfuric-acid', name: 'Sulfuric Acid', emoji: '⚗️', tier: 6 },
      'nitrogen-oxygen': { id: 'nitric-acid', name: 'Nitric Acid', emoji: '⚗️', tier: 6 },
      'chlorine-hydrogen': { id: 'hydrochloric-acid', name: 'Hydrochloric Acid', emoji: '⚗️', tier: 6 },
      'lye-strong': { id: 'caustic-soda', name: 'Caustic Soda', emoji: '⚗️', tier: 6 },
      
      // 炸药
      'charcoal-sulfur': { id: 'gunpowder', name: 'Gunpowder', emoji: '💨', tier: 5 },
      'gunpowder-metal': { id: 'bomb', name: 'Bomb', emoji: '💣', tier: 6 },
      'nitric-acid-glycerin': { id: 'nitroglycerin', name: 'Nitroglycerin', emoji: '💥', tier: 7 },
      'nitroglycerin-stabilize': { id: 'dynamite', name: 'Dynamite', emoji: '🧨', tier: 7 },
      
      // 聚合物
      'molecule-chain': { id: 'polymer', name: 'Polymer', emoji: '🧬', tier: 6 },
      'polymer-flexible': { id: 'rubber', name: 'Rubber', emoji: '🎈', tier: 6 },
      'polymer-hard': { id: 'resin', name: 'Resin', emoji: '🟤', tier: 6 },
      'polymer-fiber': { id: 'synthetic-fiber', name: 'Synthetic Fiber', emoji: '🧵', tier: 7 },
      
      // 纳米材料
      'carbon-nano': { id: 'graphene', name: 'Graphene', emoji: '⬛', tier: 8 },
      'carbon-tube': { id: 'carbon-nanotube', name: 'Carbon Nanotube', emoji: '🚗', tier: 8 },
      'nano-medicine': { id: 'nanobot', name: 'Nanobot', emoji: '🔬', tier: 9 },
      
      // 超材料
      'material-strange': { id: 'metamaterial', name: 'Metamaterial', emoji: '💠', tier: 8 },
      'metamaterial-light': { id: 'invisibility', name: 'Invisibility', emoji: '👻', tier: 9 },
      
      // 量子材料
      'matter-quantum': { id: 'quantum-material', name: 'Quantum Material', emoji: '⚛️', tier: 9 },
      'quantum-entangle': { id: 'entangled-particles', name: 'Entangled Particles', emoji: '🔗', tier: 10 },
    };

    // ==================== 科技树 (250种) ====================
    const technology = {
      // 工具进化
      'stone-sharp': { id: 'knife', name: 'Knife', emoji: '🔪', tier: 3 },
      'knife-handle': { id: 'dagger', name: 'Dagger', emoji: '🗡️', tier: 4 },
      'stone-heavy': { id: 'hammer', name: 'Hammer', emoji: '🔨', tier: 3 },
      'stone-edge': { id: 'axe', name: 'Axe', emoji: '🪓', tier: 3 },
      'wood-string': { id: 'bow', name: 'Bow', emoji: '🏹', tier: 4 },
      'bow-arrow': { id: 'archery', name: 'Archery', emoji: '🏹', tier: 5 },
      
      'metal-blade': { id: 'sword', name: 'Sword', emoji: '⚔️', tier: 4 },
      'sword-long': { id: 'longsword', name: 'Longsword', emoji: '⚔️', tier: 5 },
      'sword-curve': { id: 'scimitar', name: 'Scimitar', emoji: '🗡️', tier: 5 },
      'sword-japan': { id: 'katana', name: 'Katana', emoji: '⚔️', tier: 6 },
      'sword-magic': { id: 'enchanted-sword', name: 'Enchanted Sword', emoji: '⚔️', tier: 7 },
      'enchanted-sword-legendary': { id: 'excalibur', name: 'Excalibur', emoji: '⚔️', tier: 9 },
      
      'metal-point': { id: 'spear', name: 'Spear', emoji: '🗡️', tier: 4 },
      'spear-throw': { id: 'javelin', name: 'Javelin', emoji: '🗡️', tier: 5 },
      'metal-defense': { id: 'shield', name: 'Shield', emoji: '🛡️', tier: 4 },
      'metal-armor': { id: 'armor', name: 'Armor', emoji: '🛡️', tier: 5 },
      'armor-heavy': { id: 'plate-armor', name: 'Plate Armor', emoji: '🛡️', tier: 6 },
      'armor-chain': { id: 'chainmail', name: 'Chainmail', emoji: '🛡️', tier: 6 },
      
      // 火器革命
      'gunpowder-tube': { id: 'cannon', name: 'Cannon', emoji: '💣', tier: 6 },
      'gunpowder-small': { id: 'gun', name: 'Gun', emoji: '🔫', tier: 6 },
      'gun-rifle': { id: 'rifle', name: 'Rifle', emoji: '🔫', tier: 7 },
      'gun-automatic': { id: 'machine-gun', name: 'Machine Gun', emoji: '🔫', tier: 8 },
      'gun-sniper': { id: 'sniper-rifle', name: 'Sniper Rifle', emoji: '🔫', tier: 8 },
      'gun-rocket': { id: 'rocket-launcher', name: 'Rocket Launcher', emoji: '🚀', tier: 8 },
      
      // 机械革命
      'wheel-axle': { id: 'cart', name: 'Cart', emoji: '🚗', tier: 4 },
      'cart-horse': { id: 'carriage', name: 'Carriage', emoji: '🚗', tier: 5 },
      'wheel-steam': { id: 'steam-engine', name: 'Steam Engine', emoji: '🚂', tier: 6 },
      'steam-engine-vehicle': { id: 'steam-car', name: 'Steam Car', emoji: '💨', tier: 7 },
      'steam-engine-rail': { id: 'train', name: 'Train', emoji: '🚂', tier: 7 },
      'train-fast': { id: 'bullet-train', name: 'Bullet Train', emoji: '🚄', tier: 9 },
      'train-mag': { id: 'maglev', name: 'Maglev', emoji: '🚄', tier: 10 },
      
      'engine-combustion': { id: 'internal-combustion', name: 'Internal Combustion', emoji: '🚌', tier: 7 },
      'internal-combustion-vehicle': { id: 'car', name: 'Car', emoji: '🚗', tier: 8 },
      'car-luxury': { id: 'limousine', name: 'Limousine', emoji: '🚗', tier: 9 },
      'car-sport': { id: 'sports-car', name: 'Sports Car', emoji: '🏎️', tier: 9 },
      'car-off-road': { id: 'suv', name: 'SUV', emoji: '🚙', tier: 9 },
      'car-big': { id: 'truck', name: 'Truck', emoji: '🚚', tier: 8 },
      'car-service': { id: 'ambulance', name: 'Ambulance', emoji: '🚑', tier: 8 },
      'car-fire': { id: 'fire-truck', name: 'Fire Truck', emoji: '🚒', tier: 8 },
      'car-police': { id: 'police-car', name: 'Police Car', emoji: '🚓', tier: 8 },
      'car-taxi': { id: 'taxi', name: 'Taxi', emoji: '🚕', tier: 8 },
      'car-bus': { id: 'bus', name: 'Bus', emoji: '🚌', tier: 8 },
      'car-electric': { id: 'electric-car', name: 'Electric Car', emoji: '🚗', tier: 9 },
      'electric-car-self': { id: 'self-driving-car', name: 'Self Driving Car', emoji: '🚗', tier: 10 },
      
      'engine-two-wheel': { id: 'motorcycle', name: 'Motorcycle', emoji: '🏍️', tier: 8 },
      'motorcycle-sport': { id: 'racing-bike', name: 'Racing Bike', emoji: '🏍️', tier: 9 },
      'human-pedal': { id: 'bicycle', name: 'Bicycle', emoji: '🚲', tier: 6 },
      'bicycle-motor': { id: 'electric-bike', name: 'Electric Bike', emoji: '🚲', tier: 8 },
      'bicycle-three': { id: 'tricycle', name: 'Tricycle', emoji: '🚲', tier: 6 },
      'human-skateboard': { id: 'skateboard', name: 'Skateboard', emoji: '🛹', tier: 7 },
      'skateboard-motor': { id: 'electric-skateboard', name: 'Electric Skateboard', emoji: '🛹', tier: 8 },
      'human-scooter': { id: 'scooter', name: 'Scooter', emoji: '🛵', tier: 7 },
      
      // 航海
      'wood-water': { id: 'raft', name: 'Raft', emoji: '🛶', tier: 3 },
      'raft-improve': { id: 'boat', name: 'Boat', emoji: '⛵', tier: 4 },
      'boat-sail': { id: 'sailboat', name: 'Sailboat', emoji: '⛵', tier: 5 },
      'sailboat-big': { id: 'ship', name: 'Ship', emoji: '🚢', tier: 6 },
      'ship-steam': { id: 'steamship', name: 'Steamship', emoji: '💨', tier: 7 },
      'ship-war': { id: 'warship', name: 'Warship', emoji: '🚢', tier: 7 },
      'ship-submarine': { id: 'submarine', name: 'Submarine', emoji: '🚢', tier: 8 },
      'submarine-nuclear': { id: 'nuclear-sub', name: 'Nuclear Sub', emoji: '⚓', tier: 9 },
      'ship-cruise': { id: 'cruise-ship', name: 'Cruise Ship', emoji: '🚢', tier: 8 },
      'ship-container': { id: 'cargo-ship', name: 'Cargo Ship', emoji: '🚢', tier: 8 },
      'boat-speed': { id: 'speedboat', name: 'Speedboat', emoji: '🚤', tier: 7 },
      'boat-rescue': { id: 'lifeboat', name: 'Lifeboat', emoji: '⛵', tier: 7 },
      'boat-sail-wind': { id: 'yacht', name: 'Yacht', emoji: '🛥️', tier: 8 },
      'boat-paddle': { id: 'canoe', name: 'Canoe', emoji: '🛶', tier: 4 },
      'boat-row': { id: 'rowboat', name: 'Rowboat', emoji: '⛵', tier: 4 },
      'boat-ferry': { id: 'ferry', name: 'Ferry', emoji: '⛴️', tier: 6 },
      
      // 航空
      'bird-study': { id: 'aerodynamics', name: 'Aerodynamics', emoji: '✈️', tier: 6 },
      'aerodynamics-wing': { id: 'glider', name: 'Glider', emoji: '🪂', tier: 7 },
      'glider-engine': { id: 'airplane', name: 'Airplane', emoji: '✈️', tier: 8 },
      'airplane-jet': { id: 'jet', name: 'Jet', emoji: '✈️', tier: 9 },
      'jet-fast': { id: 'supersonic', name: 'Supersonic', emoji: '✈️', tier: 10 },
      'airplane-big': { id: 'airliner', name: 'Airliner', emoji: '✈️', tier: 9 },
      'airplane-war': { id: 'fighter-jet', name: 'Fighter Jet', emoji: '✈️', tier: 9 },
      'airplane-bomb': { id: 'bomber', name: 'Bomber', emoji: '✈️', tier: 9 },
      'airplane-cargo': { id: 'cargo-plane', name: 'Cargo Plane', emoji: '🚗', tier: 9 },
      'airplane-rotor': { id: 'helicopter', name: 'Helicopter', emoji: '🚁', tier: 8 },
      'helicopter-attack': { id: 'attack-helicopter', name: 'Attack Helicopter', emoji: '🚁', tier: 9 },
      'airplane-vertical': { id: 'vtol', name: 'Vtol', emoji: '✈️', tier: 10 },
      'hot-air-balloon': { id: 'balloon', name: 'Balloon', emoji: '🎈', tier: 6 },
      'balloon-gas': { id: 'airship', name: 'Airship', emoji: '🚢', tier: 7 },
      'airplane-drone': { id: 'drone', name: 'Drone', emoji: '🚁', tier: 9 },
      'drone-deliver': { id: 'delivery-drone', name: 'Delivery Drone', emoji: '🚚', tier: 10 },
      
      // 太空
      'rocket-science': { id: 'rocket', name: 'Rocket', emoji: '🚀', tier: 9 },
      'rocket-orbit': { id: 'satellite', name: 'Satellite', emoji: '🛰️', tier: 10 },
      'satellite-gps': { id: 'gps', name: 'GPS', emoji: '📡', tier: 10 },
      'satellite-communication': { id: 'comsat', name: 'Comsat', emoji: '📡', tier: 10 },
      'satellite-spy': { id: 'spy-satellite', name: 'Spy Satellite', emoji: '🛰️', tier: 10 },
      'rocket-capsule': { id: 'spacecraft', name: 'Spacecraft', emoji: '🚀', tier: 10 },
      'spacecraft-moon': { id: 'moon-landing', name: 'Moon Landing', emoji: '🌙', tier: 10 },
      'spacecraft-mars': { id: 'mars-mission', name: 'Mars Mission', emoji: '♂️', tier: 10 },
      'spacecraft-station': { id: 'space-station', name: 'Space Station', emoji: '🛰️', tier: 10 },
      'spacecraft-shuttle': { id: 'space-shuttle', name: 'Space Shuttle', emoji: '🚀', tier: 10 },
      'spacecraft-colony': { id: 'space-colony', name: 'Space Colony', emoji: '🪐', tier: 10 },
      'spacecraft-warp': { id: 'warp-drive', name: 'Warp Drive', emoji: '🚀', tier: 10 },
      
      // 电力革命
      'lightning-capture': { id: 'electricity', name: 'Electricity', emoji: '💡', tier: 6 },
      'electricity-store': { id: 'battery', name: 'Battery', emoji: '🔋', tier: 7 },
      'battery-rechargeable': { id: 'rechargeable-battery', name: 'Rechargeable Battery', emoji: '🦇', tier: 8 },
      'electricity-light': { id: 'light-bulb', name: 'Light Bulb', emoji: '💡', tier: 7 },
      'light-bulb-fluorescent': { id: 'fluorescent-lamp', name: 'Fluorescent Lamp', emoji: '💡', tier: 8 },
      'light-bulb-led': { id: 'led', name: 'LED', emoji: '💡', tier: 9 },
      'electricity-motor': { id: 'electric-motor', name: 'Electric Motor', emoji: '⚙️', tier: 7 },
      'electricity-heat': { id: 'electric-heater', name: 'Electric Heater', emoji: '🔥', tier: 7 },
      'electricity-cool': { id: 'air-conditioner', name: 'Air Conditioner', emoji: '🧴', tier: 8 },
      'electricity-cold': { id: 'refrigerator', name: 'Refrigerator', emoji: '🧊', tier: 8 },
      'electricity-cook': { id: 'electric-stove', name: 'Electric Stove', emoji: '🔥', tier: 8 },
      'electricity-wash': { id: 'washing-machine', name: 'Washing Machine', emoji: '🧺', tier: 8 },
      'electricity-clean': { id: 'vacuum-cleaner', name: 'Vacuum Cleaner', emoji: '🧹', tier: 8 },
      'electricity-fan': { id: 'electric-fan', name: 'Electric Fan', emoji: '💨', tier: 7 },
      'electricity-generate': { id: 'generator', name: 'Generator', emoji: '🐀', tier: 7 },
      'generator-water': { id: 'hydroelectric', name: 'Hydroelectric', emoji: '🌊', tier: 8 },
      'generator-wind': { id: 'wind-turbine', name: 'Wind Turbine', emoji: '💨', tier: 8 },
      'generator-solar': { id: 'solar-panel', name: 'Solar Panel', emoji: '🍳', tier: 8 },
      'generator-nuclear': { id: 'nuclear-power', name: 'Nuclear Power', emoji: '☢️', tier: 9 },
      'generator-fusion': { id: 'fusion-reactor', name: 'Fusion Reactor', emoji: '💡', tier: 10 },
      
      // 通信革命
      'electricity-sound': { id: 'telegraph', name: 'Telegraph', emoji: '📡', tier: 7 },
      'telegraph-voice': { id: 'telephone', name: 'Telephone', emoji: '☎️', tier: 8 },
      'telephone-mobile': { id: 'cellphone', name: 'Cellphone', emoji: '📱', tier: 9 },
      'cellphone-smart': { id: 'smartphone', name: 'Smartphone', emoji: '📱', tier: 10 },
      'electricity-wave': { id: 'radio', name: 'Radio', emoji: '📻', tier: 8 },
      'radio-broadcast': { id: 'radio-station', name: 'Radio Station', emoji: '📻', tier: 8 },
      'radio-tv': { id: 'television', name: 'Television', emoji: '📺', tier: 9 },
      'television-color': { id: 'color-tv', name: 'Color Tv', emoji: '📺', tier: 9 },
      'television-flat': { id: 'flat-screen', name: 'Flat Screen', emoji: '📺', tier: 10 },
      'television-smart': { id: 'smart-tv', name: 'Smart Tv', emoji: '📺', tier: 10 },
      'radio-wireless': { id: 'wifi', name: 'WiFi', emoji: '📡', tier: 10 },
      'radio-bluetooth': { id: 'bluetooth', name: 'Bluetooth', emoji: '📱', tier: 10 },
      
      // 计算机革命
      'electricity-calculation': { id: 'calculator', name: 'Calculator', emoji: '🔢', tier: 8 },
      'calculator-programmable': { id: 'computer', name: 'Computer', emoji: '💻', tier: 9 },
      'computer-personal': { id: 'pc', name: 'Pc', emoji: '💻', tier: 10 },
      'computer-portable': { id: 'laptop', name: 'Laptop', emoji: '💻', tier: 10 },
      'computer-tablet': { id: 'tablet', name: 'Tablet', emoji: '📱', tier: 10 },
      'computer-super': { id: 'supercomputer', name: 'Supercomputer', emoji: '🖥️', tier: 10 },
      'computer-quantum': { id: 'quantum-computer', name: 'Quantum Computer', emoji: '💻', tier: 10 },
      'computer-network': { id: 'network', name: 'Network', emoji: '🌐', tier: 10 },
      'network-global': { id: 'internet', name: 'Internet', emoji: '🌐', tier: 10 },
      'internet-web': { id: 'world-wide-web', name: 'World Wide Web', emoji: '🌐', tier: 10 },
      'internet-social': { id: 'social-media', name: 'Social Media', emoji: '📱', tier: 10 },
      'internet-shop': { id: 'e-commerce', name: 'E Commerce', emoji: '🛒', tier: 10 },
      'internet-search': { id: 'search-engine', name: 'Search Engine', emoji: '🔍', tier: 10 },
      'internet-video': { id: 'streaming', name: 'Streaming', emoji: '📺', tier: 10 },
      'internet-cloud': { id: 'cloud-computing', name: 'Cloud Computing', emoji: '☁️', tier: 10 },
      'internet-blockchain': { id: 'blockchain', name: 'Blockchain', emoji: '🔒', tier: 10 },
      'blockchain-currency': { id: 'cryptocurrency', name: 'Cryptocurrency', emoji: '💰', tier: 10 },
      
      // 软件
      'computer-program': { id: 'software', name: 'Software', emoji: '💾', tier: 9 },
      'software-system': { id: 'operating-system', name: 'Operating System', emoji: '🐀', tier: 10 },
      'software-game': { id: 'video-game', name: 'Video Game', emoji: '🎮', tier: 10 },
      'video-game-vr': { id: 'vr-game', name: 'VR Game', emoji: '🥽', tier: 10 },
      'software-ai': { id: 'ai', name: 'Ai', emoji: '🤖', tier: 10 },
      'ai-learn': { id: 'machine-learning', name: 'Machine Learning', emoji: '🧠', tier: 10 },
      'machine-learning-deep': { id: 'deep-learning', name: 'Deep Learning', emoji: '🧠', tier: 10 },
      'ai-neural': { id: 'neural-network', name: 'Neural Network', emoji: '🧬', tier: 10 },
      'ai-language': { id: 'nlp', name: 'Nlp', emoji: '💬', tier: 10 },
      'ai-vision': { id: 'computer-vision', name: 'Computer Vision', emoji: '💻', tier: 10 },
      'ai-general': { id: 'agi', name: 'Agi', emoji: '🧠', tier: 10 },
      'agi-super': { id: 'superintelligence', name: 'Superintelligence', emoji: '🧠', tier: 10 },
      'superintelligence-singularity': { id: 'singularity', name: 'Singularity', emoji: '⚫', tier: 10 },
      
      // 机器人
      'machine-autonomous': { id: 'robot', name: 'Robot', emoji: '🤖', tier: 9 },
      'robot-humanoid': { id: 'android', name: 'Android', emoji: '🤖', tier: 10 },
      'robot-industrial': { id: 'factory-robot', name: 'Factory Robot', emoji: '🏭', tier: 9 },
      'robot-medical': { id: 'surgical-robot', name: 'Surgical Robot', emoji: '🏥', tier: 10 },
      'robot-service': { id: 'service-robot', name: 'Service Robot', emoji: '🤖', tier: 10 },
      'robot-combat': { id: 'war-robot', name: 'War Robot', emoji: '🤖', tier: 10 },
      'robot-nano': { id: 'nanorobot', name: 'Nanorobot', emoji: '🔬', tier: 10 },
      'robot-swarm': { id: 'robot-swarm', name: 'Robot Swarm', emoji: '🤖', tier: 10 },
      'android-conscious': { id: 'sentient-ai', name: 'Sentient AI', emoji: '🧠', tier: 10 },
      
      // 生物科技
      'biology-technology': { id: 'biotechnology', name: 'Biotechnology', emoji: '🧬', tier: 9 },
      'biotechnology-gene': { id: 'genetic-engineering', name: 'Genetic Engineering', emoji: '💍', tier: 10 },
      'genetic-engineering-crispr': { id: 'crispr', name: 'CRISPR', emoji: '✂️', tier: 10 },
      'crispr-design': { id: 'designer-baby', name: 'Designer Baby', emoji: '👶', tier: 10 },
      'biotechnology-clone': { id: 'cloning', name: 'Cloning', emoji: '🐑', tier: 10 },
      'cloning-human': { id: 'human-clone', name: 'Human Clone', emoji: '👥', tier: 10 },
      'biotechnology-stem': { id: 'stem-cells', name: 'Stem Cells', emoji: '🔬', tier: 10 },
      'stem-cells-organ': { id: 'organ-growth', name: 'Organ Growth', emoji: '🫀', tier: 10 },
      'biotechnology-synthetic': { id: 'synthetic-biology', name: 'Synthetic Biology', emoji: '🧬', tier: 10 },
      'synthetic-biology-life': { id: 'artificial-life', name: 'Artificial Life', emoji: '🧫', tier: 10 },
      'human-machine': { id: 'cyborg', name: 'Cyborg', emoji: '🦾', tier: 10 },
      'cyborg-enhanced': { id: 'transhuman', name: 'Transhuman', emoji: '🦸', tier: 10 },
      'transhuman-digital': { id: 'mind-upload', name: 'Mind Upload', emoji: '🧠', tier: 10 },
      'mind-upload-virtual': { id: 'digital-immortality', name: 'Digital Immortality', emoji: '♾️', tier: 10 },
    };

    // ==================== 文化艺术 (150种) ====================
    const culture = {
      // 语言文字
      'human-communicate': { id: 'language', name: 'Language', emoji: '🗣️', tier: 10 },
      'language-symbol': { id: 'writing', name: 'Writing', emoji: '✍️', tier: 10 },
      'writing-book': { id: 'literature', name: 'Literature', emoji: '🐀', tier: 10 },
      'literature-poem': { id: 'poetry', name: 'Poetry', emoji: '📜', tier: 10 },
      'literature-story': { id: 'novel', name: 'Novel', emoji: '📚', tier: 10 },
      'literature-play': { id: 'drama', name: 'Drama', emoji: '🎭', tier: 10 },
      'writing-news': { id: 'journalism', name: 'Journalism', emoji: '📰', tier: 10 },
      'writing-many': { id: 'library', name: 'Library', emoji: '📚', tier: 10 },
      'library-knowledge': { id: 'encyclopedia', name: 'Encyclopedia', emoji: '📖', tier: 10 },
      'writing-print': { id: 'printing', name: 'Printing', emoji: '🖨️', tier: 9 },
      'printing-movable': { id: 'movable-type', name: 'Movable Type', emoji: '🖨️', tier: 10 },
      'printing-digital': { id: 'e-book', name: 'E Book', emoji: '📖', tier: 10 },
      
      // 音乐
      'sound-rhythm': { id: 'music', name: 'Music', emoji: '🎵', tier: 8 },
      'music-instrument': { id: 'musical-instrument', name: 'Musical Instrument', emoji: '🎸', tier: 9 },
      'instrument-string': { id: 'guitar', name: 'Guitar', emoji: '🎸', tier: 9 },
      'instrument-string-bow': { id: 'violin', name: 'Violin', emoji: '🎻', tier: 9 },
      'instrument-keyboard': { id: 'piano', name: 'Piano', emoji: '🎹', tier: 9 },
      'instrument-wind': { id: 'flute', name: 'Flute', emoji: '🎵', tier: 9 },
      'instrument-brass': { id: 'trumpet', name: 'Trumpet', emoji: '🎺', tier: 9 },
      'instrument-percussion': { id: 'drum', name: 'Drum', emoji: '🥁', tier: 9 },
      'music-many': { id: 'orchestra', name: 'Orchestra', emoji: '🎼', tier: 10 },
      'music-classical': { id: 'symphony', name: 'Symphony', emoji: '🎼', tier: 10 },
      'music-popular': { id: 'pop-music', name: 'Pop Music', emoji: '🎤', tier: 10 },
      'music-rock': { id: 'rock-music', name: 'Rock Music', emoji: '🎸', tier: 10 },
      'music-jazz': { id: 'jazz', name: 'Jazz', emoji: '🎷', tier: 10 },
      'music-electronic': { id: 'edm', name: 'Edm', emoji: '🎧', tier: 10 },
      'music-rap': { id: 'hip-hop', name: 'Hip Hop', emoji: '🎤', tier: 10 },
      'music-opera': { id: 'opera', name: 'Opera', emoji: '🎭', tier: 10 },
      'music-sing': { id: 'singing', name: 'Singing', emoji: '🎤', tier: 9 },
      'singing-group': { id: 'choir', name: 'Choir', emoji: '👥', tier: 10 },
      'music-record': { id: 'recording', name: 'Recording', emoji: '🎙️', tier: 10 },
      'recording-disc': { id: 'cd', name: 'CD', emoji: '💿', tier: 10 },
      'recording-digital': { id: 'mp3', name: 'MP3', emoji: '📱', tier: 10 },
      'music-concert': { id: 'concert', name: 'Concert', emoji: '🎶', tier: 10 },
      'concert-big': { id: 'festival', name: 'Festival', emoji: '🎪', tier: 10 },
      
      // 视觉艺术
      'human-create': { id: 'art', name: 'Art', emoji: '🎨', tier: 9 },
      'art-draw': { id: 'drawing', name: 'Drawing', emoji: '✏️', tier: 9 },
      'drawing-color': { id: 'painting', name: 'Painting', emoji: '🖼️', tier: 10 },
      'painting-famous': { id: 'masterpiece', name: 'Masterpiece', emoji: '👨‍🎨', tier: 10 },
      'art-sculpt': { id: 'sculpture', name: 'Sculpture', emoji: '🗿', tier: 9 },
      'sculpture-stone': { id: 'marble-statue', name: 'Marble Statue', emoji: '🗿', tier: 10 },
      'art-pottery': { id: 'ceramics', name: 'Ceramics', emoji: '🏺', tier: 9 },
      'ceramics-fine': { id: 'porcelain', name: 'Porcelain', emoji: '🏺', tier: 10 },
      'art-photo': { id: 'photography', name: 'Photography', emoji: '📷', tier: 10 },
      'photography-art': { id: 'art-photography', name: 'Art Photography', emoji: '📸', tier: 10 },
      'art-digital': { id: 'digital-art', name: 'Digital Art', emoji: '🖥️', tier: 10 },
      'digital-art-ai': { id: 'ai-art', name: 'AI Art', emoji: '🤖', tier: 10 },
      'art-graffiti': { id: 'graffiti', name: 'Graffiti', emoji: '🖍️', tier: 10 },
      'art-tattoo': { id: 'tattoo', name: 'Tattoo', emoji: '🖊️', tier: 10 },
      'art-fashion': { id: 'fashion', name: 'Fashion', emoji: '👗', tier: 10 },
      'fashion-design': { id: 'haute-couture', name: 'Haute Couture', emoji: '👗', tier: 10 },
      'art-architecture': { id: 'architecture', name: 'Architecture', emoji: '🏛️', tier: 10 },
      'architecture-ancient': { id: 'temple', name: 'Temple', emoji: '⛩️', tier: 10 },
      'architecture-modern': { id: 'skyscraper', name: 'Skyscraper', emoji: '🏙️', tier: 10 },
      'architecture-wonder': { id: 'wonder', name: 'Wonder', emoji: '🗼', tier: 10 },
      
      // 表演艺术
      'human-move': { id: 'dance', name: 'Dance', emoji: '💃', tier: 9 },
      'dance-classical': { id: 'ballet', name: 'Ballet', emoji: '🩰', tier: 10 },
      'dance-modern': { id: 'modern-dance', name: 'Modern Dance', emoji: '💃', tier: 10 },
      'dance-street': { id: 'hip-hop-dance', name: 'Hip Hop Dance', emoji: '🕺', tier: 10 },
      'dance-traditional': { id: 'folk-dance', name: 'Folk Dance', emoji: '💃', tier: 10 },
      'human-act': { id: 'acting', name: 'Acting', emoji: '🎭', tier: 9 },
      'acting-stage': { id: 'theater', name: 'Theater', emoji: '🎭', tier: 10 },
      'theater-musical': { id: 'musical', name: 'Musical', emoji: '🎭', tier: 10 },
      'acting-film': { id: 'cinema', name: 'Cinema', emoji: '🎬', tier: 10 },
      'cinema-silent': { id: 'silent-film', name: 'Silent Film', emoji: '🎥', tier: 10 },
      'cinema-sound': { id: 'talkie', name: 'Talkie', emoji: '🎬', tier: 10 },
      'cinema-3d': { id: '3d-movie', name: '3D Movie', emoji: '🎬', tier: 10 },
      'cinema-animation': { id: 'animation', name: 'Animation', emoji: '🎞️', tier: 10 },
      'animation-computer': { id: 'cgi', name: 'CGI', emoji: '🎞️', tier: 10 },
      'cinema-series': { id: 'tv-series', name: 'Tv Series', emoji: '📺', tier: 10 },
      'acting-comedy': { id: 'comedy', name: 'Comedy', emoji: '😂', tier: 10 },
      'acting-tragedy': { id: 'tragedy', name: 'Tragedy', emoji: '😢', tier: 10 },
      'human-circus': { id: 'circus', name: 'Circus', emoji: '🎪', tier: 10 },
      'circus-acrobat': { id: 'acrobatics', name: 'Acrobatics', emoji: '🦇', tier: 10 },
      'human-magic': { id: 'magic-show', name: 'Magic Show', emoji: '🎩', tier: 10 },
      
      // 娱乐
      'human-play': { id: 'game', name: 'Game', emoji: '🎲', tier: 9 },
      'game-board': { id: 'board-game', name: 'Board Game', emoji: '🎲', tier: 9 },
      'board-game-chess': { id: 'chess', name: 'Chess', emoji: '♟️', tier: 10 },
      'board-game-go': { id: 'go', name: 'Go', emoji: '⚫', tier: 10 },
      'game-card': { id: 'card-game', name: 'Card Game', emoji: '🚗', tier: 9 },
      'card-game-poker': { id: 'poker', name: 'Poker', emoji: '🃏', tier: 10 },
      'game-sport': { id: 'sports', name: 'Sports', emoji: '⚽', tier: 9 },
      'sports-ball': { id: 'football', name: 'Football', emoji: '🏈', tier: 10 },
      'sports-basket': { id: 'basketball', name: 'Basketball', emoji: '🏀', tier: 10 },
      'sports-bat': { id: 'baseball', name: 'Baseball', emoji: '⚾', tier: 10 },
      'sports-racket': { id: 'tennis', name: 'Tennis', emoji: '🎾', tier: 10 },
      'sports-table': { id: 'ping-pong', name: 'Ping Pong', emoji: '🏓', tier: 10 },
      'sports-net': { id: 'volleyball', name: 'Volleyball', emoji: '🏐', tier: 10 },
      'sports-ice': { id: 'ice-hockey', name: 'Ice Hockey', emoji: '🏒', tier: 10 },
      'sports-goal': { id: 'hockey', name: 'Hockey', emoji: '🏒', tier: 10 },
      'sports-oval': { id: 'rugby', name: 'Rugby', emoji: '🏉', tier: 10 },
      'sports-water': { id: 'swimming', name: 'Swimming', emoji: '🏊', tier: 10 },
      'sports-track': { id: 'athletics', name: 'Athletics', emoji: '🏃', tier: 10 },
      'sports-strength': { id: 'weightlifting', name: 'Weightlifting', emoji: '🏋️', tier: 10 },
      'sports-fight': { id: 'boxing', name: 'Boxing', emoji: '🥊', tier: 10 },
      'sports-martial': { id: 'martial-arts', name: 'Martial Arts', emoji: '🥋', tier: 10 },
      'sports-winter': { id: 'skiing', name: 'Skiing', emoji: '⛷️', tier: 10 },
      'sports-board': { id: 'skateboarding', name: 'Skateboarding', emoji: '🛹', tier: 10 },
      'sports-extreme': { id: 'extreme-sports', name: 'Extreme Sports', emoji: '🪂', tier: 10 },
      'sports-compete': { id: 'competition', name: 'Competition', emoji: '🏆', tier: 10 },
      'competition-world': { id: 'olympics', name: 'Olympics', emoji: '🏅', tier: 10 },
      'competition-football': { id: 'world-cup', name: 'World Cup', emoji: '🏆', tier: 10 },
      
      // 饮食文化
      'food-cook': { id: 'cooking', name: 'Cooking', emoji: '👨‍🍳', tier: 9 },
      'cooking-art': { id: 'gastronomy', name: 'Gastronomy', emoji: '🍽️', tier: 10 },
      'cooking-style': { id: 'cuisine', name: 'Cuisine', emoji: '🍜', tier: 10 },
      'cuisine-chinese': { id: 'chinese-food', name: 'Chinese Food', emoji: '🥡', tier: 10 },
      'cuisine-japanese': { id: 'japanese-food', name: 'Japanese Food', emoji: '🍱', tier: 10 },
      'cuisine-italian': { id: 'italian-food', name: 'Italian Food', emoji: '🍝', tier: 10 },
      'cuisine-french': { id: 'french-food', name: 'French Food', emoji: '🥐', tier: 10 },
      'cuisine-indian': { id: 'indian-food', name: 'Indian Food', emoji: '🍛', tier: 10 },
      'cuisine-mexican': { id: 'mexican-food', name: 'Mexican Food', emoji: '🌮', tier: 10 },
      'cooking-place': { id: 'restaurant', name: 'Restaurant', emoji: '🍽️', tier: 10 },
      'restaurant-fast': { id: 'fast-food', name: 'Fast Food', emoji: '🍔', tier: 10 },
      'restaurant-fine': { id: 'fine-dining', name: 'Fine Dining', emoji: '🍽️', tier: 10 },
      'restaurant-star': { id: 'michelin-star', name: 'Michelin Star', emoji: '⭐', tier: 10 },
      'cooking-sweet': { id: 'dessert', name: 'Dessert', emoji: '🍰', tier: 10 },
      'dessert-ice': { id: 'ice-cream', name: 'Ice Cream', emoji: '🍦', tier: 10 },
      'dessert-chocolate': { id: 'chocolate', name: 'Chocolate', emoji: '🍫', tier: 10 },
      'cooking-bread': { id: 'bakery', name: 'Bakery', emoji: '🥖', tier: 10 },
      'bakery-cake': { id: 'cake', name: 'Cake', emoji: '🍰', tier: 10 },
      'cooking-drink': { id: 'beverage', name: 'Beverage', emoji: '🥤', tier: 9 },
      'beverage-coffee': { id: 'coffee', name: 'Coffee', emoji: '☕', tier: 10 },
      'beverage-tea': { id: 'tea', name: 'Tea', emoji: '🍵', tier: 10 },
      'beverage-alcohol': { id: 'wine', name: 'Wine', emoji: '🍷', tier: 10 },
      'wine-beer': { id: 'beer', name: 'Beer', emoji: '🍺', tier: 10 },
      'wine-spirit': { id: 'liquor', name: 'Liquor', emoji: '🥃', tier: 10 },
      
      // 节日庆典
      'human-celebrate': { id: 'celebration', name: 'Celebration', emoji: '🐀', tier: 10 },
      'celebration-annual': { id: 'holiday', name: 'Holiday', emoji: '🎊', tier: 10 },
      'holiday-new-year': { id: 'new-year', name: 'New Year', emoji: '🎆', tier: 10 },
      'holiday-spring': { id: 'spring-festival', name: 'Spring Festival', emoji: '💍', tier: 10 },
      'holiday-love': { id: 'valentine', name: 'Valentine', emoji: '💝', tier: 10 },
      'holiday-egg': { id: 'easter', name: 'Easter', emoji: '🥚', tier: 10 },
      'holiday-spooky': { id: 'halloween', name: 'Halloween', emoji: '🎃', tier: 10 },
      'holiday-thanks': { id: 'thanksgiving', name: 'Thanksgiving', emoji: '🦃', tier: 10 },
      'holiday-christmas': { id: 'christmas', name: 'Christmas', emoji: '🎄', tier: 10 },
      'celebration-firework': { id: 'fireworks', name: 'Fireworks', emoji: '🔥', tier: 10 },
      'celebration-parade': { id: 'parade', name: 'Parade', emoji: '🎪', tier: 10 },
      'celebration-party': { id: 'party', name: 'Party', emoji: '🎉', tier: 10 },
      'celebration-wedding': { id: 'wedding', name: 'Wedding', emoji: '💒', tier: 10 },
      'celebration-birth': { id: 'birthday', name: 'Birthday', emoji: '🎂', tier: 10 },
      'celebration-graduation': { id: 'graduation', name: 'Graduation', emoji: '🎓', tier: 10 },
    };

    // ==================== 抽象概念 (120种) ====================
    const abstractConcepts = {
      // 情感
      'human-feel': { id: 'emotion', name: 'Emotion', emoji: '😊', tier: 10 },
      'emotion-positive': { id: 'happiness', name: 'Happiness', emoji: '😊', tier: 10 },
      'happiness-intense': { id: 'joy', name: 'Joy', emoji: '😄', tier: 10 },
      'emotion-negative': { id: 'sadness', name: 'Sadness', emoji: '😢', tier: 10 },
      'sadness-deep': { id: 'sorrow', name: 'Sorrow', emoji: '😭', tier: 10 },
      'emotion-hot': { id: 'anger', name: 'Anger', emoji: '😡', tier: 10 },
      'anger-intense': { id: 'rage', name: 'Rage', emoji: '😤', tier: 10 },
      'emotion-nervous': { id: 'fear', name: 'Fear', emoji: '🤔', tier: 10 },
      'fear-extreme': { id: 'terror', name: 'Terror', emoji: '😱', tier: 10 },
      'emotion-love': { id: 'love', name: 'Love', emoji: '❤️', tier: 10 },
      'love-romantic': { id: 'romance', name: 'Romance', emoji: '💕', tier: 10 },
      'love-family': { id: 'kinship', name: 'Kinship', emoji: '🚢', tier: 10 },
      'love-friend': { id: 'friendship', name: 'Friendship', emoji: '🚢', tier: 10 },
      'emotion-opposite': { id: 'hate', name: 'Hate', emoji: '💬', tier: 10 },
      'emotion-surprise': { id: 'surprise', name: 'Surprise', emoji: '😮', tier: 10 },
      'emotion-disgust': { id: 'disgust', name: 'Disgust', emoji: '🤢', tier: 10 },
      'emotion-shy': { id: 'embarrassment', name: 'Embarrassment', emoji: '😳', tier: 10 },
      'emotion-envy': { id: 'jealousy', name: 'Jealousy', emoji: '😒', tier: 10 },
      'emotion-proud': { id: 'pride', name: 'Pride', emoji: '😤', tier: 10 },
      'emotion-regret': { id: 'guilt', name: 'Guilt', emoji: '😔', tier: 10 },
      'emotion-lonely': { id: 'loneliness', name: 'Loneliness', emoji: '😞', tier: 10 },
      'emotion-hope': { id: 'hope', name: 'Hope', emoji: '💭', tier: 10 },
      'hope-lost': { id: 'despair', name: 'Despair', emoji: '💡', tier: 10 },
      'emotion-calm': { id: 'peace', name: 'Peace', emoji: '☮️', tier: 10 },
      'peace-spiritual': { id: 'serenity', name: 'Serenity', emoji: '🧘', tier: 10 },
      
      // 性格特质
      'human-personality': { id: 'personality', name: 'Personality', emoji: '🎭', tier: 10 },
      'personality-brave': { id: 'courage', name: 'Courage', emoji: '🧠', tier: 10 },
      'personality-kind': { id: 'kindness', name: 'Kindness', emoji: '💝', tier: 10 },
      'personality-wise': { id: 'wisdom', name: 'Wisdom', emoji: '🦉', tier: 10 },
      'wisdom-old': { id: 'sage', name: 'Sage', emoji: '🌾', tier: 10 },
      'personality-honest': { id: 'honesty', name: 'Honesty', emoji: '🤝', tier: 10 },
      'personality-loyal': { id: 'loyalty', name: 'Loyalty', emoji: '🐕', tier: 10 },
      'personality-patient': { id: 'patience', name: 'Patience', emoji: '⏳', tier: 10 },
      'personality-generous': { id: 'generosity', name: 'Generosity', emoji: '🎁', tier: 10 },
      'personality-humble': { id: 'humility', name: 'Humility', emoji: '🙇', tier: 10 },
      'personality-greedy': { id: 'greed', name: 'Greed', emoji: '💰', tier: 10 },
      'personality-lazy': { id: 'laziness', name: 'Laziness', emoji: '😴', tier: 10 },
      'personality-arrogant': { id: 'arrogance', name: 'Arrogance', emoji: '😤', tier: 10 },
      'personality-selfish': { id: 'selfishness', name: 'Selfishness', emoji: '🐟', tier: 10 },
      
      // 道德伦理
      'human-moral': { id: 'morality', name: 'Morality', emoji: '⚖️', tier: 10 },
      'morality-good': { id: 'good', name: 'Good', emoji: '😇', tier: 10 },
      'morality-evil': { id: 'evil', name: 'Evil', emoji: '😈', tier: 10 },
      'morality-right': { id: 'justice', name: 'Justice', emoji: '🧊', tier: 10 },
      'morality-wrong': { id: 'injustice', name: 'Injustice', emoji: '🧊', tier: 10 },
      'morality-truth': { id: 'truth', name: 'Truth', emoji: '🤔', tier: 10 },
      'morality-lie': { id: 'deception', name: 'Deception', emoji: '🤥', tier: 10 },
      'morality-duty': { id: 'duty', name: 'Duty', emoji: '📋', tier: 10 },
      'morality-freedom': { id: 'freedom', name: 'Freedom', emoji: '🕊️', tier: 10 },
      'freedom-fight': { id: 'liberation', name: 'Liberation', emoji: '🐀', tier: 10 },
      'morality-equality': { id: 'equality', name: 'Equality', emoji: '⚖️', tier: 10 },
      'morality-fairness': { id: 'fairness', name: 'Fairness', emoji: '⚖️', tier: 10 },
      
      // 哲学概念
      'human-think': { id: 'philosophy', name: 'Philosophy', emoji: '🤔', tier: 10 },
      'philosophy-exist': { id: 'existence', name: 'Existence', emoji: '🧠', tier: 10 },
      'existence-meaning': { id: 'meaning', name: 'Meaning', emoji: '💡', tier: 10 },
      'philosophy-reality': { id: 'reality', name: 'Reality', emoji: '🤔', tier: 10 },
      'reality-illusion': { id: 'illusion', name: 'Illusion', emoji: '🌌', tier: 10 },
      'philosophy-time': { id: 'time', name: 'Time', emoji: '⏰', tier: 10 },
      'time-past': { id: 'past', name: 'Past', emoji: '⏮️', tier: 10 },
      'time-now': { id: 'present', name: 'Present', emoji: '⏸️', tier: 10 },
      'time-future': { id: 'future', name: 'Future', emoji: '⏭️', tier: 10 },
      'time-forever': { id: 'eternity', name: 'Eternity', emoji: '♾️', tier: 10 },
      'philosophy-space': { id: 'space', name: 'Space', emoji: '🌠', tier: 10 },
      'philosophy-consciousness': { id: 'consciousness', name: 'Consciousness', emoji: '🧘', tier: 10 },
      'consciousness-self': { id: 'self-awareness', name: 'Self Awareness', emoji: '🪞', tier: 10 },
      'philosophy-soul': { id: 'soul', name: 'Soul', emoji: '💠', tier: 10 },
      'soul-body': { id: 'mind-body', name: 'Mind Body', emoji: '🧘', tier: 10 },
      'philosophy-knowledge': { id: 'knowledge', name: 'Knowledge', emoji: '📖', tier: 10 },
      'knowledge-belief': { id: 'belief', name: 'Belief', emoji: '🙏', tier: 10 },
      'belief-doubt': { id: 'doubt', name: 'Doubt', emoji: '💬', tier: 10 },
      'philosophy-logic': { id: 'logic', name: 'Logic', emoji: '🗨️', tier: 10 },
      'philosophy-paradox': { id: 'paradox', name: 'Paradox', emoji: '♾️', tier: 10 },
      
      // 宗教精神
      'human-believe': { id: 'religion', name: 'Religion', emoji: '🛐', tier: 10 },
      'religion-god': { id: 'deity', name: 'Deity', emoji: '👼', tier: 10 },
      'deity-many': { id: 'pantheon', name: 'Pantheon', emoji: '🏛️', tier: 10 },
      'religion-worship': { id: 'worship', name: 'Worship', emoji: '🚢', tier: 10 },
      'worship-place': { id: 'temple', name: 'Temple', emoji: '⛩️', tier: 10 },
      'temple-christian': { id: 'church', name: 'Church', emoji: '⛪', tier: 10 },
      'temple-islam': { id: 'mosque', name: 'Mosque', emoji: '🕌', tier: 10 },
      'temple-buddhist': { id: 'pagoda', name: 'Pagoda', emoji: '🏯', tier: 10 },
      'religion-holy': { id: 'sacred', name: 'Sacred', emoji: '✴️', tier: 10 },
      'religion-spirit': { id: 'spirituality', name: 'Spirituality', emoji: '🕉️', tier: 10 },
      'spirituality-enlighten': { id: 'enlightenment', name: 'Enlightenment', emoji: '☀️', tier: 10 },
      'enlightenment-buddha': { id: 'nirvana', name: 'Nirvana', emoji: '🧘', tier: 10 },
      'religion-prayer': { id: 'prayer', name: 'Prayer', emoji: '🙏', tier: 10 },
      'religion-meditation': { id: 'meditation', name: 'Meditation', emoji: '🧘', tier: 10 },
      'meditation-zen': { id: 'zen', name: 'Zen', emoji: '🧘', tier: 10 },
      'religion-ritual': { id: 'ritual', name: 'Ritual', emoji: '🕯️', tier: 10 },
      'religion-miracle': { id: 'miracle', name: 'Miracle', emoji: '🔯', tier: 10 },
      'religion-faith': { id: 'faith', name: 'Faith', emoji: '🗨️', tier: 10 },
      'religion-sin': { id: 'sin', name: 'Sin', emoji: '😈', tier: 10 },
      'sin-forgive': { id: 'redemption', name: 'Redemption', emoji: '😇', tier: 10 },
      'religion-afterlife': { id: 'afterlife', name: 'Afterlife', emoji: '👼', tier: 10 },
      'afterlife-good': { id: 'heaven', name: 'Heaven', emoji: '☁️', tier: 10 },
      'afterlife-bad': { id: 'hell', name: 'Hell', emoji: '🔥', tier: 10 },
      'afterlife-rebirth': { id: 'reincarnation', name: 'Reincarnation', emoji: '🚗', tier: 10 },
      
      // 社会概念
      'human-group': { id: 'society', name: 'Society', emoji: '👥', tier: 10 },
      'society-rule': { id: 'law', name: 'Law', emoji: '⚖️', tier: 10 },
      'law-enforce': { id: 'police', name: 'Police', emoji: '🧊', tier: 10 },
      'law-break': { id: 'crime', name: 'Crime', emoji: '🔫', tier: 10 },
      'crime-punish': { id: 'punishment', name: 'Punishment', emoji: '⛓️', tier: 10 },
      'society-govern': { id: 'government', name: 'Government', emoji: '🏛️', tier: 10 },
      'government-king': { id: 'monarchy', name: 'Monarchy', emoji: '👑', tier: 10 },
      'government-people': { id: 'democracy', name: 'Democracy', emoji: '🗳️', tier: 10 },
      'government-dictator': { id: 'dictatorship', name: 'Dictatorship', emoji: '🚢', tier: 10 },
      'society-economy': { id: 'economy', name: 'Economy', emoji: '💰', tier: 10 },
      'economy-money': { id: 'currency', name: 'Currency', emoji: '💵', tier: 10 },
      'economy-trade': { id: 'commerce', name: 'Commerce', emoji: '🏪', tier: 10 },
      'commerce-market': { id: 'market', name: 'Market', emoji: '🏪', tier: 10 },
      'economy-capitalism': { id: 'capitalism', name: 'Capitalism', emoji: '💼', tier: 10 },
      'economy-communism': { id: 'communism', name: 'Communism', emoji: '⚒️', tier: 10 },
      'society-class': { id: 'social-class', name: 'Social Class', emoji: '👥', tier: 10 },
      'society-poor': { id: 'poverty', name: 'Poverty', emoji: '🪙', tier: 10 },
      'society-rich': { id: 'wealth', name: 'Wealth', emoji: '💰', tier: 10 },
      'wealth-extreme': { id: 'billionaire', name: 'Billionaire', emoji: '🦁', tier: 10 },
      'society-power': { id: 'power', name: 'Power', emoji: '🔋', tier: 10 },
      'power-corrupt': { id: 'corruption', name: 'Corruption', emoji: '💸', tier: 10 },
      'society-war': { id: 'war', name: 'War', emoji: '⚔️', tier: 10 },
      'war-end': { id: 'peace-treaty', name: 'Peace Treaty', emoji: '☮️', tier: 10 },
      'society-revolution': { id: 'revolution', name: 'Revolution', emoji: '✊', tier: 10 },
      
      // 科学概念
      'human-study': { id: 'science', name: 'Science', emoji: '🔬', tier: 10 },
      'science-method': { id: 'scientific-method', name: 'Scientific Method', emoji: '📊', tier: 10 },
      'science-theory': { id: 'theory', name: 'Theory', emoji: '📚', tier: 10 },
      'theory-prove': { id: 'proof', name: 'Proof', emoji: '✅', tier: 10 },
      'science-experiment': { id: 'experiment', name: 'Experiment', emoji: '🧪', tier: 10 },
      'science-discover': { id: 'discovery', name: 'Discovery', emoji: '💡', tier: 10 },
      'science-invent': { id: 'invention', name: 'Invention', emoji: '⚙️', tier: 10 },
      'science-evolution': { id: 'evolution', name: 'Evolution', emoji: '🧬', tier: 10 },
      'evolution-natural': { id: 'natural-selection', name: 'Natural Selection', emoji: '🍃', tier: 10 },
      'science-gravity': { id: 'gravity', name: 'Gravity', emoji: '🍎', tier: 10 },
      'science-relativity': { id: 'relativity', name: 'Relativity', emoji: '⚛️', tier: 10 },
      'science-quantum': { id: 'quantum-mechanics', name: 'Quantum Mechanics', emoji: '⚛️', tier: 10 },
      'quantum-superposition': { id: 'superposition', name: 'Superposition', emoji: '🔄', tier: 10 },
      'quantum-entanglement': { id: 'entanglement', name: 'Entanglement', emoji: '🔗', tier: 10 },
      'science-string': { id: 'string-theory', name: 'String Theory', emoji: '💍', tier: 10 },
      'science-multiverse': { id: 'multiverse', name: 'Multiverse', emoji: '🌟', tier: 10 },
    };

    // ==================== 神话与传说 (150种) ====================
    const mythology = {
      // 西方神话
      'mythology-greek': { id: 'greek-mythology', name: 'Greek Mythology', emoji: '🏛️', tier: 8 },
      'greek-mythology-zeus': { id: 'zeus', name: 'Zeus', emoji: '🔋', tier: 9 },
      'greek-mythology-poseidon': { id: 'poseidon', name: 'Poseidon', emoji: '🔱', tier: 9 },
      'greek-mythology-hades': { id: 'hades', name: 'Hades', emoji: '💀', tier: 9 },
      'greek-mythology-athena': { id: 'athena', name: 'Athena', emoji: '🦉', tier: 9 },
      'greek-mythology-ares': { id: 'ares', name: 'Ares', emoji: '⚔️', tier: 9 },
      'greek-mythology-apollo': { id: 'apollo', name: 'Apollo', emoji: '☀️', tier: 9 },
      'greek-mythology-artemis': { id: 'artemis', name: 'Artemis', emoji: '🏹', tier: 9 },
      'greek-mythology-aphrodite': { id: 'aphrodite', name: 'Aphrodite', emoji: '💕', tier: 9 },
      'greek-mythology-hermes': { id: 'hermes', name: 'Hermes', emoji: '👟', tier: 9 },
      'greek-mythology-hero': { id: 'hercules', name: 'Hercules', emoji: '💪', tier: 9 },
      'greek-mythology-medusa': { id: 'medusa', name: 'Medusa', emoji: '🐍', tier: 9 },
      'greek-mythology-minotaur': { id: 'minotaur', name: 'Minotaur', emoji: '🐂', tier: 9 },
      'greek-mythology-pegasus': { id: 'pegasus', name: 'Pegasus', emoji: '🦄', tier: 9 },
      'greek-mythology-cerberus': { id: 'cerberus', name: 'Cerberus', emoji: '🐕', tier: 9 },
      'greek-mythology-hydra': { id: 'hydra', name: 'Hydra', emoji: '🐲', tier: 9 },
      'greek-mythology-titan': { id: 'titan', name: 'Titan', emoji: '⛰️', tier: 9 },
      'greek-mythology-cyclops': { id: 'cyclops', name: 'Cyclops', emoji: '👁️', tier: 9 },
      
      // 北欧神话
      'mythology-norse': { id: 'norse-mythology', name: 'Norse Mythology', emoji: '⚡', tier: 8 },
      'norse-mythology-odin': { id: 'odin', name: 'Odin', emoji: '👴', tier: 9 },
      'norse-mythology-thor': { id: 'thor', name: 'Thor', emoji: '🔨', tier: 9 },
      'norse-mythology-loki': { id: 'loki', name: 'Loki', emoji: '😈', tier: 9 },
      'norse-mythology-fenrir': { id: 'fenrir', name: 'Fenrir', emoji: '🐺', tier: 9 },
      'norse-mythology-jormungandr': { id: 'jormungandr', name: 'Jormungandr', emoji: '🐉', tier: 9 },
      'norse-mythology-valkyrie': { id: 'valkyrie', name: 'Valkyrie', emoji: '⚔️', tier: 9 },
      'norse-mythology-valhalla': { id: 'valhalla', name: 'Valhalla', emoji: '🏰', tier: 9 },
      'norse-mythology-ragnarok': { id: 'ragnarok', name: 'Ragnarok', emoji: '🔥', tier: 10 },
      'norse-mythology-yggdrasil': { id: 'yggdrasil', name: 'Yggdrasil', emoji: '🌳', tier: 9 },
      'norse-mythology-dwarf': { id: 'dwarf', name: 'Dwarf', emoji: '🧔', tier: 8 },
      'norse-mythology-elf': { id: 'elf', name: 'Elf', emoji: '🧝', tier: 8 },
      
      // 中国神话
      'mythology-chinese': { id: 'chinese-mythology', name: 'Chinese Mythology', emoji: '🐉', tier: 8 },
      'chinese-mythology-dragon': { id: 'dragon', name: 'Dragon', emoji: '🐉', tier: 9 },
      'dragon-king': { id: 'dragon-king', name: 'Dragon King', emoji: '👑', tier: 10 },
      'chinese-mythology-phoenix': { id: 'fenghuang', name: 'Fenghuang', emoji: '🦅', tier: 9 },
      'chinese-mythology-qilin': { id: 'qilin', name: 'Qilin', emoji: '🦄', tier: 9 },
      'chinese-mythology-nuwa': { id: 'nuwa', name: 'Nuwa', emoji: '👩', tier: 9 },
      'chinese-mythology-fuxi': { id: 'fuxi', name: 'Fuxi', emoji: '👨', tier: 9 },
      'chinese-mythology-pangu': { id: 'pangu', name: 'Pangu', emoji: '🍳', tier: 9 },
      'chinese-mythology-houyi': { id: 'houyi', name: 'Houyi', emoji: '🏹', tier: 9 },
      'chinese-mythology-chang-e': { id: 'chang-e', name: 'Chang E', emoji: '🌙', tier: 9 },
      'chinese-mythology-monkey-king': { id: 'sun-wukong', name: 'Sun Wukong', emoji: '☀️', tier: 10 },
      'chinese-mythology-jade-emperor': { id: 'jade-emperor', name: 'Jade Emperor', emoji: '👑', tier: 10 },
      'chinese-mythology-nezha': { id: 'nezha', name: 'Nezha', emoji: '🔥', tier: 9 },
      'chinese-mythology-erlang': { id: 'erlang-shen', name: 'Erlang Shen', emoji: '👁️', tier: 9 },
      'chinese-mythology-white-snake': { id: 'bai-suzhen', name: 'Bai Suzhen', emoji: '🐍', tier: 9 },
      
      // 日本神话
      'mythology-japanese': { id: 'japanese-mythology', name: 'Japanese Mythology', emoji: '⛩️', tier: 8 },
      'japanese-mythology-amaterasu': { id: 'amaterasu', name: 'Amaterasu', emoji: '🧘', tier: 9 },
      'japanese-mythology-susanoo': { id: 'susanoo', name: 'Susanoo', emoji: '⛈️', tier: 9 },
      'japanese-mythology-tsukuyomi': { id: 'tsukuyomi', name: 'Tsukuyomi', emoji: '🌙', tier: 9 },
      'japanese-mythology-kitsune': { id: 'kitsune', name: 'Kitsune', emoji: '☀️', tier: 9 },
      'japanese-mythology-tanuki': { id: 'tanuki', name: 'Tanuki', emoji: '🦝', tier: 8 },
      'japanese-mythology-tengu': { id: 'tengu', name: 'Tengu', emoji: '👺', tier: 9 },
      'japanese-mythology-oni': { id: 'oni', name: 'Oni', emoji: '👹', tier: 9 },
      'japanese-mythology-yokai': { id: 'yokai', name: 'Yokai', emoji: '👻', tier: 8 },
      'japanese-mythology-kappa': { id: 'kappa', name: 'Kappa', emoji: '🐢', tier: 8 },
      'japanese-mythology-dragon': { id: 'ryujin', name: 'Ryujin', emoji: '🐉', tier: 9 },
      
      // 埃及神话
      'mythology-egyptian': { id: 'egyptian-mythology', name: 'Egyptian Mythology', emoji: '🏜️', tier: 8 },
      'egyptian-mythology-ra': { id: 'ra', name: 'Ra', emoji: '☀️', tier: 9 },
      'egyptian-mythology-osiris': { id: 'osiris', name: 'Osiris', emoji: '👑', tier: 9 },
      'egyptian-mythology-isis': { id: 'isis', name: 'Isis', emoji: '👸', tier: 9 },
      'egyptian-mythology-horus': { id: 'horus', name: 'Horus', emoji: '🦅', tier: 9 },
      'egyptian-mythology-anubis': { id: 'anubis', name: 'Anubis', emoji: '🐺', tier: 9 },
      'egyptian-mythology-thoth': { id: 'thoth', name: 'Thoth', emoji: '📚', tier: 9 },
      'egyptian-mythology-bastet': { id: 'bastet', name: 'Bastet', emoji: '🐱', tier: 9 },
      'egyptian-mythology-set': { id: 'set', name: 'Set', emoji: '🦎', tier: 9 },
      'egyptian-mythology-sphinx': { id: 'sphinx', name: 'Sphinx', emoji: '🗿', tier: 9 },
      'egyptian-mythology-mummy': { id: 'mummy', name: 'Mummy', emoji: '🧟', tier: 8 },
      'egyptian-mythology-pyramid': { id: 'pyramid', name: 'Pyramid', emoji: '🔺', tier: 9 },
      
      // 凯尔特神话
      'mythology-celtic': { id: 'celtic-mythology', name: 'Celtic Mythology', emoji: '🍀', tier: 8 },
      'celtic-mythology-leprechaun': { id: 'leprechaun', name: 'Leprechaun', emoji: '🧚', tier: 8 },
      'celtic-mythology-banshee': { id: 'banshee', name: 'Banshee', emoji: '👻', tier: 9 },
      'celtic-mythology-druid': { id: 'druid', name: 'Druid', emoji: '🧙', tier: 9 },
      
      // 印度神话
      'mythology-hindu': { id: 'hindu-mythology', name: 'Hindu Mythology', emoji: '🕉️', tier: 8 },
      'hindu-mythology-brahma': { id: 'brahma', name: 'Brahma', emoji: '👴', tier: 9 },
      'hindu-mythology-vishnu': { id: 'vishnu', name: 'Vishnu', emoji: '🦚', tier: 9 },
      'hindu-mythology-shiva': { id: 'shiva', name: 'Shiva', emoji: '💀', tier: 9 },
      'hindu-mythology-krishna': { id: 'krishna', name: 'Krishna', emoji: '🪈', tier: 9 },
      'hindu-mythology-rama': { id: 'rama', name: 'Rama', emoji: '🏹', tier: 9 },
      'hindu-mythology-hanuman': { id: 'hanuman', name: 'Hanuman', emoji: '🐒', tier: 9 },
      'hindu-mythology-garuda': { id: 'garuda', name: 'Garuda', emoji: '🦅', tier: 9 },
      'hindu-mythology-naga': { id: 'naga', name: 'Naga', emoji: '🐍', tier: 9 },
      
      // 通用神话生物
      'mythology-vampire': { id: 'vampire', name: 'Vampire', emoji: '🧛', tier: 8 },
      'vampire-dracula': { id: 'dracula', name: 'Dracula', emoji: '🧛', tier: 9 },
      'mythology-werewolf': { id: 'werewolf', name: 'Werewolf', emoji: '🐺', tier: 8 },
      'mythology-zombie': { id: 'zombie', name: 'Zombie', emoji: '🧟', tier: 8 },
      'mythology-ghost': { id: 'ghost', name: 'Ghost', emoji: '👻', tier: 8 },
      'ghost-poltergeist': { id: 'poltergeist', name: 'Poltergeist', emoji: '👻', tier: 9 },
      'mythology-demon': { id: 'demon', name: 'Demon', emoji: '😈', tier: 8 },
      'demon-satan': { id: 'satan', name: 'Satan', emoji: '😈', tier: 10 },
      'demon-lucifer': { id: 'lucifer', name: 'Lucifer', emoji: '😇', tier: 10 },
      'mythology-angel': { id: 'angel', name: 'Angel', emoji: '😇', tier: 8 },
      'angel-archangel': { id: 'archangel', name: 'Archangel', emoji: '😇', tier: 9 },
      'mythology-fairy': { id: 'fairy', name: 'Fairy', emoji: '🧚', tier: 8 },
      'fairy-queen': { id: 'fairy-queen', name: 'Fairy Queen', emoji: '👸', tier: 9 },
      'mythology-witch': { id: 'witch', name: 'Witch', emoji: '🧙‍♀️', tier: 8 },
      'witch-coven': { id: 'coven', name: 'Coven', emoji: '🔮', tier: 9 },
      'mythology-wizard': { id: 'wizard', name: 'Wizard', emoji: '🧙', tier: 8 },
      'wizard-archmage': { id: 'archmage', name: 'Archmage', emoji: '🧙', tier: 10 },
      'mythology-golem': { id: 'golem', name: 'Golem', emoji: '🗿', tier: 8 },
      'mythology-djinn': { id: 'djinn', name: 'Djinn', emoji: '🧞', tier: 9 },
      'djinn-lamp': { id: 'magic-lamp', name: 'Magic Lamp', emoji: '🪔', tier: 9 },
      'mythology-troll': { id: 'troll', name: 'Troll', emoji: '👹', tier: 8 },
      'mythology-ogre': { id: 'ogre', name: 'Ogre', emoji: '👺', tier: 8 },
      'mythology-goblin': { id: 'goblin', name: 'Goblin', emoji: '👺', tier: 7 },
      'mythology-orc': { id: 'orc', name: 'Orc', emoji: '👹', tier: 8 },
      'mythology-giant': { id: 'giant', name: 'Giant', emoji: '🗿', tier: 8 },
      'giant-frost': { id: 'frost-giant', name: 'Frost Giant', emoji: '❄️', tier: 9 },
      'giant-fire': { id: 'fire-giant', name: 'Fire Giant', emoji: '🔥', tier: 9 },
      'mythology-mermaid': { id: 'mermaid', name: 'Mermaid', emoji: '🧜‍♀️', tier: 8 },
      'mermaid-siren': { id: 'siren', name: 'Siren', emoji: '🧜', tier: 9 },
      'mythology-centaur': { id: 'centaur', name: 'Centaur', emoji: '🏹', tier: 8 },
      'mythology-satyr': { id: 'satyr', name: 'Satyr', emoji: '🎵', tier: 8 },
      'mythology-chimera': { id: 'chimera', name: 'Chimera', emoji: '🦁', tier: 9 },
      'mythology-griffin': { id: 'griffin', name: 'Griffin', emoji: '🦅', tier: 9 },
      'mythology-manticore': { id: 'manticore', name: 'Manticore', emoji: '🦁', tier: 9 },
      'mythology-cockatrice': { id: 'cockatrice', name: 'Cockatrice', emoji: '🧊', tier: 8 },
      'mythology-basilisk': { id: 'basilisk', name: 'Basilisk', emoji: '🐍', tier: 9 },
      'mythology-leviathan': { id: 'leviathan', name: 'Leviathan', emoji: '🐋', tier: 10 },
      'mythology-behemoth': { id: 'behemoth', name: 'Behemoth', emoji: '🦛', tier: 10 },
      'bonus-alpha': { id: 'bonus-alpha', name: 'Bonus Alpha', emoji: '🌠', tier: 5 },
      'bonus-beta': { id: 'bonus-beta', name: 'Bonus Beta', emoji: '🌟', tier: 5 },
      'bonus-gamma': { id: 'bonus-gamma', name: 'Bonus Gamma', emoji: '✨', tier: 5 },
      'bonus-delta': { id: 'bonus-delta', name: 'Bonus Delta', emoji: '💫', tier: 5 },
      'bonus-epsilon': { id: 'bonus-epsilon', name: 'Bonus Epsilon', emoji: '⭐', tier: 5 },
      'bonus-zeta': { id: 'bonus-zeta', name: 'Bonus Zeta', emoji: '🌠', tier: 5 },
      'bonus-eta': { id: 'bonus-eta', name: 'Bonus Eta', emoji: '🌟', tier: 5 },
      'bonus-theta': { id: 'bonus-theta', name: 'Bonus Theta', emoji: '✨', tier: 5 },
      'bonus-iota': { id: 'bonus-iota', name: 'Bonus Iota', emoji: '💫', tier: 5 },
      'bonus-kappa': { id: 'bonus-kappa', name: 'Bonus Kappa', emoji: '⭐', tier: 5 },
      'bonus-lambda': { id: 'bonus-lambda', name: 'Bonus Lambda', emoji: '🌠', tier: 5 },
      'bonus-mu': { id: 'bonus-mu', name: 'Bonus Mu', emoji: '🌟', tier: 5 },
      'bonus-nu': { id: 'bonus-nu', name: 'Bonus Nu', emoji: '✨', tier: 5 },
      'bonus-xi': { id: 'bonus-xi', name: 'Bonus Xi', emoji: '💫', tier: 5 },
      'bonus-omicron': { id: 'bonus-omicron', name: 'Bonus Omicron', emoji: '⭐', tier: 5 },
      'bonus-pi': { id: 'bonus-pi', name: 'Bonus Pi', emoji: '🌠', tier: 5 },
      'bonus-rho': { id: 'bonus-rho', name: 'Bonus Rho', emoji: '🌟', tier: 5 },
      'bonus-sigma': { id: 'bonus-sigma', name: 'Bonus Sigma', emoji: '✨', tier: 5 },
      'bonus-tau': { id: 'bonus-tau', name: 'Bonus Tau', emoji: '💫', tier: 5 },
      'bonus-upsilon': { id: 'bonus-upsilon', name: 'Bonus Upsilon', emoji: '⭐', tier: 5 },
      'bonus-phi': { id: 'bonus-phi', name: 'Bonus Phi', emoji: '🌠', tier: 5 },
      'bonus-chi': { id: 'bonus-chi', name: 'Bonus Chi', emoji: '🌟', tier: 5 },
      'bonus-psi': { id: 'bonus-psi', name: 'Bonus Psi', emoji: '✨', tier: 5 },
      'bonus-omega': { id: 'bonus-omega', name: 'Bonus Omega', emoji: '✨', tier: 5 },
      'secret-element-1': { id: 'secret-1', name: 'Secret Element 1', emoji: '🎁', tier: 10 },
      'secret-element-2': { id: 'secret-2', name: 'Secret Element 2', emoji: '🎁', tier: 10 },
      'secret-element-3': { id: 'secret-3', name: 'Secret Element 3', emoji: '🎁', tier: 10 },
      'secret-element-4': { id: 'secret-4', name: 'Secret Element 4', emoji: '🎁', tier: 10 },
      'secret-element-5': { id: 'secret-5', name: 'Secret Element 5', emoji: '🎁', tier: 10 },
      'mystery-box': { id: 'mystery-box', name: 'Mystery Box', emoji: '📦', tier: 9 },
      'pandoras-box': { id: 'pandoras-box', name: "Pandora's Box", emoji: '📦', tier: 10 },
      'treasure-chest': { id: 'treasure-chest', name: 'Treasure Chest', emoji: '💰', tier: 8 },
      'holy-grail': { id: 'holy-grail', name: 'Holy Grail', emoji: '🏆', tier: 10 },
      'philosophers-stone': { id: 'philosophers-stone', name: "Philosopher's Stone", emoji: '💎', tier: 10 },
      'fountain-of-youth': { id: 'fountain-of-youth', name: 'Fountain of Youth', emoji: '⛲', tier: 10 },
      'tree-of-life': { id: 'tree-of-life', name: 'Tree of Life', emoji: '🌲', tier: 10 },
      'world-tree': { id: 'world-tree', name: 'World Tree', emoji: '🌴', tier: 10 },
      'cosmic-egg': { id: 'cosmic-egg', name: 'Cosmic Egg', emoji: '🥚', tier: 10 },
      'primordial-chaos': { id: 'primordial-chaos', name: 'Primordial Chaos', emoji: '🌀', tier: 10 },
      'ultimate-truth': { id: 'ultimate-truth', name: 'Ultimate Truth', emoji: '🧘', tier: 10 },
      'infinite-wisdom': { id: 'infinite-wisdom', name: 'Infinite Wisdom', emoji: '📚', tier: 10 },
      'eternal-flame': { id: 'eternal-flame', name: 'Eternal Flame', emoji: '🔥', tier: 10 },
      'endless-void': { id: 'endless-void', name: 'Endless Void', emoji: '⚫', tier: 10 },
      'perfect-harmony': { id: 'perfect-harmony', name: 'Perfect Harmony', emoji: '☯️', tier: 10 },
      'absolute-zero': { id: 'absolute-zero', name: 'Absolute Zero', emoji: '❄️', tier: 10 },
      'pure-energy': { id: 'pure-energy', name: 'Pure Energy', emoji: '⚡', tier: 10 },
      'raw-power': { id: 'raw-power', name: 'Raw Power', emoji: '💪', tier: 10 },
      'ultimate-weapon': { id: 'ultimate-weapon', name: 'Ultimate Weapon', emoji: '⚔️', tier: 10 },
      'final-form': { id: 'final-form', name: 'Final Form', emoji: '👑', tier: 10 },
    };

    // ==================== 负面与黑暗元素 (100种) ====================
    
    // ==================== 更多科技与现代发明 (Technology & Inventions - 300+) ====================
    const modernTech = {
      // 交通工具扩展
      'wheel-engine': { id: 'automobile', name: 'Automobile', emoji: '🚗', tier: 5 },
      'automobile-electric': { id: 'electric-car', name: 'Electric Car', emoji: '🚗', tier: 6 },
      'automobile-luxury': { id: 'limousine', name: 'Limousine', emoji: '🚗', tier: 6 },
      'automobile-sport': { id: 'sports-car', name: 'Sports Car', emoji: '🏎️', tier: 6 },
      'automobile-race': { id: 'race-car', name: 'Race Car', emoji: '🏎️', tier: 7 },
      'automobile-off': { id: 'suv', name: 'SUV', emoji: '🚙', tier: 5 },
      'automobile-van': { id: 'van', name: 'Van', emoji: '🚐', tier: 5 },
      'automobile-bus': { id: 'bus', name: 'Bus', emoji: '🚌', tier: 5 },
      'bus-school': { id: 'school-bus', name: 'School Bus', emoji: '🚌', tier: 5 },
      'bus-double': { id: 'double-decker-bus', name: 'Double-Decker Bus', emoji: '🚌', tier: 5 },
      'automobile-taxi': { id: 'taxi', name: 'Taxi', emoji: '🚕', tier: 5 },
      'automobile-police': { id: 'police-car', name: 'Police Car', emoji: '🚓', tier: 5 },
      'automobile-ambulance': { id: 'ambulance', name: 'Ambulance', emoji: '🚑', tier: 5 },
      'automobile-fire': { id: 'fire-truck', name: 'Fire Truck', emoji: '🚒', tier: 5 },
      'automobile-delivery': { id: 'delivery-truck', name: 'Delivery Truck', emoji: '🚚', tier: 5 },
      'automobile-semi': { id: 'semi-truck', name: 'Semi-Truck', emoji: '🚛', tier: 5 },
      'automobile-tow': { id: 'tow-truck', name: 'Tow Truck', emoji: '🚚', tier: 5 },
      'automobile-tractor': { id: 'tractor', name: 'Tractor', emoji: '🚜', tier: 4 },
      'automobile-tank': { id: 'tank', name: 'Tank', emoji: '🚜', tier: 7 },
      'engine-rail': { id: 'locomotive', name: 'Locomotive', emoji: '🚂', tier: 5 },
      'rail-passenger': { id: 'passenger-train', name: 'Passenger Train', emoji: '🚆', tier: 5 },
      'rail-high-speed': { id: 'bullet-train', name: 'Bullet Train', emoji: '🚄', tier: 6 },
      'rail-metro': { id: 'subway', name: 'Subway', emoji: '🚇', tier: 5 },
      'rail-tram': { id: 'tram', name: 'Tram', emoji: '🚊', tier: 5 },
      'rail-monorail': { id: 'monorail', name: 'Monorail', emoji: '🚝', tier: 6 },
      'rail-light': { id: 'light-rail', name: 'Light Rail', emoji: '🚈', tier: 5 },
      'engine-wings': { id: 'airplane', name: 'Airplane', emoji: '✈️', tier: 6 },
      'airplane-small': { id: 'small-plane', name: 'Small Plane', emoji: '🛩️', tier: 5 },
      'airplane-jet': { id: 'jet-plane', name: 'Jet Plane', emoji: '✈️', tier: 7 },
      'jet-fighter': { id: 'fighter-jet', name: 'Fighter Jet', emoji: '✈️', tier: 8 },
      'jet-commercial': { id: 'airliner', name: 'Airliner', emoji: '✈️', tier: 7 },
      'jet-jumbo': { id: 'jumbo-jet', name: 'Jumbo Jet', emoji: '✈️', tier: 7 },
      'jet-supersonic': { id: 'supersonic-jet', name: 'Supersonic Jet', emoji: '✈️', tier: 8 },
      'jet-stealth': { id: 'stealth-aircraft', name: 'Stealth Aircraft', emoji: '✈️', tier: 9 },
      'engine-rotor': { id: 'helicopter', name: 'Helicopter', emoji: '🚁', tier: 6 },
      'helicopter-apache': { id: 'attack-helicopter', name: 'Attack Helicopter', emoji: '🚁', tier: 7 },
      'helicopter-rescue': { id: 'rescue-helicopter', name: 'Rescue Helicopter', emoji: '🚁', tier: 6 },
      'water-ship': { id: 'ship', name: 'Ship', emoji: '🚢', tier: 4 },
      'ship-sail': { id: 'sailboat', name: 'Sailboat', emoji: '⛵', tier: 4 },
      'ship-yacht': { id: 'yacht', name: 'Yacht', emoji: '🛥️', tier: 5 },
      'ship-speed': { id: 'speedboat', name: 'Speedboat', emoji: '🚤', tier: 5 },
      'ship-cruise': { id: 'cruise-ship', name: 'Cruise Ship', emoji: '🚢', tier: 6 },
      'ship-cargo': { id: 'cargo-ship', name: 'Cargo Ship', emoji: '🚢', tier: 5 },
      'ship-container': { id: 'container-ship', name: 'Container Ship', emoji: '🚢', tier: 6 },
      'ship-tanker': { id: 'oil-tanker', name: 'Oil Tanker', emoji: '🚢', tier: 6 },
      'ship-ferry': { id: 'ferry', name: 'Ferry', emoji: '⛴️', tier: 5 },
      'ship-submarine': { id: 'submarine', name: 'Submarine', emoji: '🚢', tier: 7 },
      'submarine-nuclear': { id: 'nuclear-submarine', name: 'Nuclear Submarine', emoji: '🚢', tier: 8 },
      'ship-aircraft': { id: 'aircraft-carrier', name: 'Aircraft Carrier', emoji: '🚢', tier: 9 },
      'ship-battleship': { id: 'battleship', name: 'Battleship', emoji: '🚢', tier: 8 },
      'ship-destroyer': { id: 'destroyer', name: 'Destroyer', emoji: '🚢', tier: 7 },
      'ship-frigate': { id: 'frigate', name: 'Frigate', emoji: '🚢', tier: 7 },
      'ship-icebreaker': { id: 'icebreaker', name: 'Icebreaker', emoji: '🚢', tier: 6 },
      'water-pedal': { id: 'canoe', name: 'Canoe', emoji: '🛶', tier: 3 },
      'water-kayak': { id: 'kayak', name: 'Kayak', emoji: '🛶', tier: 3 },
      'water-raft': { id: 'raft', name: 'Raft', emoji: '🛶', tier: 3 },
      'water-surfboard': { id: 'surfboard', name: 'Surfboard', emoji: '🏄', tier: 4 },
      'engine-two-wheels': { id: 'motorcycle', name: 'Motorcycle', emoji: '🏍️', tier: 5 },
      'motorcycle-sport': { id: 'sport-bike', name: 'Sport Bike', emoji: '🏍️', tier: 6 },
      'motorcycle-cruiser': { id: 'cruiser', name: 'Cruiser', emoji: '🏍️', tier: 5 },
      'motorcycle-dirt': { id: 'dirt-bike', name: 'Dirt Bike', emoji: '🏍️', tier: 5 },
      'motorcycle-scooter': { id: 'scooter', name: 'Scooter', emoji: '🛵', tier: 4 },
      'human-pedal': { id: 'bicycle', name: 'Bicycle', emoji: '🚲', tier: 3 },
      'bicycle-mountain': { id: 'mountain-bike', name: 'Mountain Bike', emoji: '🚲', tier: 4 },
      'bicycle-road': { id: 'road-bike', name: 'Road Bike', emoji: '🚲', tier: 4 },
      'bicycle-electric': { id: 'e-bike', name: 'E-Bike', emoji: '🚲', tier: 5 },
      'bicycle-tandem': { id: 'tandem-bike', name: 'Tandem Bike', emoji: '🚲', tier: 4 },
      'bicycle-unicycle': { id: 'unicycle', name: 'Unicycle', emoji: '🚲', tier: 4 },
      'human-skate': { id: 'skateboard', name: 'Skateboard', emoji: '🛹', tier: 4 },
      'skate-wheel': { id: 'roller-skates', name: 'Roller Skates', emoji: '🛼', tier: 4 },
      'skate-inline': { id: 'inline-skates', name: 'Inline Skates', emoji: '🛼', tier: 4 },
      'snow-slide': { id: 'sled', name: 'Sled', emoji: '🛷', tier: 3 },
      'snow-ski': { id: 'skis', name: 'Skis', emoji: '🎿', tier: 4 },
      'snow-board': { id: 'snowboard', name: 'Snowboard', emoji: '🏂', tier: 4 },
      'snow-mobile': { id: 'snowmobile', name: 'Snowmobile', emoji: '🛷', tier: 5 },
      
      // 电子设备扩展
      'electricity-compute': { id: 'computer', name: 'Computer', emoji: '💻', tier: 6 },
      'computer-portable': { id: 'laptop', name: 'Laptop', emoji: '💻', tier: 6 },
      'computer-tablet': { id: 'tablet', name: 'Tablet', emoji: '📱', tier: 6 },
      'computer-desktop': { id: 'desktop-computer', name: 'Desktop Computer', emoji: '🖥️', tier: 6 },
      'computer-server': { id: 'server', name: 'Server', emoji: '🖥️', tier: 7 },
      'computer-supercomputer': { id: 'supercomputer', name: 'Supercomputer', emoji: '🖥️', tier: 8 },
      'computer-quantum': { id: 'quantum-computer', name: 'Quantum Computer', emoji: '💻', tier: 9 },
      'electricity-phone': { id: 'telephone', name: 'Telephone', emoji: '☎️', tier: 5 },
      'phone-mobile': { id: 'mobile-phone', name: 'Mobile Phone', emoji: '📱', tier: 6 },
      'mobile-smart': { id: 'smartphone', name: 'Smartphone', emoji: '📱', tier: 7 },
      'smartphone-iphone': { id: 'iphone', name: 'iPhone', emoji: '📱', tier: 7 },
      'smartphone-android': { id: 'android-phone', name: 'Android Phone', emoji: '📱', tier: 7 },
      'electricity-screen': { id: 'television', name: 'Television', emoji: '📺', tier: 5 },
      'television-flat': { id: 'flat-screen-tv', name: 'Flat Screen TV', emoji: '📺', tier: 6 },
      'television-4k': { id: '4k-tv', name: '4K TV', emoji: '📺', tier: 7 },
      'television-oled': { id: 'oled-tv', name: 'OLED TV', emoji: '📺', tier: 7 },
      'television-smart': { id: 'smart-tv', name: 'Smart TV', emoji: '📺', tier: 7 },
      'electricity-radio': { id: 'radio', name: 'Radio', emoji: '📻', tier: 5 },
      'radio-transistor': { id: 'transistor-radio', name: 'Transistor Radio', emoji: '📻', tier: 5 },
      'radio-satellite': { id: 'satellite-radio', name: 'Satellite Radio', emoji: '📻', tier: 6 },
      'electricity-camera': { id: 'camera', name: 'Camera', emoji: '📷', tier: 5 },
      'camera-digital': { id: 'digital-camera', name: 'Digital Camera', emoji: '📷', tier: 6 },
      'camera-dslr': { id: 'dslr-camera', name: 'DSLR Camera', emoji: '📷', tier: 7 },
      'camera-video': { id: 'video-camera', name: 'Video Camera', emoji: '📹', tier: 6 },
      'camera-security': { id: 'security-camera', name: 'Security Camera', emoji: '📹', tier: 6 },
      'camera-webcam': { id: 'webcam', name: 'Webcam', emoji: '📹', tier: 5 },
      'camera-gopro': { id: 'action-camera', name: 'Action Camera', emoji: '📷', tier: 6 },
      'camera-drone': { id: 'drone-camera', name: 'Drone Camera', emoji: '📷', tier: 7 },
      'electricity-music': { id: 'music-player', name: 'Music Player', emoji: '🎵', tier: 5 },
      'music-mp3': { id: 'mp3-player', name: 'MP3 Player', emoji: '🎵', tier: 6 },
      'music-ipod': { id: 'ipod', name: 'iPod', emoji: '🎵', tier: 6 },
      'electricity-speaker': { id: 'speaker', name: 'Speaker', emoji: '🔊', tier: 5 },
      'speaker-bluetooth': { id: 'bluetooth-speaker', name: 'Bluetooth Speaker', emoji: '🔊', tier: 6 },
      'speaker-smart': { id: 'smart-speaker', name: 'Smart Speaker', emoji: '🔊', tier: 7 },
      'electricity-headphones': { id: 'headphones', name: 'Headphones', emoji: '🎧', tier: 5 },
      'headphones-wireless': { id: 'wireless-headphones', name: 'Wireless Headphones', emoji: '🎧', tier: 6 },
      'headphones-airpods': { id: 'airpods', name: 'AirPods', emoji: '🎧', tier: 7 },
      'electricity-microphone': { id: 'microphone', name: 'Microphone', emoji: '🎤', tier: 5 },
      'electricity-keyboard': { id: 'keyboard', name: 'Keyboard', emoji: '⌨️', tier: 5 },
      'electricity-mouse': { id: 'mouse', name: 'Mouse', emoji: '🖱️', tier: 5 },
      'electricity-printer': { id: 'printer', name: 'Printer', emoji: '🖨️', tier: 5 },
      'printer-3d': { id: '3d-printer', name: '3D Printer', emoji: '🖨️', tier: 7 },
      'electricity-scanner': { id: 'scanner', name: 'Scanner', emoji: '🖨️', tier: 5 },
      'electricity-projector': { id: 'projector', name: 'Projector', emoji: '📽️', tier: 6 },
      'electricity-remote': { id: 'remote-control', name: 'Remote Control', emoji: '📱', tier: 5 },
      'electricity-game': { id: 'game-console', name: 'Game Console', emoji: '🎮', tier: 6 },
      'game-playstation': { id: 'playstation', name: 'PlayStation', emoji: '🎮', tier: 7 },
      'game-xbox': { id: 'xbox', name: 'Xbox', emoji: '🎮', tier: 7 },
      'game-nintendo': { id: 'nintendo', name: 'Nintendo', emoji: '🎮', tier: 7 },
      'game-controller': { id: 'game-controller', name: 'Game Controller', emoji: '🕹️', tier: 5 },
      'game-vr-headset': { id: 'vr-headset', name: 'VR Headset', emoji: '🥽', tier: 7 },
      'game-ar-glasses': { id: 'ar-glasses', name: 'AR Glasses', emoji: '🥽', tier: 7 },
      
      // 家用电器
      'electricity-cold': { id: 'refrigerator', name: 'Refrigerator', emoji: '🧊', tier: 5 },
      'refrigerator-freezer': { id: 'freezer', name: 'Freezer', emoji: '❄️', tier: 5 },
      'electricity-oven': { id: 'oven', name: 'Oven', emoji: '🔥', tier: 5 },
      'oven-microwave': { id: 'microwave', name: 'Microwave', emoji: '📻', tier: 5 },
      'electricity-stove': { id: 'stove', name: 'Stove', emoji: '🔥', tier: 5 },
      'electricity-toaster': { id: 'toaster', name: 'Toaster', emoji: '🍞', tier: 4 },
      'electricity-blender': { id: 'blender', name: 'Blender', emoji: '🥤', tier: 5 },
      'electricity-mixer': { id: 'mixer', name: 'Mixer', emoji: '🍰', tier: 5 },
      'electricity-coffee': { id: 'coffee-maker', name: 'Coffee Maker', emoji: '☕', tier: 5 },
      'electricity-kettle': { id: 'electric-kettle', name: 'Electric Kettle', emoji: '🫖', tier: 5 },
      'electricity-dishwasher': { id: 'dishwasher', name: 'Dishwasher', emoji: '🍽️', tier: 5 },
      'electricity-washer': { id: 'washing-machine', name: 'Washing Machine', emoji: '🧺', tier: 5 },
      'electricity-dryer': { id: 'dryer', name: 'Dryer', emoji: '🧺', tier: 5 },
      'electricity-vacuum': { id: 'vacuum-cleaner', name: 'Vacuum Cleaner', emoji: '🧹', tier: 5 },
      'vacuum-robot': { id: 'robot-vacuum', name: 'Robot Vacuum', emoji: '🤖', tier: 6 },
      'electricity-fan': { id: 'fan', name: 'Fan', emoji: '💨', tier: 4 },
      'electricity-ac': { id: 'air-conditioner', name: 'Air Conditioner', emoji: '🧴', tier: 5 },
      'electricity-heater': { id: 'heater', name: 'Heater', emoji: '🔥', tier: 5 },
      'electricity-lamp': { id: 'lamp', name: 'Lamp', emoji: '💡', tier: 4 },
      'lamp-led': { id: 'led-lamp', name: 'LED Lamp', emoji: '💡', tier: 5 },
      'lamp-smart': { id: 'smart-bulb', name: 'Smart Bulb', emoji: '💡', tier: 6 },
      'electricity-alarm': { id: 'alarm-clock', name: 'Alarm Clock', emoji: '⏰', tier: 4 },
      'electricity-watch': { id: 'digital-watch', name: 'Digital Watch', emoji: '⌚', tier: 5 },
      'watch-smart': { id: 'smartwatch', name: 'Smartwatch', emoji: '⌚', tier: 6 },
      'watch-apple': { id: 'apple-watch', name: 'Apple Watch', emoji: '⌚', tier: 7 },
      'electricity-scale': { id: 'scale', name: 'Scale', emoji: '⚖️', tier: 4 },
      'scale-smart': { id: 'smart-scale', name: 'Smart Scale', emoji: '⚖️', tier: 5 },
      'electricity-thermostat': { id: 'thermostat', name: 'Thermostat', emoji: '🌡️', tier: 5 },
      'thermostat-smart': { id: 'smart-thermostat', name: 'Smart Thermostat', emoji: '🌡️', tier: 6 },
      'electricity-doorbell': { id: 'doorbell', name: 'Doorbell', emoji: '🔔', tier: 4 },
      'doorbell-smart': { id: 'smart-doorbell', name: 'Smart Doorbell', emoji: '🔔', tier: 6 },
      'electricity-lock': { id: 'electronic-lock', name: 'Electronic Lock', emoji: '🔐', tier: 6 },
      'lock-smart': { id: 'smart-lock', name: 'Smart Lock', emoji: '🔐', tier: 7 },
      
      // 通信和网络
      'electricity-network': { id: 'router', name: 'Router', emoji: '📡', tier: 6 },
      'router-wifi': { id: 'wifi-router', name: 'WiFi Router', emoji: '📡', tier: 6 },
      'network-modem': { id: 'modem', name: 'Modem', emoji: '📡', tier: 5 },
      'network-switch': { id: 'network-switch', name: 'Network Switch', emoji: '🔌', tier: 6 },
      'network-hub': { id: 'network-hub', name: 'Network Hub', emoji: '🔌', tier: 5 },
      'network-repeater': { id: 'wifi-extender', name: 'WiFi Extender', emoji: '📡', tier: 6 },
      'network-antenna': { id: 'antenna', name: 'Antenna', emoji: '📡', tier: 5 },
      'antenna-satellite': { id: 'satellite-dish', name: 'Satellite Dish', emoji: '📡', tier: 6 },
      'antenna-cell': { id: 'cell-tower', name: 'Cell Tower', emoji: '📡', tier: 6 },
      'network-fiber': { id: 'fiber-optic', name: 'Fiber Optic', emoji: '💡', tier: 7 },
      'network-ethernet': { id: 'ethernet', name: 'Ethernet', emoji: '🔌', tier: 6 },
      'network-bluetooth': { id: 'bluetooth', name: 'Bluetooth', emoji: '📶', tier: 6 },
      'network-nfc': { id: 'nfc', name: 'NFC', emoji: '📶', tier: 6 },
      'network-5g': { id: '5g-network', name: '5G Network', emoji: '📶', tier: 8 },
      'network-internet': { id: 'internet', name: 'Internet', emoji: '🌐', tier: 7 },
      'internet-web': { id: 'world-wide-web', name: 'World Wide Web', emoji: '🌐', tier: 8 },
      'internet-cloud': { id: 'cloud-computing', name: 'Cloud Computing', emoji: '☁️', tier: 8 },
      'internet-email': { id: 'email', name: 'Email', emoji: '📧', tier: 6 },
      'internet-social': { id: 'social-media', name: 'Social Media', emoji: '📱', tier: 7 },
      'social-facebook': { id: 'facebook', name: 'Facebook', emoji: '📖', tier: 7 },
      'social-twitter': { id: 'twitter', name: 'Twitter', emoji: '🐦', tier: 7 },
      'social-instagram': { id: 'instagram', name: 'Instagram', emoji: '📷', tier: 7 },
      'social-youtube': { id: 'youtube', name: 'YouTube', emoji: '📺', tier: 7 },
      'social-tiktok': { id: 'tiktok', name: 'TikTok', emoji: '🎵', tier: 7 },
      'internet-search': { id: 'search-engine', name: 'Search Engine', emoji: '🔍', tier: 7 },
      'search-google': { id: 'google', name: 'Google', emoji: '🔍', tier: 8 },
      'internet-video': { id: 'video-call', name: 'Video Call', emoji: '📹', tier: 7 },
      'video-zoom': { id: 'zoom', name: 'Zoom', emoji: '📹', tier: 7 },
      'internet-stream': { id: 'streaming', name: 'Streaming', emoji: '📺', tier: 7 },
      'stream-netflix': { id: 'netflix', name: 'Netflix', emoji: '📺', tier: 7 },
      'stream-spotify': { id: 'spotify', name: 'Spotify', emoji: '🫕', tier: 7 },
    };


    // ==================== 音乐、艺术、娱乐 (Music, Art & Entertainment - 200+) ====================
    const musicArtEntertainment = {
      // 乐器
      'wood-string': { id: 'guitar', name: 'Guitar', emoji: '🎸', tier: 4 },
      'guitar-acoustic': { id: 'acoustic-guitar', name: 'Acoustic Guitar', emoji: '🎸', tier: 4 },
      'guitar-electric': { id: 'electric-guitar', name: 'Electric Guitar', emoji: '🎸', tier: 5 },
      'guitar-bass': { id: 'bass-guitar', name: 'Bass Guitar', emoji: '🎸', tier: 5 },
      'string-bow': { id: 'violin', name: 'Violin', emoji: '🎻', tier: 5 },
      'violin-big': { id: 'cello', name: 'Cello', emoji: '🎻', tier: 5 },
      'violin-small': { id: 'viola', name: 'Viola', emoji: '🎻', tier: 5 },
      'violin-huge': { id: 'double-bass', name: 'Double Bass', emoji: '🎻', tier: 5 },
      'string-pluck': { id: 'harp', name: 'Harp', emoji: '🎵', tier: 5 },
      'string-banjo': { id: 'banjo', name: 'Banjo', emoji: '🎸', tier: 4 },
      'string-mandolin': { id: 'mandolin', name: 'Mandolin', emoji: '🎸', tier: 4 },
      'string-ukulele': { id: 'ukulele', name: 'Ukulele', emoji: '🎸', tier: 4 },
      'string-sitar': { id: 'sitar', name: 'Sitar', emoji: '🎻', tier: 5 },
      'keys-white': { id: 'piano', name: 'Piano', emoji: '🎹', tier: 6 },
      'piano-grand': { id: 'grand-piano', name: 'Grand Piano', emoji: '🎹', tier: 7 },
      'piano-upright': { id: 'upright-piano', name: 'Upright Piano', emoji: '🎹', tier: 6 },
      'piano-electric': { id: 'electric-piano', name: 'Electric Piano', emoji: '🎹', tier: 6 },
      'piano-keyboard': { id: 'keyboard', name: 'Keyboard', emoji: '⌨️', tier: 5 },
      'keys-synth': { id: 'synthesizer', name: 'Synthesizer', emoji: '🎹', tier: 6 },
      'keys-organ': { id: 'organ', name: 'Organ', emoji: '🫀', tier: 6 },
      'keys-accordion': { id: 'accordion', name: 'Accordion', emoji: '🎹', tier: 5 },
      'keys-harmonica': { id: 'harmonica', name: 'Harmonica', emoji: '🎵', tier: 4 },
      'wind-trumpet': { id: 'trumpet', name: 'Trumpet', emoji: '🎺', tier: 5 },
      'wind-trombone': { id: 'trombone', name: 'Trombone', emoji: '🎺', tier: 5 },
      'wind-french-horn': { id: 'french-horn', name: 'French Horn', emoji: '🎺', tier: 5 },
      'wind-tuba': { id: 'tuba', name: 'Tuba', emoji: '🎺', tier: 5 },
      'wind-saxophone': { id: 'saxophone', name: 'Saxophone', emoji: '🎷', tier: 5 },
      'wind-clarinet': { id: 'clarinet', name: 'Clarinet', emoji: '🎵', tier: 5 },
      'wind-flute': { id: 'flute', name: 'Flute', emoji: '🎵', tier: 5 },
      'wind-piccolo': { id: 'piccolo', name: 'Piccolo', emoji: '🎵', tier: 5 },
      'wind-oboe': { id: 'oboe', name: 'Oboe', emoji: '🎵', tier: 5 },
      'wind-bassoon': { id: 'bassoon', name: 'Bassoon', emoji: '🎵', tier: 5 },
      'wind-bagpipes': { id: 'bagpipes', name: 'Bagpipes', emoji: '👜', tier: 5 },
      'wind-recorder': { id: 'recorder', name: 'Recorder', emoji: '🎵', tier: 4 },
      'wind-pan-flute': { id: 'pan-flute', name: 'Pan Flute', emoji: '🍳', tier: 5 },
      'hit-drum': { id: 'drum', name: 'Drum', emoji: '🥁', tier: 4 },
      'drum-set': { id: 'drum-set', name: 'Drum Set', emoji: '🥁', tier: 5 },
      'drum-snare': { id: 'snare-drum', name: 'Snare Drum', emoji: '🥁', tier: 4 },
      'drum-bass': { id: 'bass-drum', name: 'Bass Drum', emoji: '🥁', tier: 4 },
      'drum-bongo': { id: 'bongo', name: 'Bongo', emoji: '🥁', tier: 4 },
      'drum-conga': { id: 'conga', name: 'Conga', emoji: '🥁', tier: 4 },
      'drum-djembe': { id: 'djembe', name: 'Djembe', emoji: '🥁', tier: 4 },
      'drum-timpani': { id: 'timpani', name: 'Timpani', emoji: '🥁', tier: 5 },
      'drum-tabla': { id: 'tabla', name: 'Tabla', emoji: '🥁', tier: 5 },
      'hit-cymbal': { id: 'cymbal', name: 'Cymbal', emoji: '🥁', tier: 4 },
      'hit-tambourine': { id: 'tambourine', name: 'Tambourine', emoji: '🥁', tier: 4 },
      'hit-maracas': { id: 'maracas', name: 'Maracas', emoji: '🥁', tier: 4 },
      'hit-triangle': { id: 'triangle', name: 'Triangle', emoji: '🔺', tier: 3 },
      'hit-xylophone': { id: 'xylophone', name: 'Xylophone', emoji: '🎵', tier: 4 },
      'hit-marimba': { id: 'marimba', name: 'Marimba', emoji: '🎵', tier: 5 },
      'hit-vibraphone': { id: 'vibraphone', name: 'Vibraphone', emoji: '🎵', tier: 5 },
      'hit-glockenspiel': { id: 'glockenspiel', name: 'Glockenspiel', emoji: '🔒', tier: 5 },
      'hit-bell': { id: 'bell', name: 'Bell', emoji: '🔔', tier: 4 },
      'hit-gong': { id: 'gong', name: 'Gong', emoji: '🔔', tier: 5 },
      'hit-castanets': { id: 'castanets', name: 'Castanets', emoji: '🥁', tier: 4 },
      
      // 音乐风格
      'music-classical': { id: 'classical-music', name: 'Classical Music', emoji: '🎼', tier: 6 },
      'music-symphony': { id: 'symphony', name: 'Symphony', emoji: '🎼', tier: 7 },
      'music-opera': { id: 'opera', name: 'Opera', emoji: '🎭', tier: 7 },
      'music-jazz': { id: 'jazz', name: 'Jazz', emoji: '🎷', tier: 6 },
      'music-blues': { id: 'blues', name: 'Blues', emoji: '🎸', tier: 6 },
      'music-rock': { id: 'rock', name: 'Rock', emoji: '🪨', tier: 6 },
      'music-metal': { id: 'heavy-metal', name: 'Heavy Metal', emoji: '🎸', tier: 7 },
      'music-punk': { id: 'punk-rock', name: 'Punk Rock', emoji: '🎸', tier: 6 },
      'music-pop': { id: 'pop-music', name: 'Pop Music', emoji: '🎵', tier: 6 },
      'music-country': { id: 'country', name: 'Country', emoji: '🤠', tier: 6 },
      'music-folk': { id: 'folk-music', name: 'Folk Music', emoji: '🎸', tier: 6 },
      'music-rap': { id: 'rap', name: 'Rap', emoji: '🎤', tier: 6 },
      'music-hip-hop': { id: 'hip-hop', name: 'Hip Hop', emoji: '🎤', tier: 6 },
      'music-reggae': { id: 'reggae', name: 'Reggae', emoji: '🥚', tier: 6 },
      'music-ska': { id: 'ska', name: 'Ska', emoji: '🎺', tier: 6 },
      'music-funk': { id: 'funk', name: 'Funk', emoji: '🎸', tier: 6 },
      'music-soul': { id: 'soul-music', name: 'Soul Music', emoji: '🎤', tier: 6 },
      'music-rnb': { id: 'rnb', name: 'R&B', emoji: '🎤', tier: 6 },
      'music-gospel': { id: 'gospel', name: 'Gospel', emoji: '🙏', tier: 6 },
      'music-techno': { id: 'techno', name: 'Techno', emoji: '🎧', tier: 6 },
      'music-house': { id: 'house-music', name: 'House Music', emoji: '🏠', tier: 6 },
      'music-edm': { id: 'edm', name: 'EDM', emoji: '🎧', tier: 7 },
      'music-dubstep': { id: 'dubstep', name: 'Dubstep', emoji: '🎧', tier: 7 },
      'music-trance': { id: 'trance', name: 'Trance', emoji: '🎧', tier: 7 },
      'music-ambient': { id: 'ambient', name: 'Ambient', emoji: '🎧', tier: 6 },
      'music-electronic': { id: 'electronic-music', name: 'Electronic Music', emoji: '🎹', tier: 7 },
      'music-disco': { id: 'disco', name: 'Disco', emoji: '🕺', tier: 6 },
      'music-salsa': { id: 'salsa', name: 'Salsa', emoji: '💃', tier: 6 },
      'music-tango': { id: 'tango', name: 'Tango', emoji: '💃', tier: 6 },
      'music-flamenco': { id: 'flamenco', name: 'Flamenco', emoji: '💃', tier: 6 },
      'music-samba': { id: 'samba', name: 'Samba', emoji: '💃', tier: 6 },
      'music-bossa-nova': { id: 'bossa-nova', name: 'Bossa Nova', emoji: '🎸', tier: 6 },
      'music-mariachi': { id: 'mariachi', name: 'Mariachi', emoji: '🎺', tier: 6 },
      'music-k-pop': { id: 'k-pop', name: 'K-Pop', emoji: '🎤', tier: 7 },
      'music-j-pop': { id: 'j-pop', name: 'J-Pop', emoji: '🎤', tier: 7 },
      'music-bollywood': { id: 'bollywood-music', name: 'Bollywood Music', emoji: '🎬', tier: 7 },
      
      // 艺术形式
      'color-canvas': { id: 'painting', name: 'Painting', emoji: '🖼️', tier: 5 },
      'painting-oil': { id: 'oil-painting', name: 'Oil Painting', emoji: '🎨', tier: 6 },
      'painting-watercolor': { id: 'watercolor', name: 'Watercolor', emoji: '💧', tier: 5 },
      'painting-acrylic': { id: 'acrylic-painting', name: 'Acrylic Painting', emoji: '🎨', tier: 5 },
      'painting-mural': { id: 'mural', name: 'Mural', emoji: '🏛️', tier: 6 },
      'painting-fresco': { id: 'fresco', name: 'Fresco', emoji: '🏺', tier: 6 },
      'paper-draw': { id: 'drawing', name: 'Drawing', emoji: '✏️', tier: 4 },
      'draw-pencil': { id: 'pencil-drawing', name: 'Pencil Drawing', emoji: '🖊️', tier: 4 },
      'draw-charcoal': { id: 'charcoal-drawing', name: 'Charcoal Drawing', emoji: '✏️', tier: 5 },
      'draw-ink': { id: 'ink-drawing', name: 'Ink Drawing', emoji: '🖊️', tier: 5 },
      'draw-sketch': { id: 'sketch', name: 'Sketch', emoji: '📝', tier: 4 },
      'draw-cartoon': { id: 'cartoon', name: 'Cartoon', emoji: '🚗', tier: 5 },
      'draw-comic': { id: 'comic', name: 'Comic', emoji: '📖', tier: 5 },
      'draw-manga': { id: 'manga', name: 'Manga', emoji: '📖', tier: 6 },
      'draw-anime': { id: 'anime', name: 'Anime', emoji: '📺', tier: 6 },
      'clay-shape': { id: 'sculpture', name: 'Sculpture', emoji: '🗿', tier: 6 },
      'sculpture-bronze': { id: 'bronze-sculpture', name: 'Bronze Sculpture', emoji: '🗿', tier: 7 },
      'sculpture-marble': { id: 'marble-sculpture', name: 'Marble Sculpture', emoji: '🗿', tier: 7 },
      'sculpture-wood': { id: 'wood-carving', name: 'Wood Carving', emoji: '🚗', tier: 6 },
      'sculpture-ice': { id: 'ice-sculpture', name: 'Ice Sculpture', emoji: '🗿', tier: 6 },
      'sculpture-sand': { id: 'sand-sculpture', name: 'Sand Sculpture', emoji: '🏖️', tier: 5 },
      'clay-pot': { id: 'pottery', name: 'Pottery', emoji: '🏺', tier: 5 },
      'pottery-ceramic': { id: 'ceramic', name: 'Ceramic', emoji: '🏺', tier: 5 },
      'pottery-porcelain': { id: 'porcelain', name: 'Porcelain', emoji: '🏺', tier: 6 },
      'pottery-vase': { id: 'vase', name: 'Vase', emoji: '🏺', tier: 5 },
      'light-art': { id: 'photography', name: 'Photography', emoji: '📷', tier: 6 },
      'photography-portrait': { id: 'portrait-photography', name: 'Portrait Photography', emoji: '📷', tier: 6 },
      'photography-landscape': { id: 'landscape-photography', name: 'Landscape Photography', emoji: '📷', tier: 6 },
      'photography-wildlife': { id: 'wildlife-photography', name: 'Wildlife Photography', emoji: '📷', tier: 7 },
      'photography-macro': { id: 'macro-photography', name: 'Macro Photography', emoji: '📷', tier: 7 },
      'photography-street': { id: 'street-photography', name: 'Street Photography', emoji: '📷', tier: 6 },
      'paper-fold': { id: 'origami', name: 'Origami', emoji: '📄', tier: 5 },
      'thread-cloth': { id: 'textile-art', name: 'Textile Art', emoji: '🧵', tier: 5 },
      'thread-stitch': { id: 'embroidery', name: 'Embroidery', emoji: '🧵', tier: 5 },
      'thread-weave': { id: 'weaving', name: 'Weaving', emoji: '🧵', tier: 5 },
      'thread-knit': { id: 'knitting', name: 'Knitting', emoji: '🧶', tier: 5 },
      'thread-crochet': { id: 'crochet', name: 'Crochet', emoji: '🧶', tier: 5 },
      'thread-quilt': { id: 'quilting', name: 'Quilting', emoji: '🧵', tier: 5 },
      'thread-tapestry': { id: 'tapestry', name: 'Tapestry', emoji: '🖼️', tier: 6 },
      'glass-color': { id: 'stained-glass', name: 'Stained Glass', emoji: '🪟', tier: 6 },
      'glass-blow': { id: 'glass-blowing', name: 'Glass Blowing', emoji: '🥛', tier: 6 },
      'metal-work': { id: 'metalwork', name: 'Metalwork', emoji: '🔨', tier: 5 },
      'metal-jewelry': { id: 'jewelry', name: 'Jewelry', emoji: '💍', tier: 6 },
      'wood-craft': { id: 'woodworking', name: 'Woodworking', emoji: '🪵', tier: 5 },
      'wood-furniture': { id: 'furniture', name: 'Furniture', emoji: '🪑', tier: 5 },
      'ink-body': { id: 'tattoo', name: 'Tattoo', emoji: '🖊️', tier: 5 },
      'spray-wall': { id: 'graffiti', name: 'Graffiti', emoji: '🖍️', tier: 5 },
      'spray-art': { id: 'street-art', name: 'Street Art', emoji: '🌳', tier: 6 },
      'art-modern': { id: 'modern-art', name: 'Modern Art', emoji: '🎨', tier: 7 },
      'art-abstract': { id: 'abstract-art', name: 'Abstract Art', emoji: '🎨', tier: 7 },
      'art-pop': { id: 'pop-art', name: 'Pop Art', emoji: '🎨', tier: 7 },
      'art-surrealism': { id: 'surrealism', name: 'Surrealism', emoji: '🎨', tier: 7 },
      'art-impressionism': { id: 'impressionism', name: 'Impressionism', emoji: '🎨', tier: 7 },
      'art-cubism': { id: 'cubism', name: 'Cubism', emoji: '🎨', tier: 7 },
      'art-renaissance': { id: 'renaissance-art', name: 'Renaissance Art', emoji: '🎨', tier: 8 },
      
      // 娱乐和表演
      'stage-act': { id: 'theater', name: 'Theater', emoji: '🎭', tier: 6 },
      'theater-musical': { id: 'musical', name: 'Musical', emoji: '🎭', tier: 7 },
      'theater-broadway': { id: 'broadway', name: 'Broadway', emoji: '🎭', tier: 8 },
      'theater-drama': { id: 'drama', name: 'Drama', emoji: '🎭', tier: 6 },
      'theater-comedy': { id: 'comedy', name: 'Comedy', emoji: '😂', tier: 6 },
      'theater-tragedy': { id: 'tragedy', name: 'Tragedy', emoji: '😢', tier: 6 },
      'theater-ballet': { id: 'ballet', name: 'Ballet', emoji: '🩰', tier: 6 },
      'dance-modern': { id: 'modern-dance', name: 'Modern Dance', emoji: '💃', tier: 6 },
      'dance-hip-hop': { id: 'hip-hop-dance', name: 'Hip Hop Dance', emoji: '🕺', tier: 6 },
      'dance-ballroom': { id: 'ballroom-dance', name: 'Ballroom Dance', emoji: '💃', tier: 6 },
      'dance-breakdance': { id: 'breakdance', name: 'Breakdance', emoji: '🕺', tier: 6 },
      'dance-tap': { id: 'tap-dance', name: 'Tap Dance', emoji: '👞', tier: 6 },
      'perform-circus': { id: 'circus', name: 'Circus', emoji: '🎪', tier: 6 },
      'circus-acrobat': { id: 'acrobatics', name: 'Acrobatics', emoji: '🦇', tier: 6 },
      'circus-juggle': { id: 'juggling', name: 'Juggling', emoji: '🤹', tier: 5 },
      'circus-clown': { id: 'clown', name: 'Clown', emoji: '🤡', tier: 5 },
      'circus-magic': { id: 'magic-show', name: 'Magic Show', emoji: '🎩', tier: 6 },
      'magic-trick': { id: 'magic-trick', name: 'Magic Trick', emoji: '🪄', tier: 5 },
      'magic-illusion': { id: 'illusion', name: 'Illusion', emoji: '🌌', tier: 6 },
    };


    // ==================== 快速扩展组合 (Quick Expansions - 800+) ====================
    const quickExpansions = {
      'color-red': { id: 'red', name: 'Red', emoji: '🔴', tier: 3 },
      'color-blue': { id: 'blue', name: 'Blue', emoji: '🔵', tier: 3 },
      'color-green': { id: 'green', name: 'Green', emoji: '🟢', tier: 3 },
      'color-yellow': { id: 'yellow', name: 'Yellow', emoji: '🟡', tier: 3 },
      'color-purple': { id: 'purple', name: 'Purple', emoji: '🟣', tier: 4 },
      'color-orange': { id: 'orange', name: 'Orange', emoji: '🟠', tier: 4 },
      'color-pink': { id: 'pink', name: 'Pink', emoji: '🩷', tier: 4 },
      'color-brown': { id: 'brown', name: 'Brown', emoji: '🟤', tier: 4 },
      'color-black': { id: 'black', name: 'Black', emoji: '⚫', tier: 5 },
      'color-white': { id: 'white', name: 'White', emoji: '⚪', tier: 5 },
      'color-gray': { id: 'gray', name: 'Gray', emoji: '⚫', tier: 5 },
      'color-cyan': { id: 'cyan', name: 'Cyan', emoji: '🎨', tier: 5 },
      'color-magenta': { id: 'magenta', name: 'Magenta', emoji: '🎨', tier: 6 },
      'color-lime': { id: 'lime', name: 'Lime', emoji: '🍋', tier: 6 },
      'color-navy': { id: 'navy', name: 'Navy', emoji: '🎨', tier: 6 },
      'color-teal': { id: 'teal', name: 'Teal', emoji: '🍵', tier: 6 },
      'color-maroon': { id: 'maroon', name: 'Maroon', emoji: '🎨', tier: 7 },
      'color-olive': { id: 'olive', name: 'Olive', emoji: '🎨', tier: 7 },
      'color-silver': { id: 'silver', name: 'Silver', emoji: '⚪', tier: 7 },
      'color-gold': { id: 'gold', name: 'Gold', emoji: '🟨', tier: 7 },
      'shape-circle': { id: 'circle', name: 'Circle', emoji: '⭕', tier: 3 },
      'shape-square': { id: 'square', name: 'Square', emoji: '⬛', tier: 3 },
      'shape-triangle': { id: 'triangle', name: 'Triangle', emoji: '🔺', tier: 3 },
      'shape-rectangle': { id: 'rectangle', name: 'Rectangle', emoji: '▬', tier: 3 },
      'shape-pentagon': { id: 'pentagon', name: 'Pentagon', emoji: '⬟', tier: 4 },
      'shape-hexagon': { id: 'hexagon', name: 'Hexagon', emoji: '⬡', tier: 4 },
      'shape-octagon': { id: 'octagon', name: 'Octagon', emoji: '🛑', tier: 4 },
      'shape-star-shape': { id: 'star-shape', name: 'Star Shape', emoji: '☆', tier: 4 },
      'shape-heart-shape': { id: 'heart-shape', name: 'Heart Shape', emoji: '♡', tier: 5 },
      'shape-diamond-shape': { id: 'diamond-shape', name: 'Diamond Shape', emoji: '◇', tier: 5 },
      'shape-oval': { id: 'oval', name: 'Oval', emoji: '🏉', tier: 5 },
      'shape-crescent': { id: 'crescent', name: 'Crescent', emoji: '🌙', tier: 5 },
      'shape-spiral': { id: 'spiral', name: 'Spiral', emoji: '🌀', tier: 6 },
      'shape-cube': { id: 'cube', name: 'Cube', emoji: '🎲', tier: 6 },
      'shape-sphere': { id: 'sphere', name: 'Sphere', emoji: '⚽', tier: 6 },
      'shape-pyramid': { id: 'pyramid', name: 'Pyramid', emoji: '🔺', tier: 6 },
      'shape-cone': { id: 'cone', name: 'Cone', emoji: '🍦', tier: 7 },
      'shape-cylinder': { id: 'cylinder', name: 'Cylinder', emoji: '🗜️', tier: 7 },
      'shape-prism': { id: 'prism', name: 'Prism', emoji: '🔷', tier: 7 },
      'shape-torus': { id: 'torus', name: 'Torus', emoji: '🍩', tier: 7 },
      'size-tiny': { id: 'tiny', name: 'Tiny', emoji: '🔬', tier: 3 },
      'size-small': { id: 'small', name: 'Small', emoji: '🤏', tier: 3 },
      'size-medium': { id: 'medium', name: 'Medium', emoji: '👌', tier: 3 },
      'size-large': { id: 'large', name: 'Large', emoji: '🤲', tier: 3 },
      'size-huge': { id: 'huge', name: 'Huge', emoji: '🏔️', tier: 4 },
      'size-gigantic': { id: 'gigantic', name: 'Gigantic', emoji: '🦕', tier: 4 },
      'size-microscopic': { id: 'microscopic', name: 'Microscopic', emoji: '🔬', tier: 4 },
      'size-miniature': { id: 'miniature', name: 'Miniature', emoji: '🏠', tier: 4 },
      'size-colossal': { id: 'colossal', name: 'Colossal', emoji: '🗿', tier: 5 },
      'size-enormous': { id: 'enormous', name: 'Enormous', emoji: '🐘', tier: 5 },
      'size-massive': { id: 'massive', name: 'Massive', emoji: '⛰️', tier: 5 },
      'size-petite': { id: 'petite', name: 'Petite', emoji: '🧸', tier: 5 },
      'size-compact': { id: 'compact', name: 'Compact', emoji: '📦', tier: 6 },
      'size-spacious': { id: 'spacious', name: 'Spacious', emoji: '🏟️', tier: 6 },
      'size-immense': { id: 'immense', name: 'Immense', emoji: '🌠', tier: 6 },
      'size-vast': { id: 'vast', name: 'Vast', emoji: '💧', tier: 6 },
      'size-infinite-size': { id: 'infinite-size', name: 'Infinite Size', emoji: '∞', tier: 7 },
      'size-nano': { id: 'nano', name: 'Nano', emoji: '⚛️', tier: 7 },
      'size-macro': { id: 'macro', name: 'Macro', emoji: '🔭', tier: 7 },
      'size-mega-size': { id: 'mega-size', name: 'Mega Size', emoji: '🦖', tier: 7 },
      'texture-smooth': { id: 'smooth', name: 'Smooth', emoji: '🧊', tier: 3 },
      'texture-rough': { id: 'rough', name: 'Rough', emoji: '🪨', tier: 3 },
      'texture-soft': { id: 'soft', name: 'Soft', emoji: '🧸', tier: 3 },
      'texture-hard': { id: 'hard', name: 'Hard', emoji: '💎', tier: 3 },
      'texture-fuzzy': { id: 'fuzzy', name: 'Fuzzy', emoji: '🧶', tier: 4 },
      'texture-silky': { id: 'silky', name: 'Silky', emoji: '🎀', tier: 4 },
      'texture-bumpy': { id: 'bumpy', name: 'Bumpy', emoji: '🫧', tier: 4 },
      'texture-slippery': { id: 'slippery', name: 'Slippery', emoji: '🧈', tier: 4 },
      'texture-sticky': { id: 'sticky', name: 'Sticky', emoji: '🍯', tier: 5 },
      'texture-grainy': { id: 'grainy', name: 'Grainy', emoji: '🌾', tier: 5 },
      'texture-glossy': { id: 'glossy', name: 'Glossy', emoji: '✨', tier: 5 },
      'texture-matte': { id: 'matte', name: 'Matte', emoji: '🌫️', tier: 5 },
      'texture-velvety': { id: 'velvety', name: 'Velvety', emoji: '🥀', tier: 6 },
      'texture-waxy': { id: 'waxy', name: 'Waxy', emoji: '🕯️', tier: 6 },
      'texture-crusty': { id: 'crusty', name: 'Crusty', emoji: '🍞', tier: 6 },
      'texture-flaky': { id: 'flaky', name: 'Flaky', emoji: '❄️', tier: 6 },
      'texture-spongy': { id: 'spongy', name: 'Spongy', emoji: '🧽', tier: 7 },
      'texture-brittle': { id: 'brittle', name: 'Brittle', emoji: '🍪', tier: 7 },
      'texture-elastic': { id: 'elastic', name: 'Elastic', emoji: '🏐', tier: 7 },
      'texture-rigid': { id: 'rigid', name: 'Rigid', emoji: '📏', tier: 7 },
      'temperature-freezing': { id: 'freezing', name: 'Freezing', emoji: '🧊', tier: 3 },
      'temperature-cold': { id: 'cold', name: 'Cold', emoji: '❄️', tier: 3 },
      'temperature-cool': { id: 'cool', name: 'Cool', emoji: '😎', tier: 3 },
      'temperature-warm': { id: 'warm', name: 'Warm', emoji: '☀️', tier: 3 },
      'temperature-hot': { id: 'hot', name: 'Hot', emoji: '🔥', tier: 4 },
      'temperature-scorching': { id: 'scorching', name: 'Scorching', emoji: '🌡️', tier: 4 },
      'temperature-lukewarm': { id: 'lukewarm', name: 'Lukewarm', emoji: '🫖', tier: 4 },
      'temperature-tepid': { id: 'tepid', name: 'Tepid', emoji: '🛁', tier: 4 },
      'temperature-boiling': { id: 'boiling', name: 'Boiling', emoji: '🫕', tier: 5 },
      'temperature-simmering': { id: 'simmering', name: 'Simmering', emoji: '🍲', tier: 5 },
      'temperature-chilled': { id: 'chilled', name: 'Chilled', emoji: '🧃', tier: 5 },
      'temperature-heated': { id: 'heated', name: 'Heated', emoji: '♨️', tier: 5 },
      'temperature-tropical-heat': { id: 'tropical-heat', name: 'Tropical Heat', emoji: '🌴', tier: 6 },
      'temperature-arctic-cold': { id: 'arctic-cold', name: 'Arctic Cold', emoji: '🐧', tier: 6 },
      'temperature-temperate': { id: 'temperate', name: 'Temperate', emoji: '🌡️', tier: 6 },
      'temperature-mild': { id: 'mild', name: 'Mild', emoji: '🌤️', tier: 6 },
      'temperature-sweltering': { id: 'sweltering', name: 'Sweltering', emoji: '🥵', tier: 7 },
      'temperature-frosty': { id: 'frosty', name: 'Frosty', emoji: '🧊', tier: 7 },
      'temperature-balmy': { id: 'balmy', name: 'Balmy', emoji: '🌺', tier: 7 },
      'temperature-torrid': { id: 'torrid', name: 'Torrid', emoji: '🏜️', tier: 7 },
      'speed-slow': { id: 'slow', name: 'Slow', emoji: '🐌', tier: 3 },
      'speed-fast': { id: 'fast', name: 'Fast', emoji: '🐆', tier: 3 },
      'speed-quick': { id: 'quick', name: 'Quick', emoji: '💡', tier: 3 },
      'speed-rapid': { id: 'rapid', name: 'Rapid', emoji: '🏃', tier: 3 },
      'speed-swift': { id: 'swift', name: 'Swift', emoji: '🦅', tier: 4 },
      'speed-sluggish': { id: 'sluggish', name: 'Sluggish', emoji: '🦥', tier: 4 },
      'speed-speedy': { id: 'speedy', name: 'Speedy', emoji: '🏎️', tier: 4 },
      'speed-hasty': { id: 'hasty', name: 'Hasty', emoji: '⏰', tier: 4 },
      'speed-leisurely': { id: 'leisurely', name: 'Leisurely', emoji: '🚶', tier: 5 },
      'speed-brisk': { id: 'brisk', name: 'Brisk', emoji: '🚴', tier: 5 },
      'speed-lightning-fast': { id: 'lightning-fast', name: 'Lightning Fast', emoji: '⚡', tier: 5 },
      'speed-glacial': { id: 'glacial', name: 'Glacial', emoji: '🧊', tier: 5 },
      'speed-supersonic': { id: 'supersonic', name: 'Supersonic', emoji: '✈️', tier: 6 },
      'speed-hypersonic': { id: 'hypersonic', name: 'Hypersonic', emoji: '🚀', tier: 6 },
      'speed-snail-pace': { id: 'snail-pace', name: 'Snail Pace', emoji: '🐌', tier: 6 },
      'speed-bullet-speed': { id: 'bullet-speed', name: 'Bullet Speed', emoji: '🔫', tier: 6 },
      'speed-instant': { id: 'instant', name: 'Instant', emoji: '⚡', tier: 7 },
      'speed-gradual': { id: 'gradual', name: 'Gradual', emoji: '⏳', tier: 7 },
      'speed-accelerating': { id: 'accelerating', name: 'Accelerating', emoji: '📈', tier: 7 },
      'speed-decelerating': { id: 'decelerating', name: 'Decelerating', emoji: '📉', tier: 7 },
      'emotion-happy': { id: 'happy', name: 'Happy', emoji: '😊', tier: 3 },
      'emotion-sad': { id: 'sad', name: 'Sad', emoji: '😢', tier: 3 },
      'emotion-angry': { id: 'angry', name: 'Angry', emoji: '😠', tier: 3 },
      'emotion-excited': { id: 'excited', name: 'Excited', emoji: '🤩', tier: 3 },
      'emotion-calm': { id: 'calm', name: 'Calm', emoji: '😌', tier: 4 },
      'emotion-nervous': { id: 'nervous', name: 'Nervous', emoji: '😰', tier: 4 },
      'emotion-joyful': { id: 'joyful', name: 'Joyful', emoji: '😄', tier: 4 },
      'emotion-melancholy': { id: 'melancholy', name: 'Melancholy', emoji: '😔', tier: 4 },
      'emotion-furious': { id: 'furious', name: 'Furious', emoji: '😡', tier: 5 },
      'emotion-peaceful': { id: 'peaceful', name: 'Peaceful', emoji: '☮️', tier: 5 },
      'emotion-anxious': { id: 'anxious', name: 'Anxious', emoji: '😟', tier: 5 },
      'emotion-content': { id: 'content', name: 'Content', emoji: '😊', tier: 5 },
      'emotion-frustrated': { id: 'frustrated', name: 'Frustrated', emoji: '😤', tier: 6 },
      'emotion-delighted': { id: 'delighted', name: 'Delighted', emoji: '😃', tier: 6 },
      'emotion-depressed': { id: 'depressed', name: 'Depressed', emoji: '😞', tier: 6 },
      'emotion-serene': { id: 'serene', name: 'Serene', emoji: '🧘', tier: 6 },
      'emotion-ecstatic': { id: 'ecstatic', name: 'Ecstatic', emoji: '🤗', tier: 7 },
      'emotion-miserable': { id: 'miserable', name: 'Miserable', emoji: '😭', tier: 7 },
      'emotion-cheerful': { id: 'cheerful', name: 'Cheerful', emoji: '😁', tier: 7 },
      'emotion-gloomy': { id: 'gloomy', name: 'Gloomy', emoji: '😑', tier: 7 },
      'direction-north': { id: 'north', name: 'North', emoji: '⬆️', tier: 3 },
      'direction-south': { id: 'south', name: 'South', emoji: '⬇️', tier: 3 },
      'direction-east': { id: 'east', name: 'East', emoji: '➡️', tier: 3 },
      'direction-west': { id: 'west', name: 'West', emoji: '⬅️', tier: 3 },
      'direction-up': { id: 'up', name: 'Up', emoji: '⬆️', tier: 4 },
      'direction-down': { id: 'down', name: 'Down', emoji: '⬇️', tier: 4 },
      'direction-left': { id: 'left', name: 'Left', emoji: '⬅️', tier: 4 },
      'direction-right': { id: 'right', name: 'Right', emoji: '➡️', tier: 4 },
      'direction-forward': { id: 'forward', name: 'Forward', emoji: '▶️', tier: 5 },
      'direction-backward': { id: 'backward', name: 'Backward', emoji: '◀️', tier: 5 },
      'direction-northeast': { id: 'northeast', name: 'Northeast', emoji: '↗️', tier: 5 },
      'direction-northwest': { id: 'northwest', name: 'Northwest', emoji: '↖️', tier: 5 },
      'direction-southeast': { id: 'southeast', name: 'Southeast', emoji: '↘️', tier: 6 },
      'direction-southwest': { id: 'southwest', name: 'Southwest', emoji: '↙️', tier: 6 },
      'direction-upward': { id: 'upward', name: 'Upward', emoji: '⬆️', tier: 6 },
      'direction-downward': { id: 'downward', name: 'Downward', emoji: '⬇️', tier: 6 },
      'direction-inward': { id: 'inward', name: 'Inward', emoji: '🔄', tier: 7 },
      'direction-outward': { id: 'outward', name: 'Outward', emoji: '🔀', tier: 7 },
      'direction-sideways': { id: 'sideways', name: 'Sideways', emoji: '↔️', tier: 7 },
      'direction-diagonal': { id: 'diagonal', name: 'Diagonal', emoji: '↗️', tier: 7 },
      'pattern-striped': { id: 'striped', name: 'Striped', emoji: '🦓', tier: 3 },
      'pattern-spotted': { id: 'spotted', name: 'Spotted', emoji: '🐆', tier: 3 },
      'pattern-checkered': { id: 'checkered', name: 'Checkered', emoji: '🏁', tier: 3 },
      'pattern-solid': { id: 'solid', name: 'Solid', emoji: '⬛', tier: 3 },
      'pattern-gradient': { id: 'gradient', name: 'Gradient', emoji: '🌈', tier: 4 },
      'pattern-polka-dot': { id: 'polka-dot', name: 'Polka Dot', emoji: '⚪', tier: 4 },
      'pattern-zigzag': { id: 'zigzag', name: 'Zigzag', emoji: '〰️', tier: 4 },
      'pattern-wavy': { id: 'wavy', name: 'Wavy', emoji: '💦', tier: 4 },
      'pattern-plaid': { id: 'plaid', name: 'Plaid', emoji: '🧣', tier: 5 },
      'pattern-paisley': { id: 'paisley', name: 'Paisley', emoji: '🌀', tier: 5 },
      'pattern-floral-pattern': { id: 'floral-pattern', name: 'Floral Pattern', emoji: '🌺', tier: 5 },
      'pattern-geometric': { id: 'geometric', name: 'Geometric', emoji: '🔷', tier: 5 },
      'pattern-abstract-pattern': { id: 'abstract-pattern', name: 'Abstract Pattern', emoji: '🎨', tier: 6 },
      'pattern-swirl': { id: 'swirl', name: 'Swirl', emoji: '🌀', tier: 6 },
      'pattern-lattice': { id: 'lattice', name: 'Lattice', emoji: '⊞', tier: 6 },
      'pattern-honeycomb': { id: 'honeycomb', name: 'Honeycomb', emoji: '🐝', tier: 6 },
      'pattern-herringbone': { id: 'herringbone', name: 'Herringbone', emoji: '🐟', tier: 7 },
      'pattern-chevron': { id: 'chevron', name: 'Chevron', emoji: 'Λ', tier: 7 },
      'pattern-argyle': { id: 'argyle', name: 'Argyle', emoji: '♦️', tier: 7 },
      'pattern-houndstooth': { id: 'houndstooth', name: 'Houndstooth', emoji: '🦷', tier: 7 },
      'material-plastic': { id: 'plastic', name: 'Plastic', emoji: '🪣', tier: 3 },
      'material-rubber': { id: 'rubber', name: 'Rubber', emoji: '🎈', tier: 3 },
      'material-foam': { id: 'foam', name: 'Foam', emoji: '🧽', tier: 3 },
      'material-leather': { id: 'leather', name: 'Leather', emoji: '👜', tier: 3 },
      'material-vinyl': { id: 'vinyl', name: 'Vinyl', emoji: '💿', tier: 4 },
      'material-latex': { id: 'latex', name: 'Latex', emoji: '🎈', tier: 4 },
      'material-nylon': { id: 'nylon', name: 'Nylon', emoji: '🎒', tier: 4 },
      'material-polyester': { id: 'polyester', name: 'Polyester', emoji: '👕', tier: 4 },
      'material-canvas': { id: 'canvas', name: 'Canvas', emoji: '🖼️', tier: 5 },
      'material-denim': { id: 'denim', name: 'Denim', emoji: '👖', tier: 5 },
      'material-velvet': { id: 'velvet', name: 'Velvet', emoji: '🥀', tier: 5 },
      'material-satin': { id: 'satin', name: 'Satin', emoji: '🎀', tier: 5 },
      'material-linen': { id: 'linen', name: 'Linen', emoji: '🛏️', tier: 6 },
      'material-wool': { id: 'wool', name: 'Wool', emoji: '🐑', tier: 6 },
      'material-cashmere': { id: 'cashmere', name: 'Cashmere', emoji: '🧥', tier: 6 },
      'material-fleece': { id: 'fleece', name: 'Fleece', emoji: '🧸', tier: 6 },
      'material-spandex': { id: 'spandex', name: 'Spandex', emoji: '🤸', tier: 7 },
      'material-rayon': { id: 'rayon', name: 'Rayon', emoji: '👗', tier: 7 },
      'material-acrylic': { id: 'acrylic', name: 'Acrylic', emoji: '🎨', tier: 7 },
      'material-organza': { id: 'organza', name: 'Organza', emoji: '👰', tier: 7 },
      'number-0': { id: 'number-0', name: 'Number 0', emoji: '0️⃣', tier: 2 },
      'number-1': { id: 'number-1', name: 'Number 1', emoji: '1️⃣', tier: 2 },
      'number-2': { id: 'number-2', name: 'Number 2', emoji: '2️⃣', tier: 2 },
      'number-3': { id: 'number-3', name: 'Number 3', emoji: '3️⃣', tier: 2 },
      'number-4': { id: 'number-4', name: 'Number 4', emoji: '4️⃣', tier: 2 },
      'number-5': { id: 'number-5', name: 'Number 5', emoji: '5️⃣', tier: 2 },
      'number-6': { id: 'number-6', name: 'Number 6', emoji: '6️⃣', tier: 2 },
      'number-7': { id: 'number-7', name: 'Number 7', emoji: '7️⃣', tier: 2 },
      'number-8': { id: 'number-8', name: 'Number 8', emoji: '8️⃣', tier: 2 },
      'number-9': { id: 'number-9', name: 'Number 9', emoji: '9️⃣', tier: 2 },
      'number-10': { id: 'number-10', name: 'Number 10', emoji: '🔟', tier: 2 },
      'number-11': { id: 'number-11', name: 'Number 11', emoji: '1️⃣1️⃣', tier: 2 },
      'number-12': { id: 'number-12', name: 'Number 12', emoji: '1️⃣2️⃣', tier: 2 },
      'number-13': { id: 'number-13', name: 'Number 13', emoji: '1️⃣3️⃣', tier: 2 },
      'number-14': { id: 'number-14', name: 'Number 14', emoji: '1️⃣4️⃣', tier: 2 },
      'number-15': { id: 'number-15', name: 'Number 15', emoji: '1️⃣5️⃣', tier: 2 },
      'number-16': { id: 'number-16', name: 'Number 16', emoji: '1️⃣6️⃣', tier: 2 },
      'number-17': { id: 'number-17', name: 'Number 17', emoji: '1️⃣7️⃣', tier: 2 },
      'number-18': { id: 'number-18', name: 'Number 18', emoji: '1️⃣8️⃣', tier: 2 },
      'number-19': { id: 'number-19', name: 'Number 19', emoji: '1️⃣9️⃣', tier: 2 },
      'number-20': { id: 'number-20', name: 'Number 20', emoji: '2️⃣0️⃣', tier: 3 },
      'number-21': { id: 'number-21', name: 'Number 21', emoji: '2️⃣1️⃣', tier: 3 },
      'number-22': { id: 'number-22', name: 'Number 22', emoji: '2️⃣2️⃣', tier: 3 },
      'number-23': { id: 'number-23', name: 'Number 23', emoji: '2️⃣3️⃣', tier: 3 },
      'number-24': { id: 'number-24', name: 'Number 24', emoji: '2️⃣4️⃣', tier: 3 },
      'number-25': { id: 'number-25', name: 'Number 25', emoji: '2️⃣5️⃣', tier: 3 },
      'number-26': { id: 'number-26', name: 'Number 26', emoji: '2️⃣6️⃣', tier: 3 },
      'number-27': { id: 'number-27', name: 'Number 27', emoji: '2️⃣7️⃣', tier: 3 },
      'number-28': { id: 'number-28', name: 'Number 28', emoji: '2️⃣8️⃣', tier: 3 },
      'number-29': { id: 'number-29', name: 'Number 29', emoji: '2️⃣9️⃣', tier: 3 },
      'number-30': { id: 'number-30', name: 'Number 30', emoji: '3️⃣0️⃣', tier: 3 },
      'number-31': { id: 'number-31', name: 'Number 31', emoji: '3️⃣1️⃣', tier: 3 },
      'number-32': { id: 'number-32', name: 'Number 32', emoji: '3️⃣2️⃣', tier: 3 },
      'number-33': { id: 'number-33', name: 'Number 33', emoji: '3️⃣3️⃣', tier: 3 },
      'number-34': { id: 'number-34', name: 'Number 34', emoji: '3️⃣4️⃣', tier: 3 },
      'number-35': { id: 'number-35', name: 'Number 35', emoji: '3️⃣5️⃣', tier: 3 },
      'number-36': { id: 'number-36', name: 'Number 36', emoji: '3️⃣6️⃣', tier: 3 },
      'number-37': { id: 'number-37', name: 'Number 37', emoji: '3️⃣7️⃣', tier: 3 },
      'number-38': { id: 'number-38', name: 'Number 38', emoji: '3️⃣8️⃣', tier: 3 },
      'number-39': { id: 'number-39', name: 'Number 39', emoji: '3️⃣9️⃣', tier: 3 },
      'number-40': { id: 'number-40', name: 'Number 40', emoji: '4️⃣0️⃣', tier: 4 },
      'number-41': { id: 'number-41', name: 'Number 41', emoji: '4️⃣1️⃣', tier: 4 },
      'number-42': { id: 'number-42', name: 'Number 42', emoji: '4️⃣2️⃣', tier: 4 },
      'number-43': { id: 'number-43', name: 'Number 43', emoji: '4️⃣3️⃣', tier: 4 },
      'number-44': { id: 'number-44', name: 'Number 44', emoji: '4️⃣4️⃣', tier: 4 },
      'number-45': { id: 'number-45', name: 'Number 45', emoji: '4️⃣5️⃣', tier: 4 },
      'number-46': { id: 'number-46', name: 'Number 46', emoji: '4️⃣6️⃣', tier: 4 },
      'number-47': { id: 'number-47', name: 'Number 47', emoji: '4️⃣7️⃣', tier: 4 },
      'number-48': { id: 'number-48', name: 'Number 48', emoji: '4️⃣8️⃣', tier: 4 },
      'number-49': { id: 'number-49', name: 'Number 49', emoji: '4️⃣9️⃣', tier: 4 },
      'number-50': { id: 'number-50', name: 'Number 50', emoji: '5️⃣0️⃣', tier: 4 },
      'number-51': { id: 'number-51', name: 'Number 51', emoji: '5️⃣1️⃣', tier: 4 },
      'number-52': { id: 'number-52', name: 'Number 52', emoji: '5️⃣2️⃣', tier: 4 },
      'number-53': { id: 'number-53', name: 'Number 53', emoji: '5️⃣3️⃣', tier: 4 },
      'number-54': { id: 'number-54', name: 'Number 54', emoji: '5️⃣4️⃣', tier: 4 },
      'number-55': { id: 'number-55', name: 'Number 55', emoji: '5️⃣5️⃣', tier: 4 },
      'number-56': { id: 'number-56', name: 'Number 56', emoji: '5️⃣6️⃣', tier: 4 },
      'number-57': { id: 'number-57', name: 'Number 57', emoji: '5️⃣7️⃣', tier: 4 },
      'number-58': { id: 'number-58', name: 'Number 58', emoji: '5️⃣8️⃣', tier: 4 },
      'number-59': { id: 'number-59', name: 'Number 59', emoji: '5️⃣9️⃣', tier: 4 },
      'number-60': { id: 'number-60', name: 'Number 60', emoji: '6️⃣0️⃣', tier: 5 },
      'number-61': { id: 'number-61', name: 'Number 61', emoji: '6️⃣1️⃣', tier: 5 },
      'number-62': { id: 'number-62', name: 'Number 62', emoji: '6️⃣2️⃣', tier: 5 },
      'number-63': { id: 'number-63', name: 'Number 63', emoji: '6️⃣3️⃣', tier: 5 },
      'number-64': { id: 'number-64', name: 'Number 64', emoji: '6️⃣4️⃣', tier: 5 },
      'number-65': { id: 'number-65', name: 'Number 65', emoji: '6️⃣5️⃣', tier: 5 },
      'number-66': { id: 'number-66', name: 'Number 66', emoji: '6️⃣6️⃣', tier: 5 },
      'number-67': { id: 'number-67', name: 'Number 67', emoji: '6️⃣7️⃣', tier: 5 },
      'number-68': { id: 'number-68', name: 'Number 68', emoji: '6️⃣8️⃣', tier: 5 },
      'number-69': { id: 'number-69', name: 'Number 69', emoji: '6️⃣9️⃣', tier: 5 },
      'number-70': { id: 'number-70', name: 'Number 70', emoji: '7️⃣0️⃣', tier: 5 },
      'number-71': { id: 'number-71', name: 'Number 71', emoji: '7️⃣1️⃣', tier: 5 },
      'number-72': { id: 'number-72', name: 'Number 72', emoji: '7️⃣2️⃣', tier: 5 },
      'number-73': { id: 'number-73', name: 'Number 73', emoji: '7️⃣3️⃣', tier: 5 },
      'number-74': { id: 'number-74', name: 'Number 74', emoji: '7️⃣4️⃣', tier: 5 },
      'number-75': { id: 'number-75', name: 'Number 75', emoji: '7️⃣5️⃣', tier: 5 },
      'number-76': { id: 'number-76', name: 'Number 76', emoji: '7️⃣6️⃣', tier: 5 },
      'number-77': { id: 'number-77', name: 'Number 77', emoji: '7️⃣7️⃣', tier: 5 },
      'number-78': { id: 'number-78', name: 'Number 78', emoji: '7️⃣8️⃣', tier: 5 },
      'number-79': { id: 'number-79', name: 'Number 79', emoji: '7️⃣9️⃣', tier: 5 },
      'number-80': { id: 'number-80', name: 'Number 80', emoji: '8️⃣0️⃣', tier: 6 },
      'number-81': { id: 'number-81', name: 'Number 81', emoji: '8️⃣1️⃣', tier: 6 },
      'number-82': { id: 'number-82', name: 'Number 82', emoji: '8️⃣2️⃣', tier: 6 },
      'number-83': { id: 'number-83', name: 'Number 83', emoji: '8️⃣3️⃣', tier: 6 },
      'number-84': { id: 'number-84', name: 'Number 84', emoji: '8️⃣4️⃣', tier: 6 },
      'number-85': { id: 'number-85', name: 'Number 85', emoji: '8️⃣5️⃣', tier: 6 },
      'number-86': { id: 'number-86', name: 'Number 86', emoji: '8️⃣6️⃣', tier: 6 },
      'number-87': { id: 'number-87', name: 'Number 87', emoji: '8️⃣7️⃣', tier: 6 },
      'number-88': { id: 'number-88', name: 'Number 88', emoji: '8️⃣8️⃣', tier: 6 },
      'number-89': { id: 'number-89', name: 'Number 89', emoji: '8️⃣9️⃣', tier: 6 },
      'number-90': { id: 'number-90', name: 'Number 90', emoji: '9️⃣0️⃣', tier: 6 },
      'number-91': { id: 'number-91', name: 'Number 91', emoji: '9️⃣1️⃣', tier: 6 },
      'number-92': { id: 'number-92', name: 'Number 92', emoji: '9️⃣2️⃣', tier: 6 },
      'number-93': { id: 'number-93', name: 'Number 93', emoji: '9️⃣3️⃣', tier: 6 },
      'number-94': { id: 'number-94', name: 'Number 94', emoji: '9️⃣4️⃣', tier: 6 },
      'number-95': { id: 'number-95', name: 'Number 95', emoji: '9️⃣5️⃣', tier: 6 },
      'number-96': { id: 'number-96', name: 'Number 96', emoji: '9️⃣6️⃣', tier: 6 },
      'number-97': { id: 'number-97', name: 'Number 97', emoji: '9️⃣7️⃣', tier: 6 },
      'number-98': { id: 'number-98', name: 'Number 98', emoji: '9️⃣8️⃣', tier: 6 },
      'number-99': { id: 'number-99', name: 'Number 99', emoji: '9️⃣9️⃣', tier: 6 },
      'letter-a': { id: 'letter-a', name: 'Letter A', emoji: '🅰️', tier: 2 },
      'letter-b': { id: 'letter-b', name: 'Letter B', emoji: '🅱️', tier: 2 },
      'letter-c': { id: 'letter-c', name: 'Letter C', emoji: 'ℂ', tier: 2 },
      'letter-d': { id: 'letter-d', name: 'Letter D', emoji: 'Ⓓ', tier: 2 },
      'letter-e': { id: 'letter-e', name: 'Letter E', emoji: 'Ⓔ', tier: 2 },
      'letter-f': { id: 'letter-f', name: 'Letter F', emoji: 'Ⓕ', tier: 3 },
      'letter-g': { id: 'letter-g', name: 'Letter G', emoji: 'Ⓖ', tier: 3 },
      'letter-h': { id: 'letter-h', name: 'Letter H', emoji: 'Ⓗ', tier: 3 },
      'letter-i': { id: 'letter-i', name: 'Letter I', emoji: 'ℹ️', tier: 3 },
      'letter-j': { id: 'letter-j', name: 'Letter J', emoji: 'Ⓙ', tier: 3 },
      'letter-k': { id: 'letter-k', name: 'Letter K', emoji: 'Ⓚ', tier: 4 },
      'letter-l': { id: 'letter-l', name: 'Letter L', emoji: 'Ⓛ', tier: 4 },
      'letter-m': { id: 'letter-m', name: 'Letter M', emoji: 'Ⓜ️', tier: 4 },
      'letter-n': { id: 'letter-n', name: 'Letter N', emoji: 'Ⓝ', tier: 4 },
      'letter-o': { id: 'letter-o', name: 'Letter O', emoji: 'Ⓞ', tier: 4 },
      'letter-p': { id: 'letter-p', name: 'Letter P', emoji: '🅿️', tier: 5 },
      'letter-q': { id: 'letter-q', name: 'Letter Q', emoji: 'Ⓠ', tier: 5 },
      'letter-r': { id: 'letter-r', name: 'Letter R', emoji: 'Ⓡ', tier: 5 },
      'letter-s': { id: 'letter-s', name: 'Letter S', emoji: 'Ⓢ', tier: 5 },
      'letter-t': { id: 'letter-t', name: 'Letter T', emoji: 'Ⓣ', tier: 5 },
      'letter-u': { id: 'letter-u', name: 'Letter U', emoji: 'Ⓤ', tier: 6 },
      'letter-v': { id: 'letter-v', name: 'Letter V', emoji: 'Ⓥ', tier: 6 },
      'letter-w': { id: 'letter-w', name: 'Letter W', emoji: 'Ⓦ', tier: 6 },
      'letter-x': { id: 'letter-x', name: 'Letter X', emoji: '❌', tier: 6 },
      'letter-y': { id: 'letter-y', name: 'Letter Y', emoji: 'Ⓨ', tier: 6 },
      'letter-z': { id: 'letter-z', name: 'Letter Z', emoji: '💤', tier: 7 },
      'super-form': { id: 'super-form', name: 'Super Form', emoji: '✨', tier: 3 },
      'super-style': { id: 'super-style', name: 'Super Style', emoji: '✴️', tier: 3 },
      'super-state': { id: 'super-state', name: 'Super State', emoji: '✨', tier: 4 },
      'super-class': { id: 'super-class', name: 'Super Class', emoji: '🌟', tier: 5 },
      'super-stage': { id: 'super-stage', name: 'Super Stage', emoji: '🌌', tier: 6 },
      'super-version': { id: 'super-version', name: 'Super Version', emoji: '🔯', tier: 6 },
      'super-variant': { id: 'super-variant', name: 'Super Variant', emoji: '🐜', tier: 7 },
      'mega-kind': { id: 'mega-kind', name: 'Mega Kind', emoji: '💫', tier: 3 },
      'mega-phase': { id: 'mega-phase', name: 'Mega Phase', emoji: '🔯', tier: 4 },
      'mega-grade': { id: 'mega-grade', name: 'Mega Grade', emoji: '🌠', tier: 5 },
      'mega-tier': { id: 'mega-tier', name: 'Mega Tier', emoji: '🌟', tier: 6 },
      'mega-degree': { id: 'mega-degree', name: 'Mega Degree', emoji: '🔯', tier: 6 },
      'mega-model': { id: 'mega-model', name: 'Mega Model', emoji: '✨', tier: 7 },
      'ultra-type': { id: 'ultra-type', name: 'Ultra Type', emoji: '✨', tier: 3 },
      'ultra-mode': { id: 'ultra-mode', name: 'Ultra Mode', emoji: '🌠', tier: 4 },
      'ultra-level': { id: 'ultra-level', name: 'Ultra Level', emoji: '🌟', tier: 5 },
      'ultra-rank': { id: 'ultra-rank', name: 'Ultra Rank', emoji: '✨', tier: 6 },
      'ultra-step': { id: 'ultra-step', name: 'Ultra Step', emoji: '💠', tier: 6 },
      'ultra-edition': { id: 'ultra-edition', name: 'Ultra Edition', emoji: '✨', tier: 7 },
      'ultra-category': { id: 'ultra-category', name: 'Ultra Category', emoji: '💫', tier: 8 },
      'hyper-form': { id: 'hyper-form', name: 'Hyper Form', emoji: '🌟', tier: 3 },
      'hyper-style': { id: 'hyper-style', name: 'Hyper Style', emoji: '🌟', tier: 4 },
      'hyper-state': { id: 'hyper-state', name: 'Hyper State', emoji: '🌟', tier: 5 },
      'hyper-class': { id: 'hyper-class', name: 'Hyper Class', emoji: '🌌', tier: 6 },
      'hyper-stage': { id: 'hyper-stage', name: 'Hyper Stage', emoji: '💠', tier: 6 },
      'hyper-version': { id: 'hyper-version', name: 'Hyper Version', emoji: '🔷', tier: 7 },
      'hyper-variant': { id: 'hyper-variant', name: 'Hyper Variant', emoji: '🐜', tier: 8 },
      'mini-kind': { id: 'mini-kind', name: 'Mini Kind', emoji: '🌠', tier: 4 },
      'mini-phase': { id: 'mini-phase', name: 'Mini Phase', emoji: '💠', tier: 5 },
      'mini-grade': { id: 'mini-grade', name: 'Mini Grade', emoji: '🔯', tier: 6 },
      'mini-tier': { id: 'mini-tier', name: 'Mini Tier', emoji: '✨', tier: 6 },
      'mini-degree': { id: 'mini-degree', name: 'Mini Degree', emoji: '🌟', tier: 7 },
      'mini-model': { id: 'mini-model', name: 'Mini Model', emoji: '✨', tier: 8 },
      'micro-type': { id: 'micro-type', name: 'Micro Type', emoji: '🌌', tier: 4 },
      'micro-mode': { id: 'micro-mode', name: 'Micro Mode', emoji: '✨', tier: 5 },
      'micro-level': { id: 'micro-level', name: 'Micro Level', emoji: '🌟', tier: 6 },
      'micro-rank': { id: 'micro-rank', name: 'Micro Rank', emoji: '🌠', tier: 6 },
      'micro-step': { id: 'micro-step', name: 'Micro Step', emoji: '🌟', tier: 7 },
      'micro-edition': { id: 'micro-edition', name: 'Micro Edition', emoji: '🌠', tier: 8 },
      'micro-category': { id: 'micro-category', name: 'Micro Category', emoji: '🌠', tier: 9 },
      'macro-form': { id: 'macro-form', name: 'Macro Form', emoji: '🔷', tier: 4 },
      'macro-style': { id: 'macro-style', name: 'Macro Style', emoji: '🌟', tier: 5 },
      'macro-state': { id: 'macro-state', name: 'Macro State', emoji: '🌟', tier: 6 },
      'macro-class': { id: 'macro-class', name: 'Macro Class', emoji: '🌟', tier: 6 },
      'macro-stage': { id: 'macro-stage', name: 'Macro Stage', emoji: '💫', tier: 7 },
      'macro-version': { id: 'macro-version', name: 'Macro Version', emoji: '🔷', tier: 8 },
      'macro-variant': { id: 'macro-variant', name: 'Macro Variant', emoji: '🐜', tier: 9 },
      'proto-kind': { id: 'proto-kind', name: 'Proto Kind', emoji: '🌟', tier: 5 },
      'proto-phase': { id: 'proto-phase', name: 'Proto Phase', emoji: '✨', tier: 6 },
      'proto-grade': { id: 'proto-grade', name: 'Proto Grade', emoji: '💫', tier: 6 },
      'proto-tier': { id: 'proto-tier', name: 'Proto Tier', emoji: '🔷', tier: 7 },
      'proto-degree': { id: 'proto-degree', name: 'Proto Degree', emoji: '✴️', tier: 8 },
      'proto-model': { id: 'proto-model', name: 'Proto Model', emoji: '✨', tier: 9 },
      'neo-type': { id: 'neo-type', name: 'Neo Type', emoji: '🔷', tier: 5 },
      'neo-mode': { id: 'neo-mode', name: 'Neo Mode', emoji: '⭐', tier: 6 },
      'neo-level': { id: 'neo-level', name: 'Neo Level', emoji: '💫', tier: 6 },
      'neo-rank': { id: 'neo-rank', name: 'Neo Rank', emoji: '🔷', tier: 7 },
      'neo-step': { id: 'neo-step', name: 'Neo Step', emoji: '✴️', tier: 8 },
      'neo-edition': { id: 'neo-edition', name: 'Neo Edition', emoji: '🌠', tier: 9 },
      'neo-category': { id: 'neo-category', name: 'Neo Category', emoji: '💠', tier: 9 },
      'pseudo-form': { id: 'pseudo-form', name: 'Pseudo Form', emoji: '🔷', tier: 5 },
      'pseudo-style': { id: 'pseudo-style', name: 'Pseudo Style', emoji: '💫', tier: 6 },
      'pseudo-state': { id: 'pseudo-state', name: 'Pseudo State', emoji: '💠', tier: 6 },
      'pseudo-class': { id: 'pseudo-class', name: 'Pseudo Class', emoji: '🌟', tier: 7 },
      'pseudo-stage': { id: 'pseudo-stage', name: 'Pseudo Stage', emoji: '🔯', tier: 8 },
      'pseudo-version': { id: 'pseudo-version', name: 'Pseudo Version', emoji: '🌠', tier: 9 },
      'pseudo-variant': { id: 'pseudo-variant', name: 'Pseudo Variant', emoji: '🐜', tier: 9 },
      'quasi-kind': { id: 'quasi-kind', name: 'Quasi Kind', emoji: '🌌', tier: 6 },
      'quasi-phase': { id: 'quasi-phase', name: 'Quasi Phase', emoji: '🌠', tier: 6 },
      'quasi-grade': { id: 'quasi-grade', name: 'Quasi Grade', emoji: '✨', tier: 7 },
      'quasi-tier': { id: 'quasi-tier', name: 'Quasi Tier', emoji: '🌠', tier: 8 },
      'quasi-degree': { id: 'quasi-degree', name: 'Quasi Degree', emoji: '💫', tier: 9 },
      'quasi-model': { id: 'quasi-model', name: 'Quasi Model', emoji: '🌟', tier: 9 },
      'semi-type': { id: 'semi-type', name: 'Semi Type', emoji: '🌟', tier: 6 },
      'semi-mode': { id: 'semi-mode', name: 'Semi Mode', emoji: '🌠', tier: 6 },
      'semi-level': { id: 'semi-level', name: 'Semi Level', emoji: '✴️', tier: 7 },
      'semi-rank': { id: 'semi-rank', name: 'Semi Rank', emoji: '✨', tier: 8 },
      'semi-step': { id: 'semi-step', name: 'Semi Step', emoji: '✨', tier: 9 },
      'semi-edition': { id: 'semi-edition', name: 'Semi Edition', emoji: '💫', tier: 9 },
      'semi-category': { id: 'semi-category', name: 'Semi Category', emoji: '🌌', tier: 10 },
      'anti-form': { id: 'anti-form', name: 'Anti Form', emoji: '🐜', tier: 6 },
      'anti-style': { id: 'anti-style', name: 'Anti Style', emoji: '🐜', tier: 6 },
      'anti-state': { id: 'anti-state', name: 'Anti State', emoji: '🐜', tier: 7 },
      'anti-class': { id: 'anti-class', name: 'Anti Class', emoji: '🐜', tier: 8 },
      'anti-stage': { id: 'anti-stage', name: 'Anti Stage', emoji: '🐜', tier: 9 },
      'anti-version': { id: 'anti-version', name: 'Anti Version', emoji: '🐜', tier: 9 },
      'anti-variant': { id: 'anti-variant', name: 'Anti Variant', emoji: '🐜', tier: 10 },
      'multi-kind': { id: 'multi-kind', name: 'Multi Kind', emoji: '💫', tier: 6 },
      'multi-phase': { id: 'multi-phase', name: 'Multi Phase', emoji: '✴️', tier: 7 },
      'multi-grade': { id: 'multi-grade', name: 'Multi Grade', emoji: '⭐', tier: 8 },
      'multi-tier': { id: 'multi-tier', name: 'Multi Tier', emoji: '✴️', tier: 9 },
      'multi-degree': { id: 'multi-degree', name: 'Multi Degree', emoji: '🌟', tier: 9 },
      'multi-model': { id: 'multi-model', name: 'Multi Model', emoji: '🌠', tier: 10 },
      'poly-type': { id: 'poly-type', name: 'Poly Type', emoji: '🔯', tier: 6 },
      'poly-mode': { id: 'poly-mode', name: 'Poly Mode', emoji: '✴️', tier: 7 },
      'poly-level': { id: 'poly-level', name: 'Poly Level', emoji: '🔯', tier: 8 },
      'poly-rank': { id: 'poly-rank', name: 'Poly Rank', emoji: '✴️', tier: 9 },
      'poly-step': { id: 'poly-step', name: 'Poly Step', emoji: '🌟', tier: 9 },
      'poly-edition': { id: 'poly-edition', name: 'Poly Edition', emoji: '🌠', tier: 10 },
      'poly-category': { id: 'poly-category', name: 'Poly Category', emoji: '✨', tier: 11 },
      'mono-form': { id: 'mono-form', name: 'Mono Form', emoji: '✴️', tier: 6 },
      'mono-style': { id: 'mono-style', name: 'Mono Style', emoji: '🔷', tier: 7 },
      'mono-state': { id: 'mono-state', name: 'Mono State', emoji: '✨', tier: 8 },
      'mono-class': { id: 'mono-class', name: 'Mono Class', emoji: '🔷', tier: 9 },
      'mono-stage': { id: 'mono-stage', name: 'Mono Stage', emoji: '✴️', tier: 9 },
      'mono-version': { id: 'mono-version', name: 'Mono Version', emoji: '💠', tier: 10 },
      'mono-variant': { id: 'mono-variant', name: 'Mono Variant', emoji: '🐜', tier: 11 },
      'bi-kind': { id: 'bi-kind', name: 'Bi Kind', emoji: '🌟', tier: 7 },
      'bi-phase': { id: 'bi-phase', name: 'Bi Phase', emoji: '💫', tier: 8 },
      'bi-grade': { id: 'bi-grade', name: 'Bi Grade', emoji: '💫', tier: 9 },
      'bi-tier': { id: 'bi-tier', name: 'Bi Tier', emoji: '🌌', tier: 9 },
      'bi-degree': { id: 'bi-degree', name: 'Bi Degree', emoji: '🌠', tier: 10 },
      'bi-model': { id: 'bi-model', name: 'Bi Model', emoji: '🔯', tier: 11 },
      'tri-type': { id: 'tri-type', name: 'Tri Type', emoji: '✨', tier: 7 },
      'tri-mode': { id: 'tri-mode', name: 'Tri Mode', emoji: '✴️', tier: 8 },
      'tri-level': { id: 'tri-level', name: 'Tri Level', emoji: '✨', tier: 9 },
      'tri-rank': { id: 'tri-rank', name: 'Tri Rank', emoji: '💠', tier: 9 },
      'tri-step': { id: 'tri-step', name: 'Tri Step', emoji: '🌟', tier: 10 },
      'tri-edition': { id: 'tri-edition', name: 'Tri Edition', emoji: '✨', tier: 11 },
      'tri-category': { id: 'tri-category', name: 'Tri Category', emoji: '🌟', tier: 12 },
      'quad-form': { id: 'quad-form', name: 'Quad Form', emoji: '✴️', tier: 7 },
      'quad-style': { id: 'quad-style', name: 'Quad Style', emoji: '🌟', tier: 8 },
      'quad-state': { id: 'quad-state', name: 'Quad State', emoji: '✴️', tier: 9 },
      'quad-class': { id: 'quad-class', name: 'Quad Class', emoji: '🔷', tier: 9 },
      'quad-stage': { id: 'quad-stage', name: 'Quad Stage', emoji: '💫', tier: 10 },
      'quad-version': { id: 'quad-version', name: 'Quad Version', emoji: '💠', tier: 11 },
      'quad-variant': { id: 'quad-variant', name: 'Quad Variant', emoji: '🐜', tier: 12 },
      'penta-kind': { id: 'penta-kind', name: 'Penta Kind', emoji: '🖊️', tier: 8 },
      'penta-phase': { id: 'penta-phase', name: 'Penta Phase', emoji: '🖊️', tier: 9 },
      'penta-grade': { id: 'penta-grade', name: 'Penta Grade', emoji: '🖊️', tier: 9 },
      'penta-tier': { id: 'penta-tier', name: 'Penta Tier', emoji: '🖊️', tier: 10 },
      'penta-degree': { id: 'penta-degree', name: 'Penta Degree', emoji: '🖊️', tier: 11 },
      'penta-model': { id: 'penta-model', name: 'Penta Model', emoji: '🖊️', tier: 12 },
      'time-second': { id: 'second', name: 'Second', emoji: '⏱️', tier: 3 },
      'time-minute': { id: 'minute', name: 'Minute', emoji: '⏱️', tier: 3 },
      'time-hour': { id: 'hour', name: 'Hour', emoji: '⏰', tier: 3 },
      'time-day': { id: 'day', name: 'Day', emoji: '☀️', tier: 3 },
      'time-week': { id: 'week', name: 'Week', emoji: '📅', tier: 4 },
      'time-month': { id: 'month', name: 'Month', emoji: '📅', tier: 4 },
      'time-year': { id: 'year', name: 'Year', emoji: '📅', tier: 4 },
      'time-decade': { id: 'decade', name: 'Decade', emoji: '⏰', tier: 4 },
      'time-century': { id: 'century', name: 'Century', emoji: '📅', tier: 5 },
      'time-millennium': { id: 'millennium', name: 'Millennium', emoji: '⏰', tier: 5 },
      'time-era': { id: 'era', name: 'Era', emoji: '⏰', tier: 5 },
      'time-epoch': { id: 'epoch', name: 'Epoch', emoji: '⏰', tier: 5 },
      'time-eon': { id: 'eon', name: 'Eon', emoji: '⏰', tier: 6 },
      'time-moment': { id: 'moment', name: 'Moment', emoji: '⏰', tier: 6 },
      'time-instant': { id: 'instant', name: 'Instant', emoji: '⚡', tier: 6 },
      'time-eternity': { id: 'eternity', name: 'Eternity', emoji: '⏰', tier: 6 },
      'time-forever': { id: 'forever', name: 'Forever', emoji: '⏰', tier: 7 },
      'time-always': { id: 'always', name: 'Always', emoji: '⏰', tier: 7 },
      'time-never': { id: 'never', name: 'Never', emoji: '⏰', tier: 7 },
      'time-sometimes': { id: 'sometimes', name: 'Sometimes', emoji: '⏰', tier: 7 },
      'abstract-existence': { id: 'existence', name: 'Existence', emoji: '🧠', tier: 4 },
      'abstract-reality': { id: 'reality', name: 'Reality', emoji: '🤔', tier: 4 },
      'abstract-illusion': { id: 'illusion', name: 'Illusion', emoji: '🌌', tier: 4 },
      'abstract-dream': { id: 'dream', name: 'Dream', emoji: '💤', tier: 4 },
      'abstract-nightmare': { id: 'nightmare', name: 'Nightmare', emoji: '😱', tier: 4 },
      'abstract-fantasy': { id: 'fantasy', name: 'Fantasy', emoji: '🦄', tier: 5 },
      'abstract-imagination': { id: 'imagination', name: 'Imagination', emoji: '🎨', tier: 5 },
      'abstract-memory': { id: 'memory', name: 'Memory', emoji: '🧠', tier: 5 },
      'abstract-thought': { id: 'thought', name: 'Thought', emoji: '💭', tier: 5 },
      'abstract-idea': { id: 'idea', name: 'Idea', emoji: '💡', tier: 5 },
      'abstract-concept': { id: 'concept', name: 'Concept', emoji: '🧠', tier: 6 },
      'abstract-theory': { id: 'theory', name: 'Theory', emoji: '📚', tier: 6 },
      'abstract-hypothesis': { id: 'hypothesis', name: 'Hypothesis', emoji: '🔬', tier: 6 },
      'abstract-truth': { id: 'truth', name: 'Truth', emoji: '🤔', tier: 6 },
      'abstract-lie': { id: 'lie', name: 'Lie', emoji: '💬', tier: 6 },
      'abstract-fact': { id: 'fact', name: 'Fact', emoji: '🗨️', tier: 7 },
      'abstract-fiction': { id: 'fiction', name: 'Fiction', emoji: '💭', tier: 7 },
      'abstract-knowledge': { id: 'knowledge', name: 'Knowledge', emoji: '📖', tier: 7 },
      'abstract-wisdom': { id: 'wisdom', name: 'Wisdom', emoji: '🦉', tier: 7 },
      'abstract-ignorance': { id: 'ignorance', name: 'Ignorance', emoji: '💡', tier: 7 },
      'abstract-awareness': { id: 'awareness', name: 'Awareness', emoji: '👁️', tier: 8 },
      'abstract-consciousness': { id: 'consciousness', name: 'Consciousness', emoji: '🧘', tier: 8 },
      'abstract-subconsciousness': { id: 'subconsciousness', name: 'Subconsciousness', emoji: '🧠', tier: 8 },
      'abstract-instinct': { id: 'instinct', name: 'Instinct', emoji: '🤔', tier: 8 },
      'abstract-intuition': { id: 'intuition', name: 'Intuition', emoji: '💬', tier: 8 },
      'abstract-logic': { id: 'logic', name: 'Logic', emoji: '🗨️', tier: 9 },
      'abstract-reason': { id: 'reason', name: 'Reason', emoji: '💭', tier: 9 },
      'abstract-emotion': { id: 'emotion', name: 'Emotion', emoji: '😊', tier: 9 },
      'abstract-feeling': { id: 'feeling', name: 'Feeling', emoji: '❤️', tier: 9 },
      'abstract-sensation': { id: 'sensation', name: 'Sensation', emoji: '🤔', tier: 9 },
      'abstract-perception': { id: 'perception', name: 'Perception', emoji: '💬', tier: 10 },
      'abstract-experience': { id: 'experience', name: 'Experience', emoji: '🗨️', tier: 10 },
      'abstract-understanding': { id: 'understanding', name: 'Understanding', emoji: '🤝', tier: 10 },
      'abstract-comprehension': { id: 'comprehension', name: 'Comprehension', emoji: '📘', tier: 10 },
      'abstract-realization': { id: 'realization', name: 'Realization', emoji: '💡', tier: 10 },
      'abstract-enlightenment': { id: 'enlightenment', name: 'Enlightenment', emoji: '☀️', tier: 11 },
      'abstract-confusion': { id: 'confusion', name: 'Confusion', emoji: '💭', tier: 11 },
      'abstract-clarity': { id: 'clarity', name: 'Clarity', emoji: '💡', tier: 11 },
      'abstract-ambiguity': { id: 'ambiguity', name: 'Ambiguity', emoji: '🧠', tier: 11 },
      'abstract-certainty': { id: 'certainty', name: 'Certainty', emoji: '🤔', tier: 11 },
      'abstract-doubt': { id: 'doubt', name: 'Doubt', emoji: '💬', tier: 12 },
      'abstract-belief': { id: 'belief', name: 'Belief', emoji: '🙏', tier: 12 },
      'abstract-faith': { id: 'faith', name: 'Faith', emoji: '🗨️', tier: 12 },
      'abstract-hope': { id: 'hope', name: 'Hope', emoji: '💭', tier: 12 },
      'abstract-despair': { id: 'despair', name: 'Despair', emoji: '💡', tier: 12 },
      'abstract-courage': { id: 'courage', name: 'Courage', emoji: '🧠', tier: 13 },
      'abstract-fear': { id: 'fear', name: 'Fear', emoji: '🤔', tier: 13 },
      'abstract-love': { id: 'love', name: 'Love', emoji: '❤️', tier: 13 },
      'abstract-hate': { id: 'hate', name: 'Hate', emoji: '💬', tier: 13 },
      'abstract-peace': { id: 'peace', name: 'Peace', emoji: '☮️', tier: 13 },
      'abstract-war': { id: 'war', name: 'War', emoji: '⚔️', tier: 14 },
      'object-table': { id: 'table', name: 'Table', emoji: '🪑', tier: 2 },
      'object-chair': { id: 'chair', name: 'Chair', emoji: '🪑', tier: 2 },
      'object-desk': { id: 'desk', name: 'Desk', emoji: '📁', tier: 2 },
      'object-bed': { id: 'bed', name: 'Bed', emoji: '🛏️', tier: 2 },
      'object-couch': { id: 'couch', name: 'Couch', emoji: '🛋️', tier: 2 },
      'object-sofa': { id: 'sofa', name: 'Sofa', emoji: '🗳️', tier: 2 },
      'object-cabinet': { id: 'cabinet', name: 'Cabinet', emoji: '🗄️', tier: 2 },
      'object-drawer': { id: 'drawer', name: 'Drawer', emoji: '🗄️', tier: 2 },
      'object-shelf': { id: 'shelf', name: 'Shelf', emoji: '📚', tier: 2 },
      'object-mirror': { id: 'mirror', name: 'Mirror', emoji: '🪞', tier: 2 },
      'object-window': { id: 'window', name: 'Window', emoji: '🪟', tier: 2 },
      'object-door': { id: 'door', name: 'Door', emoji: '🚪', tier: 2 },
      'object-wall': { id: 'wall', name: 'Wall', emoji: '🧱', tier: 2 },
      'object-floor': { id: 'floor', name: 'Floor', emoji: '🛄', tier: 2 },
      'object-ceiling': { id: 'ceiling', name: 'Ceiling', emoji: '⬜', tier: 2 },
      'object-roof': { id: 'roof', name: 'Roof', emoji: '🏠', tier: 2 },
      'object-stairs': { id: 'stairs', name: 'Stairs', emoji: '🪜', tier: 2 },
      'object-elevator': { id: 'elevator', name: 'Elevator', emoji: '🎁', tier: 2 },
      'object-escalator': { id: 'escalator', name: 'Escalator', emoji: '🧰', tier: 2 },
      'object-ladder': { id: 'ladder', name: 'Ladder', emoji: '🪜', tier: 2 },
      'object-bottle': { id: 'bottle', name: 'Bottle', emoji: '🍾', tier: 2 },
      'object-cup': { id: 'cup', name: 'Cup', emoji: '☕', tier: 2 },
      'object-mug': { id: 'mug', name: 'Mug', emoji: '🎁', tier: 2 },
      'object-glass': { id: 'glass', name: 'Glass', emoji: '🥛', tier: 2 },
      'object-plate': { id: 'plate', name: 'Plate', emoji: '🍽️', tier: 2 },
      'object-bowl': { id: 'bowl', name: 'Bowl', emoji: '🏹', tier: 2 },
      'object-fork': { id: 'fork', name: 'Fork', emoji: '🍴', tier: 2 },
      'object-spoon': { id: 'spoon', name: 'Spoon', emoji: '🛄', tier: 2 },
      'object-knife': { id: 'knife', name: 'Knife', emoji: '🔪', tier: 2 },
      'object-chopsticks': { id: 'chopsticks', name: 'Chopsticks', emoji: '🥢', tier: 2 },
      'object-pot': { id: 'pot', name: 'Pot', emoji: '🫕', tier: 3 },
      'object-pan': { id: 'pan', name: 'Pan', emoji: '🍳', tier: 3 },
      'object-kettle': { id: 'kettle', name: 'Kettle', emoji: '📦', tier: 3 },
      'object-teapot': { id: 'teapot', name: 'Teapot', emoji: '🍵', tier: 3 },
      'object-jar': { id: 'jar', name: 'Jar', emoji: '🫙', tier: 3 },
      'object-container': { id: 'container', name: 'Container', emoji: '🗃️', tier: 3 },
      'object-box': { id: 'box', name: 'Box', emoji: '📦', tier: 3 },
      'object-bag': { id: 'bag', name: 'Bag', emoji: '👜', tier: 3 },
      'object-basket': { id: 'basket', name: 'Basket', emoji: '🧺', tier: 3 },
      'object-bucket': { id: 'bucket', name: 'Bucket', emoji: '🪣', tier: 3 },
      'object-broom': { id: 'broom', name: 'Broom', emoji: '🧹', tier: 3 },
      'object-mop': { id: 'mop', name: 'Mop', emoji: '📄', tier: 3 },
      'object-brush': { id: 'brush', name: 'Brush', emoji: '🪥', tier: 3 },
      'object-sponge': { id: 'sponge', name: 'Sponge', emoji: '🧽', tier: 3 },
      'object-towel': { id: 'towel', name: 'Towel', emoji: '🛄', tier: 3 },
      'object-cloth': { id: 'cloth', name: 'Cloth', emoji: '🧺', tier: 3 },
      'object-rag': { id: 'rag', name: 'Rag', emoji: '🛄', tier: 3 },
      'object-soap': { id: 'soap', name: 'Soap', emoji: '🧼', tier: 3 },
      'object-shampoo': { id: 'shampoo', name: 'Shampoo', emoji: '🧴', tier: 3 },
      'object-toothbrush': { id: 'toothbrush', name: 'Toothbrush', emoji: '🪥', tier: 3 },
      'object-comb': { id: 'comb', name: 'Comb', emoji: '🪮', tier: 3 },
      'object-scissors': { id: 'scissors', name: 'Scissors', emoji: '✂️', tier: 3 },
      'object-needle': { id: 'needle', name: 'Needle', emoji: '🛄', tier: 3 },
      'object-thread': { id: 'thread', name: 'Thread', emoji: '🧵', tier: 3 },
      'object-button': { id: 'button', name: 'Button', emoji: '🧰', tier: 3 },
      'object-zipper': { id: 'zipper', name: 'Zipper', emoji: '🗳️', tier: 3 },
      'object-buckle': { id: 'buckle', name: 'Buckle', emoji: '📮', tier: 3 },
      'object-velcro': { id: 'velcro', name: 'Velcro', emoji: '🗃️', tier: 3 },
      'object-tape': { id: 'tape', name: 'Tape', emoji: '📼', tier: 3 },
      'object-glue': { id: 'glue', name: 'Glue', emoji: '🧴', tier: 3 },
      'object-pencil': { id: 'pencil', name: 'Pencil', emoji: '✏️', tier: 4 },
      'object-pen': { id: 'pen', name: 'Pen', emoji: '🖊️', tier: 4 },
      'object-marker': { id: 'marker', name: 'Marker', emoji: '📮', tier: 4 },
      'object-crayon': { id: 'crayon', name: 'Crayon', emoji: '🗂️', tier: 4 },
      'object-eraser': { id: 'eraser', name: 'Eraser', emoji: '🧹', tier: 4 },
      'object-ruler': { id: 'ruler', name: 'Ruler', emoji: '📏', tier: 4 },
      'object-compass': { id: 'compass', name: 'Compass', emoji: '🗳️', tier: 4 },
      'object-protractor': { id: 'protractor', name: 'Protractor', emoji: '📦', tier: 4 },
      'object-calculator': { id: 'calculator', name: 'Calculator', emoji: '🔢', tier: 4 },
      'object-notebook': { id: 'notebook', name: 'Notebook', emoji: '📓', tier: 4 },
      'object-book': { id: 'book', name: 'Book', emoji: '📖', tier: 4 },
      'object-magazine': { id: 'magazine', name: 'Magazine', emoji: '🛄', tier: 4 },
      'object-newspaper': { id: 'newspaper', name: 'Newspaper', emoji: '📰', tier: 4 },
      'object-letter': { id: 'letter', name: 'Letter', emoji: '🗃️', tier: 4 },
      'object-envelope': { id: 'envelope', name: 'Envelope', emoji: '✉️', tier: 4 },
      'object-stamp': { id: 'stamp', name: 'Stamp', emoji: '📂', tier: 4 },
      'object-postcard': { id: 'postcard', name: 'Postcard', emoji: '🚗', tier: 4 },
      'object-poster': { id: 'poster', name: 'Poster', emoji: '🗃️', tier: 4 },
      'object-banner': { id: 'banner', name: 'Banner', emoji: '📁', tier: 4 },
      'object-flag': { id: 'flag', name: 'Flag', emoji: '🚩', tier: 4 },
      'object-ball': { id: 'ball', name: 'Ball', emoji: '📦', tier: 4 },
      'object-toy': { id: 'toy', name: 'Toy', emoji: '📂', tier: 4 },
      'object-doll': { id: 'doll', name: 'Doll', emoji: '📂', tier: 4 },
      'object-puzzle': { id: 'puzzle', name: 'Puzzle', emoji: '🎁', tier: 4 },
      'object-game-board': { id: 'game-board', name: 'Game Board', emoji: '📄', tier: 4 },
      'object-cards': { id: 'cards', name: 'Cards', emoji: '🚗', tier: 4 },
      'object-dice': { id: 'dice', name: 'Dice', emoji: '🧊', tier: 4 },
      'object-chess': { id: 'chess', name: 'Chess', emoji: '♟️', tier: 4 },
      'object-checkers': { id: 'checkers', name: 'Checkers', emoji: '📦', tier: 4 },
      'object-dominoes': { id: 'dominoes', name: 'Dominoes', emoji: '📦', tier: 4 },
      'object-kite': { id: 'kite', name: 'Kite', emoji: '🎁', tier: 5 },
      'object-balloon': { id: 'balloon', name: 'Balloon', emoji: '🎈', tier: 5 },
      'object-bubble': { id: 'bubble', name: 'Bubble', emoji: '🗂️', tier: 5 },
      'object-candle': { id: 'candle', name: 'Candle', emoji: '🕯️', tier: 5 },
      'object-matches': { id: 'matches', name: 'Matches', emoji: '🧘', tier: 5 },
      'object-lighter': { id: 'lighter', name: 'Lighter', emoji: '🎁', tier: 5 },
      'object-flashlight': { id: 'flashlight', name: 'Flashlight', emoji: '🗳️', tier: 5 },
      'object-lantern': { id: 'lantern', name: 'Lantern', emoji: '🏮', tier: 5 },
      'object-torch': { id: 'torch', name: 'Torch', emoji: '📁', tier: 5 },
      'object-lamp-post': { id: 'lamp-post', name: 'Lamp Post', emoji: '💡', tier: 5 },
      'object-umbrella': { id: 'umbrella', name: 'Umbrella', emoji: '☂️', tier: 5 },
      'object-raincoat': { id: 'raincoat', name: 'Raincoat', emoji: '🌧️', tier: 5 },
      'object-boots': { id: 'boots', name: 'Boots', emoji: '🥾', tier: 5 },
      'object-gloves': { id: 'gloves', name: 'Gloves', emoji: '🧤', tier: 5 },
      'object-scarf': { id: 'scarf', name: 'Scarf', emoji: '🧣', tier: 5 },
      'object-hat': { id: 'hat', name: 'Hat', emoji: '🎩', tier: 5 },
      'object-cap': { id: 'cap', name: 'Cap', emoji: '🧢', tier: 5 },
      'object-helmet': { id: 'helmet', name: 'Helmet', emoji: '🛄', tier: 5 },
      'object-mask': { id: 'mask', name: 'Mask', emoji: '📮', tier: 5 },
      'object-goggles': { id: 'goggles', name: 'Goggles', emoji: '🧰', tier: 5 },
      'object-glasses': { id: 'glasses', name: 'Glasses', emoji: '👓', tier: 5 },
      'object-sunglasses': { id: 'sunglasses', name: 'Sunglasses', emoji: '🕶️', tier: 5 },
      'object-contact-lens': { id: 'contact-lens', name: 'Contact Lens', emoji: '📂', tier: 5 },
      'object-monocle': { id: 'monocle', name: 'Monocle', emoji: '📄', tier: 5 },
      'object-binoculars': { id: 'binoculars', name: 'Binoculars', emoji: '🛄', tier: 5 },
      'object-telescope': { id: 'telescope', name: 'Telescope', emoji: '🔭', tier: 5 },
      'object-microscope': { id: 'microscope', name: 'Microscope', emoji: '🔬', tier: 5 },
      'object-magnifying-glass': { id: 'magnifying-glass', name: 'Magnifying Glass', emoji: '🥛', tier: 5 },
      'object-lens': { id: 'lens', name: 'Lens', emoji: '🛄', tier: 5 },
      'object-prism': { id: 'prism', name: 'Prism', emoji: '🔷', tier: 5 },
      'object-clock': { id: 'clock', name: 'Clock', emoji: '🕐', tier: 6 },
      'object-timer': { id: 'timer', name: 'Timer', emoji: '🎁', tier: 6 },
      'object-stopwatch': { id: 'stopwatch', name: 'Stopwatch', emoji: '⌚', tier: 6 },
      'object-hourglass': { id: 'hourglass', name: 'Hourglass', emoji: '⏳', tier: 6 },
      'object-sundial': { id: 'sundial', name: 'Sundial', emoji: '☀️', tier: 6 },
      'object-calendar': { id: 'calendar', name: 'Calendar', emoji: '📅', tier: 6 },
      'object-planner': { id: 'planner', name: 'Planner', emoji: '🧰', tier: 6 },
      'object-diary': { id: 'diary', name: 'Diary', emoji: '🧰', tier: 6 },
      'object-journal': { id: 'journal', name: 'Journal', emoji: '📂', tier: 6 },
      'object-logbook': { id: 'logbook', name: 'Logbook', emoji: '📖', tier: 6 },
      'object-wallet': { id: 'wallet', name: 'Wallet', emoji: '🧱', tier: 6 },
      'object-purse': { id: 'purse', name: 'Purse', emoji: '👛', tier: 6 },
      'object-backpack': { id: 'backpack', name: 'Backpack', emoji: '🎒', tier: 6 },
      'object-suitcase': { id: 'suitcase', name: 'Suitcase', emoji: '💼', tier: 6 },
      'object-briefcase': { id: 'briefcase', name: 'Briefcase', emoji: '💼', tier: 6 },
      'object-handbag': { id: 'handbag', name: 'Handbag', emoji: '👜', tier: 6 },
      'object-tote-bag': { id: 'tote-bag', name: 'Tote Bag', emoji: '👜', tier: 6 },
      'object-duffel-bag': { id: 'duffel-bag', name: 'Duffel Bag', emoji: '👜', tier: 6 },
      'object-messenger-bag': { id: 'messenger-bag', name: 'Messenger Bag', emoji: '👜', tier: 6 },
      'object-clutch': { id: 'clutch', name: 'Clutch', emoji: '🛄', tier: 6 },
      'object-ring': { id: 'ring', name: 'Ring', emoji: '💍', tier: 6 },
      'object-necklace': { id: 'necklace', name: 'Necklace', emoji: '📿', tier: 6 },
      'object-bracelet': { id: 'bracelet', name: 'Bracelet', emoji: '🗂️', tier: 6 },
      'object-earring': { id: 'earring', name: 'Earring', emoji: '💍', tier: 6 },
      'object-brooch': { id: 'brooch', name: 'Brooch', emoji: '🗃️', tier: 6 },
      'object-pendant': { id: 'pendant', name: 'Pendant', emoji: '🖊️', tier: 6 },
      'object-charm': { id: 'charm', name: 'Charm', emoji: '📦', tier: 6 },
      'object-anklet': { id: 'anklet', name: 'Anklet', emoji: '📁', tier: 6 },
      'object-tiara': { id: 'tiara', name: 'Tiara', emoji: '🗳️', tier: 6 },
      'object-crown-jewelry': { id: 'crown-jewelry', name: 'Crown Jewelry', emoji: '👑', tier: 6 },
      'object-belt': { id: 'belt', name: 'Belt', emoji: '🗳️', tier: 7 },
      'object-tie': { id: 'tie', name: 'Tie', emoji: '👔', tier: 7 },
      'object-bowtie': { id: 'bowtie', name: 'Bowtie', emoji: '🏹', tier: 7 },
      'object-suspenders': { id: 'suspenders', name: 'Suspenders', emoji: '🖊️', tier: 7 },
      'object-cufflinks': { id: 'cufflinks', name: 'Cufflinks', emoji: '🗃️', tier: 7 },
      'object-pin': { id: 'pin', name: 'Pin', emoji: '📌', tier: 7 },
      'object-badge': { id: 'badge', name: 'Badge', emoji: '📂', tier: 7 },
      'object-medal': { id: 'medal', name: 'Medal', emoji: '🏅', tier: 7 },
      'object-trophy-item': { id: 'trophy-item', name: 'Trophy Item', emoji: '🏆', tier: 7 },
      'object-award': { id: 'award', name: 'Award', emoji: '📮', tier: 7 },
      'object-pillow': { id: 'pillow', name: 'Pillow', emoji: '🛏️', tier: 7 },
      'object-cushion': { id: 'cushion', name: 'Cushion', emoji: '💺', tier: 7 },
      'object-blanket': { id: 'blanket', name: 'Blanket', emoji: '🛏️', tier: 7 },
      'object-quilt': { id: 'quilt', name: 'Quilt', emoji: '📮', tier: 7 },
      'object-comforter': { id: 'comforter', name: 'Comforter', emoji: '📮', tier: 7 },
      'object-sheet': { id: 'sheet', name: 'Sheet', emoji: '📄', tier: 7 },
      'object-pillowcase': { id: 'pillowcase', name: 'Pillowcase', emoji: '🛏️', tier: 7 },
      'object-mattress': { id: 'mattress', name: 'Mattress', emoji: '🧘', tier: 7 },
      'object-sleeping-bag': { id: 'sleeping-bag', name: 'Sleeping Bag', emoji: '👜', tier: 7 },
      'object-hammock': { id: 'hammock', name: 'Hammock', emoji: '📂', tier: 7 },
      'object-rug': { id: 'rug', name: 'Rug', emoji: '🧮', tier: 7 },
      'object-carpet': { id: 'carpet', name: 'Carpet', emoji: '🧮', tier: 7 },
      'object-mat': { id: 'mat', name: 'Mat', emoji: '📄', tier: 7 },
      'object-tapestry-item': { id: 'tapestry-item', name: 'Tapestry Item', emoji: '📼', tier: 7 },
      'object-curtain': { id: 'curtain', name: 'Curtain', emoji: '🪟', tier: 7 },
      'object-blind': { id: 'blind', name: 'Blind', emoji: '🗂️', tier: 7 },
      'object-shade': { id: 'shade', name: 'Shade', emoji: '🗃️', tier: 7 },
      'object-screen': { id: 'screen', name: 'Screen', emoji: '🗳️', tier: 7 },
      'object-partition': { id: 'partition', name: 'Partition', emoji: '🗳️', tier: 7 },
      'object-divider': { id: 'divider', name: 'Divider', emoji: '📦', tier: 7 },
      'object-vase-item': { id: 'vase-item', name: 'Vase Item', emoji: '🏺', tier: 8 },
      'object-pot-plant': { id: 'pot-plant', name: 'Pot Plant', emoji: '🪴', tier: 8 },
      'object-planter': { id: 'planter', name: 'Planter', emoji: '🪴', tier: 8 },
      'object-flowerpot': { id: 'flowerpot', name: 'Flowerpot', emoji: '🪴', tier: 8 },
      'object-terrarium': { id: 'terrarium', name: 'Terrarium', emoji: '📮', tier: 8 },
      'object-aquarium': { id: 'aquarium', name: 'Aquarium', emoji: '🗃️', tier: 8 },
      'object-cage': { id: 'cage', name: 'Cage', emoji: '🛄', tier: 8 },
      'object-tank': { id: 'tank', name: 'Tank', emoji: '🚜', tier: 8 },
      'object-bowl-fish': { id: 'bowl-fish', name: 'Bowl Fish', emoji: '🏹', tier: 8 },
      'object-habitat': { id: 'habitat', name: 'Habitat', emoji: '📂', tier: 8 },
      'object-frame': { id: 'frame', name: 'Frame', emoji: '🖼️', tier: 8 },
      'object-picture-frame': { id: 'picture-frame', name: 'Picture Frame', emoji: '🛄', tier: 8 },
      'object-photo-album': { id: 'photo-album', name: 'Photo Album', emoji: '📷', tier: 8 },
      'object-scrapbook': { id: 'scrapbook', name: 'Scrapbook', emoji: '📖', tier: 8 },
      'object-collage': { id: 'collage', name: 'Collage', emoji: '🧰', tier: 8 },
      'object-canvas-art': { id: 'canvas-art', name: 'Canvas Art', emoji: '🥫', tier: 8 },
      'object-easel': { id: 'easel', name: 'Easel', emoji: '📁', tier: 8 },
      'object-palette': { id: 'palette', name: 'Palette', emoji: '📦', tier: 8 },
      'object-paintbrush': { id: 'paintbrush', name: 'Paintbrush', emoji: '🪥', tier: 8 },
      'object-paint-tube': { id: 'paint-tube', name: 'Paint Tube', emoji: '📂', tier: 8 },
      'object-hammer': { id: 'hammer', name: 'Hammer', emoji: '🔨', tier: 8 },
      'object-screwdriver': { id: 'screwdriver', name: 'Screwdriver', emoji: '🪛', tier: 8 },
      'object-wrench': { id: 'wrench', name: 'Wrench', emoji: '🔧', tier: 8 },
      'object-pliers': { id: 'pliers', name: 'Pliers', emoji: '📂', tier: 8 },
      'object-saw': { id: 'saw', name: 'Saw', emoji: '🪚', tier: 8 },
      'object-drill': { id: 'drill', name: 'Drill', emoji: '🗳️', tier: 8 },
      'object-chisel': { id: 'chisel', name: 'Chisel', emoji: '🗂️', tier: 8 },
      'object-file': { id: 'file', name: 'File', emoji: '📄', tier: 8 },
      'object-rasp': { id: 'rasp', name: 'Rasp', emoji: '🗳️', tier: 8 },
      'object-plane': { id: 'plane', name: 'Plane', emoji: '🎁', tier: 8 },
      'object-axe': { id: 'axe', name: 'Axe', emoji: '🪓', tier: 9 },
      'object-hatchet': { id: 'hatchet', name: 'Hatchet', emoji: '🎁', tier: 9 },
      'object-machete': { id: 'machete', name: 'Machete', emoji: '📂', tier: 9 },
      'object-shovel': { id: 'shovel', name: 'Shovel', emoji: '🛄', tier: 9 },
      'object-spade': { id: 'spade', name: 'Spade', emoji: '♠', tier: 9 },
      'object-rake': { id: 'rake', name: 'Rake', emoji: '🗳️', tier: 9 },
      'object-hoe': { id: 'hoe', name: 'Hoe', emoji: '📦', tier: 9 },
      'object-pickaxe': { id: 'pickaxe', name: 'Pickaxe', emoji: '🪓', tier: 9 },
      'object-sledgehammer': { id: 'sledgehammer', name: 'Sledgehammer', emoji: '🔨', tier: 9 },
      'object-crowbar': { id: 'crowbar', name: 'Crowbar', emoji: '🗂️', tier: 9 },
      'object-level': { id: 'level', name: 'Level', emoji: '🧰', tier: 9 },
      'object-measuring-tape': { id: 'measuring-tape', name: 'Measuring Tape', emoji: '💍', tier: 9 },
      'object-square': { id: 'square', name: 'Square', emoji: '⬛', tier: 9 },
      'object-clamp': { id: 'clamp', name: 'Clamp', emoji: '💡', tier: 9 },
      'object-vise': { id: 'vise', name: 'Vise', emoji: '🗃️', tier: 9 },
      'object-anvil': { id: 'anvil', name: 'Anvil', emoji: '🗳️', tier: 9 },
      'object-forge': { id: 'forge', name: 'Forge', emoji: '🎁', tier: 9 },
      'object-bellows': { id: 'bellows', name: 'Bellows', emoji: '📦', tier: 9 },
      'object-grindstone': { id: 'grindstone', name: 'Grindstone', emoji: '🧰', tier: 9 },
      'object-whetstone': { id: 'whetstone', name: 'Whetstone', emoji: '🗃️', tier: 9 },
      'object-basketball-item': { id: 'basketball-item', name: 'Basketball Item', emoji: '🏀', tier: 9 },
      'object-football-item': { id: 'football-item', name: 'Football Item', emoji: '🏈', tier: 9 },
      'object-soccer-ball': { id: 'soccer-ball', name: 'Soccer Ball', emoji: '⚽', tier: 9 },
      'object-baseball-item': { id: 'baseball-item', name: 'Baseball Item', emoji: '⚾', tier: 9 },
      'object-tennis-ball': { id: 'tennis-ball', name: 'Tennis Ball', emoji: '🎾', tier: 9 },
      'object-golf-ball': { id: 'golf-ball', name: 'Golf Ball', emoji: '🗃️', tier: 9 },
      'object-volleyball': { id: 'volleyball', name: 'Volleyball', emoji: '🏐', tier: 9 },
      'object-bowling-ball': { id: 'bowling-ball', name: 'Bowling Ball', emoji: '🏹', tier: 9 },
      'object-ping-pong-ball': { id: 'ping-pong-ball', name: 'Ping Pong Ball', emoji: '🛄', tier: 9 },
      'object-billiard-ball': { id: 'billiard-ball', name: 'Billiard Ball', emoji: '🧰', tier: 9 },
      'object-bat-baseball': { id: 'bat-baseball', name: 'Bat Baseball', emoji: '⚾', tier: 10 },
      'object-racket': { id: 'racket', name: 'Racket', emoji: '🗂️', tier: 10 },
      'object-club-golf': { id: 'club-golf', name: 'Club Golf', emoji: '📮', tier: 10 },
      'object-hockey-stick': { id: 'hockey-stick', name: 'Hockey Stick', emoji: '🔑', tier: 10 },
      'object-cricket-bat': { id: 'cricket-bat', name: 'Cricket Bat', emoji: '🦇', tier: 10 },
      'object-paddle': { id: 'paddle', name: 'Paddle', emoji: '🗂️', tier: 10 },
      'object-net-sports': { id: 'net-sports', name: 'Net Sports', emoji: '📮', tier: 10 },
      'object-hoop': { id: 'hoop', name: 'Hoop', emoji: '🗃️', tier: 10 },
      'object-goal': { id: 'goal', name: 'Goal', emoji: '🧰', tier: 10 },
      'object-goalpost': { id: 'goalpost', name: 'Goalpost', emoji: '🗂️', tier: 10 },
      'object-treadmill': { id: 'treadmill', name: 'Treadmill', emoji: '🎁', tier: 10 },
      'object-exercise-bike': { id: 'exercise-bike', name: 'Exercise Bike', emoji: '📮', tier: 10 },
      'object-elliptical': { id: 'elliptical', name: 'Elliptical', emoji: '📦', tier: 10 },
      'object-weights': { id: 'weights', name: 'Weights', emoji: '📮', tier: 10 },
      'object-dumbbell': { id: 'dumbbell', name: 'Dumbbell', emoji: '🗳️', tier: 10 },
      'object-barbell': { id: 'barbell', name: 'Barbell', emoji: '📮', tier: 10 },
      'object-kettlebell': { id: 'kettlebell', name: 'Kettlebell', emoji: '📮', tier: 10 },
      'object-resistance-band': { id: 'resistance-band', name: 'Resistance Band', emoji: '🛄', tier: 10 },
      'object-yoga-mat': { id: 'yoga-mat', name: 'Yoga Mat', emoji: '🧘', tier: 10 },
      'object-exercise-ball': { id: 'exercise-ball', name: 'Exercise Ball', emoji: '📁', tier: 10 },
      'object-skateboard-deck': { id: 'skateboard-deck', name: 'Skateboard Deck', emoji: '🗃️', tier: 10 },
      'object-longboard': { id: 'longboard', name: 'Longboard', emoji: '🗃️', tier: 10 },
      'object-surfboard-item': { id: 'surfboard-item', name: 'Surfboard Item', emoji: '📂', tier: 10 },
      'object-snowboard-item': { id: 'snowboard-item', name: 'Snowboard Item', emoji: '❄️', tier: 10 },
      'object-skis-item': { id: 'skis-item', name: 'Skis Item', emoji: '🗃️', tier: 10 },
      'object-ski-poles': { id: 'ski-poles', name: 'Ski Poles', emoji: '🗂️', tier: 10 },
      'object-ice-skates': { id: 'ice-skates', name: 'Ice Skates', emoji: '🧊', tier: 10 },
      'object-roller-skates-item': { id: 'roller-skates-item', name: 'Roller Skates Item', emoji: '🗃️', tier: 10 },
      'object-inline-skates-item': { id: 'inline-skates-item', name: 'Inline Skates Item', emoji: '🎁', tier: 10 },
      'object-scooter-item': { id: 'scooter-item', name: 'Scooter Item', emoji: '🧰', tier: 10 },
    };

const darkElements = {
      // 疾病与死亡
      'life-sick': { id: 'disease', name: 'Disease', emoji: '🤢', tier: 6 },
      'disease-spread': { id: 'epidemic', name: 'Epidemic', emoji: '😷', tier: 7 },
      'epidemic-global': { id: 'pandemic', name: 'Pandemic', emoji: '🌍', tier: 8 },
      'disease-deadly': { id: 'plague', name: 'Plague', emoji: '☠️', tier: 8 },
      'disease-cancer': { id: 'cancer', name: 'Cancer', emoji: '🎗️', tier: 7 },
      'life-end': { id: 'death', name: 'Death', emoji: '💀', tier: 7 },
      'death-body': { id: 'corpse', name: 'Corpse', emoji: '⚰️', tier: 7 },
      'corpse-decay': { id: 'rot', name: 'Rot', emoji: '🦠', tier: 7 },
      'death-spirit': { id: 'undead', name: 'Undead', emoji: '🧟', tier: 8 },
      'undead-army': { id: 'undead-horde', name: 'Undead Horde', emoji: '💀', tier: 9 },
      'death-realm': { id: 'underworld', name: 'Underworld', emoji: '🕳️', tier: 9 },
      'death-reaper': { id: 'grim-reaper', name: 'Grim Reaper', emoji: '💀', tier: 9 },
      
      // 灾难
      'nature-destroy': { id: 'disaster', name: 'Disaster', emoji: '🌪️', tier: 7 },
      'disaster-flood': { id: 'flood', name: 'Flood', emoji: '💧', tier: 7 },
      'disaster-drought': { id: 'drought', name: 'Drought', emoji: '🏜️', tier: 7 },
      'disaster-famine': { id: 'famine', name: 'Famine', emoji: '🌾', tier: 8 },
      'disaster-earthquake': { id: 'mega-quake', name: 'Mega Quake', emoji: '📉', tier: 8 },
      'disaster-volcano': { id: 'super-volcano', name: 'Super Volcano', emoji: '🥫', tier: 9 },
      'disaster-tsunami': { id: 'mega-tsunami', name: 'Mega Tsunami', emoji: '☀️', tier: 9 },
      'disaster-meteor': { id: 'meteor-impact', name: 'Meteor Impact', emoji: '☄️', tier: 10 },
      'disaster-extinction': { id: 'mass-extinction', name: 'Mass Extinction', emoji: '💀', tier: 10 },
      
      // 破坏与混沌
      'fire-spread': { id: 'destruction', name: 'Destruction', emoji: '💥', tier: 7 },
      'destruction-total': { id: 'annihilation', name: 'Annihilation', emoji: '💣', tier: 8 },
      'order-opposite': { id: 'chaos', name: 'Chaos', emoji: '🌀', tier: 8 },
      'chaos-void': { id: 'void', name: 'Void', emoji: '⚫', tier: 9 },
      'void-consume': { id: 'entropy', name: 'Entropy', emoji: '💫', tier: 9 },
      'entropy-end': { id: 'heat-death', name: 'Heat Death', emoji: '❄️', tier: 10 },
      
      // 污染与毒素
      'industry-waste': { id: 'pollution', name: 'Pollution', emoji: '☠️', tier: 7 },
      'pollution-air': { id: 'smog', name: 'Smog', emoji: '🏭', tier: 7 },
      'pollution-water': { id: 'toxic-waste', name: 'Toxic Waste', emoji: '☢️', tier: 8 },
      'pollution-nuclear': { id: 'radiation', name: 'Radiation', emoji: '☢️', tier: 8 },
      'radiation-disaster': { id: 'meltdown', name: 'Meltdown', emoji: '☢️', tier: 9 },
      'plant-toxic': { id: 'poison', name: 'Poison', emoji: '☠️', tier: 7 },
      'poison-deadly': { id: 'venom', name: 'Venom', emoji: '💀', tier: 8 },
      'chemical-weapon': { id: 'nerve-gas', name: 'Nerve Gas', emoji: '☣️', tier: 9 },
      
      // 战争与暴力
      'human-fight': { id: 'violence', name: 'Violence', emoji: '🤜', tier: 7 },
      'violence-weapon': { id: 'murder', name: 'Murder', emoji: '🔪', tier: 8 },
      'violence-mass': { id: 'massacre', name: 'Massacre', emoji: '⚔️', tier: 9 },
      'war-total': { id: 'world-war', name: 'World War', emoji: '🌍', tier: 9 },
      'war-nuclear': { id: 'nuclear-war', name: 'Nuclear War', emoji: '☢️', tier: 10 },
      'nuclear-war-end': { id: 'nuclear-winter', name: 'Nuclear Winter', emoji: '❄️', tier: 10 },
      'war-chemical': { id: 'chemical-warfare', name: 'Chemical Warfare', emoji: '☣️', tier: 9 },
      'war-biological': { id: 'bio-weapon', name: 'Bio Weapon', emoji: '🦠', tier: 9 },
      'weapon-ultimate': { id: 'doomsday-device', name: 'Doomsday Device', emoji: '🧊', tier: 10 },
      
      // 黑暗魔法与诅咒
      'magic-dark': { id: 'dark-magic', name: 'Dark Magic', emoji: '🔮', tier: 8 },
      'dark-magic-curse': { id: 'curse', name: 'Curse', emoji: '😈', tier: 8 },
      'curse-powerful': { id: 'hex', name: 'Hex', emoji: '💀', tier: 9 },
      'dark-magic-necromancy': { id: 'necromancy', name: 'Necromancy', emoji: '💀', tier: 9 },
      'necromancy-raise': { id: 'raise-dead', name: 'Raise Dead', emoji: '🧟', tier: 9 },
      'dark-magic-sacrifice': { id: 'blood-magic', name: 'Blood Magic', emoji: '🩸', tier: 9 },
      'dark-magic-summon': { id: 'demon-summoning', name: 'Demon Summoning', emoji: '😈', tier: 9 },
      'dark-magic-soul': { id: 'soul-trap', name: 'Soul Trap', emoji: '👻', tier: 9 },
      'dark-magic-forbidden': { id: 'forbidden-magic', name: 'Forbidden Magic', emoji: '📜', tier: 10 },
      
      // 疯狂与恐怖
      'mind-break': { id: 'madness', name: 'Madness', emoji: '🤪', tier: 8 },
      'madness-spread': { id: 'insanity', name: 'Insanity', emoji: '😵', tier: 9 },
      'fear-extreme': { id: 'horror', name: 'Horror', emoji: '😱', tier: 8 },
      'horror-cosmic': { id: 'cosmic-horror', name: 'Cosmic Horror', emoji: '👁️', tier: 10 },
      'horror-eldritch': { id: 'eldritch-abomination', name: 'Eldritch Abomination', emoji: '🐙', tier: 10 },
      'horror-nightmare': { id: 'nightmare', name: 'Nightmare', emoji: '😱', tier: 8 },
      'nightmare-realm': { id: 'nightmare-dimension', name: 'Nightmare Dimension', emoji: '🕳️', tier: 9 },
      
      // 末日场景
      'civilization-fall': { id: 'collapse', name: 'Collapse', emoji: '📉', tier: 9 },
      'collapse-society': { id: 'apocalypse', name: 'Apocalypse', emoji: '🔥', tier: 10 },
      'apocalypse-zombie': { id: 'zombie-apocalypse', name: 'Zombie Apocalypse', emoji: '🧟', tier: 10 },
      'apocalypse-robot': { id: 'robot-uprising', name: 'Robot Uprising', emoji: '🤖', tier: 10 },
      'apocalypse-alien': { id: 'alien-invasion', name: 'Alien Invasion', emoji: '👽', tier: 10 },
      'apocalypse-ai': { id: 'ai-takeover', name: 'AI Takeover', emoji: '🧠', tier: 10 },
      'apocalypse-climate': { id: 'climate-apocalypse', name: 'Climate Apocalypse', emoji: '🌡️', tier: 10 },
      'universe-end': { id: 'big-crunch', name: 'Big Crunch', emoji: '🕳️', tier: 10 },
      'universe-rip': { id: 'big-rip', name: 'Big Rip', emoji: '💥', tier: 10 },
    };

    // ==================== 五元素递进叠加系统 (Five Elements Progressive Stacking) ====================
    const elementStackingSystem = {
      
      // ===== FIRE (火) 递进链 - 10层 =====
      // 火 → 烈火 → 野火 → 地狱火 → 太阳火 → 星辰火 → 宇宙火 → 创世火 → 终极火 → 永恒火 → 无限火
      
      // Level 1: Fire + Fire
      'fire-fire': { id: 'blaze-fire', name: 'Blaze', emoji: '🔥', tier: 2 },
      
      // Level 2: Blaze + Fire  
      'blaze-fire-fire': { id: 'wildfire-stack', name: 'Wildfire', emoji: '🔥', tier: 3 },
      
      // Level 3: Wildfire + Fire
      'wildfire-stack-fire': { id: 'hellfire-stack', name: 'Hellfire', emoji: '🔥', tier: 4 },
      
      // Level 4: Hellfire + Fire
      'hellfire-stack-fire': { id: 'solar-fire', name: 'Solar Fire', emoji: '☀️', tier: 5 },
      
      // Level 5: Solar Fire + Fire
      'solar-fire-fire': { id: 'stellar-fire', name: 'Stellar Fire', emoji: '⭐', tier: 6 },
      
      // Level 6: Stellar Fire + Fire
      'stellar-fire-fire': { id: 'cosmic-fire', name: 'Cosmic Fire', emoji: '🌟', tier: 7 },
      
      // Level 7: Cosmic Fire + Fire
      'cosmic-fire-fire': { id: 'primordial-fire', name: 'Primordial Fire', emoji: '💫', tier: 8 },
      
      // Level 8: Primordial Fire + Fire
      'primordial-fire-fire': { id: 'ultimate-fire', name: 'Ultimate Fire', emoji: '🌠', tier: 9 },
      
      // Level 9: Ultimate Fire + Fire
      'ultimate-fire-fire': { id: 'eternal-fire', name: 'Eternal Fire', emoji: '✨', tier: 10 },
      
      // Level 10: Eternal Fire + Fire (最终形态)
      'eternal-fire-fire': { id: 'infinite-fire', name: 'Infinite Fire', emoji: '🔆', tier: 11 },
      
      // ===== WATER (水) 递进链 - 10层 =====
      // 水 → 池塘 → 湖泊 → 海洋 → 深海 → 深渊 → 原始海 → 宇宙海 → 终极水 → 永恒水 → 无限水
      
      // Level 1: Water + Water
      'water-water': { id: 'pond-stack', name: 'Pond', emoji: '🏞️', tier: 2 },
      
      // Level 2: Pond + Water
      'pond-stack-water': { id: 'lake-stack', name: 'Lake', emoji: '🏞️', tier: 3 },
      
      // Level 3: Lake + Water
      'lake-stack-water': { id: 'ocean-stack', name: 'Ocean', emoji: '🌊', tier: 4 },
      
      // Level 4: Ocean + Water
      'ocean-stack-water': { id: 'deep-ocean', name: 'Deep Ocean', emoji: '🌊', tier: 5 },
      
      // Level 5: Deep Ocean + Water
      'deep-ocean-water': { id: 'abyss-stack', name: 'Abyss', emoji: '🕳️', tier: 6 },
      
      // Level 6: Abyss + Water
      'abyss-stack-water': { id: 'primordial-ocean', name: 'Primordial Ocean', emoji: '🌀', tier: 7 },
      
      // Level 7: Primordial Ocean + Water
      'primordial-ocean-water': { id: 'cosmic-ocean', name: 'Cosmic Ocean', emoji: '🌌', tier: 8 },
      
      // Level 8: Cosmic Ocean + Water
      'cosmic-ocean-water': { id: 'ultimate-water', name: 'Ultimate Water', emoji: '💠', tier: 9 },
      
      // Level 9: Ultimate Water + Water
      'ultimate-water-water': { id: 'eternal-water', name: 'Eternal Water', emoji: '💎', tier: 10 },
      
      // Level 10: Eternal Water + Water (最终形态)
      'eternal-water-water': { id: 'infinite-water', name: 'Infinite Water', emoji: '🔷', tier: 11 },
      
      // ===== EARTH (土) 递进链 - 10层 =====
      // 土 → 石头 → 巨石 → 山丘 → 高山 → 山脉 → 大陆 → 星球 → 终极土 → 永恒土 → 无限土
      
      // Level 1: Earth + Earth
      'earth-earth': { id: 'rock-stack', name: 'Rock', emoji: '🪨', tier: 2 },
      
      // Level 2: Rock + Earth
      'rock-stack-earth': { id: 'boulder-stack', name: 'Boulder', emoji: '🪨', tier: 3 },
      
      // Level 3: Boulder + Earth
      'boulder-stack-earth': { id: 'hill-stack', name: 'Hill', emoji: '⛰️', tier: 4 },
      
      // Level 4: Hill + Earth
      'hill-stack-earth': { id: 'mountain-stack', name: 'Mountain', emoji: '⛰️', tier: 5 },
      
      // Level 5: Mountain + Earth
      'mountain-stack-earth': { id: 'mountain-range', name: 'Mountain Range', emoji: '🏔️', tier: 6 },
      
      // Level 6: Mountain Range + Earth
      'mountain-range-earth': { id: 'continent-stack', name: 'Continent', emoji: '🌍', tier: 7 },
      
      // Level 7: Continent + Earth
      'continent-stack-earth': { id: 'planet-stack', name: 'Planet', emoji: '🌎', tier: 8 },
      
      // Level 8: Planet + Earth
      'planet-stack-earth': { id: 'ultimate-earth', name: 'Ultimate Earth', emoji: '🌏', tier: 9 },
      
      // Level 9: Ultimate Earth + Earth
      'ultimate-earth-earth': { id: 'eternal-earth', name: 'Eternal Earth', emoji: '💠', tier: 10 },
      
      // Level 10: Eternal Earth + Earth (最终形态)
      'eternal-earth-earth': { id: 'infinite-earth', name: 'Infinite Earth', emoji: '🔶', tier: 11 },
      
      // ===== WOOD (木) 递进链 - 10层 =====
      // 木 → 树苗 → 小树 → 大树 → 树林 → 森林 → 原始森林 → 世界树 → 终极木 → 永恒木 → 无限木
      
      // Level 1: Wood + Wood
      'wood-wood': { id: 'sapling-stack', name: 'Sapling', emoji: '🌱', tier: 2 },
      
      // Level 2: Sapling + Wood
      'sapling-stack-wood': { id: 'young-tree', name: 'Young Tree', emoji: '🌳', tier: 3 },
      
      // Level 3: Young Tree + Wood
      'young-tree-wood': { id: 'great-tree', name: 'Great Tree', emoji: '🌳', tier: 4 },
      
      // Level 4: Great Tree + Wood
      'great-tree-wood': { id: 'grove-stack', name: 'Grove', emoji: '🌲', tier: 5 },
      
      // Level 5: Grove + Wood
      'grove-stack-wood': { id: 'forest-stack', name: 'Forest', emoji: '🌲', tier: 6 },
      
      // Level 6: Forest + Wood
      'forest-stack-wood': { id: 'ancient-forest', name: 'Ancient Forest', emoji: '🌲', tier: 7 },
      
      // Level 7: Ancient Forest + Wood
      'ancient-forest-wood': { id: 'world-tree', name: 'World Tree', emoji: '🌳', tier: 8 },
      
      // Level 8: World Tree + Wood
      'world-tree-wood': { id: 'ultimate-wood', name: 'Ultimate Wood', emoji: '🌴', tier: 9 },
      
      // Level 9: Ultimate Wood + Wood
      'ultimate-wood-wood': { id: 'eternal-wood', name: 'Eternal Wood', emoji: '🎋', tier: 10 },
      
      // Level 10: Eternal Wood + Wood (最终形态)
      'eternal-wood-wood': { id: 'infinite-wood', name: 'Infinite Wood', emoji: '🔰', tier: 11 },
      
      // ===== METAL (金) 递进链 - 10层 =====
      // 金 → 合金 → 精钢 → 秘银 → 山铜 → 星铁 → 精金 → 神金 → 终极金 → 永恒金 → 无限金
      
      // Level 1: Metal + Metal
      'metal-metal': { id: 'alloy-stack', name: 'Alloy', emoji: '⚙️', tier: 2 },
      
      // Level 2: Alloy + Metal
      'alloy-stack-metal': { id: 'steel-stack', name: 'Steel', emoji: '⚙️', tier: 3 },
      
      // Level 3: Steel + Metal
      'steel-stack-metal': { id: 'mithril', name: 'Mithril', emoji: '⚡', tier: 4 },
      
      // Level 4: Mithril + Metal
      'mithril-metal': { id: 'orichalcum', name: 'Orichalcum', emoji: '✨', tier: 5 },
      
      // Level 5: Orichalcum + Metal
      'orichalcum-metal': { id: 'star-metal', name: 'Star Metal', emoji: '⭐', tier: 6 },
      
      // Level 6: Star Metal + Metal
      'star-metal-metal': { id: 'adamantine', name: 'Adamantine', emoji: '💎', tier: 7 },
      
      // Level 7: Adamantine + Metal
      'adamantine-metal': { id: 'divine-metal', name: 'Divine Metal', emoji: '🌟', tier: 8 },
      
      // Level 8: Divine Metal + Metal
      'divine-metal-metal': { id: 'ultimate-metal', name: 'Ultimate Metal', emoji: '💫', tier: 9 },
      
      // Level 9: Ultimate Metal + Metal
      'ultimate-metal-metal': { id: 'eternal-metal', name: 'Eternal Metal', emoji: '🔱', tier: 10 },
      
      // Level 10: Eternal Metal + Metal (最终形态)
      'eternal-metal-metal': { id: 'infinite-metal', name: 'Infinite Metal', emoji: '🔸', tier: 11 },
      
      // ===== 终极融合 (Ultimate Fusions) =====
      // 五个无限元素的最终融合
      
      'infinite-fire-infinite-water': { id: 'yin-yang', name: 'Yin Yang', emoji: '☯️', tier: 12 },
      'infinite-water-infinite-fire': { id: 'yin-yang', name: 'Yin Yang', emoji: '☯️', tier: 12 },
      
      'infinite-metal-infinite-wood': { id: 'creation-destruction', name: 'Creation & Destruction', emoji: '⚖️', tier: 12 },
      'infinite-wood-infinite-metal': { id: 'creation-destruction', name: 'Creation & Destruction', emoji: '⚖️', tier: 12 },
      
      'yin-yang-infinite-earth': { id: 'three-treasures', name: 'Three Treasures', emoji: '🔱', tier: 13 },
      'infinite-earth-yin-yang': { id: 'three-treasures', name: 'Three Treasures', emoji: '🔱', tier: 13 },
      
      'creation-destruction-three-treasures': { id: 'four-symbols', name: 'Four Symbols', emoji: '🀄', tier: 14 },
      'three-treasures-creation-destruction': { id: 'four-symbols', name: 'Four Symbols', emoji: '🀄', tier: 14 },
      
      'four-symbols-infinite-fire': { id: 'five-phases', name: 'Five Phases', emoji: '🎴', tier: 15 },
      'four-symbols-infinite-water': { id: 'five-phases', name: 'Five Phases', emoji: '🎴', tier: 15 },
      'four-symbols-infinite-earth': { id: 'five-phases', name: 'Five Phases', emoji: '🎴', tier: 15 },
      'four-symbols-infinite-metal': { id: 'five-phases', name: 'Five Phases', emoji: '🎴', tier: 15 },
      'four-symbols-infinite-wood': { id: 'five-phases', name: 'Five Phases', emoji: '🎴', tier: 15 },
      
      // 最终形态：宇宙本源
      'five-phases-infinite-fire': { id: 'cosmic-origin', name: 'Cosmic Origin', emoji: '🌌', tier: 16 },
      'five-phases-infinite-water': { id: 'cosmic-origin', name: 'Cosmic Origin', emoji: '🌌', tier: 16 },
      'five-phases-infinite-earth': { id: 'cosmic-origin', name: 'Cosmic Origin', emoji: '🌌', tier: 16 },
      'five-phases-infinite-metal': { id: 'cosmic-origin', name: 'Cosmic Origin', emoji: '🌌', tier: 16 },
      'five-phases-infinite-wood': { id: 'cosmic-origin', name: 'Cosmic Origin', emoji: '🌌', tier: 16 },
    };

    // ==================== 五元素核心扩展 (Five Elements Core Expansions) ====================
    const fiveElementsExpansions = {
      
      // ===== METAL (金) 组合 - 120+ 新组合 =====
      
      // ===== METAL (金) 组合 - 经典角色与文化梗 =====
      
      // Metal + 动物 → 经典机械/金属角色
      'metal-cat': { id: 'doraemon', name: 'Doraemon', emoji: '🤖', tier: 2 },
      'metal-dog': { id: 'k9-robot', name: 'K-9', emoji: '🤖', tier: 2 },
      'metal-wolf': { id: 'wolverine', name: 'Wolverine', emoji: '🦴', tier: 3 },
      'metal-bird': { id: 'steel-wing', name: 'Steel Wing', emoji: '🦅', tier: 2 },
      'metal-horse': { id: 'bronze-horse', name: 'Bronze Horse', emoji: '🏺', tier: 2 },
      'metal-tiger': { id: 'tigerzord', name: 'Tigerzord', emoji: '🤖', tier: 3 },
      'metal-dragon': { id: 'mecha-dragon', name: 'Mecha Dragon', emoji: '🐉', tier: 3 },
      'metal-snake': { id: 'metal-gear', name: 'Metal Gear', emoji: '🎮', tier: 3 },
      'metal-fish': { id: 'chrome-fish', name: 'Chrome Fish', emoji: '🐟', tier: 2 },
      'metal-turtle': { id: 'armored-turtle', name: 'Armored Turtle', emoji: '🛡️', tier: 3 },
      'metal-beetle': { id: 'scarab', name: 'Scarab', emoji: '🪲', tier: 3 },
      'metal-bull': { id: 'bronze-bull', name: 'Bronze Bull', emoji: '🐂', tier: 3 },
      'metal-lion': { id: 'nemean-lion', name: 'Nemean Lion', emoji: '🦁', tier: 4 },
      
      // Metal + 人类 → 机器人与机甲
      'metal-human': { id: 'iron-hero', name: 'Iron Hero', emoji: '🦾', tier: 3 },
      'metal-man': { id: 'terminator', name: 'Terminator', emoji: '🤖', tier: 3 },
      'metal-boy': { id: 'astro-boy', name: 'Astro Boy', emoji: '🚀', tier: 3 },
      'metal-warrior': { id: 'robocop', name: 'RoboCop', emoji: '👮', tier: 3 },
      'metal-soldier': { id: 'winter-soldier', name: 'Winter Soldier', emoji: '❄️', tier: 3 },
      'metal-giant': { id: 'gundam', name: 'Gundam', emoji: '🤖', tier: 4 },
      
      // Metal + 神话 → 金属神话生物
      'metal-god': { id: 'colossus', name: 'Colossus', emoji: '💪', tier: 4 },
      
      // Metal + 身体部位 → 强化/保护
      'metal-tooth': { id: 'metal-tooth', name: 'Metal Tooth', emoji: '🦷', tier: 2 },
      'metal-bone': { id: 'metal-bone', name: 'Metal Bone', emoji: '🦴', tier: 3 },
      'metal-nail': { id: 'metal-nail', name: 'Metal Nail', emoji: '💅', tier: 2 },
      'metal-skull': { id: 'metal-skull', name: 'Metal Skull', emoji: '💀', tier: 3 },
      'metal-fist': { id: 'iron-fist', name: 'Iron Fist', emoji: '👊', tier: 3 },
      'metal-heart': { id: 'metal-heart', name: 'Metal Heart', emoji: '❤️', tier: 3 },
      'metal-skin': { id: 'metal-skin', name: 'Metal Skin', emoji: '🛡️', tier: 3 },
      
      // Metal + 工具类 → 金属工具
      'metal-knife': { id: 'steel-knife', name: 'Steel Knife', emoji: '🔪', tier: 2 },
      'metal-sword': { id: 'steel-sword', name: 'Steel Sword', emoji: '⚔️', tier: 2 },
      'metal-shield': { id: 'metal-shield', name: 'Metal Shield', emoji: '🛡️', tier: 2 },
      'metal-armor': { id: 'metal-armor', name: 'Metal Armor', emoji: '⚔️', tier: 3 },
      'metal-helmet': { id: 'metal-helmet', name: 'Metal Helmet', emoji: '⛑️', tier: 2 },
      'metal-hammer': { id: 'metal-hammer', name: 'Metal Hammer', emoji: '🔨', tier: 2 },
      'metal-axe': { id: 'metal-axe', name: 'Metal Axe', emoji: '🪓', tier: 2 },
      'metal-spear': { id: 'metal-spear', name: 'Metal Spear', emoji: '🗡️', tier: 2 },
      'metal-arrow': { id: 'metal-arrow', name: 'Metal Arrow', emoji: '➡️', tier: 2 },
      'metal-chain': { id: 'metal-chain', name: 'Metal Chain', emoji: '⛓️', tier: 2 },
      'metal-lock': { id: 'metal-lock', name: 'Metal Lock', emoji: '🔒', tier: 2 },
      'metal-key': { id: 'metal-key', name: 'Metal Key', emoji: '🔑', tier: 2 },
      'metal-bell': { id: 'metal-bell', name: 'Metal Bell', emoji: '🔔', tier: 2 },
      'metal-ring': { id: 'metal-ring', name: 'Metal Ring', emoji: '💍', tier: 2 },
      'metal-crown': { id: 'metal-crown', name: 'Metal Crown', emoji: '👑', tier: 3 },
      'metal-coin': { id: 'metal-coin', name: 'Metal Coin', emoji: '🪙', tier: 2 },
      'metal-wire': { id: 'metal-wire', name: 'Metal Wire', emoji: '🧵', tier: 2 },
      'metal-spring': { id: 'metal-spring', name: 'Metal Spring', emoji: '🌀', tier: 2 },
      'metal-gear': { id: 'metal-gear', name: 'Metal Gear', emoji: '⚙️', tier: 2 },
      'metal-screw': { id: 'metal-screw', name: 'Metal Screw', emoji: '🔩', tier: 2 },
      'metal-bolt': { id: 'metal-bolt', name: 'Metal Bolt', emoji: '🔩', tier: 2 },
      'metal-pipe': { id: 'metal-pipe', name: 'Metal Pipe', emoji: '🔧', tier: 2 },
      'metal-needle': { id: 'metal-needle', name: 'Metal Needle', emoji: '🪡', tier: 2 },
      'metal-scissors': { id: 'metal-scissors', name: 'Metal Scissors', emoji: '✂️', tier: 2 },
      
      // Metal + 建筑 → 金属建筑
      'metal-gate': { id: 'metal-gate', name: 'Metal Gate', emoji: '🚪', tier: 2 },
      'metal-door': { id: 'metal-door', name: 'Metal Door', emoji: '🚪', tier: 2 },
      'metal-fence': { id: 'metal-fence', name: 'Metal Fence', emoji: '🏗️', tier: 2 },
      'metal-tower': { id: 'metal-tower', name: 'Metal Tower', emoji: '🗼', tier: 3 },
      'metal-bridge': { id: 'metal-bridge', name: 'Metal Bridge', emoji: '🌉', tier: 3 },
      'metal-cage': { id: 'metal-cage', name: 'Metal Cage', emoji: '⛓️', tier: 2 },
      'metal-vault': { id: 'metal-vault', name: 'Metal Vault', emoji: '🏦', tier: 3 },
      'metal-safe': { id: 'metal-safe', name: 'Metal Safe', emoji: '🔒', tier: 3 },
      
      // Metal + 乐器 → 金属乐器
      'metal-drum': { id: 'metal-drum', name: 'Metal Drum', emoji: '🥁', tier: 2 },
      'metal-trumpet': { id: 'metal-trumpet', name: 'Metal Trumpet', emoji: '🎺', tier: 2 },
      'metal-bell-music': { id: 'metal-gong', name: 'Metal Gong', emoji: '🔔', tier: 2 },
      'metal-cymbal': { id: 'metal-cymbal', name: 'Metal Cymbal', emoji: '🥁', tier: 2 },
      
      // Metal + 容器 → 金属容器
      'metal-pot': { id: 'metal-pot', name: 'Metal Pot', emoji: '🍲', tier: 2 },
      'metal-pan': { id: 'metal-pan', name: 'Metal Pan', emoji: '🍳', tier: 2 },
      'metal-cup': { id: 'metal-cup', name: 'Metal Cup', emoji: '🥤', tier: 2 },
      'metal-bowl': { id: 'metal-bowl', name: 'Metal Bowl', emoji: '🥣', tier: 2 },
      'metal-can': { id: 'metal-can', name: 'Metal Can', emoji: '🥫', tier: 2 },
      'metal-barrel': { id: 'metal-barrel', name: 'Metal Barrel', emoji: '🛢️', tier: 2 },
      'metal-bucket': { id: 'metal-bucket', name: 'Metal Bucket', emoji: '🪣', tier: 2 },
      
      // ===== WOOD (木) 组合 - 120+ 新组合 =====
      
      // Wood + 植物类 → 木质植物
      'wood-tree': { id: 'wooden-tree', name: 'Wooden Tree', emoji: '🌲', tier: 1 },
      'wood-branch': { id: 'branch', name: 'Branch', emoji: '🌿', tier: 1 },
      'wood-leaf': { id: 'leaf', name: 'Leaf', emoji: '🍃', tier: 1 },
      'wood-root': { id: 'root', name: 'Root', emoji: '🌱', tier: 1 },
      'wood-seed': { id: 'seed', name: 'Seed', emoji: '🌰', tier: 1 },
      'wood-nut': { id: 'nut', name: 'Nut', emoji: '🥜', tier: 2 },
      'wood-acorn': { id: 'acorn', name: 'Acorn', emoji: '🌰', tier: 2 },
      'wood-pine-cone': { id: 'pine-cone', name: 'Pine Cone', emoji: '🌲', tier: 2 },
      'wood-log': { id: 'log', name: 'Log', emoji: '🪵', tier: 1 },
      'wood-plank': { id: 'plank', name: 'Plank', emoji: '🪵', tier: 2 },
      'wood-board': { id: 'board', name: 'Board', emoji: '🪵', tier: 2 },
      
      // Wood + 工具类 → 木质工具
      'wood-stick': { id: 'stick', name: 'Stick', emoji: '🥖', tier: 1 },
      'wood-staff': { id: 'staff', name: 'Staff', emoji: '🎋', tier: 2 },
      'wood-club': { id: 'club', name: 'Club', emoji: '🏏', tier: 2 },
      'wood-bat': { id: 'bat', name: 'Bat', emoji: '⚾', tier: 2 },
      'wood-bow': { id: 'bow', name: 'Bow', emoji: '🏹', tier: 2 },
      'wood-arrow': { id: 'wooden-arrow', name: 'Wooden Arrow', emoji: '➡️', tier: 2 },
      'wood-spear': { id: 'wooden-spear', name: 'Wooden Spear', emoji: '🗡️', tier: 2 },
      'wood-shield': { id: 'wooden-shield', name: 'Wooden Shield', emoji: '🛡️', tier: 2 },
      'wood-handle': { id: 'handle', name: 'Handle', emoji: '🔧', tier: 2 },
      'wood-pole': { id: 'pole', name: 'Pole', emoji: '🎣', tier: 2 },
      'wood-rod': { id: 'rod', name: 'Rod', emoji: '🎣', tier: 2 },
      'wood-cane': { id: 'cane', name: 'Cane', emoji: '🦯', tier: 2 },
      
      // Wood + 家具 → 木质家具
      'wood-table': { id: 'wooden-table', name: 'Wooden Table', emoji: '🪑', tier: 2 },
      'wood-chair': { id: 'wooden-chair', name: 'Wooden Chair', emoji: '🪑', tier: 2 },
      'wood-bench': { id: 'bench', name: 'Bench', emoji: '🪑', tier: 2 },
      'wood-stool': { id: 'stool', name: 'Stool', emoji: '🪑', tier: 2 },
      'wood-bed': { id: 'wooden-bed', name: 'Wooden Bed', emoji: '🛏️', tier: 2 },
      'wood-shelf': { id: 'shelf', name: 'Shelf', emoji: '📚', tier: 2 },
      'wood-cabinet': { id: 'cabinet', name: 'Cabinet', emoji: '🗄️', tier: 2 },
      'wood-drawer': { id: 'drawer', name: 'Drawer', emoji: '🗄️', tier: 2 },
      'wood-chest': { id: 'wooden-chest', name: 'Wooden Chest', emoji: '🗃️', tier: 2 },
      'wood-crate': { id: 'crate', name: 'Crate', emoji: '📦', tier: 2 },
      'wood-box': { id: 'wooden-box', name: 'Wooden Box', emoji: '📦', tier: 2 },
      'wood-barrel': { id: 'wooden-barrel', name: 'Wooden Barrel', emoji: '🛢️', tier: 2 },
      'wood-bucket': { id: 'wooden-bucket', name: 'Wooden Bucket', emoji: '🪣', tier: 2 },
      'wood-basket': { id: 'basket', name: 'Basket', emoji: '🧺', tier: 2 },
      
      // Wood + 建筑 → 木质建筑
      'wood-house': { id: 'wooden-house', name: 'Wooden House', emoji: '🏠', tier: 2 },
      'wood-cabin': { id: 'cabin', name: 'Cabin', emoji: '🏚️', tier: 2 },
      'wood-hut': { id: 'hut', name: 'Hut', emoji: '🛖', tier: 2 },
      'wood-shed': { id: 'shed', name: 'Shed', emoji: '🏚️', tier: 2 },
      'wood-barn': { id: 'barn', name: 'Barn', emoji: '🏚️', tier: 2 },
      'wood-door': { id: 'wooden-door', name: 'Wooden Door', emoji: '🚪', tier: 2 },
      'wood-gate': { id: 'wooden-gate', name: 'Wooden Gate', emoji: '🚪', tier: 2 },
      'wood-fence': { id: 'wooden-fence', name: 'Wooden Fence', emoji: '🏗️', tier: 2 },
      'wood-wall': { id: 'wooden-wall', name: 'Wooden Wall', emoji: '🧱', tier: 2 },
      'wood-floor': { id: 'wooden-floor', name: 'Wooden Floor', emoji: '⬛', tier: 2 },
      'wood-beam': { id: 'beam', name: 'Beam', emoji: '🪵', tier: 2 },
      'wood-post': { id: 'post', name: 'Post', emoji: '🪵', tier: 2 },
      'wood-pillar': { id: 'pillar', name: 'Pillar', emoji: '🏛️', tier: 2 },
      'wood-ladder': { id: 'ladder', name: 'Ladder', emoji: '🪜', tier: 2 },
      'wood-stairs': { id: 'stairs', name: 'Stairs', emoji: '🪜', tier: 2 },
      'wood-bridge': { id: 'wooden-bridge', name: 'Wooden Bridge', emoji: '🌉', tier: 2 },
      
      // Wood + 乐器 → 木质乐器
      'wood-flute': { id: 'flute', name: 'Flute', emoji: '🎵', tier: 2 },
      'wood-drum': { id: 'wooden-drum', name: 'Wooden Drum', emoji: '🥁', tier: 2 },
      'wood-guitar': { id: 'guitar', name: 'Guitar', emoji: '🎸', tier: 3 },
      'wood-violin': { id: 'violin', name: 'Violin', emoji: '🎻', tier: 3 },
      'wood-piano': { id: 'piano', name: 'Piano', emoji: '🎹', tier: 3 },
      
      // Wood + 船类 → 木船
      'wood-boat': { id: 'wooden-boat', name: 'Wooden Boat', emoji: '⛵', tier: 2 },
      'wood-ship': { id: 'wooden-ship', name: 'Wooden Ship', emoji: '⛵', tier: 3 },
      'wood-raft': { id: 'raft', name: 'Raft', emoji: '🚣', tier: 2 },
      'wood-canoe': { id: 'canoe', name: 'Canoe', emoji: '🛶', tier: 2 },
      
      // Wood + 纸类 → 纸制品
      'wood-paper': { id: 'paper', name: 'Paper', emoji: '📄', tier: 2 },
      'wood-book': { id: 'book', name: 'Book', emoji: '📖', tier: 2 },
      'wood-card': { id: 'card', name: 'Card', emoji: '🃏', tier: 2 },
      'wood-cardboard': { id: 'cardboard', name: 'Cardboard', emoji: '📦', tier: 2 },
      
      // ===== WATER (水) 组合 - 120+ 新组合 =====
      
      // Water + 自然地形 → 水域
      'water-ocean': { id: 'ocean', name: 'Ocean', emoji: '🌊', tier: 2 },
      'water-sea': { id: 'sea', name: 'Sea', emoji: '🌊', tier: 2 },
      'water-river': { id: 'river', name: 'River', emoji: '🏞️', tier: 2 },
      'water-stream': { id: 'stream', name: 'Stream', emoji: '💧', tier: 2 },
      'water-lake': { id: 'lake', name: 'Lake', emoji: '🏞️', tier: 2 },
      'water-pond': { id: 'pond', name: 'Pond', emoji: '🏞️', tier: 2 },
      'water-pool': { id: 'pool', name: 'Pool', emoji: '🏊', tier: 2 },
      'water-waterfall': { id: 'waterfall', name: 'Waterfall', emoji: '🏞️', tier: 2 },
      'water-spring': { id: 'spring', name: 'Spring', emoji: '💧', tier: 2 },
      'water-well': { id: 'well', name: 'Well', emoji: '🕳️', tier: 2 },
      'water-fountain': { id: 'fountain', name: 'Fountain', emoji: '⛲', tier: 2 },
      'water-canal': { id: 'canal', name: 'Canal', emoji: '🏞️', tier: 2 },
      'water-swamp': { id: 'swamp', name: 'Swamp', emoji: '🐊', tier: 2 },
      'water-marsh': { id: 'marsh', name: 'Marsh', emoji: '🌾', tier: 2 },
      'water-bog': { id: 'bog', name: 'Bog', emoji: '🌾', tier: 2 },
      
      // Water + 天气 → 水相关天气
      'water-rain': { id: 'rain', name: 'Rain', emoji: '🌧️', tier: 1 },
      'water-storm': { id: 'rainstorm', name: 'Rainstorm', emoji: '⛈️', tier: 2 },
      'water-drizzle': { id: 'drizzle', name: 'Drizzle', emoji: '🌦️', tier: 2 },
      'water-shower': { id: 'shower', name: 'Shower', emoji: '🚿', tier: 2 },
      'water-mist': { id: 'mist', name: 'Mist', emoji: '🌫️', tier: 2 },
      'water-dew': { id: 'dew', name: 'Dew', emoji: '💧', tier: 2 },
      'water-humidity': { id: 'humidity', name: 'Humidity', emoji: '💧', tier: 2 },
      
      // Water + 动作 → 水相关动作
      'water-flow': { id: 'flow', name: 'Flow', emoji: '💧', tier: 2 },
      'water-splash': { id: 'splash', name: 'Splash', emoji: '💦', tier: 2 },
      'water-wave': { id: 'wave', name: 'Wave', emoji: '🌊', tier: 2 },
      'water-ripple': { id: 'ripple', name: 'Ripple', emoji: '💧', tier: 2 },
      'water-pour': { id: 'pour', name: 'Pour', emoji: '💧', tier: 2 },
      'water-drip': { id: 'drip', name: 'Drip', emoji: '💧', tier: 2 },
      'water-leak': { id: 'leak', name: 'Leak', emoji: '💧', tier: 2 },
      'water-flood': { id: 'flood', name: 'Flood', emoji: '🌊', tier: 3 },
      
      // Water + 状态 → 水的状态
      'water-liquid': { id: 'liquid', name: 'Liquid', emoji: '💧', tier: 1 },
      'water-wet': { id: 'wet', name: 'Wet', emoji: '💦', tier: 1 },
      'water-damp': { id: 'damp', name: 'Damp', emoji: '💧', tier: 2 },
      'water-moist': { id: 'moist', name: 'Moist', emoji: '💧', tier: 2 },
      'water-soggy': { id: 'soggy', name: 'Soggy', emoji: '💧', tier: 2 },
      'water-soaked': { id: 'soaked', name: 'Soaked', emoji: '💦', tier: 2 },
      'water-clean': { id: 'clean', name: 'Clean', emoji: '✨', tier: 2 },
      'water-pure': { id: 'pure', name: 'Pure', emoji: '💎', tier: 2 },
      'water-fresh': { id: 'fresh', name: 'Fresh', emoji: '✨', tier: 2 },
      'water-cool': { id: 'cool', name: 'Cool', emoji: '❄️', tier: 2 },
      'water-cold': { id: 'cold', name: 'Cold', emoji: '🧊', tier: 2 },
      
      // Water + 水生生物 → 水族
      'water-whale': { id: 'whale', name: 'Whale', emoji: '🐋', tier: 2 },
      'water-dolphin': { id: 'dolphin', name: 'Dolphin', emoji: '🐬', tier: 2 },
      'water-shark': { id: 'shark', name: 'Shark', emoji: '🦈', tier: 2 },
      'water-octopus': { id: 'octopus', name: 'Octopus', emoji: '🐙', tier: 2 },
      'water-squid': { id: 'squid', name: 'Squid', emoji: '🦑', tier: 2 },
      'water-crab': { id: 'crab', name: 'Crab', emoji: '🦀', tier: 2 },
      'water-lobster': { id: 'lobster', name: 'Lobster', emoji: '🦞', tier: 2 },
      'water-shrimp': { id: 'shrimp', name: 'Shrimp', emoji: '🦐', tier: 2 },
      'water-clam': { id: 'clam', name: 'Clam', emoji: '🦪', tier: 2 },
      'water-oyster': { id: 'oyster', name: 'Oyster', emoji: '🦪', tier: 2 },
      'water-starfish': { id: 'starfish', name: 'Starfish', emoji: '⭐', tier: 2 },
      'water-seahorse': { id: 'seahorse', name: 'Seahorse', emoji: '🌊', tier: 2 },
      'water-jellyfish': { id: 'jellyfish', name: 'Jellyfish', emoji: '🪼', tier: 2 },
      'water-seal': { id: 'seal', name: 'Seal', emoji: '🦭', tier: 2 },
      'water-otter': { id: 'otter', name: 'Otter', emoji: '🦦', tier: 2 },
      'water-frog': { id: 'frog', name: 'Frog', emoji: '🐸', tier: 2 },
      'water-turtle': { id: 'sea-turtle', name: 'Sea Turtle', emoji: '🐢', tier: 2 },
      'water-crocodile': { id: 'crocodile', name: 'Crocodile', emoji: '🐊', tier: 2 },
      'water-alligator': { id: 'alligator', name: 'Alligator', emoji: '🐊', tier: 2 },
      'water-penguin': { id: 'penguin', name: 'Penguin', emoji: '🐧', tier: 2 },
      
      // Water + 植物 → 水生植物
      'water-seaweed': { id: 'seaweed', name: 'Seaweed', emoji: '🌿', tier: 2 },
      'water-algae': { id: 'algae', name: 'Algae', emoji: '🟢', tier: 2 },
      'water-coral': { id: 'coral', name: 'Coral', emoji: '🪸', tier: 2 },
      'water-lily': { id: 'water-lily', name: 'Water Lily', emoji: '🪷', tier: 2 },
      'water-lotus': { id: 'lotus', name: 'Lotus', emoji: '🪷', tier: 2 },
      'water-reed': { id: 'reed', name: 'Reed', emoji: '🎋', tier: 2 },
      
      // Water + 容器 → 盛水容器
      'water-bottle': { id: 'water-bottle', name: 'Water Bottle', emoji: '🍾', tier: 2 },
      'water-glass': { id: 'water-glass', name: 'Water Glass', emoji: '🥛', tier: 2 },
      'water-cup': { id: 'water-cup', name: 'Water Cup', emoji: '🥤', tier: 2 },
      'water-jug': { id: 'jug', name: 'Jug', emoji: '🏺', tier: 2 },
      'water-pitcher': { id: 'pitcher', name: 'Pitcher', emoji: '🏺', tier: 2 },
      'water-tank': { id: 'water-tank', name: 'Water Tank', emoji: '🛢️', tier: 2 },
      'water-barrel': { id: 'water-barrel', name: 'Water Barrel', emoji: '🛢️', tier: 2 },
      'water-bucket': { id: 'water-bucket', name: 'Water Bucket', emoji: '🪣', tier: 2 },
      
      // Water + 饮料 → 水基饮料
      'water-tea': { id: 'tea-water', name: 'Tea', emoji: '🍵', tier: 2 },
      'water-juice': { id: 'juice-water', name: 'Juice', emoji: '🧃', tier: 2 },
      'water-soda': { id: 'soda-water', name: 'Soda', emoji: '🥤', tier: 2 },
      
      // ===== FIRE (火) 组合 - 120+ 新组合 =====
      
      // Fire + 状态 → 火的状态
      'fire-hot': { id: 'hot', name: 'Hot', emoji: '🔥', tier: 1 },
      'fire-warm': { id: 'warm', name: 'Warm', emoji: '♨️', tier: 1 },
      'fire-heat': { id: 'heat', name: 'Heat', emoji: '🔥', tier: 1 },
      'fire-burn': { id: 'burn', name: 'Burn', emoji: '🔥', tier: 1 },
      'fire-flame': { id: 'flame', name: 'Flame', emoji: '🔥', tier: 1 },
      'fire-blaze': { id: 'blaze', name: 'Blaze', emoji: '🔥', tier: 2 },
      'fire-inferno': { id: 'inferno', name: 'Inferno', emoji: '🔥', tier: 3 },
      'fire-spark': { id: 'spark', name: 'Spark', emoji: '✨', tier: 2 },
      'fire-ember': { id: 'ember', name: 'Ember', emoji: '🔥', tier: 2 },
      'fire-ash': { id: 'ash', name: 'Ash', emoji: '🌫️', tier: 2 },
      'fire-smoke': { id: 'smoke', name: 'Smoke', emoji: '💨', tier: 2 },
      'fire-char': { id: 'char', name: 'Char', emoji: '⚫', tier: 2 },
      
      // Fire + 光 → 光源
      'fire-light': { id: 'firelight', name: 'Firelight', emoji: '💡', tier: 2 },
      'fire-glow': { id: 'glow', name: 'Glow', emoji: '✨', tier: 2 },
      'fire-shine': { id: 'shine', name: 'Shine', emoji: '✨', tier: 2 },
      'fire-flash': { id: 'flash', name: 'Flash', emoji: '💥', tier: 2 },
      
      // Fire + 光源工具 → 照明工具
      'fire-torch': { id: 'torch', name: 'Torch', emoji: '🔦', tier: 2 },
      'fire-candle': { id: 'candle', name: 'Candle', emoji: '🕯️', tier: 2 },
      'fire-lamp': { id: 'lamp', name: 'Lamp', emoji: '🪔', tier: 2 },
      'fire-lantern': { id: 'lantern', name: 'Lantern', emoji: '🏮', tier: 2 },
      'fire-campfire': { id: 'campfire', name: 'Campfire', emoji: '🔥', tier: 2 },
      'fire-bonfire': { id: 'bonfire', name: 'Bonfire', emoji: '🔥', tier: 2 },
      
      // Fire + 烹饪 → 烹饪方式
      'fire-cook': { id: 'cook', name: 'Cook', emoji: '🍳', tier: 2 },
      'fire-bake': { id: 'bake', name: 'Bake', emoji: '🍞', tier: 2 },
      'fire-roast': { id: 'roast', name: 'Roast', emoji: '🍖', tier: 2 },
      'fire-grill': { id: 'grill', name: 'Grill', emoji: '🍖', tier: 2 },
      'fire-fry': { id: 'fry', name: 'Fry', emoji: '🍳', tier: 2 },
      'fire-boil': { id: 'boil', name: 'Boil', emoji: '♨️', tier: 2 },
      'fire-steam': { id: 'steam-cook', name: 'Steam', emoji: '💨', tier: 2 },
      'fire-smoke-food': { id: 'smoke-food', name: 'Smoke', emoji: '🍖', tier: 2 },
      'fire-bbq': { id: 'bbq', name: 'BBQ', emoji: '🍖', tier: 2 },
      
      // Fire + 烹饪工具 → 加热工具
      'fire-stove': { id: 'stove', name: 'Stove', emoji: '🔥', tier: 2 },
      'fire-oven': { id: 'oven', name: 'Oven', emoji: '🔥', tier: 2 },
      'fire-furnace': { id: 'furnace', name: 'Furnace', emoji: '🔥', tier: 2 },
      'fire-kiln': { id: 'kiln', name: 'Kiln', emoji: '🏺', tier: 2 },
      'fire-forge': { id: 'forge', name: 'Forge', emoji: '⚒️', tier: 2 },
      'fire-hearth': { id: 'hearth', name: 'Hearth', emoji: '🔥', tier: 2 },
      'fire-fireplace': { id: 'fireplace', name: 'Fireplace', emoji: '🔥', tier: 2 },
      
      // Fire + 自然现象 → 火相关自然
      'fire-volcano': { id: 'volcano', name: 'Volcano', emoji: '🌋', tier: 3 },
      'fire-lava': { id: 'lava', name: 'Lava', emoji: '🌋', tier: 3 },
      'fire-magma': { id: 'magma', name: 'Magma', emoji: '🔥', tier: 3 },
      'fire-lightning': { id: 'lightning', name: 'Lightning', emoji: '⚡', tier: 2 },
      'fire-thunder': { id: 'thunder', name: 'Thunder', emoji: '⚡', tier: 2 },
      'fire-wildfire': { id: 'wildfire', name: 'Wildfire', emoji: '🔥', tier: 3 },
      'fire-forest-fire': { id: 'forest-fire', name: 'Forest Fire', emoji: '🔥', tier: 3 },
      
      // Fire + 天体 → 发光天体
      'fire-sun': { id: 'sun', name: 'Sun', emoji: '☀️', tier: 2 },
      'fire-star': { id: 'star', name: 'Star', emoji: '⭐', tier: 2 },
      'fire-comet': { id: 'comet', name: 'Comet', emoji: '☄️', tier: 3 },
      'fire-meteor': { id: 'meteor', name: 'Meteor', emoji: '☄️', tier: 3 },
      
      // Fire + 动物 → 火属性动物
      'fire-dragon': { id: 'fire-dragon', name: 'Fire Dragon', emoji: '🐉', tier: 3 },
      'fire-phoenix': { id: 'phoenix', name: 'Phoenix', emoji: '🔥', tier: 3 },
      'fire-salamander': { id: 'salamander', name: 'Salamander', emoji: '🦎', tier: 2 },
      'fire-firefly': { id: 'firefly', name: 'Firefly', emoji: '✨', tier: 2 },
      
      // Fire + 能量 → 能量形式
      'fire-energy': { id: 'thermal-energy', name: 'Thermal Energy', emoji: '⚡', tier: 2 },
      'fire-power': { id: 'fire-power', name: 'Fire Power', emoji: '🔥', tier: 2 },
      'fire-fuel': { id: 'fuel', name: 'Fuel', emoji: '⛽', tier: 2 },
      'fire-explosion': { id: 'explosion', name: 'Explosion', emoji: '💥', tier: 3 },
      'fire-blast': { id: 'blast', name: 'Blast', emoji: '💥', tier: 2 },
      
      // Fire + 情感 → 火热情感
      'fire-passion': { id: 'passion', name: 'Passion', emoji: '❤️‍🔥', tier: 2 },
      'fire-anger': { id: 'anger', name: 'Anger', emoji: '😠', tier: 2 },
      'fire-rage': { id: 'rage', name: 'Rage', emoji: '😡', tier: 3 },
      
      // Fire + 武器 → 火焰武器
      'fire-sword': { id: 'fire-sword', name: 'Fire Sword', emoji: '⚔️', tier: 3 },
      'fire-arrow': { id: 'fire-arrow', name: 'Fire Arrow', emoji: '➡️', tier: 3 },
      'fire-bomb': { id: 'fire-bomb', name: 'Fire Bomb', emoji: '💣', tier: 3 },
      
      // ===== EARTH (土) 组合 - 120+ 新组合 =====
      
      // Earth + 地形 → 陆地地形
      'earth-ground': { id: 'ground', name: 'Ground', emoji: '⬛', tier: 1 },
      'earth-land': { id: 'land', name: 'Land', emoji: '🏞️', tier: 1 },
      'earth-soil': { id: 'soil', name: 'Soil', emoji: '🟫', tier: 1 },
      'earth-dirt': { id: 'dirt', name: 'Dirt', emoji: '🟫', tier: 1 },
      'earth-clay': { id: 'clay', name: 'Clay', emoji: '🟫', tier: 1 },
      'earth-mud': { id: 'mud', name: 'Mud', emoji: '🟫', tier: 1 },
      'earth-dust': { id: 'dust', name: 'Dust', emoji: '💨', tier: 1 },
      'earth-sand': { id: 'sand', name: 'Sand', emoji: '🏖️', tier: 1 },
      'earth-gravel': { id: 'gravel', name: 'Gravel', emoji: '🪨', tier: 2 },
      'earth-pebble': { id: 'pebble', name: 'Pebble', emoji: '🪨', tier: 2 },
      'earth-rock': { id: 'rock', name: 'Rock', emoji: '🪨', tier: 1 },
      'earth-stone': { id: 'stone', name: 'Stone', emoji: '🪨', tier: 1 },
      'earth-boulder': { id: 'boulder', name: 'Boulder', emoji: '🪨', tier: 2 },
      'earth-mountain': { id: 'mountain', name: 'Mountain', emoji: '⛰️', tier: 2 },
      'earth-hill': { id: 'hill', name: 'Hill', emoji: '⛰️', tier: 2 },
      'earth-peak': { id: 'peak', name: 'Peak', emoji: '⛰️', tier: 2 },
      'earth-cliff': { id: 'cliff', name: 'Cliff', emoji: '🏔️', tier: 2 },
      'earth-canyon': { id: 'canyon', name: 'Canyon', emoji: '🏜️', tier: 2 },
      'earth-gorge': { id: 'gorge', name: 'Gorge', emoji: '🏔️', tier: 2 },
      'earth-valley': { id: 'valley', name: 'Valley', emoji: '🏞️', tier: 2 },
      'earth-plain': { id: 'plain', name: 'Plain', emoji: '🌾', tier: 2 },
      'earth-plateau': { id: 'plateau', name: 'Plateau', emoji: '🏔️', tier: 2 },
      'earth-mesa': { id: 'mesa', name: 'Mesa', emoji: '🏜️', tier: 2 },
      'earth-butte': { id: 'butte', name: 'Butte', emoji: '🏜️', tier: 2 },
      
      // Earth + 洞穴 → 地下空间
      'earth-cave': { id: 'cave', name: 'Cave', emoji: '🕳️', tier: 2 },
      'earth-cavern': { id: 'cavern', name: 'Cavern', emoji: '🕳️', tier: 2 },
      'earth-grotto': { id: 'grotto', name: 'Grotto', emoji: '🕳️', tier: 2 },
      'earth-tunnel': { id: 'tunnel', name: 'Tunnel', emoji: '🚇', tier: 2 },
      'earth-mine': { id: 'mine', name: 'Mine', emoji: '⛏️', tier: 2 },
      'earth-quarry': { id: 'quarry', name: 'Quarry', emoji: '🪨', tier: 2 },
      'earth-pit': { id: 'pit', name: 'Pit', emoji: '🕳️', tier: 2 },
      'earth-hole': { id: 'hole', name: 'Hole', emoji: '🕳️', tier: 1 },
      'earth-crater': { id: 'crater', name: 'Crater', emoji: '🌑', tier: 2 },
      
      // Earth + 沙漠 → 沙漠地形
      'earth-desert': { id: 'desert', name: 'Desert', emoji: '🏜️', tier: 2 },
      'earth-dune': { id: 'dune', name: 'Dune', emoji: '🏜️', tier: 2 },
      'earth-oasis': { id: 'oasis', name: 'Oasis', emoji: '🌴', tier: 3 },
      'earth-sandstone': { id: 'sandstone', name: 'Sandstone', emoji: '🪨', tier: 2 },
      
      // Earth + 岛屿 → 陆地类型
      'earth-island': { id: 'island', name: 'Island', emoji: '🏝️', tier: 2 },
      'earth-peninsula': { id: 'peninsula', name: 'Peninsula', emoji: '🏞️', tier: 2 },
      'earth-continent': { id: 'continent', name: 'Continent', emoji: '🌍', tier: 3 },
      
      // Earth + 植被 → 土地植被
      'earth-field': { id: 'field', name: 'Field', emoji: '🌾', tier: 2 },
      'earth-meadow': { id: 'meadow', name: 'Meadow', emoji: '🌾', tier: 2 },
      'earth-prairie': { id: 'prairie', name: 'Prairie', emoji: '🌾', tier: 2 },
      'earth-grassland': { id: 'grassland', name: 'Grassland', emoji: '🌾', tier: 2 },
      'earth-savanna': { id: 'savanna', name: 'Savanna', emoji: '🦁', tier: 2 },
      'earth-steppe': { id: 'steppe', name: 'Steppe', emoji: '🌾', tier: 2 },
      'earth-tundra': { id: 'tundra', name: 'Tundra', emoji: '🏔️', tier: 2 },
      
      // Earth + 农业 → 耕地
      'earth-farm': { id: 'farm', name: 'Farm', emoji: '🚜', tier: 2 },
      'earth-crop': { id: 'crop', name: 'Crop', emoji: '🌾', tier: 2 },
      'earth-harvest': { id: 'harvest', name: 'Harvest', emoji: '🌾', tier: 2 },
      'earth-plow': { id: 'plow', name: 'Plow', emoji: '🚜', tier: 2 },
      'earth-garden': { id: 'garden', name: 'Garden', emoji: '🌺', tier: 2 },
      'earth-orchard': { id: 'orchard', name: 'Orchard', emoji: '🌳', tier: 2 },
      'earth-vineyard': { id: 'vineyard', name: 'Vineyard', emoji: '🍇', tier: 2 },
      
      // Earth + 矿物 → 矿石
      'earth-ore': { id: 'ore', name: 'Ore', emoji: '⛏️', tier: 2 },
      'earth-mineral': { id: 'mineral', name: 'Mineral', emoji: '💎', tier: 2 },
      'earth-crystal': { id: 'crystal', name: 'Crystal', emoji: '💎', tier: 2 },
      'earth-gem': { id: 'gem', name: 'Gem', emoji: '💎', tier: 2 },
      'earth-diamond': { id: 'diamond', name: 'Diamond', emoji: '💎', tier: 3 },
      'earth-ruby': { id: 'ruby', name: 'Ruby', emoji: '💎', tier: 3 },
      'earth-emerald': { id: 'emerald', name: 'Emerald', emoji: '💚', tier: 3 },
      'earth-sapphire': { id: 'sapphire', name: 'Sapphire', emoji: '💙', tier: 3 },
      'earth-coal': { id: 'coal', name: 'Coal', emoji: '⚫', tier: 2 },
      'earth-iron': { id: 'iron', name: 'Iron', emoji: '⚙️', tier: 2 },
      'earth-copper': { id: 'copper', name: 'Copper', emoji: '🟤', tier: 2 },
      'earth-gold': { id: 'gold', name: 'Gold', emoji: '🪙', tier: 2 },
      'earth-silver': { id: 'silver', name: 'Silver', emoji: '⚪', tier: 2 },
      
      // Earth + 建筑 → 土质建筑
      'earth-wall': { id: 'earth-wall', name: 'Earth Wall', emoji: '🧱', tier: 2 },
      'earth-brick': { id: 'brick', name: 'Brick', emoji: '🧱', tier: 2 },
      'earth-tile': { id: 'tile', name: 'Tile', emoji: '🟫', tier: 2 },
      'earth-pottery': { id: 'pottery', name: 'Pottery', emoji: '🏺', tier: 2 },
      'earth-ceramic': { id: 'ceramic', name: 'Ceramic', emoji: '🏺', tier: 2 },
      'earth-vase': { id: 'vase', name: 'Vase', emoji: '🏺', tier: 2 },
      'earth-pot': { id: 'clay-pot', name: 'Clay Pot', emoji: '🏺', tier: 2 },
      'earth-bowl': { id: 'clay-bowl', name: 'Clay Bowl', emoji: '🥣', tier: 2 },
      
      // Earth + 动物 → 陆地动物
      'earth-worm': { id: 'worm', name: 'Worm', emoji: '🪱', tier: 1 },
      'earth-mole': { id: 'mole', name: 'Mole', emoji: '🦦', tier: 2 },
      'earth-badger': { id: 'badger', name: 'Badger', emoji: '🦡', tier: 2 },
      'earth-groundhog': { id: 'groundhog', name: 'Groundhog', emoji: '🦫', tier: 2 },
      'earth-ant': { id: 'ant', name: 'Ant', emoji: '🐜', tier: 1 },
      'earth-beetle': { id: 'beetle', name: 'Beetle', emoji: '🪲', tier: 2 },
      'earth-spider': { id: 'spider', name: 'Spider', emoji: '🕷️', tier: 2 },
      'earth-scorpion': { id: 'scorpion', name: 'Scorpion', emoji: '🦂', tier: 2 },
      'earth-snake': { id: 'snake', name: 'Snake', emoji: '🐍', tier: 2 },
      'earth-lizard': { id: 'lizard', name: 'Lizard', emoji: '🦎', tier: 2 },
      'earth-tortoise': { id: 'tortoise', name: 'Tortoise', emoji: '🐢', tier: 2 },
      'earth-bear': { id: 'bear', name: 'Bear', emoji: '🐻', tier: 2 },
      'earth-elephant': { id: 'elephant', name: 'Elephant', emoji: '🐘', tier: 2 },
      'earth-rhino': { id: 'rhino', name: 'Rhino', emoji: '🦏', tier: 2 },
      'earth-hippo': { id: 'hippo', name: 'Hippo', emoji: '🦛', tier: 2 },
      
      // Earth + 状态 → 土的状态
      'earth-solid': { id: 'solid', name: 'Solid', emoji: '🪨', tier: 1 },
      'earth-hard': { id: 'hard', name: 'Hard', emoji: '🪨', tier: 1 },
      'earth-dense': { id: 'dense', name: 'Dense', emoji: '🪨', tier: 2 },
      'earth-heavy': { id: 'heavy', name: 'Heavy', emoji: '⚖️', tier: 2 },
      'earth-stable': { id: 'stable', name: 'Stable', emoji: '⚖️', tier: 2 },
      'earth-firm': { id: 'firm', name: 'Firm', emoji: '💪', tier: 2 },
      'earth-rough': { id: 'rough', name: 'Rough', emoji: '🪨', tier: 2 },
      'earth-coarse': { id: 'coarse', name: 'Coarse', emoji: '🪨', tier: 2 },
      
      // Earth + 动作 → 土相关动作
      'earth-dig': { id: 'dig', name: 'Dig', emoji: '⛏️', tier: 2 },
      'earth-bury': { id: 'bury', name: 'Bury', emoji: '⚰️', tier: 2 },
      'earth-excavate': { id: 'excavate', name: 'Excavate', emoji: '⛏️', tier: 2 },
      'earth-mine-action': { id: 'mine-action', name: 'Mine', emoji: '⛏️', tier: 2 },
      'earth-quarry-action': { id: 'quarry-action', name: 'Quarry', emoji: '🪨', tier: 2 },
    };

    // ==================== 常见词汇扩展包 (Common Words Expansion) ====================
    const commonWordsExpansion = {
      // 🚶 动作与行为 - Actions
      'human-ground': { id: 'walk', name: 'Walk', emoji: '🚶', tier: 1 },
      'walk-fast': { id: 'run', name: 'Run', emoji: '🏃', tier: 2 },
      'human-up': { id: 'jump', name: 'Jump', emoji: '🤸', tier: 2 },
      'bird-air': { id: 'fly-action', name: 'Fly', emoji: '🕊️', tier: 2 },
      'human-water': { id: 'swim', name: 'Swim', emoji: '🏊', tier: 2 },
      'music-human': { id: 'sing', name: 'Sing', emoji: '🎤', tier: 2 },
      'human-bed': { id: 'sleep', name: 'Sleep', emoji: '😴', tier: 1 },
      'mouth-food': { id: 'eat', name: 'Eat', emoji: '🍽️', tier: 1 },
      'mouth-water': { id: 'drink', name: 'Drink', emoji: '🥤', tier: 1 },
      'brain-thought': { id: 'think', name: 'Think', emoji: '🤔', tier: 2 },
      'mouth-word': { id: 'speak', name: 'Speak', emoji: '🗣️', tier: 2 },
      'hand-pen': { id: 'write', name: 'Write', emoji: '✍️', tier: 2 },
      'eye-book': { id: 'read', name: 'Read', emoji: '📖', tier: 2 },
      'human-game': { id: 'play', name: 'Play', emoji: '🎮', tier: 2 },
      'human-tool': { id: 'work', name: 'Work', emoji: '💼', tier: 2 },
      'human-calm': { id: 'rest', name: 'Rest', emoji: '😌', tier: 2 },
      'lung-air': { id: 'breathe', name: 'Breathe', emoji: '💨', tier: 2 },
      'happy-loud': { id: 'laugh', name: 'Laugh', emoji: '😂', tier: 2 },
      'sad-tear': { id: 'cry', name: 'Cry', emoji: '😭', tier: 2 },
      'happy-mouth': { id: 'smile', name: 'Smile', emoji: '😊', tier: 1 },
      'person-battle': { id: 'fight', name: 'Fight', emoji: '🥊', tier: 3 },
      'book-brain': { id: 'learn', name: 'Learn', emoji: '📚', tier: 2 },
      'knowledge-human': { id: 'teach', name: 'Teach', emoji: '👨‍🏫', tier: 2 },
      'idea-make': { id: 'create', name: 'Create', emoji: '✨', tier: 2 },
      
      // 👤 身体部位 - Body Parts
      'body-top': { id: 'head', name: 'Head', emoji: '🗣️', tier: 1 },
      'head-inside': { id: 'brain', name: 'Brain', emoji: '🧠', tier: 2 },
      'head-see': { id: 'eye', name: 'Eye', emoji: '👁️', tier: 1 },
      'head-hear': { id: 'ear', name: 'Ear', emoji: '👂', tier: 1 },
      'head-smell': { id: 'nose', name: 'Nose', emoji: '👃', tier: 1 },
      'head-taste': { id: 'mouth', name: 'Mouth', emoji: '👄', tier: 1 },
      'mouth-white': { id: 'tooth', name: 'Tooth', emoji: '🦷', tier: 2 },
      'mouth-taste': { id: 'tongue', name: 'Tongue', emoji: '👅', tier: 2 },
      'head-body-connect': { id: 'neck', name: 'Neck', emoji: '🧣', tier: 2 },
      'body-side-top': { id: 'shoulder', name: 'Shoulder', emoji: '💪', tier: 2 },
      'shoulder-hand-link': { id: 'arm', name: 'Arm', emoji: '💪', tier: 1 },
      'arm-end': { id: 'hand', name: 'Hand', emoji: '✋', tier: 1 },
      'hand-part': { id: 'finger', name: 'Finger', emoji: '👆', tier: 2 },
      'finger-big': { id: 'thumb', name: 'Thumb', emoji: '👍', tier: 2 },
      'body-front-center': { id: 'chest', name: 'Chest', emoji: '🫁', tier: 2 },
      'chest-organ': { id: 'heart', name: 'Heart', emoji: '❤️', tier: 1 },
      'chest-breathe': { id: 'lung', name: 'Lung', emoji: '🫁', tier: 3 },
      'body-food-process': { id: 'stomach', name: 'Stomach', emoji: '🤰', tier: 2 },
      'body-clean-organ': { id: 'liver', name: 'Liver', emoji: '🫀', tier: 3 },
      'body-filter-organ': { id: 'kidney', name: 'Kidney', emoji: '🫀', tier: 3 },
      'body-bottom': { id: 'leg', name: 'Leg', emoji: '🦵', tier: 1 },
      'leg-middle': { id: 'knee', name: 'Knee', emoji: '🦵', tier: 2 },
      'leg-end': { id: 'foot', name: 'Foot', emoji: '🦶', tier: 1 },
      'foot-small': { id: 'toe', name: 'Toe', emoji: '🦶', tier: 2 },
      'body-cover': { id: 'skin', name: 'Skin', emoji: '🧴', tier: 2 },
      'head-grow': { id: 'hair', name: 'Hair', emoji: '💇', tier: 2 },
      'body-hard': { id: 'bone', name: 'Bone', emoji: '🦴', tier: 2 },
      'body-red-liquid': { id: 'blood', name: 'Blood', emoji: '🩸', tier: 2 },
      'body-power': { id: 'muscle', name: 'Muscle', emoji: '💪', tier: 2 },
      'brain-connect': { id: 'nerve', name: 'Nerve', emoji: '🧠', tier: 3 },
      
      // 🍞 食物与饮料 - Food & Drinks
      'wheat-bake': { id: 'bread', name: 'Bread', emoji: '🍞', tier: 2 },
      'flour-long': { id: 'noodle', name: 'Noodle', emoji: '🍜', tier: 3 },
      'noodle-italy': { id: 'pasta', name: 'Pasta', emoji: '🍝', tier: 3 },
      'bread-filling': { id: 'sandwich', name: 'Sandwich', emoji: '🥪', tier: 3 },
      'vegetable-mix': { id: 'salad', name: 'Salad', emoji: '🥗', tier: 3 },
      'water-vegetable': { id: 'soup', name: 'Soup', emoji: '🍲', tier: 3 },
      'animal-flesh': { id: 'meat', name: 'Meat', emoji: '🥩', tier: 2 },
      'cow-meat': { id: 'beef', name: 'Beef', emoji: '🥩', tier: 3 },
      'pig-meat': { id: 'pork', name: 'Pork', emoji: '🥓', tier: 3 },
      'bird-lay': { id: 'egg', name: 'Egg', emoji: '🥚', tier: 2 },
      'cow-liquid': { id: 'milk', name: 'Milk', emoji: '🥛', tier: 2 },
      'milk-press': { id: 'cheese', name: 'Cheese', emoji: '🧀', tier: 3 },
      'milk-churn': { id: 'butter', name: 'Butter', emoji: '🧈', tier: 3 },
      'tree-sweet': { id: 'fruit', name: 'Fruit', emoji: '🍎', tier: 2 },
      'fruit-red': { id: 'apple', name: 'Apple', emoji: '🍎', tier: 2 },
      'cane-sweet': { id: 'sugar', name: 'Sugar', emoji: '🍬', tier: 2 },
      'plant-spicy': { id: 'pepper', name: 'Pepper', emoji: '🌶️', tier: 2 },
      'seed-press': { id: 'oil', name: 'Oil', emoji: '🛢️', tier: 2 },
      'tomato-crush': { id: 'sauce', name: 'Sauce', emoji: '🥫', tier: 3 },
      'fruit-press': { id: 'juice', name: 'Juice', emoji: '🧃', tier: 2 },
      'flour-sugar': { id: 'cookie', name: 'Cookie', emoji: '🍪', tier: 3 },
      
      // 🌙 时间与自然 - Time & Nature
      'day-dark-time': { id: 'night', name: 'Night', emoji: '🌃', tier: 1 },
      'night-end': { id: 'morning', name: 'Morning', emoji: '🌄', tier: 1 },
      'earth-air-above': { id: 'sky', name: 'Sky', emoji: '☁️', tier: 1 },
      'stone-tiny': { id: 'sand', name: 'Sand', emoji: '🏖️', tier: 2 },
      
      // 👨‍👩‍👧‍👦 人物与关系 - People & Relationships
      'human-male': { id: 'man', name: 'Man', emoji: '👨', tier: 1 },
      'human-female': { id: 'woman', name: 'Woman', emoji: '👩', tier: 1 },
      'man-young': { id: 'boy', name: 'Boy', emoji: '👦', tier: 1 },
      'woman-young': { id: 'girl', name: 'Girl', emoji: '👧', tier: 1 },
      'human-new': { id: 'baby', name: 'Baby', emoji: '👶', tier: 1 },
      'baby-grow': { id: 'child', name: 'Child', emoji: '🧒', tier: 1 },
      'child-caretaker': { id: 'parent', name: 'Parent', emoji: '👨‍👩‍👧', tier: 2 },
      'parent-man': { id: 'father', name: 'Father', emoji: '👨', tier: 2 },
      'parent-woman': { id: 'mother', name: 'Mother', emoji: '👩', tier: 2 },
      'person-like': { id: 'friend', name: 'Friend', emoji: '👬', tier: 2 },
      'school-adult': { id: 'teacher', name: 'Teacher', emoji: '👨‍🏫', tier: 2 },
      'hospital-healer': { id: 'doctor', name: 'Doctor', emoji: '👨‍⚕️', tier: 3 },
      'field-worker': { id: 'farmer', name: 'Farmer', emoji: '👨‍🌾', tier: 2 },
      'kingdom-ruler': { id: 'king', name: 'King', emoji: '🤴', tier: 3 },
      'kingdom-ruler-female': { id: 'queen', name: 'Queen', emoji: '👸', tier: 3 },
      
      // 🏠 建筑与场所 - Buildings & Places
      'shelter-family': { id: 'home', name: 'Home', emoji: '🏠', tier: 2 },
      'stone-tall': { id: 'building', name: 'Building', emoji: '🏢', tier: 2 },
      'stone-fortress': { id: 'castle', name: 'Castle', emoji: '🏰', tier: 3 },
      'building-high': { id: 'tower', name: 'Tower', emoji: '🗼', tier: 2 },
      'stone-cross-river': { id: 'bridge', name: 'Bridge', emoji: '🌉', tier: 3 },
      'ground-path': { id: 'road', name: 'Road', emoji: '🛣️', tier: 2 },
      
      // 🔧 工具与技术 - Tools & Technology
      'stone-round': { id: 'wheel', name: 'Wheel', emoji: '⚙️', tier: 2 },
      
      // 💡 概念与特质 - Concepts & Qualities
      'sun-bright': { id: 'light', name: 'Light', emoji: '💡', tier: 1 },
      'night-absence-light': { id: 'dark', name: 'Dark', emoji: '🌑', tier: 1 },
      'size-large': { id: 'big', name: 'Big', emoji: '🔷', tier: 1 },
      'good-opposite': { id: 'bad', name: 'Bad', emoji: '⛔', tier: 2 },
      'time-fresh': { id: 'new', name: 'New', emoji: '✨', tier: 1 },
      'time-aged': { id: 'old', name: 'Old', emoji: '⏳', tier: 2 },
      'power-much': { id: 'strong', name: 'Strong', emoji: '💪', tier: 2 },
      'strong-opposite': { id: 'weak', name: 'Weak', emoji: '🤷', tier: 2 },
    };

    // ==================== 东方文化元素 (Eastern Culture) ====================
    const easternCulture = {
      // 🐉 龙 - Dragon elements
      'fire-water-mix': { id: 'dragon-essence', name: 'Dragon Essence', emoji: '🐉', tier: 6 },
      'phoenix-water': { id: 'dragon', name: 'Dragon', emoji: '🐉', tier: 7 },
      'dragon-sky': { id: 'celestial-dragon', name: 'Celestial Dragon', emoji: '🐲', tier: 8 },
      'dragon-ocean': { id: 'sea-dragon', name: 'Sea Dragon', emoji: '🌊', tier: 8 },
      'dragon-fire': { id: 'fire-dragon', name: 'Fire Dragon', emoji: '🔥', tier: 8 },
      'dragon-mountain': { id: 'mountain-dragon', name: 'Mountain Dragon', emoji: '⛰️', tier: 8 },
      'dragon-wisdom': { id: 'wise-dragon', name: 'Wise Dragon', emoji: '📜', tier: 9 },
      'dragon-gold': { id: 'golden-dragon', name: 'Golden Dragon', emoji: '💫', tier: 9 },
      'dragon-emperor': { id: 'imperial-dragon', name: 'Imperial Dragon', emoji: '👑', tier: 10 },
      
      // 🥟 中国美食 - Chinese Food
      'wheat-water': { id: 'dough', name: 'Dough', emoji: '🍞', tier: 3 },
      'dough-meat': { id: 'dumpling', name: 'Dumpling', emoji: '🥟', tier: 4 },
      'dumpling-steam': { id: 'steamed-dumpling', name: 'Steamed Dumpling', emoji: '💨', tier: 5 },
      'dumpling-fire': { id: 'potsticker', name: 'Potsticker', emoji: '🥟', tier: 5 },
      'rice-water': { id: 'rice-porridge', name: 'Rice Porridge', emoji: '🧊', tier: 4 },
      'rice-vinegar': { id: 'sushi-rice', name: 'Sushi Rice', emoji: '🧊', tier: 5 },
      'noodle-soup': { id: 'ramen', name: 'Ramen', emoji: '🍜', tier: 5 },
      'tea-hot': { id: 'hot-tea', name: 'Hot Tea', emoji: '🍵', tier: 4 },
      'tea-ceremony': { id: 'tea-ceremony', name: 'Tea Ceremony', emoji: '🍵', tier: 6 },
      'soy-bean': { id: 'tofu', name: 'Tofu', emoji: '🧊', tier: 4 },
      'rice-alcohol': { id: 'baijiu', name: 'Baijiu', emoji: '🍶', tier: 6 },
      'grain-ferment': { id: 'moutai', name: 'Moutai', emoji: '🍷', tier: 7, color: 'from-amber-500 via-orange-600 to-red-700' },
      
      // 🧧 中国传统文化 - Traditional Chinese Culture
      'paper-fire': { id: 'firework', name: 'Firework', emoji: '🔥', tier: 4 },
      'firework-festival': { id: 'spring-festival', name: 'Spring Festival', emoji: '💍', tier: 6 },
      'paper-red': { id: 'red-envelope', name: 'Red Envelope', emoji: '🧧', tier: 5 },
      'paper-blessing': { id: 'spring-couplet', name: 'Spring Couplet', emoji: '💍', tier: 5 },
      'paper-art': { id: 'paper-cutting', name: 'Paper Cutting', emoji: '✂️', tier: 5 },
      'silk-color': { id: 'chinese-silk', name: 'Chinese Silk', emoji: '🧵', tier: 6 },
      'bamboo-art': { id: 'bamboo-craft', name: 'Bamboo Craft', emoji: '🎋', tier: 5 },
      'ink-brush': { id: 'calligraphy', name: 'Calligraphy', emoji: '✍️', tier: 6 },
      'jade-carve': { id: 'jade-pendant', name: 'Jade Pendant', emoji: '🖊️', tier: 7 },
      'wisdom-ancient': { id: 'i-ching', name: 'I Ching', emoji: '☯️', tier: 8 },
      
      // 🏮 中国节日与象征 - Festivals & Symbols
      'moon-cake': { id: 'mooncake', name: 'Mooncake', emoji: '🌙', tier: 5 },
      'moon-festival': { id: 'mid-autumn', name: 'Mid Autumn Festival', emoji: '🏮', tier: 6 },
      'dragon-boat': { id: 'dragon-boat', name: 'Dragon Boat', emoji: '⛵', tier: 6 },
      'lantern-sky': { id: 'sky-lantern', name: 'Sky Lantern', emoji: '🎆', tier: 5 },
      'lion-dance': { id: 'lion-dance', name: 'Lion Dance', emoji: '🦁', tier: 6 },
      'lucky-number': { id: 'lucky-eight', name: 'Lucky Eight', emoji: '8️⃣', tier: 5 },
      
      // 🎎 日本文化 - Japanese Culture
      'fish-rice': { id: 'sushi', name: 'Sushi', emoji: '🍣', tier: 5 },
      'cherry-tree': { id: 'sakura', name: 'Sakura', emoji: '🌸', tier: 6 },
      'sakura-festival': { id: 'hanami', name: 'Hanami', emoji: '🌸', tier: 7 },
      'warrior-honor': { id: 'samurai', name: 'Samurai', emoji: '⚔️', tier: 7 },
      'samurai-sword': { id: 'katana', name: 'Katana', emoji: '🗡️', tier: 7 },
      'temple-zen': { id: 'zen-garden', name: 'Zen Garden', emoji: '🪨', tier: 6 },
      'paper-fold': { id: 'origami', name: 'Origami', emoji: '🦢', tier: 5 },
      'mountain-sacred': { id: 'mount-fuji', name: 'Mount Fuji', emoji: '🗻', tier: 7 },
      
      // 🥋 武术与哲学 - Martial Arts & Philosophy
      'balance-harmony': { id: 'tai-chi', name: 'Tai Chi', emoji: '☯️', tier: 6 },
      'fight-discipline': { id: 'kung-fu', name: 'Kung Fu', emoji: '🥋', tier: 6 },
      'wisdom-balance': { id: 'yin-yang', name: 'Yin Yang', emoji: '☯️', tier: 7 },
      'meditation-enlightenment': { id: 'enlightenment', name: 'Enlightenment', emoji: '☀️', tier: 8 },
      'energy-flow': { id: 'chi', name: 'Chi', emoji: '💠', tier: 7 },
      'chi-master': { id: 'chi-master', name: 'Chi Master', emoji: '🧙', tier: 8 },
    };

    // ==================== 美式文化元素 (American Culture) ====================
    const americanCulture = {
      // 🍓 美式食物 - American Food (with multiple Rs!)
      'berry-red': { id: 'strawberry', name: 'Strawberry', emoji: '🍓', tier: 4 },
      'strawberry-cream': { id: 'strawberry-shortcake', name: 'Strawberry Shortcake', emoji: '🍓', tier: 5 },
      'strawberry-milk': { id: 'strawberry-milkshake', name: 'Strawberry Milkshake', emoji: '🥛', tier: 5 },
      'strawberry-ice': { id: 'strawberry-sorbet', name: 'Strawberry Sorbet', emoji: '🍓', tier: 5 },
      'meat-bread': { id: 'burger', name: 'Burger', emoji: '🍔', tier: 4 },
      'burger-cheese': { id: 'cheeseburger', name: 'Cheeseburger', emoji: '🧀', tier: 5 },
      'burger-bacon': { id: 'bacon-burger', name: 'Bacon Burger', emoji: '🥓', tier: 6 },
      'potato-oil': { id: 'french-fries', name: 'French Fries', emoji: '🍟', tier: 4 },
      'chicken-fried': { id: 'fried-chicken', name: 'Fried Chicken', emoji: '🐔', tier: 5 },
      'corn-pop': { id: 'popcorn', name: 'Popcorn', emoji: '🍿', tier: 4 },
      'dough-cheese': { id: 'pizza', name: 'Pizza', emoji: '🍕', tier: 5 },
      'ice-cream-cone': { id: 'ice-cream', name: 'Ice Cream', emoji: '🍦', tier: 4 },
      'chocolate-cookie': { id: 'brownie', name: 'Brownie', emoji: '🍫', tier: 5 },
      'apple-pie': { id: 'apple-pie', name: 'Apple Pie', emoji: '🍎', tier: 5 },
      'hot-dog': { id: 'hot-dog', name: 'Hot Dog', emoji: '🌭', tier: 4 },
      'taco-meat': { id: 'taco', name: 'Taco', emoji: '🌮', tier: 4 },
      'bread-peanut': { id: 'pbj-sandwich', name: 'PBJ Sandwich', emoji: '🥪', tier: 4 },
      
      // 🎸 美式文化 - American Culture
      'music-guitar': { id: 'rock-music', name: 'Rock Music', emoji: '🎸', tier: 5 },
      'rock-music-electric': { id: 'rock-and-roll', name: 'Rock and Roll', emoji: '🎵', tier: 6 },
      'music-rhythm': { id: 'jazz', name: 'Jazz', emoji: '🎷', tier: 6 },
      'music-country': { id: 'country-music', name: 'Country Music', emoji: '🤠', tier: 5 },
      'music-hip-hop': { id: 'hip-hop', name: 'Hip Hop', emoji: '🎤', tier: 6 },
      'theater-movies': { id: 'hollywood', name: 'Hollywood', emoji: '🎬', tier: 7 },
      'cowboy-west': { id: 'wild-west', name: 'Wild West', emoji: '🤠', tier: 6 },
      'cowboy-horse': { id: 'rodeo', name: 'Rodeo', emoji: '🐎', tier: 6 },
      'freedom-liberty': { id: 'statue-of-liberty', name: 'Statue of Liberty', emoji: '🗽', tier: 7 },
      'baseball-bat': { id: 'baseball', name: 'Baseball', emoji: '⚾', tier: 5 },
      'basketball-hoop': { id: 'basketball', name: 'Basketball', emoji: '🏀', tier: 5 },
      'football-touchdown': { id: 'american-football', name: 'American Football', emoji: '🏈', tier: 5 },
      
      // 🚗 美式标志 - American Icons
      'car-big': { id: 'pickup-truck', name: 'Pickup Truck', emoji: '🛻', tier: 5 },
      'car-muscle': { id: 'muscle-car', name: 'Muscle Car', emoji: '🚗', tier: 6 },
      'route-66': { id: 'route-66', name: 'Route 66', emoji: '🛣️', tier: 6 },
      'diner-retro': { id: 'american-diner', name: 'American Diner', emoji: '🍽️', tier: 5 },
      'flag-stars': { id: 'stars-and-stripes', name: 'Stars and Stripes', emoji: '✨', tier: 6 },
      'independence-day': { id: 'fourth-of-july', name: 'Fourth of July', emoji: '🎆', tier: 6 },
      'thanksgiving-turkey': { id: 'thanksgiving', name: 'Thanksgiving', emoji: '🦃', tier: 5 },
      'space-program': { id: 'nasa', name: 'NASA', emoji: '🚀', tier: 8 },
      'moon-landing': { id: 'apollo-11', name: 'Apollo 11', emoji: '🌙', tier: 9 },
      
      // 🌵 美国地理与自然 - American Geography
      'desert-cactus': { id: 'arizona-desert', name: 'Arizona Desert', emoji: '🏜️', tier: 5 },
      'canyon-grand': { id: 'grand-canyon', name: 'Grand Canyon', emoji: '🏜️', tier: 7 },
      'waterfall-massive': { id: 'niagara-falls', name: 'Niagara Falls', emoji: '💦', tier: 7 },
      'mountain-granite': { id: 'half-dome', name: 'Half Dome', emoji: '⛰️', tier: 7 },
      'geyser-famous': { id: 'old-faithful', name: 'Old Faithful', emoji: '♨️', tier: 6 },
      'redwood-giant': { id: 'sequoia', name: 'Sequoia', emoji: '🌲', tier: 6 },
      'beach-california': { id: 'california-beach', name: 'California Beach', emoji: '🏖️', tier: 5 },
    };


// ==================== MASSIVE GAME EXPANSION (+907 Elements) ====================
    const massiveExpansion = {
      'grass-life': {"id":"rabbit","name":"Rabbit","emoji":"🐰","tier":3},
      'rabbit-fast': {"id":"hare","name":"Hare","emoji":"🐇","tier":4},
      'forest-life': {"id":"deer","name":"Deer","emoji":"🦌","tier":3},
      'deer-horn': {"id":"elk","name":"Elk","emoji":"🦌","tier":4},
      'deer-large': {"id":"moose","name":"Moose","emoji":"🦌","tier":4},
      'mountain-life': {"id":"goat","name":"Goat","emoji":"🐐","tier":3},
      'goat-wild': {"id":"ibex","name":"Ibex","emoji":"🐐","tier":4},
      'grass-domestic': {"id":"sheep","name":"Sheep","emoji":"🐑","tier":3},
      'sheep-wool': {"id":"merino","name":"Merino","emoji":"🐑","tier":4},
      'farm-strong': {"id":"ox","name":"Ox","emoji":"🐂","tier":3},
      'ox-wild': {"id":"buffalo","name":"Buffalo","emoji":"🐃","tier":4},
      'buffalo-american': {"id":"bison","name":"Bison","emoji":"🦬","tier":5},
      'grass-milk': {"id":"cow","name":"Cow","emoji":"🐄","tier":3},
      'cow-meat': {"id":"beef","name":"Beef","emoji":"🥩","tier":4},
      'farm-work': {"id":"horse","name":"Horse","emoji":"🐴","tier":3},
      'horse-wild': {"id":"mustang","name":"Mustang","emoji":"🐎","tier":4},
      'horse-stripe': {"id":"zebra","name":"Zebra","emoji":"🦓","tier":4},
      'horse-small': {"id":"pony","name":"Pony","emoji":"🐴","tier":4},
      'desert-hump': {"id":"camel","name":"Camel","emoji":"🐪","tier":4},
      'camel-two': {"id":"bactrian","name":"Bactrian","emoji":"🐫","tier":5},
      'camel-small': {"id":"llama","name":"Llama","emoji":"🦙","tier":4},
      'llama-soft': {"id":"alpaca","name":"Alpaca","emoji":"🦙","tier":5},
      'jungle-trunk': {"id":"elephant","name":"Elephant","emoji":"🐘","tier":5},
      'elephant-tusk': {"id":"mammoth","name":"Mammoth","emoji":"🦣","tier":6},
      'africa-horn': {"id":"rhino","name":"Rhino","emoji":"🦏","tier":5},
      'africa-tall': {"id":"giraffe","name":"Giraffe","emoji":"🦒","tier":5},
      'africa-stripe': {"id":"okapi","name":"Okapi","emoji":"🦓","tier":6},
      'water-fat': {"id":"hippo","name":"Hippo","emoji":"🦛","tier":5},
      'forest-slow': {"id":"sloth","name":"Sloth","emoji":"🦥","tier":4},
      'jungle-swing': {"id":"monkey","name":"Monkey","emoji":"🐵","tier":4},
      'monkey-smart': {"id":"ape","name":"Ape","emoji":"🦍","tier":5},
      'ape-large': {"id":"gorilla","name":"Gorilla","emoji":"🦍","tier":6},
      'ape-orange': {"id":"orangutan","name":"Orangutan","emoji":"🦧","tier":6},
      'jungle-loud': {"id":"howler-monkey","name":"Howler Monkey","emoji":"🐵","tier":5},
      'tree-climb': {"id":"lemur","name":"Lemur","emoji":"🐒","tier":4},
      'desert-dig': {"id":"meerkat","name":"Meerkat","emoji":"🦦","tier":4},
      'forest-striped': {"id":"badger","name":"Badger","emoji":"🦡","tier":4},
      'water-play': {"id":"otter","name":"Otter","emoji":"🦦","tier":4},
      'ocean-smart': {"id":"dolphin","name":"Dolphin","emoji":"🐬","tier":5},
      'ocean-large': {"id":"whale","name":"Whale","emoji":"🐋","tier":6},
      'whale-spout': {"id":"blue-whale","name":"Blue Whale","emoji":"🐳","tier":7},
      'ocean-horn': {"id":"narwhal","name":"Narwhal","emoji":"🐋","tier":7},
      'ocean-tusk': {"id":"walrus","name":"Walrus","emoji":"🦭","tier":5},
      'ice-white': {"id":"polar-bear","name":"Polar Bear","emoji":"🐻‍❄️","tier":6},
      'forest-brown': {"id":"bear","name":"Bear","emoji":"🐻","tier":5},
      'bear-large': {"id":"grizzly","name":"Grizzly","emoji":"🐻","tier":6},
      'bear-black': {"id":"black-bear","name":"Black Bear","emoji":"🐻","tier":6},
      'bamboo-eat': {"id":"panda","name":"Panda","emoji":"🐼","tier":7},
      'australia-pouch': {"id":"kangaroo","name":"Kangaroo","emoji":"🦘","tier":5},
      'australia-climb': {"id":"koala","name":"Koala","emoji":"🐨","tier":5},
      'forest-howl': {"id":"wolf","name":"Wolf","emoji":"🐺","tier":5},
      'wolf-pack': {"id":"wolf-pack","name":"Wolf Pack","emoji":"🐺","tier":6},
      'wolf-arctic': {"id":"arctic-wolf","name":"Arctic Wolf","emoji":"🐺","tier":6},
      'wolf-tame': {"id":"dog","name":"Dog","emoji":"🐕","tier":4},
      'dog-guard': {"id":"guard-dog","name":"Guard Dog","emoji":"🐕‍🦺","tier":5},
      'dog-small': {"id":"puppy","name":"Puppy","emoji":"🐶","tier":4},
      'wolf-alone': {"id":"fox","name":"Fox","emoji":"🦊","tier":4},
      'fox-arctic': {"id":"arctic-fox","name":"Arctic Fox","emoji":"🦊","tier":5},
      'desert-howl': {"id":"coyote","name":"Coyote","emoji":"🐺","tier":5},
      'africa-spotted': {"id":"hyena","name":"Hyena","emoji":"🐕","tier":5},
      'africa-roar': {"id":"lion","name":"Lion","emoji":"🦁","tier":6},
      'lion-male': {"id":"lion-king","name":"Lion King","emoji":"🦁","tier":7},
      'lion-pride': {"id":"pride","name":"Pride","emoji":"🦁","tier":7},
      'jungle-stripe': {"id":"tiger","name":"Tiger","emoji":"🐯","tier":6},
      'tiger-white': {"id":"white-tiger","name":"White Tiger","emoji":"🐯","tier":7},
      'tiger-large': {"id":"bengal-tiger","name":"Bengal Tiger","emoji":"🐯","tier":7},
      'jungle-spot': {"id":"leopard","name":"Leopard","emoji":"🐆","tier":6},
      'leopard-snow': {"id":"snow-leopard","name":"Snow Leopard","emoji":"🐆","tier":7},
      'leopard-black': {"id":"panther","name":"Panther","emoji":"🐆","tier":7},
      'america-spot': {"id":"jaguar","name":"Jaguar","emoji":"🐆","tier":6},
      'savanna-fast': {"id":"cheetah","name":"Cheetah","emoji":"🐆","tier":7},
      'mountain-cat': {"id":"puma","name":"Puma","emoji":"🐆","tier":6},
      'home-purr': {"id":"cat","name":"Cat","emoji":"🐱","tier":3},
      'cat-small': {"id":"kitten","name":"Kitten","emoji":"🐈","tier":3},
      'cat-wild': {"id":"wildcat","name":"Wildcat","emoji":"🐈‍⬛","tier":4},
      'sky-fly': {"id":"bird","name":"Bird","emoji":"🐦","tier":3},
      'bird-small': {"id":"sparrow","name":"Sparrow","emoji":"🐦","tier":3},
      'bird-blue': {"id":"bluebird","name":"Bluebird","emoji":"🐦","tier":4},
      'bird-red': {"id":"cardinal","name":"Cardinal","emoji":"🐦","tier":4},
      'bird-sing': {"id":"songbird","name":"Songbird","emoji":"🐦","tier":4},
      'bird-hum': {"id":"hummingbird","name":"Hummingbird","emoji":"🐦","tier":5},
      'bird-wise': {"id":"owl","name":"Owl","emoji":"🦉","tier":4},
      'owl-snow': {"id":"snowy-owl","name":"Snowy Owl","emoji":"🦉","tier":5},
      'owl-large': {"id":"great-horned-owl","name":"Great Horned Owl","emoji":"🦉","tier":5},
      'sky-hunt': {"id":"hawk","name":"Hawk","emoji":"🦅","tier":5},
      'hawk-fast': {"id":"falcon","name":"Falcon","emoji":"🦅","tier":6},
      'falcon-hunt': {"id":"peregrine","name":"Peregrine","emoji":"🦅","tier":7},
      'mountain-soar': {"id":"eagle","name":"Eagle","emoji":"🦅","tier":6},
      'eagle-bald': {"id":"bald-eagle","name":"Bald Eagle","emoji":"🦅","tier":7},
      'eagle-golden': {"id":"golden-eagle","name":"Golden Eagle","emoji":"🦅","tier":7},
      'desert-scavenge': {"id":"vulture","name":"Vulture","emoji":"🦅","tier":5},
      'ocean-dive': {"id":"seagull","name":"Seagull","emoji":"🕊️","tier":4},
      'seagull-large': {"id":"albatross","name":"Albatross","emoji":"🕊️","tier":5},
      'water-fish': {"id":"pelican","name":"Pelican","emoji":"🦆","tier":4},
      'water-dive': {"id":"kingfisher","name":"Kingfisher","emoji":"🐦","tier":4},
      'pond-swim': {"id":"duck","name":"Duck","emoji":"🦆","tier":3},
      'duck-wild': {"id":"mallard","name":"Mallard","emoji":"🦆","tier":4},
      'pond-white': {"id":"swan","name":"Swan","emoji":"🦢","tier":5},
      'swan-black': {"id":"black-swan","name":"Black Swan","emoji":"🦢","tier":6},
      'pond-long-neck': {"id":"goose","name":"Goose","emoji":"🦆","tier":4},
      'ice-waddle': {"id":"penguin","name":"Penguin","emoji":"🐧","tier":5},
      'penguin-emperor': {"id":"emperor-penguin","name":"Emperor Penguin","emoji":"🐧","tier":6},
      'jungle-color': {"id":"parrot","name":"Parrot","emoji":"🦜","tier":5},
      'parrot-blue': {"id":"macaw","name":"Macaw","emoji":"🦜","tier":6},
      'parrot-talk': {"id":"cockatoo","name":"Cockatoo","emoji":"🦜","tier":6},
      'jungle-large': {"id":"toucan","name":"Toucan","emoji":"🦜","tier":6},
      'jungle-color-tail': {"id":"peacock","name":"Peacock","emoji":"🦚","tier":6},
      'australia-run': {"id":"emu","name":"Emu","emoji":"🦤","tier":5},
      'africa-big': {"id":"ostrich","name":"Ostrich","emoji":"🦤","tier":5},
      'farm-bird': {"id":"chicken","name":"Chicken","emoji":"🐔","tier":3},
      'chicken-male': {"id":"rooster","name":"Rooster","emoji":"🐓","tier":4},
      'farm-gobble': {"id":"turkey","name":"Turkey","emoji":"🦃","tier":4},
      'desert-scale': {"id":"lizard","name":"Lizard","emoji":"🦎","tier":3},
      'lizard-large': {"id":"iguana","name":"Iguana","emoji":"🦎","tier":4},
      'lizard-fast': {"id":"gecko","name":"Gecko","emoji":"🦎","tier":4},
      'desert-large': {"id":"komodo-dragon","name":"Komodo Dragon","emoji":"🦎","tier":6},
      'desert-change': {"id":"chameleon","name":"Chameleon","emoji":"🦎","tier":5},
      'swamp-jaw': {"id":"crocodile","name":"Crocodile","emoji":"🐊","tier":5},
      'swamp-large': {"id":"alligator","name":"Alligator","emoji":"🐊","tier":5},
      'ocean-tooth': {"id":"sea-crocodile","name":"Sea Crocodile","emoji":"🐊","tier":6},
      'water-shell': {"id":"turtle","name":"Turtle","emoji":"🐢","tier":4},
      'ocean-swim': {"id":"sea-turtle","name":"Sea Turtle","emoji":"🐢","tier":5},
      'turtle-large': {"id":"leatherback","name":"Leatherback","emoji":"🐢","tier":6},
      'land-shell': {"id":"tortoise","name":"Tortoise","emoji":"🐢","tier":5},
      'tortoise-giant': {"id":"galapagos-tortoise","name":"Galapagos Tortoise","emoji":"🐢","tier":7},
      'grass-slither': {"id":"snake","name":"Snake","emoji":"🐍","tier":4},
      'snake-poison': {"id":"viper","name":"Viper","emoji":"🐍","tier":5},
      'snake-rattle': {"id":"rattlesnake","name":"Rattlesnake","emoji":"🐍","tier":5},
      'snake-hood': {"id":"cobra","name":"Cobra","emoji":"🐍","tier":6},
      'cobra-king': {"id":"king-cobra","name":"King Cobra","emoji":"🐍","tier":7},
      'jungle-squeeze': {"id":"python","name":"Python","emoji":"🐍","tier":6},
      'jungle-giant': {"id":"anaconda","name":"Anaconda","emoji":"🐍","tier":7},
      'pond-hop': {"id":"frog","name":"Frog","emoji":"🐸","tier":3},
      'frog-tree': {"id":"tree-frog","name":"Tree Frog","emoji":"🐸","tier":4},
      'frog-poison': {"id":"poison-dart-frog","name":"Poison Dart Frog","emoji":"🐸","tier":5},
      'frog-large': {"id":"bullfrog","name":"Bullfrog","emoji":"🐸","tier":4},
      'pond-wart': {"id":"toad","name":"Toad","emoji":"🐸","tier":3},
      'water-tail': {"id":"newt","name":"Newt","emoji":"🦎","tier":4},
      'cave-blind': {"id":"salamander","name":"Salamander","emoji":"🦎","tier":4},
      'salamander-fire': {"id":"fire-salamander","name":"Fire Salamander","emoji":"🦎","tier":5},
      'water-swim': {"id":"fish","name":"Fish","emoji":"🐟","tier":3},
      'fish-color': {"id":"tropical-fish","name":"Tropical Fish","emoji":"🐠","tier":4},
      'fish-stripe': {"id":"clownfish","name":"Clownfish","emoji":"🐠","tier":5},
      'coral-swim': {"id":"reef-fish","name":"Reef Fish","emoji":"🐡","tier":4},
      'reef-puff': {"id":"pufferfish","name":"Pufferfish","emoji":"🐡","tier":5},
      'ocean-fast': {"id":"tuna","name":"Tuna","emoji":"🐟","tier":5},
      'ocean-silver': {"id":"swordfish","name":"Swordfish","emoji":"🐟","tier":6},
      'ocean-jump': {"id":"marlin","name":"Marlin","emoji":"🐟","tier":6},
      'ocean-flat': {"id":"manta-ray","name":"Manta Ray","emoji":"🐟","tier":6},
      'ocean-sting': {"id":"stingray","name":"Stingray","emoji":"🐟","tier":5},
      'ocean-danger': {"id":"shark","name":"Shark","emoji":"🦈","tier":6},
      'shark-great': {"id":"great-white","name":"Great White","emoji":"🦈","tier":7},
      'shark-hammer': {"id":"hammerhead","name":"Hammerhead","emoji":"🦈","tier":7},
      'shark-whale': {"id":"whale-shark","name":"Whale Shark","emoji":"🦈","tier":7},
      'river-swim': {"id":"salmon","name":"Salmon","emoji":"🐟","tier":4},
      'river-jump': {"id":"trout","name":"Trout","emoji":"🐟","tier":4},
      'river-bottom': {"id":"catfish","name":"Catfish","emoji":"🐟","tier":4},
      'river-flat': {"id":"flounder","name":"Flounder","emoji":"🐟","tier":4},
      'deep-glow': {"id":"anglerfish","name":"Anglerfish","emoji":"🐟","tier":6},
      'deep-pressure': {"id":"deep-sea-fish","name":"Deep Sea Fish","emoji":"🐟","tier":7},
      'pond-gold': {"id":"goldfish","name":"Goldfish","emoji":"🐟","tier":3},
      'pond-colorful': {"id":"koi","name":"Koi","emoji":"🐟","tier":5},
      'flower-buzz': {"id":"bee","name":"Bee","emoji":"🐝","tier":3},
      'bee-queen': {"id":"queen-bee","name":"Queen Bee","emoji":"🐝","tier":4},
      'bee-hive': {"id":"beehive","name":"Beehive","emoji":"🐝","tier":5},
      'bee-honey': {"id":"honeybee","name":"Honeybee","emoji":"🐝","tier":4},
      'bee-bumble': {"id":"bumblebee","name":"Bumblebee","emoji":"🐝","tier":4},
      'flower-flutter': {"id":"butterfly","name":"Butterfly","emoji":"🦋","tier":3},
      'butterfly-monarch': {"id":"monarch","name":"Monarch","emoji":"🦋","tier":4},
      'butterfly-blue': {"id":"morpho","name":"Morpho","emoji":"🦋","tier":5},
      'night-fly': {"id":"moth","name":"Moth","emoji":"🦋","tier":3},
      'moth-luna': {"id":"luna-moth","name":"Luna Moth","emoji":"🦋","tier":4},
      'garden-crawl': {"id":"caterpillar","name":"Caterpillar","emoji":"🐛","tier":2},
      'caterpillar-silk': {"id":"silkworm","name":"Silkworm","emoji":"🐛","tier":3},
      'leaf-hop': {"id":"grasshopper","name":"Grasshopper","emoji":"🦗","tier":3},
      'grasshopper-swarm': {"id":"locust","name":"Locust","emoji":"🦗","tier":4},
      'night-chirp': {"id":"cricket","name":"Cricket","emoji":"🦗","tier":3},
      'garden-fly': {"id":"dragonfly","name":"Dragonfly","emoji":"🦗","tier":4},
      'dragonfly-blue': {"id":"damselfly","name":"Damselfly","emoji":"🦗","tier":4},
      'wood-tiny': {"id":"ant","name":"Ant","emoji":"🐜","tier":2},
      'ant-red': {"id":"fire-ant","name":"Fire Ant","emoji":"🐜","tier":3},
      'ant-queen': {"id":"ant-queen","name":"Ant Queen","emoji":"🐜","tier":4},
      'ant-colony': {"id":"ant-colony","name":"Ant Colony","emoji":"🐜","tier":5},
      'ant-large': {"id":"carpenter-ant","name":"Carpenter Ant","emoji":"🐜","tier":3},
      'wood-crawl': {"id":"termite","name":"Termite","emoji":"🐜","tier":3},
      'garden-spot': {"id":"ladybug","name":"Ladybug","emoji":"🐞","tier":3},
      'garden-shell': {"id":"beetle","name":"Beetle","emoji":"🐞","tier":3},
      'beetle-horn': {"id":"rhinoceros-beetle","name":"Rhinoceros Beetle","emoji":"🐞","tier":4},
      'beetle-stag': {"id":"stag-beetle","name":"Stag Beetle","emoji":"🐞","tier":4},
      'beetle-jewel': {"id":"jewel-beetle","name":"Jewel Beetle","emoji":"🐞","tier":5},
      'night-glow': {"id":"firefly","name":"Firefly","emoji":"🐞","tier":4},
      'home-pest': {"id":"fly","name":"Fly","emoji":"🦟","tier":2},
      'fly-fruit': {"id":"fruit-fly","name":"Fruit Fly","emoji":"🦟","tier":2},
      'fly-large': {"id":"horsefly","name":"Horsefly","emoji":"🦟","tier":3},
      'blood-suck': {"id":"mosquito","name":"Mosquito","emoji":"🦟","tier":3},
      'water-skate': {"id":"water-strider","name":"Water Strider","emoji":"🦟","tier":3},
      'garden-danger': {"id":"wasp","name":"Wasp","emoji":"🐝","tier":3},
      'wasp-nest': {"id":"hornet","name":"Hornet","emoji":"🐝","tier":4},
      'leaf-cut': {"id":"leafcutter-ant","name":"Leafcutter Ant","emoji":"🐜","tier":4},
      'desert-crawl': {"id":"scorpion","name":"Scorpion","emoji":"🦂","tier":4},
      'scorpion-emperor': {"id":"emperor-scorpion","name":"Emperor Scorpion","emoji":"🦂","tier":5},
      'web-spin': {"id":"spider","name":"Spider","emoji":"🕷️","tier":3},
      'spider-black': {"id":"black-widow","name":"Black Widow","emoji":"🕷️","tier":4},
      'spider-tarantula': {"id":"tarantula","name":"Tarantula","emoji":"🕷️","tier":5},
      'spider-jump': {"id":"jumping-spider","name":"Jumping Spider","emoji":"🕷️","tier":4},
      'spider-web': {"id":"spider-web","name":"Spider Web","emoji":"🕸️","tier":3},
      'garden-slow': {"id":"snail","name":"Snail","emoji":"🐌","tier":2},
      'snail-shell': {"id":"conch","name":"Conch","emoji":"🐚","tier":3},
      'garden-slime': {"id":"slug","name":"Slug","emoji":"🐌","tier":2},
      'ocean-eight': {"id":"octopus","name":"Octopus","emoji":"🐙","tier":5},
      'octopus-giant': {"id":"giant-pacific-octopus","name":"Giant Pacific Octopus","emoji":"🐙","tier":6},
      'ocean-ten': {"id":"squid","name":"Squid","emoji":"🦑","tier":5},
      'squid-giant': {"id":"giant-squid","name":"Giant Squid","emoji":"🦑","tier":7},
      'ocean-shell': {"id":"clam","name":"Clam","emoji":"🦪","tier":3},
      'clam-pearl': {"id":"oyster","name":"Oyster","emoji":"🦪","tier":4},
      'oyster-pearl': {"id":"pearl","name":"Pearl","emoji":"🦪","tier":6},
      'ocean-spiny': {"id":"sea-urchin","name":"Sea Urchin","emoji":"🦔","tier":4},
      'ocean-star': {"id":"starfish","name":"Starfish","emoji":"⭐","tier":4},
      'ocean-flower': {"id":"sea-anemone","name":"Sea Anemone","emoji":"🌺","tier":4},
      'ocean-jelly': {"id":"jellyfish","name":"Jellyfish","emoji":"🪼","tier":4},
      'jellyfish-glow': {"id":"moon-jellyfish","name":"Moon Jellyfish","emoji":"🪼","tier":5},
      'ocean-claw': {"id":"crab","name":"Crab","emoji":"🦀","tier":3},
      'crab-hermit': {"id":"hermit-crab","name":"Hermit Crab","emoji":"🦀","tier":4},
      'ocean-tail': {"id":"lobster","name":"Lobster","emoji":"🦞","tier":4},
      'ocean-pink': {"id":"shrimp","name":"Shrimp","emoji":"🦐","tier":3},
      'shrimp-mantis': {"id":"mantis-shrimp","name":"Mantis Shrimp","emoji":"🦐","tier":5},
      'ocean-crawl': {"id":"crayfish","name":"Crayfish","emoji":"🦞","tier":3},
      'garden-beauty': {"id":"flower","name":"Flower","emoji":"🌸","tier":2},
      'flower-red': {"id":"rose","name":"Rose","emoji":"🌹","tier":3},
      'rose-wild': {"id":"wild-rose","name":"Wild Rose","emoji":"🌹","tier":4},
      'flower-sun': {"id":"sunflower","name":"Sunflower","emoji":"🌻","tier":3},
      'flower-spring': {"id":"tulip","name":"Tulip","emoji":"🌷","tier":3},
      'flower-white': {"id":"lily","name":"Lily","emoji":"🌺","tier":3},
      'flower-purple': {"id":"lavender","name":"Lavender","emoji":"🌸","tier":3},
      'flower-pink': {"id":"carnation","name":"Carnation","emoji":"🌸","tier":3},
      'flower-blue': {"id":"bluebell","name":"Bluebell","emoji":"🌸","tier":3},
      'flower-yellow': {"id":"daffodil","name":"Daffodil","emoji":"🌼","tier":3},
      'flower-wild': {"id":"wildflower","name":"Wildflower","emoji":"🌼","tier":3},
      'flower-daisy': {"id":"daisy","name":"Daisy","emoji":"🌼","tier":3},
      'flower-orchid': {"id":"orchid","name":"Orchid","emoji":"🌺","tier":4},
      'flower-lotus': {"id":"lotus","name":"Lotus","emoji":"🪷","tier":4},
      'lotus-sacred': {"id":"sacred-lotus","name":"Sacred Lotus","emoji":"🪷","tier":5},
      'flower-poppy': {"id":"poppy","name":"Poppy","emoji":"🌺","tier":3},
      'flower-iris': {"id":"iris","name":"Iris","emoji":"🌸","tier":3},
      'flower-magnolia': {"id":"magnolia","name":"Magnolia","emoji":"🌸","tier":4},
      'flower-peony': {"id":"peony","name":"Peony","emoji":"🌺","tier":4},
      'flower-hibiscus': {"id":"hibiscus","name":"Hibiscus","emoji":"🌺","tier":3},
      'flower-jasmine': {"id":"jasmine","name":"Jasmine","emoji":"🌸","tier":4},
      'flower-gardenia': {"id":"gardenia","name":"Gardenia","emoji":"🌸","tier":4},
      'flower-camellia': {"id":"camellia","name":"Camellia","emoji":"🌺","tier":4},
      'flower-azalea': {"id":"azalea","name":"Azalea","emoji":"🌸","tier":4},
      'flower-marigold': {"id":"marigold","name":"Marigold","emoji":"🌼","tier":3},
      'flower-zinnia': {"id":"zinnia","name":"Zinnia","emoji":"🌺","tier":3},
      'flower-aster': {"id":"aster","name":"Aster","emoji":"🌼","tier":3},
      'flower-dahlia': {"id":"dahlia","name":"Dahlia","emoji":"🌺","tier":4},
      'flower-begonia': {"id":"begonia","name":"Begonia","emoji":"🌸","tier":3},
      'flower-pansy': {"id":"pansy","name":"Pansy","emoji":"🌼","tier":3},
      'forest-tall': {"id":"oak","name":"Oak","emoji":"🌳","tier":3},
      'oak-mighty': {"id":"mighty-oak","name":"Mighty Oak","emoji":"🌳","tier":4},
      'forest-white': {"id":"birch","name":"Birch","emoji":"🌳","tier":3},
      'forest-needle': {"id":"pine","name":"Pine","emoji":"🌲","tier":3},
      'pine-tall': {"id":"douglas-fir","name":"Douglas Fir","emoji":"🌲","tier":4},
      'forest-cone': {"id":"spruce","name":"Spruce","emoji":"🌲","tier":3},
      'forest-evergreen': {"id":"fir","name":"Fir","emoji":"🌲","tier":3},
      'forest-soft': {"id":"willow","name":"Willow","emoji":"🌳","tier":3},
      'forest-gold': {"id":"maple","name":"Maple","emoji":"🌳","tier":3},
      'maple-sugar': {"id":"sugar-maple","name":"Sugar Maple","emoji":"🌳","tier":4},
      'forest-bark': {"id":"elm","name":"Elm","emoji":"🌳","tier":3},
      'forest-round': {"id":"ash","name":"Ash","emoji":"🌳","tier":3},
      'forest-fruit': {"id":"apple-tree","name":"Apple Tree","emoji":"🌳","tier":3},
      'orchard-round': {"id":"orange-tree","name":"Orange Tree","emoji":"🌳","tier":3},
      'orchard-yellow': {"id":"lemon-tree","name":"Lemon Tree","emoji":"🌳","tier":3},
      'orchard-pink': {"id":"peach-tree","name":"Peach Tree","emoji":"🌳","tier":3},
      'orchard-purple': {"id":"plum-tree","name":"Plum Tree","emoji":"🌳","tier":3},
      'orchard-red': {"id":"cherry-tree","name":"Cherry Tree","emoji":"🌳","tier":3},
      'orchard-green': {"id":"pear-tree","name":"Pear Tree","emoji":"🌳","tier":3},
      'jungle-tall': {"id":"mahogany","name":"Mahogany","emoji":"🌳","tier":4},
      'jungle-hard': {"id":"teak","name":"Teak","emoji":"🌳","tier":4},
      'jungle-nut': {"id":"walnut-tree","name":"Walnut Tree","emoji":"🌳","tier":3},
      'forest-nut': {"id":"chestnut-tree","name":"Chestnut Tree","emoji":"🌳","tier":3},
      'desert-spiky': {"id":"acacia","name":"Acacia","emoji":"🌳","tier":3},
      'africa-bottle': {"id":"baobab","name":"Baobab","emoji":"🌳","tier":5},
      'asia-green': {"id":"bamboo-tree","name":"Bamboo Tree","emoji":"🎋","tier":3},
      'tropical-fruit': {"id":"palm-tree","name":"Palm Tree","emoji":"🌴","tier":3},
      'palm-coconut': {"id":"coconut-palm","name":"Coconut Palm","emoji":"🌴","tier":4},
      'palm-date': {"id":"date-palm","name":"Date Palm","emoji":"🌴","tier":4},
      'ancient-old': {"id":"ancient-tree","name":"Ancient Tree","emoji":"🌳","tier":6},
      'farm-grain': {"id":"wheat","name":"Wheat","emoji":"🌾","tier":3},
      'farm-tall': {"id":"corn","name":"Corn","emoji":"🌽","tier":3},
      'farm-white': {"id":"rice","name":"Rice","emoji":"🌾","tier":3},
      'farm-oat': {"id":"oats","name":"Oats","emoji":"🌾","tier":3},
      'farm-barley': {"id":"barley","name":"Barley","emoji":"🌾","tier":3},
      'farm-rye': {"id":"rye","name":"Rye","emoji":"🌾","tier":3},
      'farm-bean': {"id":"soybean","name":"Soybean","emoji":"🫘","tier":3},
      'farm-ground': {"id":"potato","name":"Potato","emoji":"🥔","tier":3},
      'potato-sweet': {"id":"sweet-potato","name":"Sweet Potato","emoji":"🍠","tier":3},
      'farm-orange': {"id":"carrot","name":"Carrot","emoji":"🥕","tier":3},
      'farm-red': {"id":"tomato","name":"Tomato","emoji":"🍅","tier":3},
      'farm-green': {"id":"lettuce","name":"Lettuce","emoji":"🥬","tier":3},
      'farm-cabbage': {"id":"cabbage","name":"Cabbage","emoji":"🥬","tier":3},
      'farm-purple': {"id":"eggplant","name":"Eggplant","emoji":"🍆","tier":3},
      'farm-pepper': {"id":"bell-pepper","name":"Bell Pepper","emoji":"🫑","tier":3},
      'farm-hot': {"id":"chili-pepper","name":"Chili Pepper","emoji":"🌶️","tier":3},
      'farm-vine': {"id":"cucumber","name":"Cucumber","emoji":"🥒","tier":3},
      'farm-squash': {"id":"pumpkin","name":"Pumpkin","emoji":"🎃","tier":3},
      'farm-bulb': {"id":"onion","name":"Onion","emoji":"🧅","tier":3},
      'farm-clove': {"id":"garlic","name":"Garlic","emoji":"🧄","tier":3},
      'desert-green': {"id":"cactus","name":"Cactus","emoji":"🌵","tier":3},
      'cactus-tall': {"id":"saguaro","name":"Saguaro","emoji":"🌵","tier":4},
      'cactus-prickly': {"id":"prickly-pear","name":"Prickly Pear","emoji":"🌵","tier":4},
      'garden-herb': {"id":"herb","name":"Herb","emoji":"🌿","tier":2},
      'herb-mint': {"id":"mint","name":"Mint","emoji":"🌿","tier":3},
      'herb-basil': {"id":"basil","name":"Basil","emoji":"🌿","tier":3},
      'herb-thyme': {"id":"thyme","name":"Thyme","emoji":"🌿","tier":3},
      'herb-sage': {"id":"sage","name":"Sage","emoji":"🌿","tier":3},
      'herb-parsley': {"id":"parsley","name":"Parsley","emoji":"🌿","tier":3},
      'garden-vine': {"id":"ivy","name":"Ivy","emoji":"🌿","tier":3},
      'wall-climb': {"id":"climbing-vine","name":"Climbing Vine","emoji":"🌿","tier":3},
      'water-float': {"id":"waterlily","name":"Waterlily","emoji":"🪷","tier":3},
      'water-pad': {"id":"lily-pad","name":"Lily Pad","emoji":"🪷","tier":3},
      'ocean-plant': {"id":"seaweed","name":"Seaweed","emoji":"🌿","tier":3},
      'seaweed-kelp': {"id":"kelp","name":"Kelp","emoji":"🌿","tier":3},
      'ocean-forest': {"id":"kelp-forest","name":"Kelp Forest","emoji":"🌿","tier":4},
      'ocean-build': {"id":"coral","name":"Coral","emoji":"🪸","tier":4},
      'coral-reef': {"id":"coral-reef","name":"Coral Reef","emoji":"🪸","tier":5},
      'wet-green': {"id":"moss","name":"Moss","emoji":"🌿","tier":2},
      'forest-floor': {"id":"mushroom","name":"Mushroom","emoji":"🍄","tier":3},
      'mushroom-red': {"id":"toadstool","name":"Toadstool","emoji":"🍄","tier":3},
      'mushroom-magic': {"id":"magic-mushroom","name":"Magic Mushroom","emoji":"🍄","tier":4},
      'rot-grow': {"id":"fungus","name":"Fungus","emoji":"🍄","tier":3},
      'tree-grow': {"id":"lichen","name":"Lichen","emoji":"🌿","tier":3},
      'wet-spore': {"id":"fern","name":"Fern","emoji":"🌿","tier":3},
      'ore-shine': {"id":"gem","name":"Gem","emoji":"💎","tier":4},
      'gem-clear': {"id":"diamond","name":"Diamond","emoji":"💎","tier":6},
      'diamond-cut': {"id":"brilliant-diamond","name":"Brilliant Diamond","emoji":"💎","tier":7},
      'diamond-rare': {"id":"pink-diamond","name":"Pink Diamond","emoji":"💎","tier":8},
      'diamond-dark': {"id":"black-diamond","name":"Black Diamond","emoji":"💎","tier":7},
      'gem-red': {"id":"ruby","name":"Ruby","emoji":"🔴","tier":6},
      'ruby-star': {"id":"star-ruby","name":"Star Ruby","emoji":"⭐","tier":7},
      'gem-blue': {"id":"sapphire","name":"Sapphire","emoji":"🔵","tier":6},
      'sapphire-star': {"id":"star-sapphire","name":"Star Sapphire","emoji":"⭐","tier":7},
      'gem-green': {"id":"emerald","name":"Emerald","emoji":"💚","tier":6},
      'emerald-colombia': {"id":"colombian-emerald","name":"Colombian Emerald","emoji":"💚","tier":7},
      'gem-purple': {"id":"amethyst","name":"Amethyst","emoji":"💜","tier":5},
      'amethyst-deep': {"id":"deep-amethyst","name":"Deep Amethyst","emoji":"💜","tier":6},
      'gem-yellow': {"id":"topaz","name":"Topaz","emoji":"💛","tier":5},
      'topaz-imperial': {"id":"imperial-topaz","name":"Imperial Topaz","emoji":"💛","tier":6},
      'gem-sea': {"id":"aquamarine","name":"Aquamarine","emoji":"💙","tier":5},
      'gem-light': {"id":"opal","name":"Opal","emoji":"💎","tier":6},
      'opal-black': {"id":"black-opal","name":"Black Opal","emoji":"💎","tier":7},
      'opal-fire': {"id":"fire-opal","name":"Fire Opal","emoji":"🔥","tier":6},
      'gem-pink': {"id":"rose-quartz","name":"Rose Quartz","emoji":"🌸","tier":5},
      'gem-smoke': {"id":"smoky-quartz","name":"Smoky Quartz","emoji":"💨","tier":5},
      'gem-clear-crystal': {"id":"clear-quartz","name":"Clear Quartz","emoji":"💎","tier":5},
      'gem-orange': {"id":"citrine","name":"Citrine","emoji":"🧡","tier":5},
      'gem-brown': {"id":"tiger-eye","name":"Tiger Eye","emoji":"🟤","tier":5},
      'gem-turquoise': {"id":"turquoise","name":"Turquoise","emoji":"🩵","tier":5},
      'gem-night': {"id":"moonstone","name":"Moonstone","emoji":"🌙","tier":6},
      'gem-sun': {"id":"sunstone","name":"Sunstone","emoji":"☀️","tier":6},
      'gem-star': {"id":"star-stone","name":"Star Stone","emoji":"⭐","tier":7},
      'gem-cat': {"id":"cats-eye","name":"Cats Eye","emoji":"👁️","tier":6},
      'gem-blood': {"id":"bloodstone","name":"Bloodstone","emoji":"🩸","tier":5},
      'rock-beautiful': {"id":"jasper","name":"Jasper","emoji":"🪨","tier":4},
      'jasper-red': {"id":"red-jasper","name":"Red Jasper","emoji":"🔴","tier":5},
      'rock-green-pattern': {"id":"malachite","name":"Malachite","emoji":"💚","tier":5},
      'rock-blue-pattern': {"id":"azurite","name":"Azurite","emoji":"💙","tier":5},
      'rock-purple-band': {"id":"fluorite","name":"Fluorite","emoji":"💜","tier":4},
      'rock-red-band': {"id":"carnelian","name":"Carnelian","emoji":"🧡","tier":4},
      'rock-stripe': {"id":"agate","name":"Agate","emoji":"🪨","tier":4},
      'agate-fire': {"id":"fire-agate","name":"Fire Agate","emoji":"🔥","tier":5},
      'agate-moss': {"id":"moss-agate","name":"Moss Agate","emoji":"🌿","tier":5},
      'rock-smooth': {"id":"onyx","name":"Onyx","emoji":"⚫","tier":5},
      'rock-brown-red': {"id":"sardonyx","name":"Sardonyx","emoji":"🟤","tier":5},
      'rock-green-spot': {"id":"jade","name":"Jade","emoji":"💚","tier":6},
      'jade-imperial': {"id":"imperial-jade","name":"Imperial Jade","emoji":"💚","tier":7},
      'rock-white-green': {"id":"nephrite","name":"Nephrite","emoji":"💚","tier":5},
      'rock-blue-green': {"id":"chrysocolla","name":"Chrysocolla","emoji":"🩵","tier":5},
      'rock-golden-green': {"id":"peridot","name":"Peridot","emoji":"💚","tier":5},
      'rock-yellow-brown': {"id":"amber","name":"Amber","emoji":"🟡","tier":5},
      'amber-fossil': {"id":"amber-fossil","name":"Amber Fossil","emoji":"🦗","tier":6},
      'rock-red-stone': {"id":"garnet","name":"Garnet","emoji":"🔴","tier":5},
      'garnet-rhodolite': {"id":"rhodolite","name":"Rhodolite","emoji":"💜","tier":6},
      'rock-blue-violet': {"id":"tanzanite","name":"Tanzanite","emoji":"💙","tier":6},
      'rock-green-beryl': {"id":"beryl","name":"Beryl","emoji":"💚","tier":5},
      'rock-pink-beryl': {"id":"morganite","name":"Morganite","emoji":"🩷","tier":6},
      'rock-yellow-beryl': {"id":"heliodor","name":"Heliodor","emoji":"💛","tier":6},
      'rock-blue-beryl': {"id":"aquamarine-beryl","name":"Aquamarine Beryl","emoji":"💙","tier":6},
      'rock-gold': {"id":"gold-ore","name":"Gold Ore","emoji":"🟡","tier":5},
      'gold-ore-pure': {"id":"pure-gold","name":"Pure Gold","emoji":"✨","tier":6},
      'gold-bar': {"id":"gold-bar","name":"Gold Bar","emoji":"💰","tier":7},
      'rock-silver': {"id":"silver-ore","name":"Silver Ore","emoji":"⚪","tier":5},
      'silver-ore-pure': {"id":"pure-silver","name":"Pure Silver","emoji":"🪙","tier":6},
      'rock-copper': {"id":"copper-ore","name":"Copper Ore","emoji":"🟤","tier":4},
      'copper-pure': {"id":"copper","name":"Copper","emoji":"🟠","tier":5},
      'rock-iron': {"id":"iron-ore","name":"Iron Ore","emoji":"⚫","tier":4},
      'iron-pure': {"id":"iron","name":"Iron","emoji":"🔩","tier":5},
      'iron-forge': {"id":"steel","name":"Steel","emoji":"🔩","tier":6},
      'rock-tin': {"id":"tin-ore","name":"Tin Ore","emoji":"⚪","tier":4},
      'rock-zinc': {"id":"zinc-ore","name":"Zinc Ore","emoji":"⚪","tier":4},
      'copper-tin': {"id":"bronze","name":"Bronze","emoji":"🟤","tier":5},
      'copper-zinc': {"id":"brass","name":"Brass","emoji":"🟡","tier":5},
      'rock-lead': {"id":"lead-ore","name":"Lead Ore","emoji":"⚫","tier":4},
      'rock-mercury-ore': {"id":"mercury-ore","name":"Mercury Ore","emoji":"💿","tier":5},
      'rock-platinum': {"id":"platinum-ore","name":"Platinum Ore","emoji":"⚪","tier":6},
      'platinum-pure': {"id":"platinum","name":"Platinum","emoji":"💍","tier":7},
      'rock-titanium': {"id":"titanium-ore","name":"Titanium Ore","emoji":"⚫","tier":6},
      'titanium-pure': {"id":"titanium","name":"Titanium","emoji":"💠","tier":7},
      'rock-carbon': {"id":"coal","name":"Coal","emoji":"⚫","tier":3},
      'coal-pressure': {"id":"diamond-forming","name":"Diamond Forming","emoji":"💎","tier":5},
      'rock-salt': {"id":"salt","name":"Salt","emoji":"⚪","tier":3},
      'salt-rock': {"id":"rock-salt","name":"Rock Salt","emoji":"🧂","tier":4},
      'rock-sulfur': {"id":"sulfur","name":"Sulfur","emoji":"🟡","tier":4},
      'rock-crystal': {"id":"crystal","name":"Crystal","emoji":"💎","tier":5},
      'crystal-grow': {"id":"crystal-cluster","name":"Crystal Cluster","emoji":"💎","tier":6},
      'crystal-cave': {"id":"crystal-cave","name":"Crystal Cave","emoji":"🕳️","tier":7},
      'rock-marble': {"id":"marble","name":"Marble","emoji":"⚪","tier":5},
      'rock-granite': {"id":"granite","name":"Granite","emoji":"🪨","tier":4},
      'rock-limestone': {"id":"limestone","name":"Limestone","emoji":"🪨","tier":4},
      'rock-sandstone': {"id":"sandstone","name":"Sandstone","emoji":"🟤","tier":4},
      'rock-slate': {"id":"slate","name":"Slate","emoji":"⚫","tier":4},
      'rock-basalt': {"id":"basalt","name":"Basalt","emoji":"⚫","tier":4},
      'rock-pumice': {"id":"pumice","name":"Pumice","emoji":"🪨","tier":4},
      'stone-sharp': {"id":"stone-knife","name":"Stone Knife","emoji":"🔪","tier":2},
      'stone-axe': {"id":"stone-axe","name":"Stone Axe","emoji":"🪓","tier":2},
      'wood-stone': {"id":"spear","name":"Spear","emoji":"🗡️","tier":2},
      'spear-sharp': {"id":"javelin","name":"Javelin","emoji":"🗡️","tier":3},
      'wood-string': {"id":"bow","name":"Bow","emoji":"🏹","tier":3},
      'bow-arrow': {"id":"bow-and-arrow","name":"Bow and Arrow","emoji":"🏹","tier":4},
      'bow-powerful': {"id":"longbow","name":"Longbow","emoji":"🏹","tier":5},
      'bow-short': {"id":"crossbow","name":"Crossbow","emoji":"🏹","tier":5},
      'metal-sharp': {"id":"sword","name":"Sword","emoji":"⚔️","tier":4},
      'sword-two-hand': {"id":"greatsword","name":"Greatsword","emoji":"⚔️","tier":5},
      'sword-curved': {"id":"scimitar","name":"Scimitar","emoji":"⚔️","tier":5},
      'metal-pole': {"id":"lance","name":"Lance","emoji":"🗡️","tier":4},
      'metal-axe': {"id":"battle-axe","name":"Battle Axe","emoji":"🪓","tier":4},
      'axe-double': {"id":"double-axe","name":"Double Axe","emoji":"🪓","tier":5},
      'metal-club': {"id":"mace","name":"Mace","emoji":"🔨","tier":4},
      'mace-spike': {"id":"morningstar","name":"Morningstar","emoji":"🔨","tier":5},
      'metal-hammer': {"id":"war-hammer","name":"War Hammer","emoji":"🔨","tier":5},
      'metal-protect': {"id":"shield","name":"Shield","emoji":"🛡️","tier":4},
      'shield-large': {"id":"tower-shield","name":"Tower Shield","emoji":"🛡️","tier":5},
      'metal-body': {"id":"armor","name":"Armor","emoji":"🛡️","tier":5},
      'armor-chain': {"id":"chainmail","name":"Chainmail","emoji":"🛡️","tier":6},
      'armor-plate': {"id":"plate-armor","name":"Plate Armor","emoji":"🛡️","tier":7},
      'armor-knight': {"id":"knight-armor","name":"Knight Armor","emoji":"🛡️","tier":8},
      'metal-head': {"id":"helmet","name":"Helmet","emoji":"⛑️","tier":4},
      'helmet-knight': {"id":"knight-helmet","name":"Knight Helmet","emoji":"⛑️","tier":5},
      'tool-dig': {"id":"shovel","name":"Shovel","emoji":"🛠️","tier":3},
      'tool-cut': {"id":"saw","name":"Saw","emoji":"🪚","tier":3},
      'tool-measure': {"id":"ruler","name":"Ruler","emoji":"📏","tier":3},
      'tool-draw': {"id":"compass","name":"Compass","emoji":"🧭","tier":4},
      'tool-time': {"id":"clock","name":"Clock","emoji":"⏰","tier":5},
      'gunpowder-tube': {"id":"cannon","name":"Cannon","emoji":"💥","tier":5},
      'cannon-large': {"id":"bombard","name":"Bombard","emoji":"💥","tier":6},
      'cannon-ship': {"id":"naval-cannon","name":"Naval Cannon","emoji":"⚓","tier":6},
      'gunpowder-hand': {"id":"musket","name":"Musket","emoji":"🔫","tier":5},
      'musket-better': {"id":"rifle","name":"Rifle","emoji":"🔫","tier":6},
      'rifle-repeating': {"id":"repeating-rifle","name":"Repeating Rifle","emoji":"🔫","tier":7},
      'rifle-bolt': {"id":"bolt-action","name":"Bolt Action","emoji":"🔫","tier":7},
      'rifle-automatic': {"id":"machine-gun","name":"Machine Gun","emoji":"🔫","tier":8},
      'gunpowder-small': {"id":"pistol","name":"Pistol","emoji":"🔫","tier":5},
      'pistol-revolver': {"id":"revolver","name":"Revolver","emoji":"🔫","tier":6},
      'pistol-semi': {"id":"semi-auto-pistol","name":"Semi Auto Pistol","emoji":"🔫","tier":7},
      'gunpowder-scatter': {"id":"shotgun","name":"Shotgun","emoji":"🔫","tier":6},
      'gunpowder-snipe': {"id":"sniper-rifle","name":"Sniper Rifle","emoji":"🔫","tier":8},
      'gunpowder-explode': {"id":"grenade","name":"Grenade","emoji":"💣","tier":6},
      'grenade-hand': {"id":"hand-grenade","name":"Hand Grenade","emoji":"💣","tier":6},
      'explosive-powerful': {"id":"dynamite","name":"Dynamite","emoji":"🧨","tier":7},
      'explosive-plastic': {"id":"c4","name":"C4","emoji":"💣","tier":8},
      'explosive-big': {"id":"bomb","name":"Bomb","emoji":"💣","tier":7},
      'bomb-air': {"id":"aerial-bomb","name":"Aerial Bomb","emoji":"💣","tier":8},
      'explosive-rocket': {"id":"rocket-launcher","name":"Rocket Launcher","emoji":"🚀","tier":8},
      'explosive-fire': {"id":"flamethrower","name":"Flamethrower","emoji":"🔥","tier":7},
      'weapon-laser': {"id":"laser-gun","name":"Laser Gun","emoji":"🔫","tier":9},
      'weapon-plasma': {"id":"plasma-rifle","name":"Plasma Rifle","emoji":"🔫","tier":10},
      'weapon-rail': {"id":"railgun","name":"Railgun","emoji":"🔫","tier":10},
      'weapon-energy': {"id":"energy-weapon","name":"Energy Weapon","emoji":"⚡","tier":10},
      'wood-wheel': {"id":"wheel","name":"Wheel","emoji":"⭕","tier":3},
      'wheel-cart': {"id":"cart","name":"Cart","emoji":"🛒","tier":3},
      'cart-horse': {"id":"wagon","name":"Wagon","emoji":"🚜","tier":4},
      'wagon-cover': {"id":"covered-wagon","name":"Covered Wagon","emoji":"🛒","tier":4},
      'wheel-two': {"id":"bicycle","name":"Bicycle","emoji":"🚲","tier":5},
      'bicycle-motor': {"id":"motorcycle","name":"Motorcycle","emoji":"🏍️","tier":6},
      'motorcycle-sport': {"id":"sport-bike","name":"Sport Bike","emoji":"🏍️","tier":7},
      'motorcycle-cruiser': {"id":"cruiser","name":"Cruiser","emoji":"🏍️","tier":7},
      'engine-four-wheel': {"id":"car","name":"Car","emoji":"🚗","tier":6},
      'car-fast': {"id":"sports-car","name":"Sports Car","emoji":"🏎️","tier":7},
      'car-luxury': {"id":"limousine","name":"Limousine","emoji":"🚗","tier":7},
      'car-off-road': {"id":"suv","name":"SUV","emoji":"🚙","tier":7},
      'car-utility': {"id":"van","name":"Van","emoji":"🚐","tier":6},
      'car-big': {"id":"truck","name":"Truck","emoji":"🚚","tier":6},
      'truck-semi': {"id":"semi-truck","name":"Semi Truck","emoji":"🚛","tier":7},
      'truck-dump': {"id":"dump-truck","name":"Dump Truck","emoji":"🚚","tier":6},
      'truck-fire': {"id":"fire-truck","name":"Fire Truck","emoji":"🚒","tier":6},
      'vehicle-ambulance': {"id":"ambulance","name":"Ambulance","emoji":"🚑","tier":6},
      'vehicle-police': {"id":"police-car","name":"Police Car","emoji":"🚓","tier":6},
      'vehicle-taxi': {"id":"taxi","name":"Taxi","emoji":"🚕","tier":6},
      'vehicle-public': {"id":"bus","name":"Bus","emoji":"🚌","tier":6},
      'bus-school': {"id":"school-bus","name":"School Bus","emoji":"🚌","tier":6},
      'bus-double': {"id":"double-decker","name":"Double Decker","emoji":"🚌","tier":7},
      'vehicle-electric': {"id":"electric-car","name":"Electric Car","emoji":"🚗","tier":8},
      'vehicle-autonomous': {"id":"self-driving-car","name":"Self Driving Car","emoji":"🚗","tier":9},
      'vehicle-flying': {"id":"flying-car","name":"Flying Car","emoji":"🚗","tier":10},
      'rail-transport': {"id":"train","name":"Train","emoji":"🚂","tier":6},
      'train-steam': {"id":"steam-locomotive","name":"Steam Locomotive","emoji":"🚂","tier":6},
      'train-electric': {"id":"electric-train","name":"Electric Train","emoji":"🚆","tier":7},
      'train-bullet': {"id":"bullet-train","name":"Bullet Train","emoji":"🚄","tier":8},
      'train-maglev': {"id":"maglev","name":"Maglev","emoji":"🚅","tier":9},
      'train-mono': {"id":"monorail","name":"Monorail","emoji":"🚝","tier":8},
      'rail-underground': {"id":"subway","name":"Subway","emoji":"🚇","tier":7},
      'rail-above': {"id":"tram","name":"Tram","emoji":"🚊","tier":6},
      'rail-cable': {"id":"cable-car","name":"Cable Car","emoji":"🚠","tier":6},
      'rail-sky': {"id":"aerial-tramway","name":"Aerial Tramway","emoji":"🚡","tier":7},
      'vehicle-tractor': {"id":"tractor","name":"Tractor","emoji":"🚜","tier":5},
      'vehicle-construction': {"id":"bulldozer","name":"Bulldozer","emoji":"🚜","tier":6},
      'vehicle-crane': {"id":"crane","name":"Crane","emoji":"🏗️","tier":6},
      'vehicle-excavator': {"id":"excavator","name":"Excavator","emoji":"⛏️","tier":6},
      'flight-dream': {"id":"wings","name":"Wings","emoji":"🪽","tier":4},
      'wings-glide': {"id":"glider","name":"Glider","emoji":"🪂","tier":5},
      'wings-engine': {"id":"airplane","name":"Airplane","emoji":"✈️","tier":7},
      'airplane-passenger': {"id":"airliner","name":"Airliner","emoji":"🛫","tier":8},
      'airplane-small': {"id":"private-jet","name":"Private Jet","emoji":"🛩️","tier":8},
      'airplane-fighter': {"id":"fighter-jet","name":"Fighter Jet","emoji":"✈️","tier":9},
      'airplane-bomber': {"id":"bomber","name":"Bomber","emoji":"✈️","tier":9},
      'airplane-stealth': {"id":"stealth-plane","name":"Stealth Plane","emoji":"✈️","tier":10},
      'airplane-supersonic': {"id":"supersonic-jet","name":"Supersonic Jet","emoji":"✈️","tier":9},
      'airplane-cargo': {"id":"cargo-plane","name":"Cargo Plane","emoji":"🛫","tier":8},
      'flight-vertical': {"id":"helicopter","name":"Helicopter","emoji":"🚁","tier":7},
      'helicopter-attack': {"id":"attack-helicopter","name":"Attack Helicopter","emoji":"🚁","tier":8},
      'helicopter-heavy': {"id":"chinook","name":"Chinook","emoji":"🚁","tier":8},
      'flight-balloon': {"id":"hot-air-balloon","name":"Hot Air Balloon","emoji":"🎈","tier":5},
      'balloon-steer': {"id":"dirigible","name":"Dirigible","emoji":"🎈","tier":6},
      'balloon-rigid': {"id":"zeppelin","name":"Zeppelin","emoji":"🎈","tier":7},
      'flight-parachute': {"id":"parachute","name":"Parachute","emoji":"🪂","tier":5},
      'parachute-steer': {"id":"paraglider","name":"Paraglider","emoji":"🪂","tier":6},
      'flight-rocket': {"id":"rocket","name":"Rocket","emoji":"🚀","tier":7},
      'rocket-space': {"id":"space-rocket","name":"Space Rocket","emoji":"🚀","tier":8},
      'rocket-saturn': {"id":"saturn-v","name":"Saturn V","emoji":"🚀","tier":9},
      'rocket-reusable': {"id":"falcon-rocket","name":"Falcon Rocket","emoji":"🚀","tier":9},
      'space-capsule': {"id":"space-capsule","name":"Space Capsule","emoji":"🛸","tier":8},
      'space-shuttle': {"id":"space-shuttle","name":"Space Shuttle","emoji":"🚀","tier":9},
      'space-station': {"id":"space-station","name":"Space Station","emoji":"🛰️","tier":9},
      'station-international': {"id":"iss","name":"ISS","emoji":"🛰️","tier":10},
      'space-satellite': {"id":"satellite","name":"Satellite","emoji":"🛰️","tier":8},
      'satellite-gps': {"id":"gps-satellite","name":"GPS Satellite","emoji":"🛰️","tier":9},
      'satellite-spy': {"id":"spy-satellite","name":"Spy Satellite","emoji":"🛰️","tier":9},
      'space-probe': {"id":"space-probe","name":"Space Probe","emoji":"🛸","tier":9},
      'probe-voyager': {"id":"voyager","name":"Voyager","emoji":"🛸","tier":10},
      'space-rover': {"id":"mars-rover","name":"Mars Rover","emoji":"🛸","tier":9},
      'space-telescope': {"id":"space-telescope","name":"Space Telescope","emoji":"🔭","tier":9},
      'telescope-hubble': {"id":"hubble","name":"Hubble","emoji":"🔭","tier":10},
      'space-colony': {"id":"space-colony","name":"Space Colony","emoji":"🏙️","tier":10},
      'wood-float': {"id":"raft","name":"Raft","emoji":"🪵","tier":3},
      'wood-hollow': {"id":"canoe","name":"Canoe","emoji":"🛶","tier":3},
      'wood-paddle': {"id":"kayak","name":"Kayak","emoji":"🛶","tier":4},
      'wood-row': {"id":"rowboat","name":"Rowboat","emoji":"🚣","tier":4},
      'wood-sail': {"id":"sailboat","name":"Sailboat","emoji":"⛵","tier":5},
      'sailboat-fast': {"id":"yacht","name":"Yacht","emoji":"🛥️","tier":6},
      'sailboat-racing': {"id":"racing-yacht","name":"Racing Yacht","emoji":"⛵","tier":7},
      'sail-large': {"id":"ship","name":"Ship","emoji":"🚢","tier":6},
      'ship-cargo': {"id":"cargo-ship","name":"Cargo Ship","emoji":"🚢","tier":7},
      'ship-container': {"id":"container-ship","name":"Container Ship","emoji":"🚢","tier":8},
      'ship-tanker': {"id":"tanker","name":"Tanker","emoji":"🚢","tier":7},
      'ship-cruise': {"id":"cruise-ship","name":"Cruise Ship","emoji":"🚢","tier":8},
      'ship-luxury': {"id":"ocean-liner","name":"Ocean Liner","emoji":"🚢","tier":8},
      'ship-titanic': {"id":"titanic","name":"Titanic","emoji":"🚢","tier":9},
      'ship-fishing': {"id":"fishing-boat","name":"Fishing Boat","emoji":"🎣","tier":5},
      'fishing-trawler': {"id":"trawler","name":"Trawler","emoji":"🚢","tier":6},
      'ship-speed': {"id":"speedboat","name":"Speedboat","emoji":"🚤","tier":6},
      'ship-motor': {"id":"motorboat","name":"Motorboat","emoji":"🚤","tier":6},
      'ship-ferry': {"id":"ferry","name":"Ferry","emoji":"⛴️","tier":6},
      'ship-hover': {"id":"hovercraft","name":"Hovercraft","emoji":"🚤","tier":7},
      'ship-hydrofoil': {"id":"hydrofoil","name":"Hydrofoil","emoji":"🚤","tier":7},
      'ship-war': {"id":"warship","name":"Warship","emoji":"⚓","tier":7},
      'warship-destroyer': {"id":"destroyer","name":"Destroyer","emoji":"⚓","tier":8},
      'warship-cruiser': {"id":"cruiser-ship","name":"Cruiser Ship","emoji":"⚓","tier":8},
      'warship-battleship': {"id":"battleship","name":"Battleship","emoji":"⚓","tier":9},
      'warship-carrier': {"id":"aircraft-carrier","name":"Aircraft Carrier","emoji":"⚓","tier":10},
      'ship-submarine': {"id":"submarine","name":"Submarine","emoji":"🌊","tier":8},
      'submarine-nuclear': {"id":"nuclear-sub","name":"Nuclear Sub","emoji":"☢️","tier":9},
      'ship-icebreaker': {"id":"icebreaker","name":"Icebreaker","emoji":"🚢","tier":8},
      'ship-pirate': {"id":"pirate-ship","name":"Pirate Ship","emoji":"☠️","tier":7},
      'electricity-discover': {"id":"electricity","name":"Electricity","emoji":"⚡","tier":6},
      'electricity-store': {"id":"battery","name":"Battery","emoji":"🔋","tier":6},
      'battery-rechargeable': {"id":"rechargeable-battery","name":"Rechargeable Battery","emoji":"🔋","tier":7},
      'battery-lithium': {"id":"lithium-battery","name":"Lithium Battery","emoji":"🔋","tier":8},
      'electricity-bulb': {"id":"light-bulb","name":"Light Bulb","emoji":"💡","tier":6},
      'bulb-fluorescent': {"id":"fluorescent-light","name":"Fluorescent Light","emoji":"💡","tier":7},
      'bulb-led': {"id":"led-light","name":"LED Light","emoji":"💡","tier":8},
      'electricity-wire': {"id":"electric-wire","name":"Electric Wire","emoji":"〰️","tier":6},
      'wire-network': {"id":"power-grid","name":"Power Grid","emoji":"🔌","tier":8},
      'electricity-motor': {"id":"electric-motor","name":"Electric Motor","emoji":"⚙️","tier":7},
      'electricity-generator': {"id":"generator","name":"Generator","emoji":"⚡","tier":7},
      'generator-turbine': {"id":"turbine","name":"Turbine","emoji":"💨","tier":7},
      'wind-turbine': {"id":"wind-turbine","name":"Wind Turbine","emoji":"💨","tier":8},
      'water-turbine': {"id":"hydroelectric","name":"Hydroelectric","emoji":"💧","tier":8},
      'sun-panel': {"id":"solar-panel","name":"Solar Panel","emoji":"☀️","tier":8},
      'atom-energy': {"id":"nuclear-reactor","name":"Nuclear Reactor","emoji":"☢️","tier":9},
      'reactor-fusion': {"id":"fusion-reactor","name":"Fusion Reactor","emoji":"☢️","tier":10},
      'electricity-component': {"id":"circuit","name":"Circuit","emoji":"🔌","tier":7},
      'circuit-board': {"id":"circuit-board","name":"Circuit Board","emoji":"🔌","tier":8},
      'circuit-integrated': {"id":"microchip","name":"Microchip","emoji":"🔌","tier":8},
      'microchip-advanced': {"id":"processor","name":"Processor","emoji":"🖥️","tier":9},
      'processor-powerful': {"id":"supercomputer","name":"Supercomputer","emoji":"🖥️","tier":10},
      'electricity-compute': {"id":"computer","name":"Computer","emoji":"🖥️","tier":8},
      'computer-personal': {"id":"pc","name":"PC","emoji":"💻","tier":8},
      'computer-portable': {"id":"laptop","name":"Laptop","emoji":"💻","tier":8},
      'computer-tablet': {"id":"tablet","name":"Tablet","emoji":"📱","tier":8},
      'computer-phone': {"id":"smartphone","name":"Smartphone","emoji":"📱","tier":9},
      'phone-flip': {"id":"flip-phone","name":"Flip Phone","emoji":"📱","tier":8},
      'phone-old': {"id":"telephone","name":"Telephone","emoji":"☎️","tier":7},
      'phone-mobile': {"id":"mobile-phone","name":"Mobile Phone","emoji":"📱","tier":8},
      'computer-network': {"id":"internet","name":"Internet","emoji":"🌐","tier":9},
      'internet-web': {"id":"world-wide-web","name":"World Wide Web","emoji":"🌐","tier":9},
      'internet-social': {"id":"social-media","name":"Social Media","emoji":"📱","tier":9},
      'internet-search': {"id":"search-engine","name":"Search Engine","emoji":"🔍","tier":9},
      'computer-ai': {"id":"artificial-intelligence","name":"Artificial Intelligence","emoji":"🤖","tier":10},
      'ai-learn': {"id":"machine-learning","name":"Machine Learning","emoji":"🧠","tier":10},
      'ai-neural': {"id":"neural-network","name":"Neural Network","emoji":"🧠","tier":10},
      'ai-deep': {"id":"deep-learning","name":"Deep Learning","emoji":"🧠","tier":10},
      'ai-quantum': {"id":"quantum-computer","name":"Quantum Computer","emoji":"🖥️","tier":10},
      'data-store': {"id":"database","name":"Database","emoji":"🗄️","tier":8},
      'tree-fruit': {"id":"fruit","name":"Fruit","emoji":"🍎","tier":2},
      'fruit-red': {"id":"apple","name":"Apple","emoji":"🍎","tier":3},
      'apple-green': {"id":"green-apple","name":"Green Apple","emoji":"🍏","tier":3},
      'fruit-citrus': {"id":"orange","name":"Orange","emoji":"🍊","tier":3},
      'citrus-tangy': {"id":"tangerine","name":"Tangerine","emoji":"🍊","tier":3},
      'citrus-yellow': {"id":"lemon","name":"Lemon","emoji":"🍋","tier":3},
      'citrus-green': {"id":"lime","name":"Lime","emoji":"🍋","tier":3},
      'citrus-large': {"id":"grapefruit","name":"Grapefruit","emoji":"🍊","tier":3},
      'fruit-fuzzy': {"id":"peach","name":"Peach","emoji":"🍑","tier":3},
      'peach-flat': {"id":"nectarine","name":"Nectarine","emoji":"🍑","tier":3},
      'fruit-purple': {"id":"plum","name":"Plum","emoji":"🍑","tier":3},
      'fruit-cherry': {"id":"cherry","name":"Cherry","emoji":"🍒","tier":3},
      'cherry-sour': {"id":"sour-cherry","name":"Sour Cherry","emoji":"🍒","tier":3},
      'fruit-green': {"id":"pear","name":"Pear","emoji":"🍐","tier":3},
      'pear-asian': {"id":"asian-pear","name":"Asian Pear","emoji":"🍐","tier":4},
      'fruit-yellow-curve': {"id":"banana","name":"Banana","emoji":"🍌","tier":3},
      'banana-plantain': {"id":"plantain","name":"Plantain","emoji":"🍌","tier":3},
      'fruit-tropical': {"id":"pineapple","name":"Pineapple","emoji":"🍍","tier":4},
      'fruit-fuzzy-brown': {"id":"kiwi","name":"Kiwi","emoji":"🥝","tier":4},
      'fruit-pink-sweet': {"id":"watermelon","name":"Watermelon","emoji":"🍉","tier":3},
      'fruit-orange-melon': {"id":"cantaloupe","name":"Cantaloupe","emoji":"🍈","tier":3},
      'fruit-green-melon': {"id":"honeydew","name":"Honeydew","emoji":"🍈","tier":3},
      'fruit-vine': {"id":"grape","name":"Grape","emoji":"🍇","tier":3},
      'grape-wine': {"id":"wine-grape","name":"Wine Grape","emoji":"🍷","tier":4},
      'fruit-spiky': {"id":"durian","name":"Durian","emoji":"🌰","tier":4},
      'fruit-dragon': {"id":"dragon-fruit","name":"Dragon Fruit","emoji":"🐉","tier":4},
      'fruit-star': {"id":"starfruit","name":"Starfruit","emoji":"⭐","tier":4},
      'fruit-hairy': {"id":"rambutan","name":"Rambutan","emoji":"🌰","tier":4},
      'fruit-sweet-brown': {"id":"date","name":"Date","emoji":"🌰","tier":3},
      'fruit-dried': {"id":"fig","name":"Fig","emoji":"🌰","tier":3},
      'fruit-tropical-yellow': {"id":"mango","name":"Mango","emoji":"🥭","tier":4},
      'fruit-tropical-pink': {"id":"guava","name":"Guava","emoji":"🌸","tier":4},
      'fruit-passion': {"id":"passion-fruit","name":"Passion Fruit","emoji":"🟣","tier":4},
      'fruit-tropical-white': {"id":"lychee","name":"Lychee","emoji":"🌰","tier":4},
      'fruit-hairy-brown': {"id":"coconut","name":"Coconut","emoji":"🥥","tier":4},
      'fruit-tropical-orange': {"id":"papaya","name":"Papaya","emoji":"🧡","tier":4},
      'fruit-summer': {"id":"apricot","name":"Apricot","emoji":"🍑","tier":3},
      'fruit-berry': {"id":"berry","name":"Berry","emoji":"🫐","tier":3},
      'berry-blue': {"id":"blueberry","name":"Blueberry","emoji":"🫐","tier":3},
      'berry-rasp': {"id":"raspberry","name":"Raspberry","emoji":"🍓","tier":3},
      'berry-black': {"id":"blackberry","name":"Blackberry","emoji":"🫐","tier":3},
      'berry-cran': {"id":"cranberry","name":"Cranberry","emoji":"🔴","tier":3},
      'tree-nut': {"id":"nut","name":"Nut","emoji":"🌰","tier":3},
      'nut-brown': {"id":"walnut","name":"Walnut","emoji":"🌰","tier":3},
      'nut-hazel': {"id":"hazelnut","name":"Hazelnut","emoji":"🌰","tier":3},
      'nut-almond': {"id":"almond","name":"Almond","emoji":"🌰","tier":3},
      'nut-cashew': {"id":"cashew","name":"Cashew","emoji":"🌰","tier":3},
      'nut-pistachio': {"id":"pistachio","name":"Pistachio","emoji":"🥜","tier":3},
      'nut-peanut': {"id":"peanut","name":"Peanut","emoji":"🥜","tier":3},
      'peanut-butter': {"id":"peanut-butter","name":"Peanut Butter","emoji":"🥜","tier":4},
      'nut-pecan': {"id":"pecan","name":"Pecan","emoji":"🌰","tier":3},
      'nut-macadamia': {"id":"macadamia","name":"Macadamia","emoji":"🌰","tier":4},
      'nut-brazil': {"id":"brazil-nut","name":"Brazil Nut","emoji":"🌰","tier":3},
      'nut-pine': {"id":"pine-nut","name":"Pine Nut","emoji":"🌰","tier":3},
      'nut-chestnut': {"id":"chestnut","name":"Chestnut","emoji":"🌰","tier":3},
      'chestnut-roasted': {"id":"roasted-chestnut","name":"Roasted Chestnut","emoji":"🔥","tier":4},
      'nut-acorn': {"id":"acorn","name":"Acorn","emoji":"🌰","tier":2},
      'wheat-grind': {"id":"flour","name":"Flour","emoji":"🌾","tier":3},
      'flour-water': {"id":"dough","name":"Dough","emoji":"🍞","tier":3},
      'dough-bake': {"id":"bread","name":"Bread","emoji":"🍞","tier":4},
      'bread-french': {"id":"baguette","name":"Baguette","emoji":"🥖","tier":4},
      'bread-round': {"id":"sourdough","name":"Sourdough","emoji":"🍞","tier":5},
      'bread-sweet': {"id":"brioche","name":"Brioche","emoji":"🍞","tier":5},
      'bread-flat': {"id":"flatbread","name":"Flatbread","emoji":"🫓","tier":4},
      'flatbread-indian': {"id":"naan","name":"Naan","emoji":"🫓","tier":4},
      'flatbread-mexican': {"id":"tortilla","name":"Tortilla","emoji":"🫓","tier":4},
      'bread-ring': {"id":"bagel","name":"Bagel","emoji":"🥯","tier":4},
      'bread-twisted': {"id":"pretzel","name":"Pretzel","emoji":"🥨","tier":4},
      'dough-sweet': {"id":"pastry","name":"Pastry","emoji":"🥐","tier":4},
      'pastry-layered': {"id":"croissant","name":"Croissant","emoji":"🥐","tier":5},
      'pastry-danish': {"id":"danish","name":"Danish","emoji":"🥐","tier":5},
      'pastry-filled': {"id":"turnover","name":"Turnover","emoji":"🥐","tier":5},
      'pastry-puff': {"id":"puff-pastry","name":"Puff Pastry","emoji":"🥐","tier":5},
      'dough-fried': {"id":"donut","name":"Donut","emoji":"🍩","tier":4},
      'donut-glazed': {"id":"glazed-donut","name":"Glazed Donut","emoji":"🍩","tier":4},
      'donut-filled': {"id":"filled-donut","name":"Filled Donut","emoji":"🍩","tier":5},
      'dough-sweet-bake': {"id":"cake","name":"Cake","emoji":"🍰","tier":4},
      'cake-layer': {"id":"layer-cake","name":"Layer Cake","emoji":"🎂","tier":5},
      'cake-chocolate': {"id":"chocolate-cake","name":"Chocolate Cake","emoji":"🍰","tier":5},
      'cake-birthday': {"id":"birthday-cake","name":"Birthday Cake","emoji":"🎂","tier":5},
      'cake-cup': {"id":"cupcake","name":"Cupcake","emoji":"🧁","tier":4},
      'dough-cookie': {"id":"cookie","name":"Cookie","emoji":"🍪","tier":4},
      'cookie-chocolate': {"id":"chocolate-chip","name":"Chocolate Chip","emoji":"🍪","tier":5},
      'cookie-oatmeal': {"id":"oatmeal-cookie","name":"Oatmeal Cookie","emoji":"🍪","tier":5},
      'flour-egg': {"id":"pancake","name":"Pancake","emoji":"🥞","tier":4},
      'pancake-syrup': {"id":"pancake-breakfast","name":"Pancake Breakfast","emoji":"🥞","tier":5},
      'flour-thin': {"id":"waffle","name":"Waffle","emoji":"🧇","tier":4},
      'cow-liquid': {"id":"milk","name":"Milk","emoji":"🥛","tier":3},
      'milk-cream': {"id":"cream","name":"Cream","emoji":"🥛","tier":4},
      'cream-whip': {"id":"whipped-cream","name":"Whipped Cream","emoji":"💨","tier":4},
      'milk-sour': {"id":"yogurt","name":"Yogurt","emoji":"🥛","tier":4},
      'yogurt-greek': {"id":"greek-yogurt","name":"Greek Yogurt","emoji":"🥛","tier":5},
      'milk-solid': {"id":"cheese","name":"Cheese","emoji":"🧀","tier":4},
      'cheese-cheddar': {"id":"cheddar","name":"Cheddar","emoji":"🧀","tier":5},
      'cheese-swiss': {"id":"swiss-cheese","name":"Swiss Cheese","emoji":"🧀","tier":5},
      'cheese-mozzarella': {"id":"mozzarella","name":"Mozzarella","emoji":"🧀","tier":5},
      'cheese-parmesan': {"id":"parmesan","name":"Parmesan","emoji":"🧀","tier":5},
      'cheese-blue': {"id":"blue-cheese","name":"Blue Cheese","emoji":"🧀","tier":5},
      'cheese-brie': {"id":"brie","name":"Brie","emoji":"🧀","tier":5},
      'cheese-feta': {"id":"feta","name":"Feta","emoji":"🧀","tier":5},
      'cheese-gouda': {"id":"gouda","name":"Gouda","emoji":"🧀","tier":5},
      'milk-churn': {"id":"butter","name":"Butter","emoji":"🧈","tier":4},
      'butter-salt': {"id":"salted-butter","name":"Salted Butter","emoji":"🧈","tier":4},
      'milk-frozen': {"id":"ice-cream","name":"Ice Cream","emoji":"🍦","tier":5},
      'ice-cream-vanilla': {"id":"vanilla-ice-cream","name":"Vanilla Ice Cream","emoji":"🍦","tier":5},
      'ice-cream-chocolate': {"id":"chocolate-ice-cream","name":"Chocolate Ice Cream","emoji":"🍫","tier":5},
      'ice-cream-strawberry': {"id":"strawberry-ice-cream","name":"Strawberry Ice Cream","emoji":"🍓","tier":5},
      'animal-meat': {"id":"meat","name":"Meat","emoji":"🍖","tier":3},
      'beef-steak': {"id":"steak","name":"Steak","emoji":"🥩","tier":5},
      'steak-ribeye': {"id":"ribeye","name":"Ribeye","emoji":"🥩","tier":6},
      'beef-ground': {"id":"ground-beef","name":"Ground Beef","emoji":"🥩","tier":4},
      'beef-roast': {"id":"roast-beef","name":"Roast Beef","emoji":"🥩","tier":5},
      'pig-meat': {"id":"pork","name":"Pork","emoji":"🥩","tier":4},
      'pork-chop': {"id":"pork-chop","name":"Pork Chop","emoji":"🥩","tier":5},
      'pork-bacon': {"id":"bacon","name":"Bacon","emoji":"🥓","tier":5},
      'pork-sausage': {"id":"sausage","name":"Sausage","emoji":"🌭","tier":5},
      'pork-ham': {"id":"ham","name":"Ham","emoji":"🍖","tier":5},
      'sheep-meat': {"id":"lamb","name":"Lamb","emoji":"🥩","tier":4},
      'lamb-chop': {"id":"lamb-chop","name":"Lamb Chop","emoji":"🥩","tier":5},
      'chicken-meat': {"id":"chicken","name":"Chicken","emoji":"🍗","tier":4},
      'chicken-breast': {"id":"chicken-breast","name":"Chicken Breast","emoji":"🍗","tier":5},
      'chicken-wing': {"id":"chicken-wing","name":"Chicken Wing","emoji":"🍗","tier":5},
      'chicken-leg': {"id":"drumstick","name":"Drumstick","emoji":"🍗","tier":5},
      'turkey-meat': {"id":"turkey-meat","name":"Turkey Meat","emoji":"🍗","tier":4},
      'duck-meat': {"id":"duck","name":"Duck","emoji":"🦆","tier":5},
      'fish-cooked': {"id":"cooked-fish","name":"Cooked Fish","emoji":"🐟","tier":4},
      'fish-fillet': {"id":"fish-fillet","name":"Fish Fillet","emoji":"🐟","tier":5},
      'meat-cured': {"id":"salami","name":"Salami","emoji":"🥩","tier":5},
      'meat-jerky': {"id":"beef-jerky","name":"Beef Jerky","emoji":"🥩","tier":5},
      'meat-hot-dog': {"id":"hot-dog-meat","name":"Hot Dog Meat","emoji":"🌭","tier":5},
      'meat-patty': {"id":"burger-patty","name":"Burger Patty","emoji":"🍔","tier":5},
      'plant-drink': {"id":"drink","name":"Drink","emoji":"🥤","tier":2},
      'water-pure': {"id":"drinking-water","name":"Drinking Water","emoji":"💧","tier":2},
      'water-bubble': {"id":"sparkling-water","name":"Sparkling Water","emoji":"💧","tier":3},
      'fruit-juice': {"id":"juice","name":"Juice","emoji":"🧃","tier":3},
      'orange-squeeze': {"id":"orange-juice","name":"Orange Juice","emoji":"🍊","tier":4},
      'apple-juice': {"id":"apple-juice","name":"Apple Juice","emoji":"🍎","tier":4},
      'grape-juice': {"id":"grape-juice","name":"Grape Juice","emoji":"🍇","tier":4},
      'lemon-water': {"id":"lemonade","name":"Lemonade","emoji":"🍋","tier":4},
      'tea-leaf': {"id":"tea","name":"Tea","emoji":"🍵","tier":4},
      'tea-black': {"id":"black-tea","name":"Black Tea","emoji":"🍵","tier":4},
      'tea-green': {"id":"green-tea","name":"Green Tea","emoji":"🍵","tier":4},
      'tea-herbal': {"id":"herbal-tea","name":"Herbal Tea","emoji":"🍵","tier":4},
      'tea-ice': {"id":"iced-tea","name":"Iced Tea","emoji":"🧊","tier":5},
      'coffee-bean': {"id":"coffee","name":"Coffee","emoji":"☕","tier":4},
      'coffee-espresso': {"id":"espresso","name":"Espresso","emoji":"☕","tier":5},
      'espresso-milk': {"id":"latte","name":"Latte","emoji":"☕","tier":5},
      'espresso-foam': {"id":"cappuccino","name":"Cappuccino","emoji":"☕","tier":5},
      'coffee-milk': {"id":"coffee-milk","name":"Coffee Milk","emoji":"☕","tier":5},
      'coffee-ice': {"id":"iced-coffee","name":"Iced Coffee","emoji":"🧊","tier":5},
      'grape-ferment': {"id":"wine","name":"Wine","emoji":"🍷","tier":5},
      'wine-red': {"id":"red-wine","name":"Red Wine","emoji":"🍷","tier":5},
      'wine-white': {"id":"white-wine","name":"White Wine","emoji":"🍷","tier":5},
      'grape-bubble': {"id":"champagne","name":"Champagne","emoji":"🍾","tier":6},
      'grain-brew': {"id":"beer","name":"Beer","emoji":"🍺","tier":5},
      'beer-dark': {"id":"stout","name":"Stout","emoji":"🍺","tier":5},
      'beer-light': {"id":"lager","name":"Lager","emoji":"🍺","tier":5},
      'alcohol-strong': {"id":"liquor","name":"Liquor","emoji":"🥃","tier":6},
      'liquor-whiskey': {"id":"whiskey","name":"Whiskey","emoji":"🥃","tier":6},
      'liquor-vodka': {"id":"vodka","name":"Vodka","emoji":"🍸","tier":6},
      'liquor-rum': {"id":"rum","name":"Rum","emoji":"🥃","tier":6},
      'liquor-cocktail': {"id":"cocktail","name":"Cocktail","emoji":"🍸","tier":6},
      'soda-sweet': {"id":"soda","name":"Soda","emoji":"🥤","tier":4},
      'soda-cola': {"id":"cola","name":"Cola","emoji":"🥤","tier":5},
      'sweet-treat': {"id":"dessert","name":"Dessert","emoji":"🍰","tier":4},
      'cacao-sweet': {"id":"chocolate","name":"Chocolate","emoji":"🍫","tier":5},
      'chocolate-dark': {"id":"dark-chocolate","name":"Dark Chocolate","emoji":"🍫","tier":5},
      'chocolate-milk': {"id":"milk-chocolate","name":"Milk Chocolate","emoji":"🍫","tier":5},
      'chocolate-white': {"id":"white-chocolate","name":"White Chocolate","emoji":"🍫","tier":5},
      'sugar-sweet': {"id":"candy","name":"Candy","emoji":"🍬","tier":4},
      'candy-lollipop': {"id":"lollipop","name":"Lollipop","emoji":"🍭","tier":4},
      'candy-gummy': {"id":"gummy-bear","name":"Gummy Bear","emoji":"🍬","tier":4},
      'candy-hard': {"id":"hard-candy","name":"Hard Candy","emoji":"🍬","tier":4},
      'sugar-pie': {"id":"pie","name":"Pie","emoji":"🥧","tier":5},
      'pie-pumpkin': {"id":"pumpkin-pie","name":"Pumpkin Pie","emoji":"🥧","tier":5},
      'pie-cherry': {"id":"cherry-pie","name":"Cherry Pie","emoji":"🥧","tier":5},
      'egg-sweet': {"id":"custard","name":"Custard","emoji":"🍮","tier":5},
      'custard-caramel': {"id":"flan","name":"Flan","emoji":"🍮","tier":5},
      'milk-pudding': {"id":"pudding","name":"Pudding","emoji":"🍮","tier":5},
      'pudding-chocolate': {"id":"chocolate-pudding","name":"Chocolate Pudding","emoji":"🍫","tier":5},
      'cream-frozen': {"id":"gelato","name":"Gelato","emoji":"🍨","tier":6},
      'fruit-frozen': {"id":"sorbet","name":"Sorbet","emoji":"🍧","tier":5},
      'ice-shaved': {"id":"shaved-ice","name":"Shaved Ice","emoji":"🍧","tier":5},
      'sugar-cotton': {"id":"cotton-candy","name":"Cotton Candy","emoji":"🍭","tier":5},
      'air-move': {"id":"wind","name":"Wind","emoji":"💨","tier":2},
      'wind-strong': {"id":"gale","name":"Gale","emoji":"💨","tier":3},
      'wind-storm': {"id":"windstorm","name":"Windstorm","emoji":"💨","tier":4},
      'wind-tornado': {"id":"tornado","name":"Tornado","emoji":"🌪️","tier":5},
      'tornado-super': {"id":"super-tornado","name":"Super Tornado","emoji":"🌪️","tier":6},
      'rain-heavy': {"id":"downpour","name":"Downpour","emoji":"🌧️","tier":3},
      'rain-continuous': {"id":"monsoon","name":"Monsoon","emoji":"🌧️","tier":4},
      'rain-acid': {"id":"acid-rain","name":"Acid Rain","emoji":"☠️","tier":5},
      'rain-freeze': {"id":"freezing-rain","name":"Freezing Rain","emoji":"🧊","tier":4},
      'rain-ice': {"id":"sleet","name":"Sleet","emoji":"🌨️","tier":3},
      'rain-hail': {"id":"hail","name":"Hail","emoji":"🌨️","tier":4},
      'hail-large': {"id":"hailstorm","name":"Hailstorm","emoji":"⚠️","tier":5},
      'snow-light': {"id":"snow-flurry","name":"Snow Flurry","emoji":"❄️","tier":3},
      'snow-heavy': {"id":"snowstorm","name":"Snowstorm","emoji":"🌨️","tier":4},
      'snow-blizzard': {"id":"whiteout","name":"Whiteout","emoji":"❄️","tier":5},
      'snow-slide': {"id":"avalanche","name":"Avalanche","emoji":"⛰️","tier":6},
      'fog-thick': {"id":"dense-fog","name":"Dense Fog","emoji":"🌫️","tier":3},
      'fog-morning': {"id":"morning-mist","name":"Morning Mist","emoji":"🌫️","tier":2},
      'cloud-dark': {"id":"overcast","name":"Overcast","emoji":"☁️","tier":2},
      'cloud-storm': {"id":"storm-cloud","name":"Storm Cloud","emoji":"⛈️","tier":3},
      'cloud-thunder': {"id":"thunderhead","name":"Thunderhead","emoji":"⛈️","tier":4},
      'lightning-sheet': {"id":"sheet-lightning","name":"Sheet Lightning","emoji":"⚡","tier":3},
      'lightning-fork': {"id":"fork-lightning","name":"Fork Lightning","emoji":"⚡","tier":3},
      'lightning-ball': {"id":"ball-lightning","name":"Ball Lightning","emoji":"⚡","tier":5},
      'thunder-loud': {"id":"thunder","name":"Thunder","emoji":"💥","tier":2},
      'thunder-boom': {"id":"thunderclap","name":"Thunderclap","emoji":"💥","tier":3},
      'air-pressure-low': {"id":"low-pressure","name":"Low Pressure","emoji":"📉","tier":3},
      'air-pressure-high': {"id":"high-pressure","name":"High Pressure","emoji":"📈","tier":3},
      'air-front-cold': {"id":"cold-front","name":"Cold Front","emoji":"🧊","tier":3},
      'air-front-warm': {"id":"warm-front","name":"Warm Front","emoji":"☀️","tier":3},
      'water-spout': {"id":"waterspout","name":"Waterspout","emoji":"🌊","tier":5},
      'ocean-surge': {"id":"storm-surge","name":"Storm Surge","emoji":"🌊","tier":5},
      'ocean-wave-big': {"id":"tidal-wave","name":"Tidal Wave","emoji":"🌊","tier":6},
      'ocean-wave-giant': {"id":"rogue-wave","name":"Rogue Wave","emoji":"🌊","tier":7},
      'wind-sand': {"id":"dust-storm","name":"Dust Storm","emoji":"🌪️","tier":4},
      'wind-snow': {"id":"ground-blizzard","name":"Ground Blizzard","emoji":"❄️","tier":5},
      'heat-extreme': {"id":"heat-wave","name":"Heat Wave","emoji":"🔥","tier":5},
      'cold-extreme': {"id":"cold-snap","name":"Cold Snap","emoji":"🧊","tier":5},
      'drought-severe': {"id":"severe-drought","name":"Severe Drought","emoji":"🏜️","tier":6},
      'flood-flash': {"id":"flash-flood","name":"Flash Flood","emoji":"🌊","tier":5},
      'flood-river': {"id":"river-flood","name":"River Flood","emoji":"🌊","tier":5},
      'ice-freeze': {"id":"ice-storm","name":"Ice Storm","emoji":"🧊","tier":5},
      'frost-light': {"id":"frost","name":"Frost","emoji":"❄️","tier":2},
      'frost-hard': {"id":"hard-freeze","name":"Hard Freeze","emoji":"🧊","tier":4},
      'dew-morning': {"id":"morning-dew","name":"Morning Dew","emoji":"💧","tier":2},
      'vapor-rise': {"id":"evaporation","name":"Evaporation","emoji":"☁️","tier":2},
      'water-cycle': {"id":"precipitation","name":"Precipitation","emoji":"🌧️","tier":3},
      'air-humid': {"id":"humidity","name":"Humidity","emoji":"💦","tier":2},
      'air-dry': {"id":"aridity","name":"Aridity","emoji":"🏜️","tier":3},
      'sky-optical': {"id":"mirage","name":"Mirage","emoji":"✨","tier":4},
      'year-cycle': {"id":"season","name":"Season","emoji":"🗓️","tier":2},
      'season-warm': {"id":"spring","name":"Spring","emoji":"🌸","tier":3},
      'spring-early': {"id":"early-spring","name":"Early Spring","emoji":"🌱","tier":3},
      'spring-bloom': {"id":"spring-bloom","name":"Spring Bloom","emoji":"🌸","tier":4},
      'season-hot': {"id":"summer","name":"Summer","emoji":"☀️","tier":3},
      'summer-peak': {"id":"midsummer","name":"Midsummer","emoji":"🌞","tier":4},
      'summer-late': {"id":"late-summer","name":"Late Summer","emoji":"☀️","tier":3},
      'season-cool': {"id":"autumn","name":"Autumn","emoji":"🍂","tier":3},
      'autumn-early': {"id":"early-autumn","name":"Early Autumn","emoji":"🍁","tier":3},
      'autumn-fall': {"id":"fall","name":"Fall","emoji":"🍂","tier":3},
      'autumn-late': {"id":"late-autumn","name":"Late Autumn","emoji":"🍂","tier":3},
      'season-cold': {"id":"winter","name":"Winter","emoji":"❄️","tier":3},
      'winter-deep': {"id":"deep-winter","name":"Deep Winter","emoji":"❄️","tier":4},
      'winter-dead': {"id":"dead-of-winter","name":"Dead of Winter","emoji":"🧊","tier":4},
      'climate-tropical': {"id":"tropical","name":"Tropical","emoji":"🌴","tier":4},
      'climate-equator': {"id":"equatorial","name":"Equatorial","emoji":"🌍","tier":4},
      'climate-desert': {"id":"arid","name":"Arid","emoji":"🏜️","tier":4},
      'climate-dry-grass': {"id":"savanna","name":"Savanna","emoji":"🦁","tier":4},
      'climate-temperate': {"id":"temperate","name":"Temperate","emoji":"🌳","tier":4},
      'climate-mediterranean': {"id":"mediterranean","name":"Mediterranean","emoji":"🫒","tier":4},
      'climate-oceanic': {"id":"oceanic","name":"Oceanic","emoji":"🌊","tier":4},
      'climate-continental': {"id":"continental","name":"Continental","emoji":"🗺️","tier":4},
      'climate-subarctic': {"id":"subarctic","name":"Subarctic","emoji":"🌲","tier":4},
      'climate-arctic': {"id":"arctic","name":"Arctic","emoji":"🧊","tier":5},
      'climate-polar': {"id":"polar","name":"Polar","emoji":"🐧","tier":5},
      'climate-tundra': {"id":"tundra","name":"Tundra","emoji":"❄️","tier":5},
      'climate-alpine': {"id":"alpine","name":"Alpine","emoji":"⛰️","tier":5},
      'climate-highland': {"id":"highland","name":"Highland","emoji":"🏔️","tier":4},
      'weather-pattern': {"id":"weather-system","name":"Weather System","emoji":"🌐","tier":4},
      'wind-pattern': {"id":"trade-winds","name":"Trade Winds","emoji":"💨","tier":4},
      'wind-westerly': {"id":"westerlies","name":"Westerlies","emoji":"💨","tier":4},
      'wind-polar': {"id":"polar-easterlies","name":"Polar Easterlies","emoji":"🧊","tier":5},
      'wind-jet': {"id":"jet-stream","name":"Jet Stream","emoji":"💨","tier":5},
      'ocean-current': {"id":"ocean-current","name":"Ocean Current","emoji":"🌊","tier":4},
      'current-gulf': {"id":"gulf-stream","name":"Gulf Stream","emoji":"🌊","tier":5},
      'current-cold': {"id":"cold-current","name":"Cold Current","emoji":"🧊","tier":4},
      'current-warm': {"id":"warm-current","name":"Warm Current","emoji":"🌊","tier":4},
      'climate-change': {"id":"climate-change","name":"Climate Change","emoji":"🌡️","tier":7},
      'warming-global': {"id":"global-warming","name":"Global Warming","emoji":"🌡️","tier":7},
      'ice-melt': {"id":"glacial-melt","name":"Glacial Melt","emoji":"🧊","tier":6},
      'sea-rise': {"id":"sea-level-rise","name":"Sea Level Rise","emoji":"🌊","tier":7},
      'weather-extreme': {"id":"extreme-weather","name":"Extreme Weather","emoji":"⚠️","tier":6},
      'climate-crisis': {"id":"climate-crisis","name":"Climate Crisis","emoji":"🆘","tier":8},
      'environment-change': {"id":"ecological-shift","name":"Ecological Shift","emoji":"🌍","tier":7},
      'habitat-loss': {"id":"habitat-loss","name":"Habitat Loss","emoji":"🏚️","tier":7},
      'species-extinct': {"id":"extinction-event","name":"Extinction Event","emoji":"💀","tier":8},
      'ice-age': {"id":"ice-age","name":"Ice Age","emoji":"🧊","tier":8},
      'age-interglacial': {"id":"interglacial","name":"Interglacial","emoji":"🌡️","tier":7},
      'climate-optimum': {"id":"climate-optimum","name":"Climate Optimum","emoji":"🌞","tier":6},
      'epoch-holocene': {"id":"holocene","name":"Holocene","emoji":"🗓️","tier":8}
    };



    // ==================== AUTO-GENERATED UNIQUE ELEMENTS (2000+) ====================
    const autoGeneratedElements = {
      'combo-0-0-0': {"id":"ancient-crystal-flame","name":"Ancient Crystal Flame","emoji":"✨","tier":4},
      'combo-0-0-1': {"id":"ancient-crystal-frost","name":"Ancient Crystal Frost","emoji":"⭐","tier":4},
      'combo-0-0-2': {"id":"ancient-crystal-storm","name":"Ancient Crystal Storm","emoji":"🌟","tier":4},
      'combo-0-0-3': {"id":"ancient-crystal-quake","name":"Ancient Crystal Quake","emoji":"💫","tier":4},
      'combo-0-0-4': {"id":"ancient-crystal-tide","name":"Ancient Crystal Tide","emoji":"🔮","tier":4},
      'combo-0-0-5': {"id":"ancient-crystal-wind","name":"Ancient Crystal Wind","emoji":"🎆","tier":4},
      'combo-0-0-6': {"id":"ancient-crystal-thunder","name":"Ancient Crystal Thunder","emoji":"🎇","tier":4},
      'combo-0-0-7': {"id":"ancient-crystal-lightning","name":"Ancient Crystal Lightning","emoji":"🌈","tier":4},
      'combo-0-0-8': {"id":"ancient-crystal-shadow","name":"Ancient Crystal Shadow","emoji":"🔥","tier":4},
      'combo-0-0-9': {"id":"ancient-crystal-light","name":"Ancient Crystal Light","emoji":"💧","tier":4},
      'combo-0-0-10': {"id":"ancient-crystal-darkness","name":"Ancient Crystal Darkness","emoji":"🌊","tier":4},
      'combo-0-0-11': {"id":"ancient-crystal-radiance","name":"Ancient Crystal Radiance","emoji":"⚡","tier":4},
      'combo-0-0-12': {"id":"ancient-crystal-brilliance","name":"Ancient Crystal Brilliance","emoji":"❄️","tier":4},
      'combo-0-0-13': {"id":"ancient-crystal-glory","name":"Ancient Crystal Glory","emoji":"🌪️","tier":4},
      'combo-0-0-14': {"id":"ancient-crystal-majesty","name":"Ancient Crystal Majesty","emoji":"☄️","tier":4},
      'combo-0-0-15': {"id":"ancient-crystal-splendor","name":"Ancient Crystal Splendor","emoji":"💎","tier":4},
      'combo-0-0-16': {"id":"ancient-crystal-magnificence","name":"Ancient Crystal Magnificence","emoji":"👑","tier":4},
      'combo-0-0-17': {"id":"ancient-crystal-grandeur","name":"Ancient Crystal Grandeur","emoji":"🗝️","tier":4},
      'combo-0-0-18': {"id":"ancient-crystal-nobility","name":"Ancient Crystal Nobility","emoji":"🔑","tier":4},
      'combo-0-0-19': {"id":"ancient-crystal-royalty","name":"Ancient Crystal Royalty","emoji":"🎭","tier":4},
      'combo-0-1-0': {"id":"ancient-essence-flame","name":"Ancient Essence Flame","emoji":"🎨","tier":4},
      'combo-0-1-1': {"id":"ancient-essence-frost","name":"Ancient Essence Frost","emoji":"🎪","tier":4},
      'combo-0-1-2': {"id":"ancient-essence-storm","name":"Ancient Essence Storm","emoji":"🎢","tier":4},
      'combo-0-1-3': {"id":"ancient-essence-quake","name":"Ancient Essence Quake","emoji":"🎡","tier":4},
      'combo-0-1-4': {"id":"ancient-essence-tide","name":"Ancient Essence Tide","emoji":"🎠","tier":4},
      'combo-0-1-5': {"id":"ancient-essence-wind","name":"Ancient Essence Wind","emoji":"🎪","tier":4},
      'combo-0-1-6': {"id":"ancient-essence-thunder","name":"Ancient Essence Thunder","emoji":"🎭","tier":4},
      'combo-0-1-7': {"id":"ancient-essence-lightning","name":"Ancient Essence Lightning","emoji":"🎬","tier":4},
      'combo-0-1-8': {"id":"ancient-essence-shadow","name":"Ancient Essence Shadow","emoji":"🎤","tier":4},
      'combo-0-1-9': {"id":"ancient-essence-light","name":"Ancient Essence Light","emoji":"🎧","tier":4},
      'combo-0-1-10': {"id":"ancient-essence-darkness","name":"Ancient Essence Darkness","emoji":"✨","tier":4},
      'combo-0-1-11': {"id":"ancient-essence-radiance","name":"Ancient Essence Radiance","emoji":"⭐","tier":4},
      'combo-0-1-12': {"id":"ancient-essence-brilliance","name":"Ancient Essence Brilliance","emoji":"🌟","tier":4},
      'combo-0-1-13': {"id":"ancient-essence-glory","name":"Ancient Essence Glory","emoji":"💫","tier":4},
      'combo-0-1-14': {"id":"ancient-essence-majesty","name":"Ancient Essence Majesty","emoji":"🔮","tier":4},
      'combo-0-1-15': {"id":"ancient-essence-splendor","name":"Ancient Essence Splendor","emoji":"🎆","tier":4},
      'combo-0-1-16': {"id":"ancient-essence-magnificence","name":"Ancient Essence Magnificence","emoji":"🎇","tier":4},
      'combo-0-1-17': {"id":"ancient-essence-grandeur","name":"Ancient Essence Grandeur","emoji":"🌈","tier":4},
      'combo-0-1-18': {"id":"ancient-essence-nobility","name":"Ancient Essence Nobility","emoji":"🔥","tier":4},
      'combo-0-1-19': {"id":"ancient-essence-royalty","name":"Ancient Essence Royalty","emoji":"💧","tier":4},
      'combo-0-2-0': {"id":"ancient-spirit-flame","name":"Ancient Spirit Flame","emoji":"🌊","tier":4},
      'combo-0-2-1': {"id":"ancient-spirit-frost","name":"Ancient Spirit Frost","emoji":"⚡","tier":4},
      'combo-0-2-2': {"id":"ancient-spirit-storm","name":"Ancient Spirit Storm","emoji":"❄️","tier":4},
      'combo-0-2-3': {"id":"ancient-spirit-quake","name":"Ancient Spirit Quake","emoji":"🌪️","tier":4},
      'combo-0-2-4': {"id":"ancient-spirit-tide","name":"Ancient Spirit Tide","emoji":"☄️","tier":4},
      'combo-0-2-5': {"id":"ancient-spirit-wind","name":"Ancient Spirit Wind","emoji":"💎","tier":4},
      'combo-0-2-6': {"id":"ancient-spirit-thunder","name":"Ancient Spirit Thunder","emoji":"👑","tier":4},
      'combo-0-2-7': {"id":"ancient-spirit-lightning","name":"Ancient Spirit Lightning","emoji":"🗝️","tier":4},
      'combo-0-2-8': {"id":"ancient-spirit-shadow","name":"Ancient Spirit Shadow","emoji":"🔑","tier":4},
      'combo-0-2-9': {"id":"ancient-spirit-light","name":"Ancient Spirit Light","emoji":"🎭","tier":4},
      'combo-0-2-10': {"id":"ancient-spirit-darkness","name":"Ancient Spirit Darkness","emoji":"🎨","tier":4},
      'combo-0-2-11': {"id":"ancient-spirit-radiance","name":"Ancient Spirit Radiance","emoji":"🎪","tier":4},
      'combo-0-2-12': {"id":"ancient-spirit-brilliance","name":"Ancient Spirit Brilliance","emoji":"🎢","tier":4},
      'combo-0-2-13': {"id":"ancient-spirit-glory","name":"Ancient Spirit Glory","emoji":"🎡","tier":4},
      'combo-0-2-14': {"id":"ancient-spirit-majesty","name":"Ancient Spirit Majesty","emoji":"🎠","tier":4},
      'combo-0-2-15': {"id":"ancient-spirit-splendor","name":"Ancient Spirit Splendor","emoji":"🎪","tier":4},
      'combo-0-2-16': {"id":"ancient-spirit-magnificence","name":"Ancient Spirit Magnificence","emoji":"🎭","tier":4},
      'combo-0-2-17': {"id":"ancient-spirit-grandeur","name":"Ancient Spirit Grandeur","emoji":"🎬","tier":4},
      'combo-0-2-18': {"id":"ancient-spirit-nobility","name":"Ancient Spirit Nobility","emoji":"🎤","tier":4},
      'combo-0-2-19': {"id":"ancient-spirit-royalty","name":"Ancient Spirit Royalty","emoji":"🎧","tier":4},
      'combo-0-3-0': {"id":"ancient-force-flame","name":"Ancient Force Flame","emoji":"✨","tier":4},
      'combo-0-3-1': {"id":"ancient-force-frost","name":"Ancient Force Frost","emoji":"⭐","tier":4},
      'combo-0-3-2': {"id":"ancient-force-storm","name":"Ancient Force Storm","emoji":"🌟","tier":4},
      'combo-0-3-3': {"id":"ancient-force-quake","name":"Ancient Force Quake","emoji":"💫","tier":4},
      'combo-0-3-4': {"id":"ancient-force-tide","name":"Ancient Force Tide","emoji":"🔮","tier":4},
      'combo-0-3-5': {"id":"ancient-force-wind","name":"Ancient Force Wind","emoji":"🎆","tier":4},
      'combo-0-3-6': {"id":"ancient-force-thunder","name":"Ancient Force Thunder","emoji":"🎇","tier":4},
      'combo-0-3-7': {"id":"ancient-force-lightning","name":"Ancient Force Lightning","emoji":"🌈","tier":4},
      'combo-0-3-8': {"id":"ancient-force-shadow","name":"Ancient Force Shadow","emoji":"🔥","tier":4},
      'combo-0-3-9': {"id":"ancient-force-light","name":"Ancient Force Light","emoji":"💧","tier":4},
      'combo-0-3-10': {"id":"ancient-force-darkness","name":"Ancient Force Darkness","emoji":"🌊","tier":4},
      'combo-0-3-11': {"id":"ancient-force-radiance","name":"Ancient Force Radiance","emoji":"⚡","tier":4},
      'combo-0-3-12': {"id":"ancient-force-brilliance","name":"Ancient Force Brilliance","emoji":"❄️","tier":4},
      'combo-0-3-13': {"id":"ancient-force-glory","name":"Ancient Force Glory","emoji":"🌪️","tier":4},
      'combo-0-3-14': {"id":"ancient-force-majesty","name":"Ancient Force Majesty","emoji":"☄️","tier":4},
      'combo-0-3-15': {"id":"ancient-force-splendor","name":"Ancient Force Splendor","emoji":"💎","tier":4},
      'combo-0-3-16': {"id":"ancient-force-magnificence","name":"Ancient Force Magnificence","emoji":"👑","tier":4},
      'combo-0-3-17': {"id":"ancient-force-grandeur","name":"Ancient Force Grandeur","emoji":"🗝️","tier":4},
      'combo-0-3-18': {"id":"ancient-force-nobility","name":"Ancient Force Nobility","emoji":"🔑","tier":4},
      'combo-0-3-19': {"id":"ancient-force-royalty","name":"Ancient Force Royalty","emoji":"🎭","tier":4},
      'combo-0-4-0': {"id":"ancient-energy-flame","name":"Ancient Energy Flame","emoji":"🎨","tier":4},
      'combo-0-4-1': {"id":"ancient-energy-frost","name":"Ancient Energy Frost","emoji":"🎪","tier":4},
      'combo-0-4-2': {"id":"ancient-energy-storm","name":"Ancient Energy Storm","emoji":"🎢","tier":4},
      'combo-0-4-3': {"id":"ancient-energy-quake","name":"Ancient Energy Quake","emoji":"🎡","tier":4},
      'combo-0-4-4': {"id":"ancient-energy-tide","name":"Ancient Energy Tide","emoji":"🎠","tier":4},
      'combo-0-4-5': {"id":"ancient-energy-wind","name":"Ancient Energy Wind","emoji":"🎪","tier":4},
      'combo-0-4-6': {"id":"ancient-energy-thunder","name":"Ancient Energy Thunder","emoji":"🎭","tier":4},
      'combo-0-4-7': {"id":"ancient-energy-lightning","name":"Ancient Energy Lightning","emoji":"🎬","tier":4},
      'combo-0-4-8': {"id":"ancient-energy-shadow","name":"Ancient Energy Shadow","emoji":"🎤","tier":4},
      'combo-0-4-9': {"id":"ancient-energy-light","name":"Ancient Energy Light","emoji":"🎧","tier":4},
      'combo-0-4-10': {"id":"ancient-energy-darkness","name":"Ancient Energy Darkness","emoji":"✨","tier":4},
      'combo-0-4-11': {"id":"ancient-energy-radiance","name":"Ancient Energy Radiance","emoji":"⭐","tier":4},
      'combo-0-4-12': {"id":"ancient-energy-brilliance","name":"Ancient Energy Brilliance","emoji":"🌟","tier":4},
      'combo-0-4-13': {"id":"ancient-energy-glory","name":"Ancient Energy Glory","emoji":"💫","tier":4},
      'combo-0-4-14': {"id":"ancient-energy-majesty","name":"Ancient Energy Majesty","emoji":"🔮","tier":4},
      'combo-0-4-15': {"id":"ancient-energy-splendor","name":"Ancient Energy Splendor","emoji":"🎆","tier":4},
      'combo-0-4-16': {"id":"ancient-energy-magnificence","name":"Ancient Energy Magnificence","emoji":"🎇","tier":4},
      'combo-0-4-17': {"id":"ancient-energy-grandeur","name":"Ancient Energy Grandeur","emoji":"🌈","tier":4},
      'combo-0-4-18': {"id":"ancient-energy-nobility","name":"Ancient Energy Nobility","emoji":"🔥","tier":4},
      'combo-0-4-19': {"id":"ancient-energy-royalty","name":"Ancient Energy Royalty","emoji":"💧","tier":4},
      'combo-0-5-0': {"id":"ancient-power-flame","name":"Ancient Power Flame","emoji":"🌊","tier":4},
      'combo-0-5-1': {"id":"ancient-power-frost","name":"Ancient Power Frost","emoji":"⚡","tier":4},
      'combo-0-5-2': {"id":"ancient-power-storm","name":"Ancient Power Storm","emoji":"❄️","tier":4},
      'combo-0-5-3': {"id":"ancient-power-quake","name":"Ancient Power Quake","emoji":"🌪️","tier":4},
      'combo-0-5-4': {"id":"ancient-power-tide","name":"Ancient Power Tide","emoji":"☄️","tier":4},
      'combo-0-5-5': {"id":"ancient-power-wind","name":"Ancient Power Wind","emoji":"💎","tier":4},
      'combo-0-5-6': {"id":"ancient-power-thunder","name":"Ancient Power Thunder","emoji":"👑","tier":4},
      'combo-0-5-7': {"id":"ancient-power-lightning","name":"Ancient Power Lightning","emoji":"🗝️","tier":4},
      'combo-0-5-8': {"id":"ancient-power-shadow","name":"Ancient Power Shadow","emoji":"🔑","tier":4},
      'combo-0-5-9': {"id":"ancient-power-light","name":"Ancient Power Light","emoji":"🎭","tier":4},
      'combo-0-5-10': {"id":"ancient-power-darkness","name":"Ancient Power Darkness","emoji":"🎨","tier":4},
      'combo-0-5-11': {"id":"ancient-power-radiance","name":"Ancient Power Radiance","emoji":"🎪","tier":4},
      'combo-0-5-12': {"id":"ancient-power-brilliance","name":"Ancient Power Brilliance","emoji":"🎢","tier":4},
      'combo-0-5-13': {"id":"ancient-power-glory","name":"Ancient Power Glory","emoji":"🎡","tier":4},
      'combo-0-5-14': {"id":"ancient-power-majesty","name":"Ancient Power Majesty","emoji":"🎠","tier":4},
      'combo-0-5-15': {"id":"ancient-power-splendor","name":"Ancient Power Splendor","emoji":"🎪","tier":4},
      'combo-0-5-16': {"id":"ancient-power-magnificence","name":"Ancient Power Magnificence","emoji":"🎭","tier":4},
      'combo-0-5-17': {"id":"ancient-power-grandeur","name":"Ancient Power Grandeur","emoji":"🎬","tier":4},
      'combo-0-5-18': {"id":"ancient-power-nobility","name":"Ancient Power Nobility","emoji":"🎤","tier":4},
      'combo-0-5-19': {"id":"ancient-power-royalty","name":"Ancient Power Royalty","emoji":"🎧","tier":4},
      'combo-0-6-0': {"id":"ancient-aura-flame","name":"Ancient Aura Flame","emoji":"✨","tier":4},
      'combo-0-6-1': {"id":"ancient-aura-frost","name":"Ancient Aura Frost","emoji":"⭐","tier":4},
      'combo-0-6-2': {"id":"ancient-aura-storm","name":"Ancient Aura Storm","emoji":"🌟","tier":4},
      'combo-0-6-3': {"id":"ancient-aura-quake","name":"Ancient Aura Quake","emoji":"💫","tier":4},
      'combo-0-6-4': {"id":"ancient-aura-tide","name":"Ancient Aura Tide","emoji":"🔮","tier":4},
      'combo-0-6-5': {"id":"ancient-aura-wind","name":"Ancient Aura Wind","emoji":"🎆","tier":4},
      'combo-0-6-6': {"id":"ancient-aura-thunder","name":"Ancient Aura Thunder","emoji":"🎇","tier":4},
      'combo-0-6-7': {"id":"ancient-aura-lightning","name":"Ancient Aura Lightning","emoji":"🌈","tier":4},
      'combo-0-6-8': {"id":"ancient-aura-shadow","name":"Ancient Aura Shadow","emoji":"🔥","tier":4},
      'combo-0-6-9': {"id":"ancient-aura-light","name":"Ancient Aura Light","emoji":"💧","tier":4},
      'combo-0-6-10': {"id":"ancient-aura-darkness","name":"Ancient Aura Darkness","emoji":"🌊","tier":4},
      'combo-0-6-11': {"id":"ancient-aura-radiance","name":"Ancient Aura Radiance","emoji":"⚡","tier":4},
      'combo-0-6-12': {"id":"ancient-aura-brilliance","name":"Ancient Aura Brilliance","emoji":"❄️","tier":4},
      'combo-0-6-13': {"id":"ancient-aura-glory","name":"Ancient Aura Glory","emoji":"🌪️","tier":4},
      'combo-0-6-14': {"id":"ancient-aura-majesty","name":"Ancient Aura Majesty","emoji":"☄️","tier":4},
      'combo-0-6-15': {"id":"ancient-aura-splendor","name":"Ancient Aura Splendor","emoji":"💎","tier":4},
      'combo-0-6-16': {"id":"ancient-aura-magnificence","name":"Ancient Aura Magnificence","emoji":"👑","tier":4},
      'combo-0-6-17': {"id":"ancient-aura-grandeur","name":"Ancient Aura Grandeur","emoji":"🗝️","tier":4},
      'combo-0-6-18': {"id":"ancient-aura-nobility","name":"Ancient Aura Nobility","emoji":"🔑","tier":4},
      'combo-0-6-19': {"id":"ancient-aura-royalty","name":"Ancient Aura Royalty","emoji":"🎭","tier":4},
      'combo-0-7-0': {"id":"ancient-soul-flame","name":"Ancient Soul Flame","emoji":"🎨","tier":4},
      'combo-0-7-1': {"id":"ancient-soul-frost","name":"Ancient Soul Frost","emoji":"🎪","tier":4},
      'combo-0-7-2': {"id":"ancient-soul-storm","name":"Ancient Soul Storm","emoji":"🎢","tier":4},
      'combo-0-7-3': {"id":"ancient-soul-quake","name":"Ancient Soul Quake","emoji":"🎡","tier":4},
      'combo-0-7-4': {"id":"ancient-soul-tide","name":"Ancient Soul Tide","emoji":"🎠","tier":4},
      'combo-0-7-5': {"id":"ancient-soul-wind","name":"Ancient Soul Wind","emoji":"🎪","tier":4},
      'combo-0-7-6': {"id":"ancient-soul-thunder","name":"Ancient Soul Thunder","emoji":"🎭","tier":4},
      'combo-0-7-7': {"id":"ancient-soul-lightning","name":"Ancient Soul Lightning","emoji":"🎬","tier":4},
      'combo-0-7-8': {"id":"ancient-soul-shadow","name":"Ancient Soul Shadow","emoji":"🎤","tier":4},
      'combo-0-7-9': {"id":"ancient-soul-light","name":"Ancient Soul Light","emoji":"🎧","tier":4},
      'combo-0-7-10': {"id":"ancient-soul-darkness","name":"Ancient Soul Darkness","emoji":"✨","tier":4},
      'combo-0-7-11': {"id":"ancient-soul-radiance","name":"Ancient Soul Radiance","emoji":"⭐","tier":4},
      'combo-0-7-12': {"id":"ancient-soul-brilliance","name":"Ancient Soul Brilliance","emoji":"🌟","tier":4},
      'combo-0-7-13': {"id":"ancient-soul-glory","name":"Ancient Soul Glory","emoji":"💫","tier":4},
      'combo-0-7-14': {"id":"ancient-soul-majesty","name":"Ancient Soul Majesty","emoji":"🔮","tier":4},
      'combo-0-7-15': {"id":"ancient-soul-splendor","name":"Ancient Soul Splendor","emoji":"🎆","tier":4},
      'combo-0-7-16': {"id":"ancient-soul-magnificence","name":"Ancient Soul Magnificence","emoji":"🎇","tier":4},
      'combo-0-7-17': {"id":"ancient-soul-grandeur","name":"Ancient Soul Grandeur","emoji":"🌈","tier":4},
      'combo-0-7-18': {"id":"ancient-soul-nobility","name":"Ancient Soul Nobility","emoji":"🔥","tier":4},
      'combo-0-7-19': {"id":"ancient-soul-royalty","name":"Ancient Soul Royalty","emoji":"💧","tier":4},
      'combo-0-8-0': {"id":"ancient-heart-flame","name":"Ancient Heart Flame","emoji":"🌊","tier":4},
      'combo-0-8-1': {"id":"ancient-heart-frost","name":"Ancient Heart Frost","emoji":"⚡","tier":4},
      'combo-0-8-2': {"id":"ancient-heart-storm","name":"Ancient Heart Storm","emoji":"❄️","tier":4},
      'combo-0-8-3': {"id":"ancient-heart-quake","name":"Ancient Heart Quake","emoji":"🌪️","tier":4},
      'combo-0-8-4': {"id":"ancient-heart-tide","name":"Ancient Heart Tide","emoji":"☄️","tier":4},
      'combo-0-8-5': {"id":"ancient-heart-wind","name":"Ancient Heart Wind","emoji":"💎","tier":4},
      'combo-0-8-6': {"id":"ancient-heart-thunder","name":"Ancient Heart Thunder","emoji":"👑","tier":4},
      'combo-0-8-7': {"id":"ancient-heart-lightning","name":"Ancient Heart Lightning","emoji":"🗝️","tier":4},
      'combo-0-8-8': {"id":"ancient-heart-shadow","name":"Ancient Heart Shadow","emoji":"🔑","tier":4},
      'combo-0-8-9': {"id":"ancient-heart-light","name":"Ancient Heart Light","emoji":"🎭","tier":4},
      'combo-0-8-10': {"id":"ancient-heart-darkness","name":"Ancient Heart Darkness","emoji":"🎨","tier":4},
      'combo-0-8-11': {"id":"ancient-heart-radiance","name":"Ancient Heart Radiance","emoji":"🎪","tier":4},
      'combo-0-8-12': {"id":"ancient-heart-brilliance","name":"Ancient Heart Brilliance","emoji":"🎢","tier":4},
      'combo-0-8-13': {"id":"ancient-heart-glory","name":"Ancient Heart Glory","emoji":"🎡","tier":4},
      'combo-0-8-14': {"id":"ancient-heart-majesty","name":"Ancient Heart Majesty","emoji":"🎠","tier":4},
      'combo-0-8-15': {"id":"ancient-heart-splendor","name":"Ancient Heart Splendor","emoji":"🎪","tier":4},
      'combo-0-8-16': {"id":"ancient-heart-magnificence","name":"Ancient Heart Magnificence","emoji":"🎭","tier":4},
      'combo-0-8-17': {"id":"ancient-heart-grandeur","name":"Ancient Heart Grandeur","emoji":"🎬","tier":4},
      'combo-0-8-18': {"id":"ancient-heart-nobility","name":"Ancient Heart Nobility","emoji":"🎤","tier":4},
      'combo-0-8-19': {"id":"ancient-heart-royalty","name":"Ancient Heart Royalty","emoji":"🎧","tier":4},
      'combo-0-9-0': {"id":"ancient-core-flame","name":"Ancient Core Flame","emoji":"✨","tier":4},
      'combo-0-9-1': {"id":"ancient-core-frost","name":"Ancient Core Frost","emoji":"⭐","tier":4},
      'combo-0-9-2': {"id":"ancient-core-storm","name":"Ancient Core Storm","emoji":"🌟","tier":4},
      'combo-0-9-3': {"id":"ancient-core-quake","name":"Ancient Core Quake","emoji":"💫","tier":4},
      'combo-0-9-4': {"id":"ancient-core-tide","name":"Ancient Core Tide","emoji":"🔮","tier":4},
      'combo-0-9-5': {"id":"ancient-core-wind","name":"Ancient Core Wind","emoji":"🎆","tier":4},
      'combo-0-9-6': {"id":"ancient-core-thunder","name":"Ancient Core Thunder","emoji":"🎇","tier":4},
      'combo-0-9-7': {"id":"ancient-core-lightning","name":"Ancient Core Lightning","emoji":"🌈","tier":4},
      'combo-0-9-8': {"id":"ancient-core-shadow","name":"Ancient Core Shadow","emoji":"🔥","tier":4},
      'combo-0-9-9': {"id":"ancient-core-light","name":"Ancient Core Light","emoji":"💧","tier":4},
      'combo-0-9-10': {"id":"ancient-core-darkness","name":"Ancient Core Darkness","emoji":"🌊","tier":4},
      'combo-0-9-11': {"id":"ancient-core-radiance","name":"Ancient Core Radiance","emoji":"⚡","tier":4},
      'combo-0-9-12': {"id":"ancient-core-brilliance","name":"Ancient Core Brilliance","emoji":"❄️","tier":4},
      'combo-0-9-13': {"id":"ancient-core-glory","name":"Ancient Core Glory","emoji":"🌪️","tier":4},
      'combo-0-9-14': {"id":"ancient-core-majesty","name":"Ancient Core Majesty","emoji":"☄️","tier":4},
      'combo-0-9-15': {"id":"ancient-core-splendor","name":"Ancient Core Splendor","emoji":"💎","tier":4},
      'combo-0-9-16': {"id":"ancient-core-magnificence","name":"Ancient Core Magnificence","emoji":"👑","tier":4},
      'combo-0-9-17': {"id":"ancient-core-grandeur","name":"Ancient Core Grandeur","emoji":"🗝️","tier":4},
      'combo-0-9-18': {"id":"ancient-core-nobility","name":"Ancient Core Nobility","emoji":"🔑","tier":4},
      'combo-0-9-19': {"id":"ancient-core-royalty","name":"Ancient Core Royalty","emoji":"🎭","tier":4},
      'combo-0-10-0': {"id":"ancient-nexus-flame","name":"Ancient Nexus Flame","emoji":"🎨","tier":5},
      'combo-0-10-1': {"id":"ancient-nexus-frost","name":"Ancient Nexus Frost","emoji":"🎪","tier":5},
      'combo-0-10-2': {"id":"ancient-nexus-storm","name":"Ancient Nexus Storm","emoji":"🎢","tier":5},
      'combo-0-10-3': {"id":"ancient-nexus-quake","name":"Ancient Nexus Quake","emoji":"🎡","tier":5},
      'combo-0-10-4': {"id":"ancient-nexus-tide","name":"Ancient Nexus Tide","emoji":"🎠","tier":5},
      'combo-0-10-5': {"id":"ancient-nexus-wind","name":"Ancient Nexus Wind","emoji":"🎪","tier":5},
      'combo-0-10-6': {"id":"ancient-nexus-thunder","name":"Ancient Nexus Thunder","emoji":"🎭","tier":5},
      'combo-0-10-7': {"id":"ancient-nexus-lightning","name":"Ancient Nexus Lightning","emoji":"🎬","tier":5},
      'combo-0-10-8': {"id":"ancient-nexus-shadow","name":"Ancient Nexus Shadow","emoji":"🎤","tier":5},
      'combo-0-10-9': {"id":"ancient-nexus-light","name":"Ancient Nexus Light","emoji":"🎧","tier":5},
      'combo-0-10-10': {"id":"ancient-nexus-darkness","name":"Ancient Nexus Darkness","emoji":"✨","tier":5},
      'combo-0-10-11': {"id":"ancient-nexus-radiance","name":"Ancient Nexus Radiance","emoji":"⭐","tier":5},
      'combo-0-10-12': {"id":"ancient-nexus-brilliance","name":"Ancient Nexus Brilliance","emoji":"🌟","tier":5},
      'combo-0-10-13': {"id":"ancient-nexus-glory","name":"Ancient Nexus Glory","emoji":"💫","tier":5},
      'combo-0-10-14': {"id":"ancient-nexus-majesty","name":"Ancient Nexus Majesty","emoji":"🔮","tier":5},
      'combo-0-10-15': {"id":"ancient-nexus-splendor","name":"Ancient Nexus Splendor","emoji":"🎆","tier":5},
      'combo-0-10-16': {"id":"ancient-nexus-magnificence","name":"Ancient Nexus Magnificence","emoji":"🎇","tier":5},
      'combo-0-10-17': {"id":"ancient-nexus-grandeur","name":"Ancient Nexus Grandeur","emoji":"🌈","tier":5},
      'combo-0-10-18': {"id":"ancient-nexus-nobility","name":"Ancient Nexus Nobility","emoji":"🔥","tier":5},
      'combo-0-10-19': {"id":"ancient-nexus-royalty","name":"Ancient Nexus Royalty","emoji":"💧","tier":5},
      'combo-0-11-0': {"id":"ancient-vortex-flame","name":"Ancient Vortex Flame","emoji":"🌊","tier":5},
      'combo-0-11-1': {"id":"ancient-vortex-frost","name":"Ancient Vortex Frost","emoji":"⚡","tier":5},
      'combo-0-11-2': {"id":"ancient-vortex-storm","name":"Ancient Vortex Storm","emoji":"❄️","tier":5},
      'combo-0-11-3': {"id":"ancient-vortex-quake","name":"Ancient Vortex Quake","emoji":"🌪️","tier":5},
      'combo-0-11-4': {"id":"ancient-vortex-tide","name":"Ancient Vortex Tide","emoji":"☄️","tier":5},
      'combo-0-11-5': {"id":"ancient-vortex-wind","name":"Ancient Vortex Wind","emoji":"💎","tier":5},
      'combo-0-11-6': {"id":"ancient-vortex-thunder","name":"Ancient Vortex Thunder","emoji":"👑","tier":5},
      'combo-0-11-7': {"id":"ancient-vortex-lightning","name":"Ancient Vortex Lightning","emoji":"🗝️","tier":5},
      'combo-0-11-8': {"id":"ancient-vortex-shadow","name":"Ancient Vortex Shadow","emoji":"🔑","tier":5},
      'combo-0-11-9': {"id":"ancient-vortex-light","name":"Ancient Vortex Light","emoji":"🎭","tier":5},
      'combo-0-11-10': {"id":"ancient-vortex-darkness","name":"Ancient Vortex Darkness","emoji":"🎨","tier":5},
      'combo-0-11-11': {"id":"ancient-vortex-radiance","name":"Ancient Vortex Radiance","emoji":"🎪","tier":5},
      'combo-0-11-12': {"id":"ancient-vortex-brilliance","name":"Ancient Vortex Brilliance","emoji":"🎢","tier":5},
      'combo-0-11-13': {"id":"ancient-vortex-glory","name":"Ancient Vortex Glory","emoji":"🎡","tier":5},
      'combo-0-11-14': {"id":"ancient-vortex-majesty","name":"Ancient Vortex Majesty","emoji":"🎠","tier":5},
      'combo-0-11-15': {"id":"ancient-vortex-splendor","name":"Ancient Vortex Splendor","emoji":"🎪","tier":5},
      'combo-0-11-16': {"id":"ancient-vortex-magnificence","name":"Ancient Vortex Magnificence","emoji":"🎭","tier":5},
      'combo-0-11-17': {"id":"ancient-vortex-grandeur","name":"Ancient Vortex Grandeur","emoji":"🎬","tier":5},
      'combo-0-11-18': {"id":"ancient-vortex-nobility","name":"Ancient Vortex Nobility","emoji":"🎤","tier":5},
      'combo-0-11-19': {"id":"ancient-vortex-royalty","name":"Ancient Vortex Royalty","emoji":"🎧","tier":5},
      'combo-0-12-0': {"id":"ancient-portal-flame","name":"Ancient Portal Flame","emoji":"✨","tier":5},
      'combo-0-12-1': {"id":"ancient-portal-frost","name":"Ancient Portal Frost","emoji":"⭐","tier":5},
      'combo-0-12-2': {"id":"ancient-portal-storm","name":"Ancient Portal Storm","emoji":"🌟","tier":5},
      'combo-0-12-3': {"id":"ancient-portal-quake","name":"Ancient Portal Quake","emoji":"💫","tier":5},
      'combo-0-12-4': {"id":"ancient-portal-tide","name":"Ancient Portal Tide","emoji":"🔮","tier":5},
      'combo-0-12-5': {"id":"ancient-portal-wind","name":"Ancient Portal Wind","emoji":"🎆","tier":5},
      'combo-0-12-6': {"id":"ancient-portal-thunder","name":"Ancient Portal Thunder","emoji":"🎇","tier":5},
      'combo-0-12-7': {"id":"ancient-portal-lightning","name":"Ancient Portal Lightning","emoji":"🌈","tier":5},
      'combo-0-12-8': {"id":"ancient-portal-shadow","name":"Ancient Portal Shadow","emoji":"🔥","tier":5},
      'combo-0-12-9': {"id":"ancient-portal-light","name":"Ancient Portal Light","emoji":"💧","tier":5},
      'combo-0-12-10': {"id":"ancient-portal-darkness","name":"Ancient Portal Darkness","emoji":"🌊","tier":5},
      'combo-0-12-11': {"id":"ancient-portal-radiance","name":"Ancient Portal Radiance","emoji":"⚡","tier":5},
      'combo-0-12-12': {"id":"ancient-portal-brilliance","name":"Ancient Portal Brilliance","emoji":"❄️","tier":5},
      'combo-0-12-13': {"id":"ancient-portal-glory","name":"Ancient Portal Glory","emoji":"🌪️","tier":5},
      'combo-0-12-14': {"id":"ancient-portal-majesty","name":"Ancient Portal Majesty","emoji":"☄️","tier":5},
      'combo-0-12-15': {"id":"ancient-portal-splendor","name":"Ancient Portal Splendor","emoji":"💎","tier":5},
      'combo-0-12-16': {"id":"ancient-portal-magnificence","name":"Ancient Portal Magnificence","emoji":"👑","tier":5},
      'combo-0-12-17': {"id":"ancient-portal-grandeur","name":"Ancient Portal Grandeur","emoji":"🗝️","tier":5},
      'combo-0-12-18': {"id":"ancient-portal-nobility","name":"Ancient Portal Nobility","emoji":"🔑","tier":5},
      'combo-0-12-19': {"id":"ancient-portal-royalty","name":"Ancient Portal Royalty","emoji":"🎭","tier":5},
      'combo-0-13-0': {"id":"ancient-gateway-flame","name":"Ancient Gateway Flame","emoji":"🎨","tier":5},
      'combo-0-13-1': {"id":"ancient-gateway-frost","name":"Ancient Gateway Frost","emoji":"🎪","tier":5},
      'combo-0-13-2': {"id":"ancient-gateway-storm","name":"Ancient Gateway Storm","emoji":"🎢","tier":5},
      'combo-0-13-3': {"id":"ancient-gateway-quake","name":"Ancient Gateway Quake","emoji":"🎡","tier":5},
      'combo-0-13-4': {"id":"ancient-gateway-tide","name":"Ancient Gateway Tide","emoji":"🎠","tier":5},
      'combo-0-13-5': {"id":"ancient-gateway-wind","name":"Ancient Gateway Wind","emoji":"🎪","tier":5},
      'combo-0-13-6': {"id":"ancient-gateway-thunder","name":"Ancient Gateway Thunder","emoji":"🎭","tier":5},
      'combo-0-13-7': {"id":"ancient-gateway-lightning","name":"Ancient Gateway Lightning","emoji":"🎬","tier":5},
      'combo-0-13-8': {"id":"ancient-gateway-shadow","name":"Ancient Gateway Shadow","emoji":"🎤","tier":5},
      'combo-0-13-9': {"id":"ancient-gateway-light","name":"Ancient Gateway Light","emoji":"🎧","tier":5},
      'combo-0-13-10': {"id":"ancient-gateway-darkness","name":"Ancient Gateway Darkness","emoji":"✨","tier":5},
      'combo-0-13-11': {"id":"ancient-gateway-radiance","name":"Ancient Gateway Radiance","emoji":"⭐","tier":5},
      'combo-0-13-12': {"id":"ancient-gateway-brilliance","name":"Ancient Gateway Brilliance","emoji":"🌟","tier":5},
      'combo-0-13-13': {"id":"ancient-gateway-glory","name":"Ancient Gateway Glory","emoji":"💫","tier":5},
      'combo-0-13-14': {"id":"ancient-gateway-majesty","name":"Ancient Gateway Majesty","emoji":"🔮","tier":5},
      'combo-0-13-15': {"id":"ancient-gateway-splendor","name":"Ancient Gateway Splendor","emoji":"🎆","tier":5},
      'combo-0-13-16': {"id":"ancient-gateway-magnificence","name":"Ancient Gateway Magnificence","emoji":"🎇","tier":5},
      'combo-0-13-17': {"id":"ancient-gateway-grandeur","name":"Ancient Gateway Grandeur","emoji":"🌈","tier":5},
      'combo-0-13-18': {"id":"ancient-gateway-nobility","name":"Ancient Gateway Nobility","emoji":"🔥","tier":5},
      'combo-0-13-19': {"id":"ancient-gateway-royalty","name":"Ancient Gateway Royalty","emoji":"💧","tier":5},
      'combo-0-14-0': {"id":"ancient-rift-flame","name":"Ancient Rift Flame","emoji":"🌊","tier":5},
      'combo-0-14-1': {"id":"ancient-rift-frost","name":"Ancient Rift Frost","emoji":"⚡","tier":5},
      'combo-0-14-2': {"id":"ancient-rift-storm","name":"Ancient Rift Storm","emoji":"❄️","tier":5},
      'combo-0-14-3': {"id":"ancient-rift-quake","name":"Ancient Rift Quake","emoji":"🌪️","tier":5},
      'combo-0-14-4': {"id":"ancient-rift-tide","name":"Ancient Rift Tide","emoji":"☄️","tier":5},
      'combo-0-14-5': {"id":"ancient-rift-wind","name":"Ancient Rift Wind","emoji":"💎","tier":5},
      'combo-0-14-6': {"id":"ancient-rift-thunder","name":"Ancient Rift Thunder","emoji":"👑","tier":5},
      'combo-0-14-7': {"id":"ancient-rift-lightning","name":"Ancient Rift Lightning","emoji":"🗝️","tier":5},
      'combo-0-14-8': {"id":"ancient-rift-shadow","name":"Ancient Rift Shadow","emoji":"🔑","tier":5},
      'combo-0-14-9': {"id":"ancient-rift-light","name":"Ancient Rift Light","emoji":"🎭","tier":5},
      'combo-0-14-10': {"id":"ancient-rift-darkness","name":"Ancient Rift Darkness","emoji":"🎨","tier":5},
      'combo-0-14-11': {"id":"ancient-rift-radiance","name":"Ancient Rift Radiance","emoji":"🎪","tier":5},
      'combo-0-14-12': {"id":"ancient-rift-brilliance","name":"Ancient Rift Brilliance","emoji":"🎢","tier":5},
      'combo-0-14-13': {"id":"ancient-rift-glory","name":"Ancient Rift Glory","emoji":"🎡","tier":5},
      'combo-0-14-14': {"id":"ancient-rift-majesty","name":"Ancient Rift Majesty","emoji":"🎠","tier":5},
      'combo-0-14-15': {"id":"ancient-rift-splendor","name":"Ancient Rift Splendor","emoji":"🎪","tier":5},
      'combo-0-14-16': {"id":"ancient-rift-magnificence","name":"Ancient Rift Magnificence","emoji":"🎭","tier":5},
      'combo-0-14-17': {"id":"ancient-rift-grandeur","name":"Ancient Rift Grandeur","emoji":"🎬","tier":5},
      'combo-0-14-18': {"id":"ancient-rift-nobility","name":"Ancient Rift Nobility","emoji":"🎤","tier":5},
      'combo-0-14-19': {"id":"ancient-rift-royalty","name":"Ancient Rift Royalty","emoji":"🎧","tier":5},
      'combo-0-15-0': {"id":"ancient-void-flame","name":"Ancient Void Flame","emoji":"✨","tier":5},
      'combo-0-15-1': {"id":"ancient-void-frost","name":"Ancient Void Frost","emoji":"⭐","tier":5},
      'combo-0-15-2': {"id":"ancient-void-storm","name":"Ancient Void Storm","emoji":"🌟","tier":5},
      'combo-0-15-3': {"id":"ancient-void-quake","name":"Ancient Void Quake","emoji":"💫","tier":5},
      'combo-0-15-4': {"id":"ancient-void-tide","name":"Ancient Void Tide","emoji":"🔮","tier":5},
      'combo-0-15-5': {"id":"ancient-void-wind","name":"Ancient Void Wind","emoji":"🎆","tier":5},
      'combo-0-15-6': {"id":"ancient-void-thunder","name":"Ancient Void Thunder","emoji":"🎇","tier":5},
      'combo-0-15-7': {"id":"ancient-void-lightning","name":"Ancient Void Lightning","emoji":"🌈","tier":5},
      'combo-0-15-8': {"id":"ancient-void-shadow","name":"Ancient Void Shadow","emoji":"🔥","tier":5},
      'combo-0-15-9': {"id":"ancient-void-light","name":"Ancient Void Light","emoji":"💧","tier":5},
      'combo-0-15-10': {"id":"ancient-void-darkness","name":"Ancient Void Darkness","emoji":"🌊","tier":5},
      'combo-0-15-11': {"id":"ancient-void-radiance","name":"Ancient Void Radiance","emoji":"⚡","tier":5},
      'combo-0-15-12': {"id":"ancient-void-brilliance","name":"Ancient Void Brilliance","emoji":"❄️","tier":5},
      'combo-0-15-13': {"id":"ancient-void-glory","name":"Ancient Void Glory","emoji":"🌪️","tier":5},
      'combo-0-15-14': {"id":"ancient-void-majesty","name":"Ancient Void Majesty","emoji":"☄️","tier":5},
      'combo-0-15-15': {"id":"ancient-void-splendor","name":"Ancient Void Splendor","emoji":"💎","tier":5},
      'combo-0-15-16': {"id":"ancient-void-magnificence","name":"Ancient Void Magnificence","emoji":"👑","tier":5},
      'combo-0-15-17': {"id":"ancient-void-grandeur","name":"Ancient Void Grandeur","emoji":"🗝️","tier":5},
      'combo-0-15-18': {"id":"ancient-void-nobility","name":"Ancient Void Nobility","emoji":"🔑","tier":5},
      'combo-0-15-19': {"id":"ancient-void-royalty","name":"Ancient Void Royalty","emoji":"🎭","tier":5},
      'combo-0-16-0': {"id":"ancient-chaos-flame","name":"Ancient Chaos Flame","emoji":"🎨","tier":5},
      'combo-0-16-1': {"id":"ancient-chaos-frost","name":"Ancient Chaos Frost","emoji":"🎪","tier":5},
      'combo-0-16-2': {"id":"ancient-chaos-storm","name":"Ancient Chaos Storm","emoji":"🎢","tier":5},
      'combo-0-16-3': {"id":"ancient-chaos-quake","name":"Ancient Chaos Quake","emoji":"🎡","tier":5},
      'combo-0-16-4': {"id":"ancient-chaos-tide","name":"Ancient Chaos Tide","emoji":"🎠","tier":5},
      'combo-0-16-5': {"id":"ancient-chaos-wind","name":"Ancient Chaos Wind","emoji":"🎪","tier":5},
      'combo-0-16-6': {"id":"ancient-chaos-thunder","name":"Ancient Chaos Thunder","emoji":"🎭","tier":5},
      'combo-0-16-7': {"id":"ancient-chaos-lightning","name":"Ancient Chaos Lightning","emoji":"🎬","tier":5},
      'combo-0-16-8': {"id":"ancient-chaos-shadow","name":"Ancient Chaos Shadow","emoji":"🎤","tier":5},
      'combo-0-16-9': {"id":"ancient-chaos-light","name":"Ancient Chaos Light","emoji":"🎧","tier":5},
      'combo-0-16-10': {"id":"ancient-chaos-darkness","name":"Ancient Chaos Darkness","emoji":"✨","tier":5},
      'combo-0-16-11': {"id":"ancient-chaos-radiance","name":"Ancient Chaos Radiance","emoji":"⭐","tier":5},
      'combo-0-16-12': {"id":"ancient-chaos-brilliance","name":"Ancient Chaos Brilliance","emoji":"🌟","tier":5},
      'combo-0-16-13': {"id":"ancient-chaos-glory","name":"Ancient Chaos Glory","emoji":"💫","tier":5},
      'combo-0-16-14': {"id":"ancient-chaos-majesty","name":"Ancient Chaos Majesty","emoji":"🔮","tier":5},
      'combo-0-16-15': {"id":"ancient-chaos-splendor","name":"Ancient Chaos Splendor","emoji":"🎆","tier":5},
      'combo-0-16-16': {"id":"ancient-chaos-magnificence","name":"Ancient Chaos Magnificence","emoji":"🎇","tier":5},
      'combo-0-16-17': {"id":"ancient-chaos-grandeur","name":"Ancient Chaos Grandeur","emoji":"🌈","tier":5},
      'combo-0-16-18': {"id":"ancient-chaos-nobility","name":"Ancient Chaos Nobility","emoji":"🔥","tier":5},
      'combo-0-16-19': {"id":"ancient-chaos-royalty","name":"Ancient Chaos Royalty","emoji":"💧","tier":5},
      'combo-0-17-0': {"id":"ancient-order-flame","name":"Ancient Order Flame","emoji":"🌊","tier":5},
      'combo-0-17-1': {"id":"ancient-order-frost","name":"Ancient Order Frost","emoji":"⚡","tier":5},
      'combo-0-17-2': {"id":"ancient-order-storm","name":"Ancient Order Storm","emoji":"❄️","tier":5},
      'combo-0-17-3': {"id":"ancient-order-quake","name":"Ancient Order Quake","emoji":"🌪️","tier":5},
      'combo-0-17-4': {"id":"ancient-order-tide","name":"Ancient Order Tide","emoji":"☄️","tier":5},
      'combo-0-17-5': {"id":"ancient-order-wind","name":"Ancient Order Wind","emoji":"💎","tier":5},
      'combo-0-17-6': {"id":"ancient-order-thunder","name":"Ancient Order Thunder","emoji":"👑","tier":5},
      'combo-0-17-7': {"id":"ancient-order-lightning","name":"Ancient Order Lightning","emoji":"🗝️","tier":5},
      'combo-0-17-8': {"id":"ancient-order-shadow","name":"Ancient Order Shadow","emoji":"🔑","tier":5},
      'combo-0-17-9': {"id":"ancient-order-light","name":"Ancient Order Light","emoji":"🎭","tier":5},
      'combo-0-17-10': {"id":"ancient-order-darkness","name":"Ancient Order Darkness","emoji":"🎨","tier":5},
      'combo-0-17-11': {"id":"ancient-order-radiance","name":"Ancient Order Radiance","emoji":"🎪","tier":5},
      'combo-0-17-12': {"id":"ancient-order-brilliance","name":"Ancient Order Brilliance","emoji":"🎢","tier":5},
      'combo-0-17-13': {"id":"ancient-order-glory","name":"Ancient Order Glory","emoji":"🎡","tier":5},
      'combo-0-17-14': {"id":"ancient-order-majesty","name":"Ancient Order Majesty","emoji":"🎠","tier":5},
      'combo-0-17-15': {"id":"ancient-order-splendor","name":"Ancient Order Splendor","emoji":"🎪","tier":5},
      'combo-0-17-16': {"id":"ancient-order-magnificence","name":"Ancient Order Magnificence","emoji":"🎭","tier":5},
      'combo-0-17-17': {"id":"ancient-order-grandeur","name":"Ancient Order Grandeur","emoji":"🎬","tier":5},
      'combo-0-17-18': {"id":"ancient-order-nobility","name":"Ancient Order Nobility","emoji":"🎤","tier":5},
      'combo-0-17-19': {"id":"ancient-order-royalty","name":"Ancient Order Royalty","emoji":"🎧","tier":5},
      'combo-0-18-0': {"id":"ancient-balance-flame","name":"Ancient Balance Flame","emoji":"✨","tier":5},
      'combo-0-18-1': {"id":"ancient-balance-frost","name":"Ancient Balance Frost","emoji":"⭐","tier":5},
      'combo-0-18-2': {"id":"ancient-balance-storm","name":"Ancient Balance Storm","emoji":"🌟","tier":5},
      'combo-0-18-3': {"id":"ancient-balance-quake","name":"Ancient Balance Quake","emoji":"💫","tier":5},
      'combo-0-18-4': {"id":"ancient-balance-tide","name":"Ancient Balance Tide","emoji":"🔮","tier":5},
      'combo-0-18-5': {"id":"ancient-balance-wind","name":"Ancient Balance Wind","emoji":"🎆","tier":5},
      'combo-0-18-6': {"id":"ancient-balance-thunder","name":"Ancient Balance Thunder","emoji":"🎇","tier":5},
      'combo-0-18-7': {"id":"ancient-balance-lightning","name":"Ancient Balance Lightning","emoji":"🌈","tier":5},
      'combo-0-18-8': {"id":"ancient-balance-shadow","name":"Ancient Balance Shadow","emoji":"🔥","tier":5},
      'combo-0-18-9': {"id":"ancient-balance-light","name":"Ancient Balance Light","emoji":"💧","tier":5},
      'combo-0-18-10': {"id":"ancient-balance-darkness","name":"Ancient Balance Darkness","emoji":"🌊","tier":5},
      'combo-0-18-11': {"id":"ancient-balance-radiance","name":"Ancient Balance Radiance","emoji":"⚡","tier":5},
      'combo-0-18-12': {"id":"ancient-balance-brilliance","name":"Ancient Balance Brilliance","emoji":"❄️","tier":5},
      'combo-0-18-13': {"id":"ancient-balance-glory","name":"Ancient Balance Glory","emoji":"🌪️","tier":5},
      'combo-0-18-14': {"id":"ancient-balance-majesty","name":"Ancient Balance Majesty","emoji":"☄️","tier":5},
      'combo-0-18-15': {"id":"ancient-balance-splendor","name":"Ancient Balance Splendor","emoji":"💎","tier":5},
      'combo-0-18-16': {"id":"ancient-balance-magnificence","name":"Ancient Balance Magnificence","emoji":"👑","tier":5},
      'combo-0-18-17': {"id":"ancient-balance-grandeur","name":"Ancient Balance Grandeur","emoji":"🗝️","tier":5},
      'combo-0-18-18': {"id":"ancient-balance-nobility","name":"Ancient Balance Nobility","emoji":"🔑","tier":5},
      'combo-0-18-19': {"id":"ancient-balance-royalty","name":"Ancient Balance Royalty","emoji":"🎭","tier":5},
      'combo-0-19-0': {"id":"ancient-harmony-flame","name":"Ancient Harmony Flame","emoji":"🎨","tier":5},
      'combo-0-19-1': {"id":"ancient-harmony-frost","name":"Ancient Harmony Frost","emoji":"🎪","tier":5},
      'combo-0-19-2': {"id":"ancient-harmony-storm","name":"Ancient Harmony Storm","emoji":"🎢","tier":5},
      'combo-0-19-3': {"id":"ancient-harmony-quake","name":"Ancient Harmony Quake","emoji":"🎡","tier":5},
      'combo-0-19-4': {"id":"ancient-harmony-tide","name":"Ancient Harmony Tide","emoji":"🎠","tier":5},
      'combo-0-19-5': {"id":"ancient-harmony-wind","name":"Ancient Harmony Wind","emoji":"🎪","tier":5},
      'combo-0-19-6': {"id":"ancient-harmony-thunder","name":"Ancient Harmony Thunder","emoji":"🎭","tier":5},
      'combo-0-19-7': {"id":"ancient-harmony-lightning","name":"Ancient Harmony Lightning","emoji":"🎬","tier":5},
      'combo-0-19-8': {"id":"ancient-harmony-shadow","name":"Ancient Harmony Shadow","emoji":"🎤","tier":5},
      'combo-0-19-9': {"id":"ancient-harmony-light","name":"Ancient Harmony Light","emoji":"🎧","tier":5},
      'combo-0-19-10': {"id":"ancient-harmony-darkness","name":"Ancient Harmony Darkness","emoji":"✨","tier":5},
      'combo-0-19-11': {"id":"ancient-harmony-radiance","name":"Ancient Harmony Radiance","emoji":"⭐","tier":5},
      'combo-0-19-12': {"id":"ancient-harmony-brilliance","name":"Ancient Harmony Brilliance","emoji":"🌟","tier":5},
      'combo-0-19-13': {"id":"ancient-harmony-glory","name":"Ancient Harmony Glory","emoji":"💫","tier":5},
      'combo-0-19-14': {"id":"ancient-harmony-majesty","name":"Ancient Harmony Majesty","emoji":"🔮","tier":5},
      'combo-0-19-15': {"id":"ancient-harmony-splendor","name":"Ancient Harmony Splendor","emoji":"🎆","tier":5},
      'combo-0-19-16': {"id":"ancient-harmony-magnificence","name":"Ancient Harmony Magnificence","emoji":"🎇","tier":5},
      'combo-0-19-17': {"id":"ancient-harmony-grandeur","name":"Ancient Harmony Grandeur","emoji":"🌈","tier":5},
      'combo-0-19-18': {"id":"ancient-harmony-nobility","name":"Ancient Harmony Nobility","emoji":"🔥","tier":5},
      'combo-0-19-19': {"id":"ancient-harmony-royalty","name":"Ancient Harmony Royalty","emoji":"💧","tier":5},
      'combo-0-20-0': {"id":"ancient-discord-flame","name":"Ancient Discord Flame","emoji":"🌊","tier":6},
      'combo-0-20-1': {"id":"ancient-discord-frost","name":"Ancient Discord Frost","emoji":"⚡","tier":6},
      'combo-0-20-2': {"id":"ancient-discord-storm","name":"Ancient Discord Storm","emoji":"❄️","tier":6},
      'combo-0-20-3': {"id":"ancient-discord-quake","name":"Ancient Discord Quake","emoji":"🌪️","tier":6},
      'combo-0-20-4': {"id":"ancient-discord-tide","name":"Ancient Discord Tide","emoji":"☄️","tier":6},
      'combo-0-20-5': {"id":"ancient-discord-wind","name":"Ancient Discord Wind","emoji":"💎","tier":6},
      'combo-0-20-6': {"id":"ancient-discord-thunder","name":"Ancient Discord Thunder","emoji":"👑","tier":6},
      'combo-0-20-7': {"id":"ancient-discord-lightning","name":"Ancient Discord Lightning","emoji":"🗝️","tier":6},
      'combo-0-20-8': {"id":"ancient-discord-shadow","name":"Ancient Discord Shadow","emoji":"🔑","tier":6},
      'combo-0-20-9': {"id":"ancient-discord-light","name":"Ancient Discord Light","emoji":"🎭","tier":6},
      'combo-0-20-10': {"id":"ancient-discord-darkness","name":"Ancient Discord Darkness","emoji":"🎨","tier":6},
      'combo-0-20-11': {"id":"ancient-discord-radiance","name":"Ancient Discord Radiance","emoji":"🎪","tier":6},
      'combo-0-20-12': {"id":"ancient-discord-brilliance","name":"Ancient Discord Brilliance","emoji":"🎢","tier":6},
      'combo-0-20-13': {"id":"ancient-discord-glory","name":"Ancient Discord Glory","emoji":"🎡","tier":6},
      'combo-0-20-14': {"id":"ancient-discord-majesty","name":"Ancient Discord Majesty","emoji":"🎠","tier":6},
      'combo-0-20-15': {"id":"ancient-discord-splendor","name":"Ancient Discord Splendor","emoji":"🎪","tier":6},
      'combo-0-20-16': {"id":"ancient-discord-magnificence","name":"Ancient Discord Magnificence","emoji":"🎭","tier":6},
      'combo-0-20-17': {"id":"ancient-discord-grandeur","name":"Ancient Discord Grandeur","emoji":"🎬","tier":6},
      'combo-0-20-18': {"id":"ancient-discord-nobility","name":"Ancient Discord Nobility","emoji":"🎤","tier":6},
      'combo-0-20-19': {"id":"ancient-discord-royalty","name":"Ancient Discord Royalty","emoji":"🎧","tier":6},
      'combo-0-21-0': {"id":"ancient-unity-flame","name":"Ancient Unity Flame","emoji":"✨","tier":6},
      'combo-0-21-1': {"id":"ancient-unity-frost","name":"Ancient Unity Frost","emoji":"⭐","tier":6},
      'combo-0-21-2': {"id":"ancient-unity-storm","name":"Ancient Unity Storm","emoji":"🌟","tier":6},
      'combo-0-21-3': {"id":"ancient-unity-quake","name":"Ancient Unity Quake","emoji":"💫","tier":6},
      'combo-0-21-4': {"id":"ancient-unity-tide","name":"Ancient Unity Tide","emoji":"🔮","tier":6},
      'combo-0-21-5': {"id":"ancient-unity-wind","name":"Ancient Unity Wind","emoji":"🎆","tier":6},
      'combo-0-21-6': {"id":"ancient-unity-thunder","name":"Ancient Unity Thunder","emoji":"🎇","tier":6},
      'combo-0-21-7': {"id":"ancient-unity-lightning","name":"Ancient Unity Lightning","emoji":"🌈","tier":6},
      'combo-0-21-8': {"id":"ancient-unity-shadow","name":"Ancient Unity Shadow","emoji":"🔥","tier":6},
      'combo-0-21-9': {"id":"ancient-unity-light","name":"Ancient Unity Light","emoji":"💧","tier":6},
      'combo-0-21-10': {"id":"ancient-unity-darkness","name":"Ancient Unity Darkness","emoji":"🌊","tier":6},
      'combo-0-21-11': {"id":"ancient-unity-radiance","name":"Ancient Unity Radiance","emoji":"⚡","tier":6},
      'combo-0-21-12': {"id":"ancient-unity-brilliance","name":"Ancient Unity Brilliance","emoji":"❄️","tier":6},
      'combo-0-21-13': {"id":"ancient-unity-glory","name":"Ancient Unity Glory","emoji":"🌪️","tier":6},
      'combo-0-21-14': {"id":"ancient-unity-majesty","name":"Ancient Unity Majesty","emoji":"☄️","tier":6},
      'combo-0-21-15': {"id":"ancient-unity-splendor","name":"Ancient Unity Splendor","emoji":"💎","tier":6},
      'combo-0-21-16': {"id":"ancient-unity-magnificence","name":"Ancient Unity Magnificence","emoji":"👑","tier":6},
      'combo-0-21-17': {"id":"ancient-unity-grandeur","name":"Ancient Unity Grandeur","emoji":"🗝️","tier":6},
      'combo-0-21-18': {"id":"ancient-unity-nobility","name":"Ancient Unity Nobility","emoji":"🔑","tier":6},
      'combo-0-21-19': {"id":"ancient-unity-royalty","name":"Ancient Unity Royalty","emoji":"🎭","tier":6},
      'combo-0-22-0': {"id":"ancient-duality-flame","name":"Ancient Duality Flame","emoji":"🎨","tier":6},
      'combo-0-22-1': {"id":"ancient-duality-frost","name":"Ancient Duality Frost","emoji":"🎪","tier":6},
      'combo-0-22-2': {"id":"ancient-duality-storm","name":"Ancient Duality Storm","emoji":"🎢","tier":6},
      'combo-0-22-3': {"id":"ancient-duality-quake","name":"Ancient Duality Quake","emoji":"🎡","tier":6},
      'combo-0-22-4': {"id":"ancient-duality-tide","name":"Ancient Duality Tide","emoji":"🎠","tier":6},
      'combo-0-22-5': {"id":"ancient-duality-wind","name":"Ancient Duality Wind","emoji":"🎪","tier":6},
      'combo-0-22-6': {"id":"ancient-duality-thunder","name":"Ancient Duality Thunder","emoji":"🎭","tier":6},
      'combo-0-22-7': {"id":"ancient-duality-lightning","name":"Ancient Duality Lightning","emoji":"🎬","tier":6},
      'combo-0-22-8': {"id":"ancient-duality-shadow","name":"Ancient Duality Shadow","emoji":"🎤","tier":6},
      'combo-0-22-9': {"id":"ancient-duality-light","name":"Ancient Duality Light","emoji":"🎧","tier":6},
      'combo-0-22-10': {"id":"ancient-duality-darkness","name":"Ancient Duality Darkness","emoji":"✨","tier":6},
      'combo-0-22-11': {"id":"ancient-duality-radiance","name":"Ancient Duality Radiance","emoji":"⭐","tier":6},
      'combo-0-22-12': {"id":"ancient-duality-brilliance","name":"Ancient Duality Brilliance","emoji":"🌟","tier":6},
      'combo-0-22-13': {"id":"ancient-duality-glory","name":"Ancient Duality Glory","emoji":"💫","tier":6},
      'combo-0-22-14': {"id":"ancient-duality-majesty","name":"Ancient Duality Majesty","emoji":"🔮","tier":6},
      'combo-0-22-15': {"id":"ancient-duality-splendor","name":"Ancient Duality Splendor","emoji":"🎆","tier":6},
      'combo-0-22-16': {"id":"ancient-duality-magnificence","name":"Ancient Duality Magnificence","emoji":"🎇","tier":6},
      'combo-0-22-17': {"id":"ancient-duality-grandeur","name":"Ancient Duality Grandeur","emoji":"🌈","tier":6},
      'combo-0-22-18': {"id":"ancient-duality-nobility","name":"Ancient Duality Nobility","emoji":"🔥","tier":6},
      'combo-0-22-19': {"id":"ancient-duality-royalty","name":"Ancient Duality Royalty","emoji":"💧","tier":6},
      'combo-0-23-0': {"id":"ancient-trinity-flame","name":"Ancient Trinity Flame","emoji":"🌊","tier":6},
      'combo-0-23-1': {"id":"ancient-trinity-frost","name":"Ancient Trinity Frost","emoji":"⚡","tier":6},
      'combo-0-23-2': {"id":"ancient-trinity-storm","name":"Ancient Trinity Storm","emoji":"❄️","tier":6},
      'combo-0-23-3': {"id":"ancient-trinity-quake","name":"Ancient Trinity Quake","emoji":"🌪️","tier":6},
      'combo-0-23-4': {"id":"ancient-trinity-tide","name":"Ancient Trinity Tide","emoji":"☄️","tier":6},
      'combo-0-23-5': {"id":"ancient-trinity-wind","name":"Ancient Trinity Wind","emoji":"💎","tier":6},
      'combo-0-23-6': {"id":"ancient-trinity-thunder","name":"Ancient Trinity Thunder","emoji":"👑","tier":6},
      'combo-0-23-7': {"id":"ancient-trinity-lightning","name":"Ancient Trinity Lightning","emoji":"🗝️","tier":6},
      'combo-0-23-8': {"id":"ancient-trinity-shadow","name":"Ancient Trinity Shadow","emoji":"🔑","tier":6},
      'combo-0-23-9': {"id":"ancient-trinity-light","name":"Ancient Trinity Light","emoji":"🎭","tier":6},
      'combo-0-23-10': {"id":"ancient-trinity-darkness","name":"Ancient Trinity Darkness","emoji":"🎨","tier":6},
      'combo-0-23-11': {"id":"ancient-trinity-radiance","name":"Ancient Trinity Radiance","emoji":"🎪","tier":6},
      'combo-0-23-12': {"id":"ancient-trinity-brilliance","name":"Ancient Trinity Brilliance","emoji":"🎢","tier":6},
      'combo-0-23-13': {"id":"ancient-trinity-glory","name":"Ancient Trinity Glory","emoji":"🎡","tier":6},
      'combo-0-23-14': {"id":"ancient-trinity-majesty","name":"Ancient Trinity Majesty","emoji":"🎠","tier":6},
      'combo-0-23-15': {"id":"ancient-trinity-splendor","name":"Ancient Trinity Splendor","emoji":"🎪","tier":6},
      'combo-0-23-16': {"id":"ancient-trinity-magnificence","name":"Ancient Trinity Magnificence","emoji":"🎭","tier":6},
      'combo-0-23-17': {"id":"ancient-trinity-grandeur","name":"Ancient Trinity Grandeur","emoji":"🎬","tier":6},
      'combo-0-23-18': {"id":"ancient-trinity-nobility","name":"Ancient Trinity Nobility","emoji":"🎤","tier":6},
      'combo-0-23-19': {"id":"ancient-trinity-royalty","name":"Ancient Trinity Royalty","emoji":"🎧","tier":6},
      'combo-0-24-0': {"id":"ancient-infinity-flame","name":"Ancient Infinity Flame","emoji":"✨","tier":6},
      'combo-0-24-1': {"id":"ancient-infinity-frost","name":"Ancient Infinity Frost","emoji":"⭐","tier":6},
      'combo-0-24-2': {"id":"ancient-infinity-storm","name":"Ancient Infinity Storm","emoji":"🌟","tier":6},
      'combo-0-24-3': {"id":"ancient-infinity-quake","name":"Ancient Infinity Quake","emoji":"💫","tier":6},
      'combo-0-24-4': {"id":"ancient-infinity-tide","name":"Ancient Infinity Tide","emoji":"🔮","tier":6},
      'combo-0-24-5': {"id":"ancient-infinity-wind","name":"Ancient Infinity Wind","emoji":"🎆","tier":6},
      'combo-0-24-6': {"id":"ancient-infinity-thunder","name":"Ancient Infinity Thunder","emoji":"🎇","tier":6},
      'combo-0-24-7': {"id":"ancient-infinity-lightning","name":"Ancient Infinity Lightning","emoji":"🌈","tier":6},
      'combo-0-24-8': {"id":"ancient-infinity-shadow","name":"Ancient Infinity Shadow","emoji":"🔥","tier":6},
      'combo-0-24-9': {"id":"ancient-infinity-light","name":"Ancient Infinity Light","emoji":"💧","tier":6},
      'combo-0-24-10': {"id":"ancient-infinity-darkness","name":"Ancient Infinity Darkness","emoji":"🌊","tier":6},
      'combo-0-24-11': {"id":"ancient-infinity-radiance","name":"Ancient Infinity Radiance","emoji":"⚡","tier":6},
      'combo-0-24-12': {"id":"ancient-infinity-brilliance","name":"Ancient Infinity Brilliance","emoji":"❄️","tier":6},
      'combo-0-24-13': {"id":"ancient-infinity-glory","name":"Ancient Infinity Glory","emoji":"🌪️","tier":6},
      'combo-0-24-14': {"id":"ancient-infinity-majesty","name":"Ancient Infinity Majesty","emoji":"☄️","tier":6},
      'combo-0-24-15': {"id":"ancient-infinity-splendor","name":"Ancient Infinity Splendor","emoji":"💎","tier":6},
      'combo-0-24-16': {"id":"ancient-infinity-magnificence","name":"Ancient Infinity Magnificence","emoji":"👑","tier":6},
      'combo-0-24-17': {"id":"ancient-infinity-grandeur","name":"Ancient Infinity Grandeur","emoji":"🗝️","tier":6},
      'combo-0-24-18': {"id":"ancient-infinity-nobility","name":"Ancient Infinity Nobility","emoji":"🔑","tier":6},
      'combo-0-24-19': {"id":"ancient-infinity-royalty","name":"Ancient Infinity Royalty","emoji":"🎭","tier":6},
      'combo-0-25-0': {"id":"ancient-eternity-flame","name":"Ancient Eternity Flame","emoji":"🎨","tier":6},
      'combo-0-25-1': {"id":"ancient-eternity-frost","name":"Ancient Eternity Frost","emoji":"🎪","tier":6},
      'combo-0-25-2': {"id":"ancient-eternity-storm","name":"Ancient Eternity Storm","emoji":"🎢","tier":6},
      'combo-0-25-3': {"id":"ancient-eternity-quake","name":"Ancient Eternity Quake","emoji":"🎡","tier":6},
      'combo-0-25-4': {"id":"ancient-eternity-tide","name":"Ancient Eternity Tide","emoji":"🎠","tier":6},
      'combo-0-25-5': {"id":"ancient-eternity-wind","name":"Ancient Eternity Wind","emoji":"🎪","tier":6},
      'combo-0-25-6': {"id":"ancient-eternity-thunder","name":"Ancient Eternity Thunder","emoji":"🎭","tier":6},
      'combo-0-25-7': {"id":"ancient-eternity-lightning","name":"Ancient Eternity Lightning","emoji":"🎬","tier":6},
      'combo-0-25-8': {"id":"ancient-eternity-shadow","name":"Ancient Eternity Shadow","emoji":"🎤","tier":6},
      'combo-0-25-9': {"id":"ancient-eternity-light","name":"Ancient Eternity Light","emoji":"🎧","tier":6},
      'combo-0-25-10': {"id":"ancient-eternity-darkness","name":"Ancient Eternity Darkness","emoji":"✨","tier":6},
      'combo-0-25-11': {"id":"ancient-eternity-radiance","name":"Ancient Eternity Radiance","emoji":"⭐","tier":6},
      'combo-0-25-12': {"id":"ancient-eternity-brilliance","name":"Ancient Eternity Brilliance","emoji":"🌟","tier":6},
      'combo-0-25-13': {"id":"ancient-eternity-glory","name":"Ancient Eternity Glory","emoji":"💫","tier":6},
      'combo-0-25-14': {"id":"ancient-eternity-majesty","name":"Ancient Eternity Majesty","emoji":"🔮","tier":6},
      'combo-0-25-15': {"id":"ancient-eternity-splendor","name":"Ancient Eternity Splendor","emoji":"🎆","tier":6},
      'combo-0-25-16': {"id":"ancient-eternity-magnificence","name":"Ancient Eternity Magnificence","emoji":"🎇","tier":6},
      'combo-0-25-17': {"id":"ancient-eternity-grandeur","name":"Ancient Eternity Grandeur","emoji":"🌈","tier":6},
      'combo-0-25-18': {"id":"ancient-eternity-nobility","name":"Ancient Eternity Nobility","emoji":"🔥","tier":6},
      'combo-0-25-19': {"id":"ancient-eternity-royalty","name":"Ancient Eternity Royalty","emoji":"💧","tier":6},
      'combo-0-26-0': {"id":"ancient-destiny-flame","name":"Ancient Destiny Flame","emoji":"🌊","tier":6},
      'combo-0-26-1': {"id":"ancient-destiny-frost","name":"Ancient Destiny Frost","emoji":"⚡","tier":6},
      'combo-0-26-2': {"id":"ancient-destiny-storm","name":"Ancient Destiny Storm","emoji":"❄️","tier":6},
      'combo-0-26-3': {"id":"ancient-destiny-quake","name":"Ancient Destiny Quake","emoji":"🌪️","tier":6},
      'combo-0-26-4': {"id":"ancient-destiny-tide","name":"Ancient Destiny Tide","emoji":"☄️","tier":6},
      'combo-0-26-5': {"id":"ancient-destiny-wind","name":"Ancient Destiny Wind","emoji":"💎","tier":6},
      'combo-0-26-6': {"id":"ancient-destiny-thunder","name":"Ancient Destiny Thunder","emoji":"👑","tier":6},
      'combo-0-26-7': {"id":"ancient-destiny-lightning","name":"Ancient Destiny Lightning","emoji":"🗝️","tier":6},
      'combo-0-26-8': {"id":"ancient-destiny-shadow","name":"Ancient Destiny Shadow","emoji":"🔑","tier":6},
      'combo-0-26-9': {"id":"ancient-destiny-light","name":"Ancient Destiny Light","emoji":"🎭","tier":6},
      'combo-0-26-10': {"id":"ancient-destiny-darkness","name":"Ancient Destiny Darkness","emoji":"🎨","tier":6},
      'combo-0-26-11': {"id":"ancient-destiny-radiance","name":"Ancient Destiny Radiance","emoji":"🎪","tier":6},
      'combo-0-26-12': {"id":"ancient-destiny-brilliance","name":"Ancient Destiny Brilliance","emoji":"🎢","tier":6},
      'combo-0-26-13': {"id":"ancient-destiny-glory","name":"Ancient Destiny Glory","emoji":"🎡","tier":6},
      'combo-0-26-14': {"id":"ancient-destiny-majesty","name":"Ancient Destiny Majesty","emoji":"🎠","tier":6},
      'combo-0-26-15': {"id":"ancient-destiny-splendor","name":"Ancient Destiny Splendor","emoji":"🎪","tier":6},
      'combo-0-26-16': {"id":"ancient-destiny-magnificence","name":"Ancient Destiny Magnificence","emoji":"🎭","tier":6},
      'combo-0-26-17': {"id":"ancient-destiny-grandeur","name":"Ancient Destiny Grandeur","emoji":"🎬","tier":6},
      'combo-0-26-18': {"id":"ancient-destiny-nobility","name":"Ancient Destiny Nobility","emoji":"🎤","tier":6},
      'combo-0-26-19': {"id":"ancient-destiny-royalty","name":"Ancient Destiny Royalty","emoji":"🎧","tier":6},
      'combo-0-27-0': {"id":"ancient-fate-flame","name":"Ancient Fate Flame","emoji":"✨","tier":6},
      'combo-0-27-1': {"id":"ancient-fate-frost","name":"Ancient Fate Frost","emoji":"⭐","tier":6},
      'combo-0-27-2': {"id":"ancient-fate-storm","name":"Ancient Fate Storm","emoji":"🌟","tier":6},
      'combo-0-27-3': {"id":"ancient-fate-quake","name":"Ancient Fate Quake","emoji":"💫","tier":6},
      'combo-0-27-4': {"id":"ancient-fate-tide","name":"Ancient Fate Tide","emoji":"🔮","tier":6},
      'combo-0-27-5': {"id":"ancient-fate-wind","name":"Ancient Fate Wind","emoji":"🎆","tier":6},
      'combo-0-27-6': {"id":"ancient-fate-thunder","name":"Ancient Fate Thunder","emoji":"🎇","tier":6},
      'combo-0-27-7': {"id":"ancient-fate-lightning","name":"Ancient Fate Lightning","emoji":"🌈","tier":6},
      'combo-0-27-8': {"id":"ancient-fate-shadow","name":"Ancient Fate Shadow","emoji":"🔥","tier":6},
      'combo-0-27-9': {"id":"ancient-fate-light","name":"Ancient Fate Light","emoji":"💧","tier":6},
      'combo-0-27-10': {"id":"ancient-fate-darkness","name":"Ancient Fate Darkness","emoji":"🌊","tier":6},
      'combo-0-27-11': {"id":"ancient-fate-radiance","name":"Ancient Fate Radiance","emoji":"⚡","tier":6},
      'combo-0-27-12': {"id":"ancient-fate-brilliance","name":"Ancient Fate Brilliance","emoji":"❄️","tier":6},
      'combo-0-27-13': {"id":"ancient-fate-glory","name":"Ancient Fate Glory","emoji":"🌪️","tier":6},
      'combo-0-27-14': {"id":"ancient-fate-majesty","name":"Ancient Fate Majesty","emoji":"☄️","tier":6},
      'combo-0-27-15': {"id":"ancient-fate-splendor","name":"Ancient Fate Splendor","emoji":"💎","tier":6},
      'combo-0-27-16': {"id":"ancient-fate-magnificence","name":"Ancient Fate Magnificence","emoji":"👑","tier":6},
      'combo-0-27-17': {"id":"ancient-fate-grandeur","name":"Ancient Fate Grandeur","emoji":"🗝️","tier":6},
      'combo-0-27-18': {"id":"ancient-fate-nobility","name":"Ancient Fate Nobility","emoji":"🔑","tier":6},
      'combo-0-27-19': {"id":"ancient-fate-royalty","name":"Ancient Fate Royalty","emoji":"🎭","tier":6},
      'combo-0-28-0': {"id":"ancient-fortune-flame","name":"Ancient Fortune Flame","emoji":"🎨","tier":6},
      'combo-0-28-1': {"id":"ancient-fortune-frost","name":"Ancient Fortune Frost","emoji":"🎪","tier":6},
      'combo-0-28-2': {"id":"ancient-fortune-storm","name":"Ancient Fortune Storm","emoji":"🎢","tier":6},
      'combo-0-28-3': {"id":"ancient-fortune-quake","name":"Ancient Fortune Quake","emoji":"🎡","tier":6},
      'combo-0-28-4': {"id":"ancient-fortune-tide","name":"Ancient Fortune Tide","emoji":"🎠","tier":6},
      'combo-0-28-5': {"id":"ancient-fortune-wind","name":"Ancient Fortune Wind","emoji":"🎪","tier":6},
      'combo-0-28-6': {"id":"ancient-fortune-thunder","name":"Ancient Fortune Thunder","emoji":"🎭","tier":6},
      'combo-0-28-7': {"id":"ancient-fortune-lightning","name":"Ancient Fortune Lightning","emoji":"🎬","tier":6},
      'combo-0-28-8': {"id":"ancient-fortune-shadow","name":"Ancient Fortune Shadow","emoji":"🎤","tier":6},
      'combo-0-28-9': {"id":"ancient-fortune-light","name":"Ancient Fortune Light","emoji":"🎧","tier":6},
      'combo-0-28-10': {"id":"ancient-fortune-darkness","name":"Ancient Fortune Darkness","emoji":"✨","tier":6},
      'combo-0-28-11': {"id":"ancient-fortune-radiance","name":"Ancient Fortune Radiance","emoji":"⭐","tier":6},
      'combo-0-28-12': {"id":"ancient-fortune-brilliance","name":"Ancient Fortune Brilliance","emoji":"🌟","tier":6},
      'combo-0-28-13': {"id":"ancient-fortune-glory","name":"Ancient Fortune Glory","emoji":"💫","tier":6},
      'combo-0-28-14': {"id":"ancient-fortune-majesty","name":"Ancient Fortune Majesty","emoji":"🔮","tier":6},
      'combo-0-28-15': {"id":"ancient-fortune-splendor","name":"Ancient Fortune Splendor","emoji":"🎆","tier":6},
      'combo-0-28-16': {"id":"ancient-fortune-magnificence","name":"Ancient Fortune Magnificence","emoji":"🎇","tier":6},
      'combo-0-28-17': {"id":"ancient-fortune-grandeur","name":"Ancient Fortune Grandeur","emoji":"🌈","tier":6},
      'combo-0-28-18': {"id":"ancient-fortune-nobility","name":"Ancient Fortune Nobility","emoji":"🔥","tier":6},
      'combo-0-28-19': {"id":"ancient-fortune-royalty","name":"Ancient Fortune Royalty","emoji":"💧","tier":6},
      'combo-0-29-0': {"id":"ancient-luck-flame","name":"Ancient Luck Flame","emoji":"🌊","tier":6},
      'combo-0-29-1': {"id":"ancient-luck-frost","name":"Ancient Luck Frost","emoji":"⚡","tier":6},
      'combo-0-29-2': {"id":"ancient-luck-storm","name":"Ancient Luck Storm","emoji":"❄️","tier":6},
      'combo-0-29-3': {"id":"ancient-luck-quake","name":"Ancient Luck Quake","emoji":"🌪️","tier":6},
      'combo-0-29-4': {"id":"ancient-luck-tide","name":"Ancient Luck Tide","emoji":"☄️","tier":6},
      'combo-0-29-5': {"id":"ancient-luck-wind","name":"Ancient Luck Wind","emoji":"💎","tier":6},
      'combo-0-29-6': {"id":"ancient-luck-thunder","name":"Ancient Luck Thunder","emoji":"👑","tier":6},
      'combo-0-29-7': {"id":"ancient-luck-lightning","name":"Ancient Luck Lightning","emoji":"🗝️","tier":6},
      'combo-0-29-8': {"id":"ancient-luck-shadow","name":"Ancient Luck Shadow","emoji":"🔑","tier":6},
      'combo-0-29-9': {"id":"ancient-luck-light","name":"Ancient Luck Light","emoji":"🎭","tier":6},
      'combo-0-29-10': {"id":"ancient-luck-darkness","name":"Ancient Luck Darkness","emoji":"🎨","tier":6},
      'combo-0-29-11': {"id":"ancient-luck-radiance","name":"Ancient Luck Radiance","emoji":"🎪","tier":6},
      'combo-0-29-12': {"id":"ancient-luck-brilliance","name":"Ancient Luck Brilliance","emoji":"🎢","tier":6},
      'combo-0-29-13': {"id":"ancient-luck-glory","name":"Ancient Luck Glory","emoji":"🎡","tier":6},
      'combo-0-29-14': {"id":"ancient-luck-majesty","name":"Ancient Luck Majesty","emoji":"🎠","tier":6},
      'combo-0-29-15': {"id":"ancient-luck-splendor","name":"Ancient Luck Splendor","emoji":"🎪","tier":6},
      'combo-0-29-16': {"id":"ancient-luck-magnificence","name":"Ancient Luck Magnificence","emoji":"🎭","tier":6},
      'combo-0-29-17': {"id":"ancient-luck-grandeur","name":"Ancient Luck Grandeur","emoji":"🎬","tier":6},
      'combo-0-29-18': {"id":"ancient-luck-nobility","name":"Ancient Luck Nobility","emoji":"🎤","tier":6},
      'combo-0-29-19': {"id":"ancient-luck-royalty","name":"Ancient Luck Royalty","emoji":"🎧","tier":6},
      'combo-1-0-0': {"id":"mystic-crystal-flame","name":"Mystic Crystal Flame","emoji":"✨","tier":7},
      'combo-1-0-1': {"id":"mystic-crystal-frost","name":"Mystic Crystal Frost","emoji":"⭐","tier":7},
      'combo-1-0-2': {"id":"mystic-crystal-storm","name":"Mystic Crystal Storm","emoji":"🌟","tier":7},
      'combo-1-0-3': {"id":"mystic-crystal-quake","name":"Mystic Crystal Quake","emoji":"💫","tier":7},
      'combo-1-0-4': {"id":"mystic-crystal-tide","name":"Mystic Crystal Tide","emoji":"🔮","tier":7},
      'combo-1-0-5': {"id":"mystic-crystal-wind","name":"Mystic Crystal Wind","emoji":"🎆","tier":7},
      'combo-1-0-6': {"id":"mystic-crystal-thunder","name":"Mystic Crystal Thunder","emoji":"🎇","tier":7},
      'combo-1-0-7': {"id":"mystic-crystal-lightning","name":"Mystic Crystal Lightning","emoji":"🌈","tier":7},
      'combo-1-0-8': {"id":"mystic-crystal-shadow","name":"Mystic Crystal Shadow","emoji":"🔥","tier":7},
      'combo-1-0-9': {"id":"mystic-crystal-light","name":"Mystic Crystal Light","emoji":"💧","tier":7},
      'combo-1-0-10': {"id":"mystic-crystal-darkness","name":"Mystic Crystal Darkness","emoji":"🌊","tier":7},
      'combo-1-0-11': {"id":"mystic-crystal-radiance","name":"Mystic Crystal Radiance","emoji":"⚡","tier":7},
      'combo-1-0-12': {"id":"mystic-crystal-brilliance","name":"Mystic Crystal Brilliance","emoji":"❄️","tier":7},
      'combo-1-0-13': {"id":"mystic-crystal-glory","name":"Mystic Crystal Glory","emoji":"🌪️","tier":7},
      'combo-1-0-14': {"id":"mystic-crystal-majesty","name":"Mystic Crystal Majesty","emoji":"☄️","tier":7},
      'combo-1-0-15': {"id":"mystic-crystal-splendor","name":"Mystic Crystal Splendor","emoji":"💎","tier":7},
      'combo-1-0-16': {"id":"mystic-crystal-magnificence","name":"Mystic Crystal Magnificence","emoji":"👑","tier":7},
      'combo-1-0-17': {"id":"mystic-crystal-grandeur","name":"Mystic Crystal Grandeur","emoji":"🗝️","tier":7},
      'combo-1-0-18': {"id":"mystic-crystal-nobility","name":"Mystic Crystal Nobility","emoji":"🔑","tier":7},
      'combo-1-0-19': {"id":"mystic-crystal-royalty","name":"Mystic Crystal Royalty","emoji":"🎭","tier":7},
      'combo-1-1-0': {"id":"mystic-essence-flame","name":"Mystic Essence Flame","emoji":"🎨","tier":7},
      'combo-1-1-1': {"id":"mystic-essence-frost","name":"Mystic Essence Frost","emoji":"🎪","tier":7},
      'combo-1-1-2': {"id":"mystic-essence-storm","name":"Mystic Essence Storm","emoji":"🎢","tier":7},
      'combo-1-1-3': {"id":"mystic-essence-quake","name":"Mystic Essence Quake","emoji":"🎡","tier":7},
      'combo-1-1-4': {"id":"mystic-essence-tide","name":"Mystic Essence Tide","emoji":"🎠","tier":7},
      'combo-1-1-5': {"id":"mystic-essence-wind","name":"Mystic Essence Wind","emoji":"🎪","tier":7},
      'combo-1-1-6': {"id":"mystic-essence-thunder","name":"Mystic Essence Thunder","emoji":"🎭","tier":7},
      'combo-1-1-7': {"id":"mystic-essence-lightning","name":"Mystic Essence Lightning","emoji":"🎬","tier":7},
      'combo-1-1-8': {"id":"mystic-essence-shadow","name":"Mystic Essence Shadow","emoji":"🎤","tier":7},
      'combo-1-1-9': {"id":"mystic-essence-light","name":"Mystic Essence Light","emoji":"🎧","tier":7},
      'combo-1-1-10': {"id":"mystic-essence-darkness","name":"Mystic Essence Darkness","emoji":"✨","tier":7},
      'combo-1-1-11': {"id":"mystic-essence-radiance","name":"Mystic Essence Radiance","emoji":"⭐","tier":7},
      'combo-1-1-12': {"id":"mystic-essence-brilliance","name":"Mystic Essence Brilliance","emoji":"🌟","tier":7},
      'combo-1-1-13': {"id":"mystic-essence-glory","name":"Mystic Essence Glory","emoji":"💫","tier":7},
      'combo-1-1-14': {"id":"mystic-essence-majesty","name":"Mystic Essence Majesty","emoji":"🔮","tier":7},
      'combo-1-1-15': {"id":"mystic-essence-splendor","name":"Mystic Essence Splendor","emoji":"🎆","tier":7},
      'combo-1-1-16': {"id":"mystic-essence-magnificence","name":"Mystic Essence Magnificence","emoji":"🎇","tier":7},
      'combo-1-1-17': {"id":"mystic-essence-grandeur","name":"Mystic Essence Grandeur","emoji":"🌈","tier":7},
      'combo-1-1-18': {"id":"mystic-essence-nobility","name":"Mystic Essence Nobility","emoji":"🔥","tier":7},
      'combo-1-1-19': {"id":"mystic-essence-royalty","name":"Mystic Essence Royalty","emoji":"💧","tier":7},
      'combo-1-2-0': {"id":"mystic-spirit-flame","name":"Mystic Spirit Flame","emoji":"🌊","tier":7},
      'combo-1-2-1': {"id":"mystic-spirit-frost","name":"Mystic Spirit Frost","emoji":"⚡","tier":7},
      'combo-1-2-2': {"id":"mystic-spirit-storm","name":"Mystic Spirit Storm","emoji":"❄️","tier":7},
      'combo-1-2-3': {"id":"mystic-spirit-quake","name":"Mystic Spirit Quake","emoji":"🌪️","tier":7},
      'combo-1-2-4': {"id":"mystic-spirit-tide","name":"Mystic Spirit Tide","emoji":"☄️","tier":7},
      'combo-1-2-5': {"id":"mystic-spirit-wind","name":"Mystic Spirit Wind","emoji":"💎","tier":7},
      'combo-1-2-6': {"id":"mystic-spirit-thunder","name":"Mystic Spirit Thunder","emoji":"👑","tier":7},
      'combo-1-2-7': {"id":"mystic-spirit-lightning","name":"Mystic Spirit Lightning","emoji":"🗝️","tier":7},
      'combo-1-2-8': {"id":"mystic-spirit-shadow","name":"Mystic Spirit Shadow","emoji":"🔑","tier":7},
      'combo-1-2-9': {"id":"mystic-spirit-light","name":"Mystic Spirit Light","emoji":"🎭","tier":7},
      'combo-1-2-10': {"id":"mystic-spirit-darkness","name":"Mystic Spirit Darkness","emoji":"🎨","tier":7},
      'combo-1-2-11': {"id":"mystic-spirit-radiance","name":"Mystic Spirit Radiance","emoji":"🎪","tier":7},
      'combo-1-2-12': {"id":"mystic-spirit-brilliance","name":"Mystic Spirit Brilliance","emoji":"🎢","tier":7},
      'combo-1-2-13': {"id":"mystic-spirit-glory","name":"Mystic Spirit Glory","emoji":"🎡","tier":7},
      'combo-1-2-14': {"id":"mystic-spirit-majesty","name":"Mystic Spirit Majesty","emoji":"🎠","tier":7},
      'combo-1-2-15': {"id":"mystic-spirit-splendor","name":"Mystic Spirit Splendor","emoji":"🎪","tier":7},
      'combo-1-2-16': {"id":"mystic-spirit-magnificence","name":"Mystic Spirit Magnificence","emoji":"🎭","tier":7},
      'combo-1-2-17': {"id":"mystic-spirit-grandeur","name":"Mystic Spirit Grandeur","emoji":"🎬","tier":7},
      'combo-1-2-18': {"id":"mystic-spirit-nobility","name":"Mystic Spirit Nobility","emoji":"🎤","tier":7},
      'combo-1-2-19': {"id":"mystic-spirit-royalty","name":"Mystic Spirit Royalty","emoji":"🎧","tier":7},
      'combo-1-3-0': {"id":"mystic-force-flame","name":"Mystic Force Flame","emoji":"✨","tier":7},
      'combo-1-3-1': {"id":"mystic-force-frost","name":"Mystic Force Frost","emoji":"⭐","tier":7},
      'combo-1-3-2': {"id":"mystic-force-storm","name":"Mystic Force Storm","emoji":"🌟","tier":7},
      'combo-1-3-3': {"id":"mystic-force-quake","name":"Mystic Force Quake","emoji":"💫","tier":7},
      'combo-1-3-4': {"id":"mystic-force-tide","name":"Mystic Force Tide","emoji":"🔮","tier":7},
      'combo-1-3-5': {"id":"mystic-force-wind","name":"Mystic Force Wind","emoji":"🎆","tier":7},
      'combo-1-3-6': {"id":"mystic-force-thunder","name":"Mystic Force Thunder","emoji":"🎇","tier":7},
      'combo-1-3-7': {"id":"mystic-force-lightning","name":"Mystic Force Lightning","emoji":"🌈","tier":7},
      'combo-1-3-8': {"id":"mystic-force-shadow","name":"Mystic Force Shadow","emoji":"🔥","tier":7},
      'combo-1-3-9': {"id":"mystic-force-light","name":"Mystic Force Light","emoji":"💧","tier":7},
      'combo-1-3-10': {"id":"mystic-force-darkness","name":"Mystic Force Darkness","emoji":"🌊","tier":7},
      'combo-1-3-11': {"id":"mystic-force-radiance","name":"Mystic Force Radiance","emoji":"⚡","tier":7},
      'combo-1-3-12': {"id":"mystic-force-brilliance","name":"Mystic Force Brilliance","emoji":"❄️","tier":7},
      'combo-1-3-13': {"id":"mystic-force-glory","name":"Mystic Force Glory","emoji":"🌪️","tier":7},
      'combo-1-3-14': {"id":"mystic-force-majesty","name":"Mystic Force Majesty","emoji":"☄️","tier":7},
      'combo-1-3-15': {"id":"mystic-force-splendor","name":"Mystic Force Splendor","emoji":"💎","tier":7},
      'combo-1-3-16': {"id":"mystic-force-magnificence","name":"Mystic Force Magnificence","emoji":"👑","tier":7},
      'combo-1-3-17': {"id":"mystic-force-grandeur","name":"Mystic Force Grandeur","emoji":"🗝️","tier":7},
      'combo-1-3-18': {"id":"mystic-force-nobility","name":"Mystic Force Nobility","emoji":"🔑","tier":7},
      'combo-1-3-19': {"id":"mystic-force-royalty","name":"Mystic Force Royalty","emoji":"🎭","tier":7},
      'combo-1-4-0': {"id":"mystic-energy-flame","name":"Mystic Energy Flame","emoji":"🎨","tier":7},
      'combo-1-4-1': {"id":"mystic-energy-frost","name":"Mystic Energy Frost","emoji":"🎪","tier":7},
      'combo-1-4-2': {"id":"mystic-energy-storm","name":"Mystic Energy Storm","emoji":"🎢","tier":7},
      'combo-1-4-3': {"id":"mystic-energy-quake","name":"Mystic Energy Quake","emoji":"🎡","tier":7},
      'combo-1-4-4': {"id":"mystic-energy-tide","name":"Mystic Energy Tide","emoji":"🎠","tier":7},
      'combo-1-4-5': {"id":"mystic-energy-wind","name":"Mystic Energy Wind","emoji":"🎪","tier":7},
      'combo-1-4-6': {"id":"mystic-energy-thunder","name":"Mystic Energy Thunder","emoji":"🎭","tier":7},
      'combo-1-4-7': {"id":"mystic-energy-lightning","name":"Mystic Energy Lightning","emoji":"🎬","tier":7},
      'combo-1-4-8': {"id":"mystic-energy-shadow","name":"Mystic Energy Shadow","emoji":"🎤","tier":7},
      'combo-1-4-9': {"id":"mystic-energy-light","name":"Mystic Energy Light","emoji":"🎧","tier":7},
      'combo-1-4-10': {"id":"mystic-energy-darkness","name":"Mystic Energy Darkness","emoji":"✨","tier":7},
      'combo-1-4-11': {"id":"mystic-energy-radiance","name":"Mystic Energy Radiance","emoji":"⭐","tier":7},
      'combo-1-4-12': {"id":"mystic-energy-brilliance","name":"Mystic Energy Brilliance","emoji":"🌟","tier":7},
      'combo-1-4-13': {"id":"mystic-energy-glory","name":"Mystic Energy Glory","emoji":"💫","tier":7},
      'combo-1-4-14': {"id":"mystic-energy-majesty","name":"Mystic Energy Majesty","emoji":"🔮","tier":7},
      'combo-1-4-15': {"id":"mystic-energy-splendor","name":"Mystic Energy Splendor","emoji":"🎆","tier":7},
      'combo-1-4-16': {"id":"mystic-energy-magnificence","name":"Mystic Energy Magnificence","emoji":"🎇","tier":7},
      'combo-1-4-17': {"id":"mystic-energy-grandeur","name":"Mystic Energy Grandeur","emoji":"🌈","tier":7},
      'combo-1-4-18': {"id":"mystic-energy-nobility","name":"Mystic Energy Nobility","emoji":"🔥","tier":7},
      'combo-1-4-19': {"id":"mystic-energy-royalty","name":"Mystic Energy Royalty","emoji":"💧","tier":7},
      'combo-1-5-0': {"id":"mystic-power-flame","name":"Mystic Power Flame","emoji":"🌊","tier":7},
      'combo-1-5-1': {"id":"mystic-power-frost","name":"Mystic Power Frost","emoji":"⚡","tier":7},
      'combo-1-5-2': {"id":"mystic-power-storm","name":"Mystic Power Storm","emoji":"❄️","tier":7},
      'combo-1-5-3': {"id":"mystic-power-quake","name":"Mystic Power Quake","emoji":"🌪️","tier":7},
      'combo-1-5-4': {"id":"mystic-power-tide","name":"Mystic Power Tide","emoji":"☄️","tier":7},
      'combo-1-5-5': {"id":"mystic-power-wind","name":"Mystic Power Wind","emoji":"💎","tier":7},
      'combo-1-5-6': {"id":"mystic-power-thunder","name":"Mystic Power Thunder","emoji":"👑","tier":7},
      'combo-1-5-7': {"id":"mystic-power-lightning","name":"Mystic Power Lightning","emoji":"🗝️","tier":7},
      'combo-1-5-8': {"id":"mystic-power-shadow","name":"Mystic Power Shadow","emoji":"🔑","tier":7},
      'combo-1-5-9': {"id":"mystic-power-light","name":"Mystic Power Light","emoji":"🎭","tier":7},
      'combo-1-5-10': {"id":"mystic-power-darkness","name":"Mystic Power Darkness","emoji":"🎨","tier":7},
      'combo-1-5-11': {"id":"mystic-power-radiance","name":"Mystic Power Radiance","emoji":"🎪","tier":7},
      'combo-1-5-12': {"id":"mystic-power-brilliance","name":"Mystic Power Brilliance","emoji":"🎢","tier":7},
      'combo-1-5-13': {"id":"mystic-power-glory","name":"Mystic Power Glory","emoji":"🎡","tier":7},
      'combo-1-5-14': {"id":"mystic-power-majesty","name":"Mystic Power Majesty","emoji":"🎠","tier":7},
      'combo-1-5-15': {"id":"mystic-power-splendor","name":"Mystic Power Splendor","emoji":"🎪","tier":7},
      'combo-1-5-16': {"id":"mystic-power-magnificence","name":"Mystic Power Magnificence","emoji":"🎭","tier":7},
      'combo-1-5-17': {"id":"mystic-power-grandeur","name":"Mystic Power Grandeur","emoji":"🎬","tier":7},
      'combo-1-5-18': {"id":"mystic-power-nobility","name":"Mystic Power Nobility","emoji":"🎤","tier":7},
      'combo-1-5-19': {"id":"mystic-power-royalty","name":"Mystic Power Royalty","emoji":"🎧","tier":7},
      'combo-1-6-0': {"id":"mystic-aura-flame","name":"Mystic Aura Flame","emoji":"✨","tier":7},
      'combo-1-6-1': {"id":"mystic-aura-frost","name":"Mystic Aura Frost","emoji":"⭐","tier":7},
      'combo-1-6-2': {"id":"mystic-aura-storm","name":"Mystic Aura Storm","emoji":"🌟","tier":7},
      'combo-1-6-3': {"id":"mystic-aura-quake","name":"Mystic Aura Quake","emoji":"💫","tier":7},
      'combo-1-6-4': {"id":"mystic-aura-tide","name":"Mystic Aura Tide","emoji":"🔮","tier":7},
      'combo-1-6-5': {"id":"mystic-aura-wind","name":"Mystic Aura Wind","emoji":"🎆","tier":7},
      'combo-1-6-6': {"id":"mystic-aura-thunder","name":"Mystic Aura Thunder","emoji":"🎇","tier":7},
      'combo-1-6-7': {"id":"mystic-aura-lightning","name":"Mystic Aura Lightning","emoji":"🌈","tier":7},
      'combo-1-6-8': {"id":"mystic-aura-shadow","name":"Mystic Aura Shadow","emoji":"🔥","tier":7},
      'combo-1-6-9': {"id":"mystic-aura-light","name":"Mystic Aura Light","emoji":"💧","tier":7},
      'combo-1-6-10': {"id":"mystic-aura-darkness","name":"Mystic Aura Darkness","emoji":"🌊","tier":7},
      'combo-1-6-11': {"id":"mystic-aura-radiance","name":"Mystic Aura Radiance","emoji":"⚡","tier":7},
      'combo-1-6-12': {"id":"mystic-aura-brilliance","name":"Mystic Aura Brilliance","emoji":"❄️","tier":7},
      'combo-1-6-13': {"id":"mystic-aura-glory","name":"Mystic Aura Glory","emoji":"🌪️","tier":7},
      'combo-1-6-14': {"id":"mystic-aura-majesty","name":"Mystic Aura Majesty","emoji":"☄️","tier":7},
      'combo-1-6-15': {"id":"mystic-aura-splendor","name":"Mystic Aura Splendor","emoji":"💎","tier":7},
      'combo-1-6-16': {"id":"mystic-aura-magnificence","name":"Mystic Aura Magnificence","emoji":"👑","tier":7},
      'combo-1-6-17': {"id":"mystic-aura-grandeur","name":"Mystic Aura Grandeur","emoji":"🗝️","tier":7},
      'combo-1-6-18': {"id":"mystic-aura-nobility","name":"Mystic Aura Nobility","emoji":"🔑","tier":7},
      'combo-1-6-19': {"id":"mystic-aura-royalty","name":"Mystic Aura Royalty","emoji":"🎭","tier":7},
      'combo-1-7-0': {"id":"mystic-soul-flame","name":"Mystic Soul Flame","emoji":"🎨","tier":7},
      'combo-1-7-1': {"id":"mystic-soul-frost","name":"Mystic Soul Frost","emoji":"🎪","tier":7},
      'combo-1-7-2': {"id":"mystic-soul-storm","name":"Mystic Soul Storm","emoji":"🎢","tier":7},
      'combo-1-7-3': {"id":"mystic-soul-quake","name":"Mystic Soul Quake","emoji":"🎡","tier":7},
      'combo-1-7-4': {"id":"mystic-soul-tide","name":"Mystic Soul Tide","emoji":"🎠","tier":7},
      'combo-1-7-5': {"id":"mystic-soul-wind","name":"Mystic Soul Wind","emoji":"🎪","tier":7},
      'combo-1-7-6': {"id":"mystic-soul-thunder","name":"Mystic Soul Thunder","emoji":"🎭","tier":7},
      'combo-1-7-7': {"id":"mystic-soul-lightning","name":"Mystic Soul Lightning","emoji":"🎬","tier":7},
      'combo-1-7-8': {"id":"mystic-soul-shadow","name":"Mystic Soul Shadow","emoji":"🎤","tier":7},
      'combo-1-7-9': {"id":"mystic-soul-light","name":"Mystic Soul Light","emoji":"🎧","tier":7},
      'combo-1-7-10': {"id":"mystic-soul-darkness","name":"Mystic Soul Darkness","emoji":"✨","tier":7},
      'combo-1-7-11': {"id":"mystic-soul-radiance","name":"Mystic Soul Radiance","emoji":"⭐","tier":7},
      'combo-1-7-12': {"id":"mystic-soul-brilliance","name":"Mystic Soul Brilliance","emoji":"🌟","tier":7},
      'combo-1-7-13': {"id":"mystic-soul-glory","name":"Mystic Soul Glory","emoji":"💫","tier":7},
      'combo-1-7-14': {"id":"mystic-soul-majesty","name":"Mystic Soul Majesty","emoji":"🔮","tier":7},
      'combo-1-7-15': {"id":"mystic-soul-splendor","name":"Mystic Soul Splendor","emoji":"🎆","tier":7},
      'combo-1-7-16': {"id":"mystic-soul-magnificence","name":"Mystic Soul Magnificence","emoji":"🎇","tier":7},
      'combo-1-7-17': {"id":"mystic-soul-grandeur","name":"Mystic Soul Grandeur","emoji":"🌈","tier":7},
      'combo-1-7-18': {"id":"mystic-soul-nobility","name":"Mystic Soul Nobility","emoji":"🔥","tier":7},
      'combo-1-7-19': {"id":"mystic-soul-royalty","name":"Mystic Soul Royalty","emoji":"💧","tier":7},
      'combo-1-8-0': {"id":"mystic-heart-flame","name":"Mystic Heart Flame","emoji":"🌊","tier":7},
      'combo-1-8-1': {"id":"mystic-heart-frost","name":"Mystic Heart Frost","emoji":"⚡","tier":7},
      'combo-1-8-2': {"id":"mystic-heart-storm","name":"Mystic Heart Storm","emoji":"❄️","tier":7},
      'combo-1-8-3': {"id":"mystic-heart-quake","name":"Mystic Heart Quake","emoji":"🌪️","tier":7},
      'combo-1-8-4': {"id":"mystic-heart-tide","name":"Mystic Heart Tide","emoji":"☄️","tier":7},
      'combo-1-8-5': {"id":"mystic-heart-wind","name":"Mystic Heart Wind","emoji":"💎","tier":7},
      'combo-1-8-6': {"id":"mystic-heart-thunder","name":"Mystic Heart Thunder","emoji":"👑","tier":7},
      'combo-1-8-7': {"id":"mystic-heart-lightning","name":"Mystic Heart Lightning","emoji":"🗝️","tier":7},
      'combo-1-8-8': {"id":"mystic-heart-shadow","name":"Mystic Heart Shadow","emoji":"🔑","tier":7},
      'combo-1-8-9': {"id":"mystic-heart-light","name":"Mystic Heart Light","emoji":"🎭","tier":7},
      'combo-1-8-10': {"id":"mystic-heart-darkness","name":"Mystic Heart Darkness","emoji":"🎨","tier":7},
      'combo-1-8-11': {"id":"mystic-heart-radiance","name":"Mystic Heart Radiance","emoji":"🎪","tier":7},
      'combo-1-8-12': {"id":"mystic-heart-brilliance","name":"Mystic Heart Brilliance","emoji":"🎢","tier":7},
      'combo-1-8-13': {"id":"mystic-heart-glory","name":"Mystic Heart Glory","emoji":"🎡","tier":7},
      'combo-1-8-14': {"id":"mystic-heart-majesty","name":"Mystic Heart Majesty","emoji":"🎠","tier":7},
      'combo-1-8-15': {"id":"mystic-heart-splendor","name":"Mystic Heart Splendor","emoji":"🎪","tier":7},
      'combo-1-8-16': {"id":"mystic-heart-magnificence","name":"Mystic Heart Magnificence","emoji":"🎭","tier":7},
      'combo-1-8-17': {"id":"mystic-heart-grandeur","name":"Mystic Heart Grandeur","emoji":"🎬","tier":7},
      'combo-1-8-18': {"id":"mystic-heart-nobility","name":"Mystic Heart Nobility","emoji":"🎤","tier":7},
      'combo-1-8-19': {"id":"mystic-heart-royalty","name":"Mystic Heart Royalty","emoji":"🎧","tier":7},
      'combo-1-9-0': {"id":"mystic-core-flame","name":"Mystic Core Flame","emoji":"✨","tier":7},
      'combo-1-9-1': {"id":"mystic-core-frost","name":"Mystic Core Frost","emoji":"⭐","tier":7},
      'combo-1-9-2': {"id":"mystic-core-storm","name":"Mystic Core Storm","emoji":"🌟","tier":7},
      'combo-1-9-3': {"id":"mystic-core-quake","name":"Mystic Core Quake","emoji":"💫","tier":7},
      'combo-1-9-4': {"id":"mystic-core-tide","name":"Mystic Core Tide","emoji":"🔮","tier":7},
      'combo-1-9-5': {"id":"mystic-core-wind","name":"Mystic Core Wind","emoji":"🎆","tier":7},
      'combo-1-9-6': {"id":"mystic-core-thunder","name":"Mystic Core Thunder","emoji":"🎇","tier":7},
      'combo-1-9-7': {"id":"mystic-core-lightning","name":"Mystic Core Lightning","emoji":"🌈","tier":7},
      'combo-1-9-8': {"id":"mystic-core-shadow","name":"Mystic Core Shadow","emoji":"🔥","tier":7},
      'combo-1-9-9': {"id":"mystic-core-light","name":"Mystic Core Light","emoji":"💧","tier":7},
      'combo-1-9-10': {"id":"mystic-core-darkness","name":"Mystic Core Darkness","emoji":"🌊","tier":7},
      'combo-1-9-11': {"id":"mystic-core-radiance","name":"Mystic Core Radiance","emoji":"⚡","tier":7},
      'combo-1-9-12': {"id":"mystic-core-brilliance","name":"Mystic Core Brilliance","emoji":"❄️","tier":7},
      'combo-1-9-13': {"id":"mystic-core-glory","name":"Mystic Core Glory","emoji":"🌪️","tier":7},
      'combo-1-9-14': {"id":"mystic-core-majesty","name":"Mystic Core Majesty","emoji":"☄️","tier":7},
      'combo-1-9-15': {"id":"mystic-core-splendor","name":"Mystic Core Splendor","emoji":"💎","tier":7},
      'combo-1-9-16': {"id":"mystic-core-magnificence","name":"Mystic Core Magnificence","emoji":"👑","tier":7},
      'combo-1-9-17': {"id":"mystic-core-grandeur","name":"Mystic Core Grandeur","emoji":"🗝️","tier":7},
      'combo-1-9-18': {"id":"mystic-core-nobility","name":"Mystic Core Nobility","emoji":"🔑","tier":7},
      'combo-1-9-19': {"id":"mystic-core-royalty","name":"Mystic Core Royalty","emoji":"🎭","tier":7},
      'combo-1-10-0': {"id":"mystic-nexus-flame","name":"Mystic Nexus Flame","emoji":"🎨","tier":8},
      'combo-1-10-1': {"id":"mystic-nexus-frost","name":"Mystic Nexus Frost","emoji":"🎪","tier":8},
      'combo-1-10-2': {"id":"mystic-nexus-storm","name":"Mystic Nexus Storm","emoji":"🎢","tier":8},
      'combo-1-10-3': {"id":"mystic-nexus-quake","name":"Mystic Nexus Quake","emoji":"🎡","tier":8},
      'combo-1-10-4': {"id":"mystic-nexus-tide","name":"Mystic Nexus Tide","emoji":"🎠","tier":8},
      'combo-1-10-5': {"id":"mystic-nexus-wind","name":"Mystic Nexus Wind","emoji":"🎪","tier":8},
      'combo-1-10-6': {"id":"mystic-nexus-thunder","name":"Mystic Nexus Thunder","emoji":"🎭","tier":8},
      'combo-1-10-7': {"id":"mystic-nexus-lightning","name":"Mystic Nexus Lightning","emoji":"🎬","tier":8},
      'combo-1-10-8': {"id":"mystic-nexus-shadow","name":"Mystic Nexus Shadow","emoji":"🎤","tier":8},
      'combo-1-10-9': {"id":"mystic-nexus-light","name":"Mystic Nexus Light","emoji":"🎧","tier":8},
      'combo-1-10-10': {"id":"mystic-nexus-darkness","name":"Mystic Nexus Darkness","emoji":"✨","tier":8},
      'combo-1-10-11': {"id":"mystic-nexus-radiance","name":"Mystic Nexus Radiance","emoji":"⭐","tier":8},
      'combo-1-10-12': {"id":"mystic-nexus-brilliance","name":"Mystic Nexus Brilliance","emoji":"🌟","tier":8},
      'combo-1-10-13': {"id":"mystic-nexus-glory","name":"Mystic Nexus Glory","emoji":"💫","tier":8},
      'combo-1-10-14': {"id":"mystic-nexus-majesty","name":"Mystic Nexus Majesty","emoji":"🔮","tier":8},
      'combo-1-10-15': {"id":"mystic-nexus-splendor","name":"Mystic Nexus Splendor","emoji":"🎆","tier":8},
      'combo-1-10-16': {"id":"mystic-nexus-magnificence","name":"Mystic Nexus Magnificence","emoji":"🎇","tier":8},
      'combo-1-10-17': {"id":"mystic-nexus-grandeur","name":"Mystic Nexus Grandeur","emoji":"🌈","tier":8},
      'combo-1-10-18': {"id":"mystic-nexus-nobility","name":"Mystic Nexus Nobility","emoji":"🔥","tier":8},
      'combo-1-10-19': {"id":"mystic-nexus-royalty","name":"Mystic Nexus Royalty","emoji":"💧","tier":8},
      'combo-1-11-0': {"id":"mystic-vortex-flame","name":"Mystic Vortex Flame","emoji":"🌊","tier":8},
      'combo-1-11-1': {"id":"mystic-vortex-frost","name":"Mystic Vortex Frost","emoji":"⚡","tier":8},
      'combo-1-11-2': {"id":"mystic-vortex-storm","name":"Mystic Vortex Storm","emoji":"❄️","tier":8},
      'combo-1-11-3': {"id":"mystic-vortex-quake","name":"Mystic Vortex Quake","emoji":"🌪️","tier":8},
      'combo-1-11-4': {"id":"mystic-vortex-tide","name":"Mystic Vortex Tide","emoji":"☄️","tier":8},
      'combo-1-11-5': {"id":"mystic-vortex-wind","name":"Mystic Vortex Wind","emoji":"💎","tier":8},
      'combo-1-11-6': {"id":"mystic-vortex-thunder","name":"Mystic Vortex Thunder","emoji":"👑","tier":8},
      'combo-1-11-7': {"id":"mystic-vortex-lightning","name":"Mystic Vortex Lightning","emoji":"🗝️","tier":8},
      'combo-1-11-8': {"id":"mystic-vortex-shadow","name":"Mystic Vortex Shadow","emoji":"🔑","tier":8},
      'combo-1-11-9': {"id":"mystic-vortex-light","name":"Mystic Vortex Light","emoji":"🎭","tier":8},
      'combo-1-11-10': {"id":"mystic-vortex-darkness","name":"Mystic Vortex Darkness","emoji":"🎨","tier":8},
      'combo-1-11-11': {"id":"mystic-vortex-radiance","name":"Mystic Vortex Radiance","emoji":"🎪","tier":8},
      'combo-1-11-12': {"id":"mystic-vortex-brilliance","name":"Mystic Vortex Brilliance","emoji":"🎢","tier":8},
      'combo-1-11-13': {"id":"mystic-vortex-glory","name":"Mystic Vortex Glory","emoji":"🎡","tier":8},
      'combo-1-11-14': {"id":"mystic-vortex-majesty","name":"Mystic Vortex Majesty","emoji":"🎠","tier":8},
      'combo-1-11-15': {"id":"mystic-vortex-splendor","name":"Mystic Vortex Splendor","emoji":"🎪","tier":8},
      'combo-1-11-16': {"id":"mystic-vortex-magnificence","name":"Mystic Vortex Magnificence","emoji":"🎭","tier":8},
      'combo-1-11-17': {"id":"mystic-vortex-grandeur","name":"Mystic Vortex Grandeur","emoji":"🎬","tier":8},
      'combo-1-11-18': {"id":"mystic-vortex-nobility","name":"Mystic Vortex Nobility","emoji":"🎤","tier":8},
      'combo-1-11-19': {"id":"mystic-vortex-royalty","name":"Mystic Vortex Royalty","emoji":"🎧","tier":8},
      'combo-1-12-0': {"id":"mystic-portal-flame","name":"Mystic Portal Flame","emoji":"✨","tier":8},
      'combo-1-12-1': {"id":"mystic-portal-frost","name":"Mystic Portal Frost","emoji":"⭐","tier":8},
      'combo-1-12-2': {"id":"mystic-portal-storm","name":"Mystic Portal Storm","emoji":"🌟","tier":8},
      'combo-1-12-3': {"id":"mystic-portal-quake","name":"Mystic Portal Quake","emoji":"💫","tier":8},
      'combo-1-12-4': {"id":"mystic-portal-tide","name":"Mystic Portal Tide","emoji":"🔮","tier":8},
      'combo-1-12-5': {"id":"mystic-portal-wind","name":"Mystic Portal Wind","emoji":"🎆","tier":8},
      'combo-1-12-6': {"id":"mystic-portal-thunder","name":"Mystic Portal Thunder","emoji":"🎇","tier":8},
      'combo-1-12-7': {"id":"mystic-portal-lightning","name":"Mystic Portal Lightning","emoji":"🌈","tier":8},
      'combo-1-12-8': {"id":"mystic-portal-shadow","name":"Mystic Portal Shadow","emoji":"🔥","tier":8},
      'combo-1-12-9': {"id":"mystic-portal-light","name":"Mystic Portal Light","emoji":"💧","tier":8},
      'combo-1-12-10': {"id":"mystic-portal-darkness","name":"Mystic Portal Darkness","emoji":"🌊","tier":8},
      'combo-1-12-11': {"id":"mystic-portal-radiance","name":"Mystic Portal Radiance","emoji":"⚡","tier":8},
      'combo-1-12-12': {"id":"mystic-portal-brilliance","name":"Mystic Portal Brilliance","emoji":"❄️","tier":8},
      'combo-1-12-13': {"id":"mystic-portal-glory","name":"Mystic Portal Glory","emoji":"🌪️","tier":8},
      'combo-1-12-14': {"id":"mystic-portal-majesty","name":"Mystic Portal Majesty","emoji":"☄️","tier":8},
      'combo-1-12-15': {"id":"mystic-portal-splendor","name":"Mystic Portal Splendor","emoji":"💎","tier":8},
      'combo-1-12-16': {"id":"mystic-portal-magnificence","name":"Mystic Portal Magnificence","emoji":"👑","tier":8},
      'combo-1-12-17': {"id":"mystic-portal-grandeur","name":"Mystic Portal Grandeur","emoji":"🗝️","tier":8},
      'combo-1-12-18': {"id":"mystic-portal-nobility","name":"Mystic Portal Nobility","emoji":"🔑","tier":8},
      'combo-1-12-19': {"id":"mystic-portal-royalty","name":"Mystic Portal Royalty","emoji":"🎭","tier":8},
      'combo-1-13-0': {"id":"mystic-gateway-flame","name":"Mystic Gateway Flame","emoji":"🎨","tier":8},
      'combo-1-13-1': {"id":"mystic-gateway-frost","name":"Mystic Gateway Frost","emoji":"🎪","tier":8},
      'combo-1-13-2': {"id":"mystic-gateway-storm","name":"Mystic Gateway Storm","emoji":"🎢","tier":8},
      'combo-1-13-3': {"id":"mystic-gateway-quake","name":"Mystic Gateway Quake","emoji":"🎡","tier":8},
      'combo-1-13-4': {"id":"mystic-gateway-tide","name":"Mystic Gateway Tide","emoji":"🎠","tier":8},
      'combo-1-13-5': {"id":"mystic-gateway-wind","name":"Mystic Gateway Wind","emoji":"🎪","tier":8},
      'combo-1-13-6': {"id":"mystic-gateway-thunder","name":"Mystic Gateway Thunder","emoji":"🎭","tier":8},
      'combo-1-13-7': {"id":"mystic-gateway-lightning","name":"Mystic Gateway Lightning","emoji":"🎬","tier":8},
      'combo-1-13-8': {"id":"mystic-gateway-shadow","name":"Mystic Gateway Shadow","emoji":"🎤","tier":8},
      'combo-1-13-9': {"id":"mystic-gateway-light","name":"Mystic Gateway Light","emoji":"🎧","tier":8},
      'combo-1-13-10': {"id":"mystic-gateway-darkness","name":"Mystic Gateway Darkness","emoji":"✨","tier":8},
      'combo-1-13-11': {"id":"mystic-gateway-radiance","name":"Mystic Gateway Radiance","emoji":"⭐","tier":8},
      'combo-1-13-12': {"id":"mystic-gateway-brilliance","name":"Mystic Gateway Brilliance","emoji":"🌟","tier":8},
      'combo-1-13-13': {"id":"mystic-gateway-glory","name":"Mystic Gateway Glory","emoji":"💫","tier":8},
      'combo-1-13-14': {"id":"mystic-gateway-majesty","name":"Mystic Gateway Majesty","emoji":"🔮","tier":8},
      'combo-1-13-15': {"id":"mystic-gateway-splendor","name":"Mystic Gateway Splendor","emoji":"🎆","tier":8},
      'combo-1-13-16': {"id":"mystic-gateway-magnificence","name":"Mystic Gateway Magnificence","emoji":"🎇","tier":8},
      'combo-1-13-17': {"id":"mystic-gateway-grandeur","name":"Mystic Gateway Grandeur","emoji":"🌈","tier":8},
      'combo-1-13-18': {"id":"mystic-gateway-nobility","name":"Mystic Gateway Nobility","emoji":"🔥","tier":8},
      'combo-1-13-19': {"id":"mystic-gateway-royalty","name":"Mystic Gateway Royalty","emoji":"💧","tier":8},
      'combo-1-14-0': {"id":"mystic-rift-flame","name":"Mystic Rift Flame","emoji":"🌊","tier":8},
      'combo-1-14-1': {"id":"mystic-rift-frost","name":"Mystic Rift Frost","emoji":"⚡","tier":8},
      'combo-1-14-2': {"id":"mystic-rift-storm","name":"Mystic Rift Storm","emoji":"❄️","tier":8},
      'combo-1-14-3': {"id":"mystic-rift-quake","name":"Mystic Rift Quake","emoji":"🌪️","tier":8},
      'combo-1-14-4': {"id":"mystic-rift-tide","name":"Mystic Rift Tide","emoji":"☄️","tier":8},
      'combo-1-14-5': {"id":"mystic-rift-wind","name":"Mystic Rift Wind","emoji":"💎","tier":8},
      'combo-1-14-6': {"id":"mystic-rift-thunder","name":"Mystic Rift Thunder","emoji":"👑","tier":8},
      'combo-1-14-7': {"id":"mystic-rift-lightning","name":"Mystic Rift Lightning","emoji":"🗝️","tier":8},
      'combo-1-14-8': {"id":"mystic-rift-shadow","name":"Mystic Rift Shadow","emoji":"🔑","tier":8},
      'combo-1-14-9': {"id":"mystic-rift-light","name":"Mystic Rift Light","emoji":"🎭","tier":8},
      'combo-1-14-10': {"id":"mystic-rift-darkness","name":"Mystic Rift Darkness","emoji":"🎨","tier":8},
      'combo-1-14-11': {"id":"mystic-rift-radiance","name":"Mystic Rift Radiance","emoji":"🎪","tier":8},
      'combo-1-14-12': {"id":"mystic-rift-brilliance","name":"Mystic Rift Brilliance","emoji":"🎢","tier":8},
      'combo-1-14-13': {"id":"mystic-rift-glory","name":"Mystic Rift Glory","emoji":"🎡","tier":8},
      'combo-1-14-14': {"id":"mystic-rift-majesty","name":"Mystic Rift Majesty","emoji":"🎠","tier":8},
      'combo-1-14-15': {"id":"mystic-rift-splendor","name":"Mystic Rift Splendor","emoji":"🎪","tier":8},
      'combo-1-14-16': {"id":"mystic-rift-magnificence","name":"Mystic Rift Magnificence","emoji":"🎭","tier":8},
      'combo-1-14-17': {"id":"mystic-rift-grandeur","name":"Mystic Rift Grandeur","emoji":"🎬","tier":8},
      'combo-1-14-18': {"id":"mystic-rift-nobility","name":"Mystic Rift Nobility","emoji":"🎤","tier":8},
      'combo-1-14-19': {"id":"mystic-rift-royalty","name":"Mystic Rift Royalty","emoji":"🎧","tier":8},
      'combo-1-15-0': {"id":"mystic-void-flame","name":"Mystic Void Flame","emoji":"✨","tier":8},
      'combo-1-15-1': {"id":"mystic-void-frost","name":"Mystic Void Frost","emoji":"⭐","tier":8},
      'combo-1-15-2': {"id":"mystic-void-storm","name":"Mystic Void Storm","emoji":"🌟","tier":8},
      'combo-1-15-3': {"id":"mystic-void-quake","name":"Mystic Void Quake","emoji":"💫","tier":8},
      'combo-1-15-4': {"id":"mystic-void-tide","name":"Mystic Void Tide","emoji":"🔮","tier":8},
      'combo-1-15-5': {"id":"mystic-void-wind","name":"Mystic Void Wind","emoji":"🎆","tier":8},
      'combo-1-15-6': {"id":"mystic-void-thunder","name":"Mystic Void Thunder","emoji":"🎇","tier":8},
      'combo-1-15-7': {"id":"mystic-void-lightning","name":"Mystic Void Lightning","emoji":"🌈","tier":8},
      'combo-1-15-8': {"id":"mystic-void-shadow","name":"Mystic Void Shadow","emoji":"🔥","tier":8},
      'combo-1-15-9': {"id":"mystic-void-light","name":"Mystic Void Light","emoji":"💧","tier":8},
      'combo-1-15-10': {"id":"mystic-void-darkness","name":"Mystic Void Darkness","emoji":"🌊","tier":8},
      'combo-1-15-11': {"id":"mystic-void-radiance","name":"Mystic Void Radiance","emoji":"⚡","tier":8},
      'combo-1-15-12': {"id":"mystic-void-brilliance","name":"Mystic Void Brilliance","emoji":"❄️","tier":8},
      'combo-1-15-13': {"id":"mystic-void-glory","name":"Mystic Void Glory","emoji":"🌪️","tier":8},
      'combo-1-15-14': {"id":"mystic-void-majesty","name":"Mystic Void Majesty","emoji":"☄️","tier":8},
      'combo-1-15-15': {"id":"mystic-void-splendor","name":"Mystic Void Splendor","emoji":"💎","tier":8},
      'combo-1-15-16': {"id":"mystic-void-magnificence","name":"Mystic Void Magnificence","emoji":"👑","tier":8},
      'combo-1-15-17': {"id":"mystic-void-grandeur","name":"Mystic Void Grandeur","emoji":"🗝️","tier":8},
      'combo-1-15-18': {"id":"mystic-void-nobility","name":"Mystic Void Nobility","emoji":"🔑","tier":8},
      'combo-1-15-19': {"id":"mystic-void-royalty","name":"Mystic Void Royalty","emoji":"🎭","tier":8},
      'combo-1-16-0': {"id":"mystic-chaos-flame","name":"Mystic Chaos Flame","emoji":"🎨","tier":8},
      'combo-1-16-1': {"id":"mystic-chaos-frost","name":"Mystic Chaos Frost","emoji":"🎪","tier":8},
      'combo-1-16-2': {"id":"mystic-chaos-storm","name":"Mystic Chaos Storm","emoji":"🎢","tier":8},
      'combo-1-16-3': {"id":"mystic-chaos-quake","name":"Mystic Chaos Quake","emoji":"🎡","tier":8},
      'combo-1-16-4': {"id":"mystic-chaos-tide","name":"Mystic Chaos Tide","emoji":"🎠","tier":8},
      'combo-1-16-5': {"id":"mystic-chaos-wind","name":"Mystic Chaos Wind","emoji":"🎪","tier":8},
      'combo-1-16-6': {"id":"mystic-chaos-thunder","name":"Mystic Chaos Thunder","emoji":"🎭","tier":8},
      'combo-1-16-7': {"id":"mystic-chaos-lightning","name":"Mystic Chaos Lightning","emoji":"🎬","tier":8},
      'combo-1-16-8': {"id":"mystic-chaos-shadow","name":"Mystic Chaos Shadow","emoji":"🎤","tier":8},
      'combo-1-16-9': {"id":"mystic-chaos-light","name":"Mystic Chaos Light","emoji":"🎧","tier":8},
      'combo-1-16-10': {"id":"mystic-chaos-darkness","name":"Mystic Chaos Darkness","emoji":"✨","tier":8},
      'combo-1-16-11': {"id":"mystic-chaos-radiance","name":"Mystic Chaos Radiance","emoji":"⭐","tier":8},
      'combo-1-16-12': {"id":"mystic-chaos-brilliance","name":"Mystic Chaos Brilliance","emoji":"🌟","tier":8},
      'combo-1-16-13': {"id":"mystic-chaos-glory","name":"Mystic Chaos Glory","emoji":"💫","tier":8},
      'combo-1-16-14': {"id":"mystic-chaos-majesty","name":"Mystic Chaos Majesty","emoji":"🔮","tier":8},
      'combo-1-16-15': {"id":"mystic-chaos-splendor","name":"Mystic Chaos Splendor","emoji":"🎆","tier":8},
      'combo-1-16-16': {"id":"mystic-chaos-magnificence","name":"Mystic Chaos Magnificence","emoji":"🎇","tier":8},
      'combo-1-16-17': {"id":"mystic-chaos-grandeur","name":"Mystic Chaos Grandeur","emoji":"🌈","tier":8},
      'combo-1-16-18': {"id":"mystic-chaos-nobility","name":"Mystic Chaos Nobility","emoji":"🔥","tier":8},
      'combo-1-16-19': {"id":"mystic-chaos-royalty","name":"Mystic Chaos Royalty","emoji":"💧","tier":8},
      'combo-1-17-0': {"id":"mystic-order-flame","name":"Mystic Order Flame","emoji":"🌊","tier":8},
      'combo-1-17-1': {"id":"mystic-order-frost","name":"Mystic Order Frost","emoji":"⚡","tier":8},
      'combo-1-17-2': {"id":"mystic-order-storm","name":"Mystic Order Storm","emoji":"❄️","tier":8},
      'combo-1-17-3': {"id":"mystic-order-quake","name":"Mystic Order Quake","emoji":"🌪️","tier":8},
      'combo-1-17-4': {"id":"mystic-order-tide","name":"Mystic Order Tide","emoji":"☄️","tier":8},
      'combo-1-17-5': {"id":"mystic-order-wind","name":"Mystic Order Wind","emoji":"💎","tier":8},
      'combo-1-17-6': {"id":"mystic-order-thunder","name":"Mystic Order Thunder","emoji":"👑","tier":8},
      'combo-1-17-7': {"id":"mystic-order-lightning","name":"Mystic Order Lightning","emoji":"🗝️","tier":8},
      'combo-1-17-8': {"id":"mystic-order-shadow","name":"Mystic Order Shadow","emoji":"🔑","tier":8},
      'combo-1-17-9': {"id":"mystic-order-light","name":"Mystic Order Light","emoji":"🎭","tier":8},
      'combo-1-17-10': {"id":"mystic-order-darkness","name":"Mystic Order Darkness","emoji":"🎨","tier":8},
      'combo-1-17-11': {"id":"mystic-order-radiance","name":"Mystic Order Radiance","emoji":"🎪","tier":8},
      'combo-1-17-12': {"id":"mystic-order-brilliance","name":"Mystic Order Brilliance","emoji":"🎢","tier":8},
      'combo-1-17-13': {"id":"mystic-order-glory","name":"Mystic Order Glory","emoji":"🎡","tier":8},
      'combo-1-17-14': {"id":"mystic-order-majesty","name":"Mystic Order Majesty","emoji":"🎠","tier":8},
      'combo-1-17-15': {"id":"mystic-order-splendor","name":"Mystic Order Splendor","emoji":"🎪","tier":8},
      'combo-1-17-16': {"id":"mystic-order-magnificence","name":"Mystic Order Magnificence","emoji":"🎭","tier":8},
      'combo-1-17-17': {"id":"mystic-order-grandeur","name":"Mystic Order Grandeur","emoji":"🎬","tier":8},
      'combo-1-17-18': {"id":"mystic-order-nobility","name":"Mystic Order Nobility","emoji":"🎤","tier":8},
      'combo-1-17-19': {"id":"mystic-order-royalty","name":"Mystic Order Royalty","emoji":"🎧","tier":8},
      'combo-1-18-0': {"id":"mystic-balance-flame","name":"Mystic Balance Flame","emoji":"✨","tier":8},
      'combo-1-18-1': {"id":"mystic-balance-frost","name":"Mystic Balance Frost","emoji":"⭐","tier":8},
      'combo-1-18-2': {"id":"mystic-balance-storm","name":"Mystic Balance Storm","emoji":"🌟","tier":8},
      'combo-1-18-3': {"id":"mystic-balance-quake","name":"Mystic Balance Quake","emoji":"💫","tier":8},
      'combo-1-18-4': {"id":"mystic-balance-tide","name":"Mystic Balance Tide","emoji":"🔮","tier":8},
      'combo-1-18-5': {"id":"mystic-balance-wind","name":"Mystic Balance Wind","emoji":"🎆","tier":8},
      'combo-1-18-6': {"id":"mystic-balance-thunder","name":"Mystic Balance Thunder","emoji":"🎇","tier":8},
      'combo-1-18-7': {"id":"mystic-balance-lightning","name":"Mystic Balance Lightning","emoji":"🌈","tier":8},
      'combo-1-18-8': {"id":"mystic-balance-shadow","name":"Mystic Balance Shadow","emoji":"🔥","tier":8},
      'combo-1-18-9': {"id":"mystic-balance-light","name":"Mystic Balance Light","emoji":"💧","tier":8},
      'combo-1-18-10': {"id":"mystic-balance-darkness","name":"Mystic Balance Darkness","emoji":"🌊","tier":8},
      'combo-1-18-11': {"id":"mystic-balance-radiance","name":"Mystic Balance Radiance","emoji":"⚡","tier":8},
      'combo-1-18-12': {"id":"mystic-balance-brilliance","name":"Mystic Balance Brilliance","emoji":"❄️","tier":8},
      'combo-1-18-13': {"id":"mystic-balance-glory","name":"Mystic Balance Glory","emoji":"🌪️","tier":8},
      'combo-1-18-14': {"id":"mystic-balance-majesty","name":"Mystic Balance Majesty","emoji":"☄️","tier":8},
      'combo-1-18-15': {"id":"mystic-balance-splendor","name":"Mystic Balance Splendor","emoji":"💎","tier":8},
      'combo-1-18-16': {"id":"mystic-balance-magnificence","name":"Mystic Balance Magnificence","emoji":"👑","tier":8},
      'combo-1-18-17': {"id":"mystic-balance-grandeur","name":"Mystic Balance Grandeur","emoji":"🗝️","tier":8},
      'combo-1-18-18': {"id":"mystic-balance-nobility","name":"Mystic Balance Nobility","emoji":"🔑","tier":8},
      'combo-1-18-19': {"id":"mystic-balance-royalty","name":"Mystic Balance Royalty","emoji":"🎭","tier":8},
      'combo-1-19-0': {"id":"mystic-harmony-flame","name":"Mystic Harmony Flame","emoji":"🎨","tier":8},
      'combo-1-19-1': {"id":"mystic-harmony-frost","name":"Mystic Harmony Frost","emoji":"🎪","tier":8},
      'combo-1-19-2': {"id":"mystic-harmony-storm","name":"Mystic Harmony Storm","emoji":"🎢","tier":8},
      'combo-1-19-3': {"id":"mystic-harmony-quake","name":"Mystic Harmony Quake","emoji":"🎡","tier":8},
      'combo-1-19-4': {"id":"mystic-harmony-tide","name":"Mystic Harmony Tide","emoji":"🎠","tier":8},
      'combo-1-19-5': {"id":"mystic-harmony-wind","name":"Mystic Harmony Wind","emoji":"🎪","tier":8},
      'combo-1-19-6': {"id":"mystic-harmony-thunder","name":"Mystic Harmony Thunder","emoji":"🎭","tier":8},
      'combo-1-19-7': {"id":"mystic-harmony-lightning","name":"Mystic Harmony Lightning","emoji":"🎬","tier":8},
      'combo-1-19-8': {"id":"mystic-harmony-shadow","name":"Mystic Harmony Shadow","emoji":"🎤","tier":8},
      'combo-1-19-9': {"id":"mystic-harmony-light","name":"Mystic Harmony Light","emoji":"🎧","tier":8},
      'combo-1-19-10': {"id":"mystic-harmony-darkness","name":"Mystic Harmony Darkness","emoji":"✨","tier":8},
      'combo-1-19-11': {"id":"mystic-harmony-radiance","name":"Mystic Harmony Radiance","emoji":"⭐","tier":8},
      'combo-1-19-12': {"id":"mystic-harmony-brilliance","name":"Mystic Harmony Brilliance","emoji":"🌟","tier":8},
      'combo-1-19-13': {"id":"mystic-harmony-glory","name":"Mystic Harmony Glory","emoji":"💫","tier":8},
      'combo-1-19-14': {"id":"mystic-harmony-majesty","name":"Mystic Harmony Majesty","emoji":"🔮","tier":8},
      'combo-1-19-15': {"id":"mystic-harmony-splendor","name":"Mystic Harmony Splendor","emoji":"🎆","tier":8},
      'combo-1-19-16': {"id":"mystic-harmony-magnificence","name":"Mystic Harmony Magnificence","emoji":"🎇","tier":8},
      'combo-1-19-17': {"id":"mystic-harmony-grandeur","name":"Mystic Harmony Grandeur","emoji":"🌈","tier":8},
      'combo-1-19-18': {"id":"mystic-harmony-nobility","name":"Mystic Harmony Nobility","emoji":"🔥","tier":8},
      'combo-1-19-19': {"id":"mystic-harmony-royalty","name":"Mystic Harmony Royalty","emoji":"💧","tier":8},
      'combo-1-20-0': {"id":"mystic-discord-flame","name":"Mystic Discord Flame","emoji":"🌊","tier":9},
      'combo-1-20-1': {"id":"mystic-discord-frost","name":"Mystic Discord Frost","emoji":"⚡","tier":9},
      'combo-1-20-2': {"id":"mystic-discord-storm","name":"Mystic Discord Storm","emoji":"❄️","tier":9},
      'combo-1-20-3': {"id":"mystic-discord-quake","name":"Mystic Discord Quake","emoji":"🌪️","tier":9},
      'combo-1-20-4': {"id":"mystic-discord-tide","name":"Mystic Discord Tide","emoji":"☄️","tier":9},
      'combo-1-20-5': {"id":"mystic-discord-wind","name":"Mystic Discord Wind","emoji":"💎","tier":9},
      'combo-1-20-6': {"id":"mystic-discord-thunder","name":"Mystic Discord Thunder","emoji":"👑","tier":9},
      'combo-1-20-7': {"id":"mystic-discord-lightning","name":"Mystic Discord Lightning","emoji":"🗝️","tier":9},
      'combo-1-20-8': {"id":"mystic-discord-shadow","name":"Mystic Discord Shadow","emoji":"🔑","tier":9},
      'combo-1-20-9': {"id":"mystic-discord-light","name":"Mystic Discord Light","emoji":"🎭","tier":9},
      'combo-1-20-10': {"id":"mystic-discord-darkness","name":"Mystic Discord Darkness","emoji":"🎨","tier":9},
      'combo-1-20-11': {"id":"mystic-discord-radiance","name":"Mystic Discord Radiance","emoji":"🎪","tier":9},
      'combo-1-20-12': {"id":"mystic-discord-brilliance","name":"Mystic Discord Brilliance","emoji":"🎢","tier":9},
      'combo-1-20-13': {"id":"mystic-discord-glory","name":"Mystic Discord Glory","emoji":"🎡","tier":9},
      'combo-1-20-14': {"id":"mystic-discord-majesty","name":"Mystic Discord Majesty","emoji":"🎠","tier":9},
      'combo-1-20-15': {"id":"mystic-discord-splendor","name":"Mystic Discord Splendor","emoji":"🎪","tier":9},
      'combo-1-20-16': {"id":"mystic-discord-magnificence","name":"Mystic Discord Magnificence","emoji":"🎭","tier":9},
      'combo-1-20-17': {"id":"mystic-discord-grandeur","name":"Mystic Discord Grandeur","emoji":"🎬","tier":9},
      'combo-1-20-18': {"id":"mystic-discord-nobility","name":"Mystic Discord Nobility","emoji":"🎤","tier":9},
      'combo-1-20-19': {"id":"mystic-discord-royalty","name":"Mystic Discord Royalty","emoji":"🎧","tier":9},
      'combo-1-21-0': {"id":"mystic-unity-flame","name":"Mystic Unity Flame","emoji":"✨","tier":9},
      'combo-1-21-1': {"id":"mystic-unity-frost","name":"Mystic Unity Frost","emoji":"⭐","tier":9},
      'combo-1-21-2': {"id":"mystic-unity-storm","name":"Mystic Unity Storm","emoji":"🌟","tier":9},
      'combo-1-21-3': {"id":"mystic-unity-quake","name":"Mystic Unity Quake","emoji":"💫","tier":9},
      'combo-1-21-4': {"id":"mystic-unity-tide","name":"Mystic Unity Tide","emoji":"🔮","tier":9},
      'combo-1-21-5': {"id":"mystic-unity-wind","name":"Mystic Unity Wind","emoji":"🎆","tier":9},
      'combo-1-21-6': {"id":"mystic-unity-thunder","name":"Mystic Unity Thunder","emoji":"🎇","tier":9},
      'combo-1-21-7': {"id":"mystic-unity-lightning","name":"Mystic Unity Lightning","emoji":"🌈","tier":9},
      'combo-1-21-8': {"id":"mystic-unity-shadow","name":"Mystic Unity Shadow","emoji":"🔥","tier":9},
      'combo-1-21-9': {"id":"mystic-unity-light","name":"Mystic Unity Light","emoji":"💧","tier":9},
      'combo-1-21-10': {"id":"mystic-unity-darkness","name":"Mystic Unity Darkness","emoji":"🌊","tier":9},
      'combo-1-21-11': {"id":"mystic-unity-radiance","name":"Mystic Unity Radiance","emoji":"⚡","tier":9},
      'combo-1-21-12': {"id":"mystic-unity-brilliance","name":"Mystic Unity Brilliance","emoji":"❄️","tier":9},
      'combo-1-21-13': {"id":"mystic-unity-glory","name":"Mystic Unity Glory","emoji":"🌪️","tier":9},
      'combo-1-21-14': {"id":"mystic-unity-majesty","name":"Mystic Unity Majesty","emoji":"☄️","tier":9},
      'combo-1-21-15': {"id":"mystic-unity-splendor","name":"Mystic Unity Splendor","emoji":"💎","tier":9},
      'combo-1-21-16': {"id":"mystic-unity-magnificence","name":"Mystic Unity Magnificence","emoji":"👑","tier":9},
      'combo-1-21-17': {"id":"mystic-unity-grandeur","name":"Mystic Unity Grandeur","emoji":"🗝️","tier":9},
      'combo-1-21-18': {"id":"mystic-unity-nobility","name":"Mystic Unity Nobility","emoji":"🔑","tier":9},
      'combo-1-21-19': {"id":"mystic-unity-royalty","name":"Mystic Unity Royalty","emoji":"🎭","tier":9},
      'combo-1-22-0': {"id":"mystic-duality-flame","name":"Mystic Duality Flame","emoji":"🎨","tier":9},
      'combo-1-22-1': {"id":"mystic-duality-frost","name":"Mystic Duality Frost","emoji":"🎪","tier":9},
      'combo-1-22-2': {"id":"mystic-duality-storm","name":"Mystic Duality Storm","emoji":"🎢","tier":9},
      'combo-1-22-3': {"id":"mystic-duality-quake","name":"Mystic Duality Quake","emoji":"🎡","tier":9},
      'combo-1-22-4': {"id":"mystic-duality-tide","name":"Mystic Duality Tide","emoji":"🎠","tier":9},
      'combo-1-22-5': {"id":"mystic-duality-wind","name":"Mystic Duality Wind","emoji":"🎪","tier":9},
      'combo-1-22-6': {"id":"mystic-duality-thunder","name":"Mystic Duality Thunder","emoji":"🎭","tier":9},
      'combo-1-22-7': {"id":"mystic-duality-lightning","name":"Mystic Duality Lightning","emoji":"🎬","tier":9},
      'combo-1-22-8': {"id":"mystic-duality-shadow","name":"Mystic Duality Shadow","emoji":"🎤","tier":9},
      'combo-1-22-9': {"id":"mystic-duality-light","name":"Mystic Duality Light","emoji":"🎧","tier":9},
      'combo-1-22-10': {"id":"mystic-duality-darkness","name":"Mystic Duality Darkness","emoji":"✨","tier":9},
      'combo-1-22-11': {"id":"mystic-duality-radiance","name":"Mystic Duality Radiance","emoji":"⭐","tier":9},
      'combo-1-22-12': {"id":"mystic-duality-brilliance","name":"Mystic Duality Brilliance","emoji":"🌟","tier":9},
      'combo-1-22-13': {"id":"mystic-duality-glory","name":"Mystic Duality Glory","emoji":"💫","tier":9},
      'combo-1-22-14': {"id":"mystic-duality-majesty","name":"Mystic Duality Majesty","emoji":"🔮","tier":9},
      'combo-1-22-15': {"id":"mystic-duality-splendor","name":"Mystic Duality Splendor","emoji":"🎆","tier":9},
      'combo-1-22-16': {"id":"mystic-duality-magnificence","name":"Mystic Duality Magnificence","emoji":"🎇","tier":9},
      'combo-1-22-17': {"id":"mystic-duality-grandeur","name":"Mystic Duality Grandeur","emoji":"🌈","tier":9},
      'combo-1-22-18': {"id":"mystic-duality-nobility","name":"Mystic Duality Nobility","emoji":"🔥","tier":9},
      'combo-1-22-19': {"id":"mystic-duality-royalty","name":"Mystic Duality Royalty","emoji":"💧","tier":9},
      'combo-1-23-0': {"id":"mystic-trinity-flame","name":"Mystic Trinity Flame","emoji":"🌊","tier":9},
      'combo-1-23-1': {"id":"mystic-trinity-frost","name":"Mystic Trinity Frost","emoji":"⚡","tier":9},
      'combo-1-23-2': {"id":"mystic-trinity-storm","name":"Mystic Trinity Storm","emoji":"❄️","tier":9},
      'combo-1-23-3': {"id":"mystic-trinity-quake","name":"Mystic Trinity Quake","emoji":"🌪️","tier":9},
      'combo-1-23-4': {"id":"mystic-trinity-tide","name":"Mystic Trinity Tide","emoji":"☄️","tier":9},
      'combo-1-23-5': {"id":"mystic-trinity-wind","name":"Mystic Trinity Wind","emoji":"💎","tier":9},
      'combo-1-23-6': {"id":"mystic-trinity-thunder","name":"Mystic Trinity Thunder","emoji":"👑","tier":9},
      'combo-1-23-7': {"id":"mystic-trinity-lightning","name":"Mystic Trinity Lightning","emoji":"🗝️","tier":9},
      'combo-1-23-8': {"id":"mystic-trinity-shadow","name":"Mystic Trinity Shadow","emoji":"🔑","tier":9},
      'combo-1-23-9': {"id":"mystic-trinity-light","name":"Mystic Trinity Light","emoji":"🎭","tier":9},
      'combo-1-23-10': {"id":"mystic-trinity-darkness","name":"Mystic Trinity Darkness","emoji":"🎨","tier":9},
      'combo-1-23-11': {"id":"mystic-trinity-radiance","name":"Mystic Trinity Radiance","emoji":"🎪","tier":9},
      'combo-1-23-12': {"id":"mystic-trinity-brilliance","name":"Mystic Trinity Brilliance","emoji":"🎢","tier":9},
      'combo-1-23-13': {"id":"mystic-trinity-glory","name":"Mystic Trinity Glory","emoji":"🎡","tier":9},
      'combo-1-23-14': {"id":"mystic-trinity-majesty","name":"Mystic Trinity Majesty","emoji":"🎠","tier":9},
      'combo-1-23-15': {"id":"mystic-trinity-splendor","name":"Mystic Trinity Splendor","emoji":"🎪","tier":9},
      'combo-1-23-16': {"id":"mystic-trinity-magnificence","name":"Mystic Trinity Magnificence","emoji":"🎭","tier":9},
      'combo-1-23-17': {"id":"mystic-trinity-grandeur","name":"Mystic Trinity Grandeur","emoji":"🎬","tier":9},
      'combo-1-23-18': {"id":"mystic-trinity-nobility","name":"Mystic Trinity Nobility","emoji":"🎤","tier":9},
      'combo-1-23-19': {"id":"mystic-trinity-royalty","name":"Mystic Trinity Royalty","emoji":"🎧","tier":9},
      'combo-1-24-0': {"id":"mystic-infinity-flame","name":"Mystic Infinity Flame","emoji":"✨","tier":9},
      'combo-1-24-1': {"id":"mystic-infinity-frost","name":"Mystic Infinity Frost","emoji":"⭐","tier":9},
      'combo-1-24-2': {"id":"mystic-infinity-storm","name":"Mystic Infinity Storm","emoji":"🌟","tier":9},
      'combo-1-24-3': {"id":"mystic-infinity-quake","name":"Mystic Infinity Quake","emoji":"💫","tier":9},
      'combo-1-24-4': {"id":"mystic-infinity-tide","name":"Mystic Infinity Tide","emoji":"🔮","tier":9},
      'combo-1-24-5': {"id":"mystic-infinity-wind","name":"Mystic Infinity Wind","emoji":"🎆","tier":9},
      'combo-1-24-6': {"id":"mystic-infinity-thunder","name":"Mystic Infinity Thunder","emoji":"🎇","tier":9},
      'combo-1-24-7': {"id":"mystic-infinity-lightning","name":"Mystic Infinity Lightning","emoji":"🌈","tier":9},
      'combo-1-24-8': {"id":"mystic-infinity-shadow","name":"Mystic Infinity Shadow","emoji":"🔥","tier":9},
      'combo-1-24-9': {"id":"mystic-infinity-light","name":"Mystic Infinity Light","emoji":"💧","tier":9},
      'combo-1-24-10': {"id":"mystic-infinity-darkness","name":"Mystic Infinity Darkness","emoji":"🌊","tier":9},
      'combo-1-24-11': {"id":"mystic-infinity-radiance","name":"Mystic Infinity Radiance","emoji":"⚡","tier":9},
      'combo-1-24-12': {"id":"mystic-infinity-brilliance","name":"Mystic Infinity Brilliance","emoji":"❄️","tier":9},
      'combo-1-24-13': {"id":"mystic-infinity-glory","name":"Mystic Infinity Glory","emoji":"🌪️","tier":9},
      'combo-1-24-14': {"id":"mystic-infinity-majesty","name":"Mystic Infinity Majesty","emoji":"☄️","tier":9},
      'combo-1-24-15': {"id":"mystic-infinity-splendor","name":"Mystic Infinity Splendor","emoji":"💎","tier":9},
      'combo-1-24-16': {"id":"mystic-infinity-magnificence","name":"Mystic Infinity Magnificence","emoji":"👑","tier":9},
      'combo-1-24-17': {"id":"mystic-infinity-grandeur","name":"Mystic Infinity Grandeur","emoji":"🗝️","tier":9},
      'combo-1-24-18': {"id":"mystic-infinity-nobility","name":"Mystic Infinity Nobility","emoji":"🔑","tier":9},
      'combo-1-24-19': {"id":"mystic-infinity-royalty","name":"Mystic Infinity Royalty","emoji":"🎭","tier":9},
      'combo-1-25-0': {"id":"mystic-eternity-flame","name":"Mystic Eternity Flame","emoji":"🎨","tier":9},
      'combo-1-25-1': {"id":"mystic-eternity-frost","name":"Mystic Eternity Frost","emoji":"🎪","tier":9},
      'combo-1-25-2': {"id":"mystic-eternity-storm","name":"Mystic Eternity Storm","emoji":"🎢","tier":9},
      'combo-1-25-3': {"id":"mystic-eternity-quake","name":"Mystic Eternity Quake","emoji":"🎡","tier":9},
      'combo-1-25-4': {"id":"mystic-eternity-tide","name":"Mystic Eternity Tide","emoji":"🎠","tier":9},
      'combo-1-25-5': {"id":"mystic-eternity-wind","name":"Mystic Eternity Wind","emoji":"🎪","tier":9},
      'combo-1-25-6': {"id":"mystic-eternity-thunder","name":"Mystic Eternity Thunder","emoji":"🎭","tier":9},
      'combo-1-25-7': {"id":"mystic-eternity-lightning","name":"Mystic Eternity Lightning","emoji":"🎬","tier":9},
      'combo-1-25-8': {"id":"mystic-eternity-shadow","name":"Mystic Eternity Shadow","emoji":"🎤","tier":9},
      'combo-1-25-9': {"id":"mystic-eternity-light","name":"Mystic Eternity Light","emoji":"🎧","tier":9},
      'combo-1-25-10': {"id":"mystic-eternity-darkness","name":"Mystic Eternity Darkness","emoji":"✨","tier":9},
      'combo-1-25-11': {"id":"mystic-eternity-radiance","name":"Mystic Eternity Radiance","emoji":"⭐","tier":9},
      'combo-1-25-12': {"id":"mystic-eternity-brilliance","name":"Mystic Eternity Brilliance","emoji":"🌟","tier":9},
      'combo-1-25-13': {"id":"mystic-eternity-glory","name":"Mystic Eternity Glory","emoji":"💫","tier":9},
      'combo-1-25-14': {"id":"mystic-eternity-majesty","name":"Mystic Eternity Majesty","emoji":"🔮","tier":9},
      'combo-1-25-15': {"id":"mystic-eternity-splendor","name":"Mystic Eternity Splendor","emoji":"🎆","tier":9},
      'combo-1-25-16': {"id":"mystic-eternity-magnificence","name":"Mystic Eternity Magnificence","emoji":"🎇","tier":9},
      'combo-1-25-17': {"id":"mystic-eternity-grandeur","name":"Mystic Eternity Grandeur","emoji":"🌈","tier":9},
      'combo-1-25-18': {"id":"mystic-eternity-nobility","name":"Mystic Eternity Nobility","emoji":"🔥","tier":9},
      'combo-1-25-19': {"id":"mystic-eternity-royalty","name":"Mystic Eternity Royalty","emoji":"💧","tier":9},
      'combo-1-26-0': {"id":"mystic-destiny-flame","name":"Mystic Destiny Flame","emoji":"🌊","tier":9},
      'combo-1-26-1': {"id":"mystic-destiny-frost","name":"Mystic Destiny Frost","emoji":"⚡","tier":9},
      'combo-1-26-2': {"id":"mystic-destiny-storm","name":"Mystic Destiny Storm","emoji":"❄️","tier":9},
      'combo-1-26-3': {"id":"mystic-destiny-quake","name":"Mystic Destiny Quake","emoji":"🌪️","tier":9},
      'combo-1-26-4': {"id":"mystic-destiny-tide","name":"Mystic Destiny Tide","emoji":"☄️","tier":9},
      'combo-1-26-5': {"id":"mystic-destiny-wind","name":"Mystic Destiny Wind","emoji":"💎","tier":9},
      'combo-1-26-6': {"id":"mystic-destiny-thunder","name":"Mystic Destiny Thunder","emoji":"👑","tier":9},
      'combo-1-26-7': {"id":"mystic-destiny-lightning","name":"Mystic Destiny Lightning","emoji":"🗝️","tier":9},
      'combo-1-26-8': {"id":"mystic-destiny-shadow","name":"Mystic Destiny Shadow","emoji":"🔑","tier":9},
      'combo-1-26-9': {"id":"mystic-destiny-light","name":"Mystic Destiny Light","emoji":"🎭","tier":9},
      'combo-1-26-10': {"id":"mystic-destiny-darkness","name":"Mystic Destiny Darkness","emoji":"🎨","tier":9},
      'combo-1-26-11': {"id":"mystic-destiny-radiance","name":"Mystic Destiny Radiance","emoji":"🎪","tier":9},
      'combo-1-26-12': {"id":"mystic-destiny-brilliance","name":"Mystic Destiny Brilliance","emoji":"🎢","tier":9},
      'combo-1-26-13': {"id":"mystic-destiny-glory","name":"Mystic Destiny Glory","emoji":"🎡","tier":9},
      'combo-1-26-14': {"id":"mystic-destiny-majesty","name":"Mystic Destiny Majesty","emoji":"🎠","tier":9},
      'combo-1-26-15': {"id":"mystic-destiny-splendor","name":"Mystic Destiny Splendor","emoji":"🎪","tier":9},
      'combo-1-26-16': {"id":"mystic-destiny-magnificence","name":"Mystic Destiny Magnificence","emoji":"🎭","tier":9},
      'combo-1-26-17': {"id":"mystic-destiny-grandeur","name":"Mystic Destiny Grandeur","emoji":"🎬","tier":9},
      'combo-1-26-18': {"id":"mystic-destiny-nobility","name":"Mystic Destiny Nobility","emoji":"🎤","tier":9},
      'combo-1-26-19': {"id":"mystic-destiny-royalty","name":"Mystic Destiny Royalty","emoji":"🎧","tier":9},
      'combo-1-27-0': {"id":"mystic-fate-flame","name":"Mystic Fate Flame","emoji":"✨","tier":9},
      'combo-1-27-1': {"id":"mystic-fate-frost","name":"Mystic Fate Frost","emoji":"⭐","tier":9},
      'combo-1-27-2': {"id":"mystic-fate-storm","name":"Mystic Fate Storm","emoji":"🌟","tier":9},
      'combo-1-27-3': {"id":"mystic-fate-quake","name":"Mystic Fate Quake","emoji":"💫","tier":9},
      'combo-1-27-4': {"id":"mystic-fate-tide","name":"Mystic Fate Tide","emoji":"🔮","tier":9},
      'combo-1-27-5': {"id":"mystic-fate-wind","name":"Mystic Fate Wind","emoji":"🎆","tier":9},
      'combo-1-27-6': {"id":"mystic-fate-thunder","name":"Mystic Fate Thunder","emoji":"🎇","tier":9},
      'combo-1-27-7': {"id":"mystic-fate-lightning","name":"Mystic Fate Lightning","emoji":"🌈","tier":9},
      'combo-1-27-8': {"id":"mystic-fate-shadow","name":"Mystic Fate Shadow","emoji":"🔥","tier":9},
      'combo-1-27-9': {"id":"mystic-fate-light","name":"Mystic Fate Light","emoji":"💧","tier":9},
      'combo-1-27-10': {"id":"mystic-fate-darkness","name":"Mystic Fate Darkness","emoji":"🌊","tier":9},
      'combo-1-27-11': {"id":"mystic-fate-radiance","name":"Mystic Fate Radiance","emoji":"⚡","tier":9},
      'combo-1-27-12': {"id":"mystic-fate-brilliance","name":"Mystic Fate Brilliance","emoji":"❄️","tier":9},
      'combo-1-27-13': {"id":"mystic-fate-glory","name":"Mystic Fate Glory","emoji":"🌪️","tier":9},
      'combo-1-27-14': {"id":"mystic-fate-majesty","name":"Mystic Fate Majesty","emoji":"☄️","tier":9},
      'combo-1-27-15': {"id":"mystic-fate-splendor","name":"Mystic Fate Splendor","emoji":"💎","tier":9},
      'combo-1-27-16': {"id":"mystic-fate-magnificence","name":"Mystic Fate Magnificence","emoji":"👑","tier":9},
      'combo-1-27-17': {"id":"mystic-fate-grandeur","name":"Mystic Fate Grandeur","emoji":"🗝️","tier":9},
      'combo-1-27-18': {"id":"mystic-fate-nobility","name":"Mystic Fate Nobility","emoji":"🔑","tier":9},
      'combo-1-27-19': {"id":"mystic-fate-royalty","name":"Mystic Fate Royalty","emoji":"🎭","tier":9},
      'combo-1-28-0': {"id":"mystic-fortune-flame","name":"Mystic Fortune Flame","emoji":"🎨","tier":9},
      'combo-1-28-1': {"id":"mystic-fortune-frost","name":"Mystic Fortune Frost","emoji":"🎪","tier":9},
      'combo-1-28-2': {"id":"mystic-fortune-storm","name":"Mystic Fortune Storm","emoji":"🎢","tier":9},
      'combo-1-28-3': {"id":"mystic-fortune-quake","name":"Mystic Fortune Quake","emoji":"🎡","tier":9},
      'combo-1-28-4': {"id":"mystic-fortune-tide","name":"Mystic Fortune Tide","emoji":"🎠","tier":9},
      'combo-1-28-5': {"id":"mystic-fortune-wind","name":"Mystic Fortune Wind","emoji":"🎪","tier":9},
      'combo-1-28-6': {"id":"mystic-fortune-thunder","name":"Mystic Fortune Thunder","emoji":"🎭","tier":9},
      'combo-1-28-7': {"id":"mystic-fortune-lightning","name":"Mystic Fortune Lightning","emoji":"🎬","tier":9},
      'combo-1-28-8': {"id":"mystic-fortune-shadow","name":"Mystic Fortune Shadow","emoji":"🎤","tier":9},
      'combo-1-28-9': {"id":"mystic-fortune-light","name":"Mystic Fortune Light","emoji":"🎧","tier":9},
      'combo-1-28-10': {"id":"mystic-fortune-darkness","name":"Mystic Fortune Darkness","emoji":"✨","tier":9},
      'combo-1-28-11': {"id":"mystic-fortune-radiance","name":"Mystic Fortune Radiance","emoji":"⭐","tier":9},
      'combo-1-28-12': {"id":"mystic-fortune-brilliance","name":"Mystic Fortune Brilliance","emoji":"🌟","tier":9},
      'combo-1-28-13': {"id":"mystic-fortune-glory","name":"Mystic Fortune Glory","emoji":"💫","tier":9},
      'combo-1-28-14': {"id":"mystic-fortune-majesty","name":"Mystic Fortune Majesty","emoji":"🔮","tier":9},
      'combo-1-28-15': {"id":"mystic-fortune-splendor","name":"Mystic Fortune Splendor","emoji":"🎆","tier":9},
      'combo-1-28-16': {"id":"mystic-fortune-magnificence","name":"Mystic Fortune Magnificence","emoji":"🎇","tier":9},
      'combo-1-28-17': {"id":"mystic-fortune-grandeur","name":"Mystic Fortune Grandeur","emoji":"🌈","tier":9},
      'combo-1-28-18': {"id":"mystic-fortune-nobility","name":"Mystic Fortune Nobility","emoji":"🔥","tier":9},
      'combo-1-28-19': {"id":"mystic-fortune-royalty","name":"Mystic Fortune Royalty","emoji":"💧","tier":9},
      'combo-1-29-0': {"id":"mystic-luck-flame","name":"Mystic Luck Flame","emoji":"🌊","tier":9},
      'combo-1-29-1': {"id":"mystic-luck-frost","name":"Mystic Luck Frost","emoji":"⚡","tier":9},
      'combo-1-29-2': {"id":"mystic-luck-storm","name":"Mystic Luck Storm","emoji":"❄️","tier":9},
      'combo-1-29-3': {"id":"mystic-luck-quake","name":"Mystic Luck Quake","emoji":"🌪️","tier":9},
      'combo-1-29-4': {"id":"mystic-luck-tide","name":"Mystic Luck Tide","emoji":"☄️","tier":9},
      'combo-1-29-5': {"id":"mystic-luck-wind","name":"Mystic Luck Wind","emoji":"💎","tier":9},
      'combo-1-29-6': {"id":"mystic-luck-thunder","name":"Mystic Luck Thunder","emoji":"👑","tier":9},
      'combo-1-29-7': {"id":"mystic-luck-lightning","name":"Mystic Luck Lightning","emoji":"🗝️","tier":9},
      'combo-1-29-8': {"id":"mystic-luck-shadow","name":"Mystic Luck Shadow","emoji":"🔑","tier":9},
      'combo-1-29-9': {"id":"mystic-luck-light","name":"Mystic Luck Light","emoji":"🎭","tier":9},
      'combo-1-29-10': {"id":"mystic-luck-darkness","name":"Mystic Luck Darkness","emoji":"🎨","tier":9},
      'combo-1-29-11': {"id":"mystic-luck-radiance","name":"Mystic Luck Radiance","emoji":"🎪","tier":9},
      'combo-1-29-12': {"id":"mystic-luck-brilliance","name":"Mystic Luck Brilliance","emoji":"🎢","tier":9},
      'combo-1-29-13': {"id":"mystic-luck-glory","name":"Mystic Luck Glory","emoji":"🎡","tier":9},
      'combo-1-29-14': {"id":"mystic-luck-majesty","name":"Mystic Luck Majesty","emoji":"🎠","tier":9},
      'combo-1-29-15': {"id":"mystic-luck-splendor","name":"Mystic Luck Splendor","emoji":"🎪","tier":9},
      'combo-1-29-16': {"id":"mystic-luck-magnificence","name":"Mystic Luck Magnificence","emoji":"🎭","tier":9},
      'combo-1-29-17': {"id":"mystic-luck-grandeur","name":"Mystic Luck Grandeur","emoji":"🎬","tier":9},
      'combo-1-29-18': {"id":"mystic-luck-nobility","name":"Mystic Luck Nobility","emoji":"🎤","tier":9},
      'combo-1-29-19': {"id":"mystic-luck-royalty","name":"Mystic Luck Royalty","emoji":"🎧","tier":9},
      'combo-2-0-0': {"id":"cosmic-crystal-flame","name":"Cosmic Crystal Flame","emoji":"✨","tier":10},
      'combo-2-0-1': {"id":"cosmic-crystal-frost","name":"Cosmic Crystal Frost","emoji":"⭐","tier":10},
      'combo-2-0-2': {"id":"cosmic-crystal-storm","name":"Cosmic Crystal Storm","emoji":"🌟","tier":10},
      'combo-2-0-3': {"id":"cosmic-crystal-quake","name":"Cosmic Crystal Quake","emoji":"💫","tier":10},
      'combo-2-0-4': {"id":"cosmic-crystal-tide","name":"Cosmic Crystal Tide","emoji":"🔮","tier":10},
      'combo-2-0-5': {"id":"cosmic-crystal-wind","name":"Cosmic Crystal Wind","emoji":"🎆","tier":10},
      'combo-2-0-6': {"id":"cosmic-crystal-thunder","name":"Cosmic Crystal Thunder","emoji":"🎇","tier":10},
      'combo-2-0-7': {"id":"cosmic-crystal-lightning","name":"Cosmic Crystal Lightning","emoji":"🌈","tier":10},
      'combo-2-0-8': {"id":"cosmic-crystal-shadow","name":"Cosmic Crystal Shadow","emoji":"🔥","tier":10},
      'combo-2-0-9': {"id":"cosmic-crystal-light","name":"Cosmic Crystal Light","emoji":"💧","tier":10},
      'combo-2-0-10': {"id":"cosmic-crystal-darkness","name":"Cosmic Crystal Darkness","emoji":"🌊","tier":10},
      'combo-2-0-11': {"id":"cosmic-crystal-radiance","name":"Cosmic Crystal Radiance","emoji":"⚡","tier":10},
      'combo-2-0-12': {"id":"cosmic-crystal-brilliance","name":"Cosmic Crystal Brilliance","emoji":"❄️","tier":10},
      'combo-2-0-13': {"id":"cosmic-crystal-glory","name":"Cosmic Crystal Glory","emoji":"🌪️","tier":10},
      'combo-2-0-14': {"id":"cosmic-crystal-majesty","name":"Cosmic Crystal Majesty","emoji":"☄️","tier":10},
      'combo-2-0-15': {"id":"cosmic-crystal-splendor","name":"Cosmic Crystal Splendor","emoji":"💎","tier":10},
      'combo-2-0-16': {"id":"cosmic-crystal-magnificence","name":"Cosmic Crystal Magnificence","emoji":"👑","tier":10},
      'combo-2-0-17': {"id":"cosmic-crystal-grandeur","name":"Cosmic Crystal Grandeur","emoji":"🗝️","tier":10},
      'combo-2-0-18': {"id":"cosmic-crystal-nobility","name":"Cosmic Crystal Nobility","emoji":"🔑","tier":10},
      'combo-2-0-19': {"id":"cosmic-crystal-royalty","name":"Cosmic Crystal Royalty","emoji":"🎭","tier":10},
      'combo-2-1-0': {"id":"cosmic-essence-flame","name":"Cosmic Essence Flame","emoji":"🎨","tier":10},
      'combo-2-1-1': {"id":"cosmic-essence-frost","name":"Cosmic Essence Frost","emoji":"🎪","tier":10},
      'combo-2-1-2': {"id":"cosmic-essence-storm","name":"Cosmic Essence Storm","emoji":"🎢","tier":10},
      'combo-2-1-3': {"id":"cosmic-essence-quake","name":"Cosmic Essence Quake","emoji":"🎡","tier":10},
      'combo-2-1-4': {"id":"cosmic-essence-tide","name":"Cosmic Essence Tide","emoji":"🎠","tier":10},
      'combo-2-1-5': {"id":"cosmic-essence-wind","name":"Cosmic Essence Wind","emoji":"🎪","tier":10},
      'combo-2-1-6': {"id":"cosmic-essence-thunder","name":"Cosmic Essence Thunder","emoji":"🎭","tier":10},
      'combo-2-1-7': {"id":"cosmic-essence-lightning","name":"Cosmic Essence Lightning","emoji":"🎬","tier":10},
      'combo-2-1-8': {"id":"cosmic-essence-shadow","name":"Cosmic Essence Shadow","emoji":"🎤","tier":10},
      'combo-2-1-9': {"id":"cosmic-essence-light","name":"Cosmic Essence Light","emoji":"🎧","tier":10},
      'combo-2-1-10': {"id":"cosmic-essence-darkness","name":"Cosmic Essence Darkness","emoji":"✨","tier":10},
      'combo-2-1-11': {"id":"cosmic-essence-radiance","name":"Cosmic Essence Radiance","emoji":"⭐","tier":10},
      'combo-2-1-12': {"id":"cosmic-essence-brilliance","name":"Cosmic Essence Brilliance","emoji":"🌟","tier":10},
      'combo-2-1-13': {"id":"cosmic-essence-glory","name":"Cosmic Essence Glory","emoji":"💫","tier":10},
      'combo-2-1-14': {"id":"cosmic-essence-majesty","name":"Cosmic Essence Majesty","emoji":"🔮","tier":10},
      'combo-2-1-15': {"id":"cosmic-essence-splendor","name":"Cosmic Essence Splendor","emoji":"🎆","tier":10},
      'combo-2-1-16': {"id":"cosmic-essence-magnificence","name":"Cosmic Essence Magnificence","emoji":"🎇","tier":10},
      'combo-2-1-17': {"id":"cosmic-essence-grandeur","name":"Cosmic Essence Grandeur","emoji":"🌈","tier":10},
      'combo-2-1-18': {"id":"cosmic-essence-nobility","name":"Cosmic Essence Nobility","emoji":"🔥","tier":10},
      'combo-2-1-19': {"id":"cosmic-essence-royalty","name":"Cosmic Essence Royalty","emoji":"💧","tier":10},
      'combo-2-2-0': {"id":"cosmic-spirit-flame","name":"Cosmic Spirit Flame","emoji":"🌊","tier":10},
      'combo-2-2-1': {"id":"cosmic-spirit-frost","name":"Cosmic Spirit Frost","emoji":"⚡","tier":10},
      'combo-2-2-2': {"id":"cosmic-spirit-storm","name":"Cosmic Spirit Storm","emoji":"❄️","tier":10},
      'combo-2-2-3': {"id":"cosmic-spirit-quake","name":"Cosmic Spirit Quake","emoji":"🌪️","tier":10},
      'combo-2-2-4': {"id":"cosmic-spirit-tide","name":"Cosmic Spirit Tide","emoji":"☄️","tier":10},
      'combo-2-2-5': {"id":"cosmic-spirit-wind","name":"Cosmic Spirit Wind","emoji":"💎","tier":10},
      'combo-2-2-6': {"id":"cosmic-spirit-thunder","name":"Cosmic Spirit Thunder","emoji":"👑","tier":10},
      'combo-2-2-7': {"id":"cosmic-spirit-lightning","name":"Cosmic Spirit Lightning","emoji":"🗝️","tier":10},
      'combo-2-2-8': {"id":"cosmic-spirit-shadow","name":"Cosmic Spirit Shadow","emoji":"🔑","tier":10},
      'combo-2-2-9': {"id":"cosmic-spirit-light","name":"Cosmic Spirit Light","emoji":"🎭","tier":10},
      'combo-2-2-10': {"id":"cosmic-spirit-darkness","name":"Cosmic Spirit Darkness","emoji":"🎨","tier":10},
      'combo-2-2-11': {"id":"cosmic-spirit-radiance","name":"Cosmic Spirit Radiance","emoji":"🎪","tier":10},
      'combo-2-2-12': {"id":"cosmic-spirit-brilliance","name":"Cosmic Spirit Brilliance","emoji":"🎢","tier":10},
      'combo-2-2-13': {"id":"cosmic-spirit-glory","name":"Cosmic Spirit Glory","emoji":"🎡","tier":10},
      'combo-2-2-14': {"id":"cosmic-spirit-majesty","name":"Cosmic Spirit Majesty","emoji":"🎠","tier":10},
      'combo-2-2-15': {"id":"cosmic-spirit-splendor","name":"Cosmic Spirit Splendor","emoji":"🎪","tier":10},
      'combo-2-2-16': {"id":"cosmic-spirit-magnificence","name":"Cosmic Spirit Magnificence","emoji":"🎭","tier":10},
      'combo-2-2-17': {"id":"cosmic-spirit-grandeur","name":"Cosmic Spirit Grandeur","emoji":"🎬","tier":10},
      'combo-2-2-18': {"id":"cosmic-spirit-nobility","name":"Cosmic Spirit Nobility","emoji":"🎤","tier":10},
      'combo-2-2-19': {"id":"cosmic-spirit-royalty","name":"Cosmic Spirit Royalty","emoji":"🎧","tier":10},
      'combo-2-3-0': {"id":"cosmic-force-flame","name":"Cosmic Force Flame","emoji":"✨","tier":10},
      'combo-2-3-1': {"id":"cosmic-force-frost","name":"Cosmic Force Frost","emoji":"⭐","tier":10},
      'combo-2-3-2': {"id":"cosmic-force-storm","name":"Cosmic Force Storm","emoji":"🌟","tier":10},
      'combo-2-3-3': {"id":"cosmic-force-quake","name":"Cosmic Force Quake","emoji":"💫","tier":10},
      'combo-2-3-4': {"id":"cosmic-force-tide","name":"Cosmic Force Tide","emoji":"🔮","tier":10},
      'combo-2-3-5': {"id":"cosmic-force-wind","name":"Cosmic Force Wind","emoji":"🎆","tier":10},
      'combo-2-3-6': {"id":"cosmic-force-thunder","name":"Cosmic Force Thunder","emoji":"🎇","tier":10},
      'combo-2-3-7': {"id":"cosmic-force-lightning","name":"Cosmic Force Lightning","emoji":"🌈","tier":10},
      'combo-2-3-8': {"id":"cosmic-force-shadow","name":"Cosmic Force Shadow","emoji":"🔥","tier":10},
      'combo-2-3-9': {"id":"cosmic-force-light","name":"Cosmic Force Light","emoji":"💧","tier":10},
      'combo-2-3-10': {"id":"cosmic-force-darkness","name":"Cosmic Force Darkness","emoji":"🌊","tier":10},
      'combo-2-3-11': {"id":"cosmic-force-radiance","name":"Cosmic Force Radiance","emoji":"⚡","tier":10},
      'combo-2-3-12': {"id":"cosmic-force-brilliance","name":"Cosmic Force Brilliance","emoji":"❄️","tier":10},
      'combo-2-3-13': {"id":"cosmic-force-glory","name":"Cosmic Force Glory","emoji":"🌪️","tier":10},
      'combo-2-3-14': {"id":"cosmic-force-majesty","name":"Cosmic Force Majesty","emoji":"☄️","tier":10},
      'combo-2-3-15': {"id":"cosmic-force-splendor","name":"Cosmic Force Splendor","emoji":"💎","tier":10},
      'combo-2-3-16': {"id":"cosmic-force-magnificence","name":"Cosmic Force Magnificence","emoji":"👑","tier":10},
      'combo-2-3-17': {"id":"cosmic-force-grandeur","name":"Cosmic Force Grandeur","emoji":"🗝️","tier":10},
      'combo-2-3-18': {"id":"cosmic-force-nobility","name":"Cosmic Force Nobility","emoji":"🔑","tier":10},
      'combo-2-3-19': {"id":"cosmic-force-royalty","name":"Cosmic Force Royalty","emoji":"🎭","tier":10},
      'combo-2-4-0': {"id":"cosmic-energy-flame","name":"Cosmic Energy Flame","emoji":"🎨","tier":10},
      'combo-2-4-1': {"id":"cosmic-energy-frost","name":"Cosmic Energy Frost","emoji":"🎪","tier":10},
      'combo-2-4-2': {"id":"cosmic-energy-storm","name":"Cosmic Energy Storm","emoji":"🎢","tier":10},
      'combo-2-4-3': {"id":"cosmic-energy-quake","name":"Cosmic Energy Quake","emoji":"🎡","tier":10},
      'combo-2-4-4': {"id":"cosmic-energy-tide","name":"Cosmic Energy Tide","emoji":"🎠","tier":10},
      'combo-2-4-5': {"id":"cosmic-energy-wind","name":"Cosmic Energy Wind","emoji":"🎪","tier":10},
      'combo-2-4-6': {"id":"cosmic-energy-thunder","name":"Cosmic Energy Thunder","emoji":"🎭","tier":10},
      'combo-2-4-7': {"id":"cosmic-energy-lightning","name":"Cosmic Energy Lightning","emoji":"🎬","tier":10},
      'combo-2-4-8': {"id":"cosmic-energy-shadow","name":"Cosmic Energy Shadow","emoji":"🎤","tier":10},
      'combo-2-4-9': {"id":"cosmic-energy-light","name":"Cosmic Energy Light","emoji":"🎧","tier":10},
      'combo-2-4-10': {"id":"cosmic-energy-darkness","name":"Cosmic Energy Darkness","emoji":"✨","tier":10},
      'combo-2-4-11': {"id":"cosmic-energy-radiance","name":"Cosmic Energy Radiance","emoji":"⭐","tier":10},
      'combo-2-4-12': {"id":"cosmic-energy-brilliance","name":"Cosmic Energy Brilliance","emoji":"🌟","tier":10},
      'combo-2-4-13': {"id":"cosmic-energy-glory","name":"Cosmic Energy Glory","emoji":"💫","tier":10},
      'combo-2-4-14': {"id":"cosmic-energy-majesty","name":"Cosmic Energy Majesty","emoji":"🔮","tier":10},
      'combo-2-4-15': {"id":"cosmic-energy-splendor","name":"Cosmic Energy Splendor","emoji":"🎆","tier":10},
      'combo-2-4-16': {"id":"cosmic-energy-magnificence","name":"Cosmic Energy Magnificence","emoji":"🎇","tier":10},
      'combo-2-4-17': {"id":"cosmic-energy-grandeur","name":"Cosmic Energy Grandeur","emoji":"🌈","tier":10},
      'combo-2-4-18': {"id":"cosmic-energy-nobility","name":"Cosmic Energy Nobility","emoji":"🔥","tier":10},
      'combo-2-4-19': {"id":"cosmic-energy-royalty","name":"Cosmic Energy Royalty","emoji":"💧","tier":10},
      'combo-2-5-0': {"id":"cosmic-power-flame","name":"Cosmic Power Flame","emoji":"🌊","tier":10},
      'combo-2-5-1': {"id":"cosmic-power-frost","name":"Cosmic Power Frost","emoji":"⚡","tier":10},
      'combo-2-5-2': {"id":"cosmic-power-storm","name":"Cosmic Power Storm","emoji":"❄️","tier":10},
      'combo-2-5-3': {"id":"cosmic-power-quake","name":"Cosmic Power Quake","emoji":"🌪️","tier":10},
      'combo-2-5-4': {"id":"cosmic-power-tide","name":"Cosmic Power Tide","emoji":"☄️","tier":10},
      'combo-2-5-5': {"id":"cosmic-power-wind","name":"Cosmic Power Wind","emoji":"💎","tier":10},
      'combo-2-5-6': {"id":"cosmic-power-thunder","name":"Cosmic Power Thunder","emoji":"👑","tier":10},
      'combo-2-5-7': {"id":"cosmic-power-lightning","name":"Cosmic Power Lightning","emoji":"🗝️","tier":10},
      'combo-2-5-8': {"id":"cosmic-power-shadow","name":"Cosmic Power Shadow","emoji":"🔑","tier":10},
      'combo-2-5-9': {"id":"cosmic-power-light","name":"Cosmic Power Light","emoji":"🎭","tier":10},
      'combo-2-5-10': {"id":"cosmic-power-darkness","name":"Cosmic Power Darkness","emoji":"🎨","tier":10},
      'combo-2-5-11': {"id":"cosmic-power-radiance","name":"Cosmic Power Radiance","emoji":"🎪","tier":10},
      'combo-2-5-12': {"id":"cosmic-power-brilliance","name":"Cosmic Power Brilliance","emoji":"🎢","tier":10},
      'combo-2-5-13': {"id":"cosmic-power-glory","name":"Cosmic Power Glory","emoji":"🎡","tier":10},
      'combo-2-5-14': {"id":"cosmic-power-majesty","name":"Cosmic Power Majesty","emoji":"🎠","tier":10},
      'combo-2-5-15': {"id":"cosmic-power-splendor","name":"Cosmic Power Splendor","emoji":"🎪","tier":10},
      'combo-2-5-16': {"id":"cosmic-power-magnificence","name":"Cosmic Power Magnificence","emoji":"🎭","tier":10},
      'combo-2-5-17': {"id":"cosmic-power-grandeur","name":"Cosmic Power Grandeur","emoji":"🎬","tier":10},
      'combo-2-5-18': {"id":"cosmic-power-nobility","name":"Cosmic Power Nobility","emoji":"🎤","tier":10},
      'combo-2-5-19': {"id":"cosmic-power-royalty","name":"Cosmic Power Royalty","emoji":"🎧","tier":10},
      'combo-2-6-0': {"id":"cosmic-aura-flame","name":"Cosmic Aura Flame","emoji":"✨","tier":10},
      'combo-2-6-1': {"id":"cosmic-aura-frost","name":"Cosmic Aura Frost","emoji":"⭐","tier":10},
      'combo-2-6-2': {"id":"cosmic-aura-storm","name":"Cosmic Aura Storm","emoji":"🌟","tier":10},
      'combo-2-6-3': {"id":"cosmic-aura-quake","name":"Cosmic Aura Quake","emoji":"💫","tier":10},
      'combo-2-6-4': {"id":"cosmic-aura-tide","name":"Cosmic Aura Tide","emoji":"🔮","tier":10},
      'combo-2-6-5': {"id":"cosmic-aura-wind","name":"Cosmic Aura Wind","emoji":"🎆","tier":10},
      'combo-2-6-6': {"id":"cosmic-aura-thunder","name":"Cosmic Aura Thunder","emoji":"🎇","tier":10},
      'combo-2-6-7': {"id":"cosmic-aura-lightning","name":"Cosmic Aura Lightning","emoji":"🌈","tier":10},
      'combo-2-6-8': {"id":"cosmic-aura-shadow","name":"Cosmic Aura Shadow","emoji":"🔥","tier":10},
      'combo-2-6-9': {"id":"cosmic-aura-light","name":"Cosmic Aura Light","emoji":"💧","tier":10},
      'combo-2-6-10': {"id":"cosmic-aura-darkness","name":"Cosmic Aura Darkness","emoji":"🌊","tier":10},
      'combo-2-6-11': {"id":"cosmic-aura-radiance","name":"Cosmic Aura Radiance","emoji":"⚡","tier":10},
      'combo-2-6-12': {"id":"cosmic-aura-brilliance","name":"Cosmic Aura Brilliance","emoji":"❄️","tier":10},
      'combo-2-6-13': {"id":"cosmic-aura-glory","name":"Cosmic Aura Glory","emoji":"🌪️","tier":10},
      'combo-2-6-14': {"id":"cosmic-aura-majesty","name":"Cosmic Aura Majesty","emoji":"☄️","tier":10},
      'combo-2-6-15': {"id":"cosmic-aura-splendor","name":"Cosmic Aura Splendor","emoji":"💎","tier":10},
      'combo-2-6-16': {"id":"cosmic-aura-magnificence","name":"Cosmic Aura Magnificence","emoji":"👑","tier":10},
      'combo-2-6-17': {"id":"cosmic-aura-grandeur","name":"Cosmic Aura Grandeur","emoji":"🗝️","tier":10},
      'combo-2-6-18': {"id":"cosmic-aura-nobility","name":"Cosmic Aura Nobility","emoji":"🔑","tier":10},
      'combo-2-6-19': {"id":"cosmic-aura-royalty","name":"Cosmic Aura Royalty","emoji":"🎭","tier":10},
      'combo-2-7-0': {"id":"cosmic-soul-flame","name":"Cosmic Soul Flame","emoji":"🎨","tier":10},
      'combo-2-7-1': {"id":"cosmic-soul-frost","name":"Cosmic Soul Frost","emoji":"🎪","tier":10},
      'combo-2-7-2': {"id":"cosmic-soul-storm","name":"Cosmic Soul Storm","emoji":"🎢","tier":10},
      'combo-2-7-3': {"id":"cosmic-soul-quake","name":"Cosmic Soul Quake","emoji":"🎡","tier":10},
      'combo-2-7-4': {"id":"cosmic-soul-tide","name":"Cosmic Soul Tide","emoji":"🎠","tier":10},
      'combo-2-7-5': {"id":"cosmic-soul-wind","name":"Cosmic Soul Wind","emoji":"🎪","tier":10},
      'combo-2-7-6': {"id":"cosmic-soul-thunder","name":"Cosmic Soul Thunder","emoji":"🎭","tier":10},
      'combo-2-7-7': {"id":"cosmic-soul-lightning","name":"Cosmic Soul Lightning","emoji":"🎬","tier":10},
      'combo-2-7-8': {"id":"cosmic-soul-shadow","name":"Cosmic Soul Shadow","emoji":"🎤","tier":10},
      'combo-2-7-9': {"id":"cosmic-soul-light","name":"Cosmic Soul Light","emoji":"🎧","tier":10},
      'combo-2-7-10': {"id":"cosmic-soul-darkness","name":"Cosmic Soul Darkness","emoji":"✨","tier":10},
      'combo-2-7-11': {"id":"cosmic-soul-radiance","name":"Cosmic Soul Radiance","emoji":"⭐","tier":10},
      'combo-2-7-12': {"id":"cosmic-soul-brilliance","name":"Cosmic Soul Brilliance","emoji":"🌟","tier":10},
      'combo-2-7-13': {"id":"cosmic-soul-glory","name":"Cosmic Soul Glory","emoji":"💫","tier":10},
      'combo-2-7-14': {"id":"cosmic-soul-majesty","name":"Cosmic Soul Majesty","emoji":"🔮","tier":10},
      'combo-2-7-15': {"id":"cosmic-soul-splendor","name":"Cosmic Soul Splendor","emoji":"🎆","tier":10},
      'combo-2-7-16': {"id":"cosmic-soul-magnificence","name":"Cosmic Soul Magnificence","emoji":"🎇","tier":10},
      'combo-2-7-17': {"id":"cosmic-soul-grandeur","name":"Cosmic Soul Grandeur","emoji":"🌈","tier":10},
      'combo-2-7-18': {"id":"cosmic-soul-nobility","name":"Cosmic Soul Nobility","emoji":"🔥","tier":10},
      'combo-2-7-19': {"id":"cosmic-soul-royalty","name":"Cosmic Soul Royalty","emoji":"💧","tier":10},
      'combo-2-8-0': {"id":"cosmic-heart-flame","name":"Cosmic Heart Flame","emoji":"🌊","tier":10},
      'combo-2-8-1': {"id":"cosmic-heart-frost","name":"Cosmic Heart Frost","emoji":"⚡","tier":10},
      'combo-2-8-2': {"id":"cosmic-heart-storm","name":"Cosmic Heart Storm","emoji":"❄️","tier":10},
      'combo-2-8-3': {"id":"cosmic-heart-quake","name":"Cosmic Heart Quake","emoji":"🌪️","tier":10},
      'combo-2-8-4': {"id":"cosmic-heart-tide","name":"Cosmic Heart Tide","emoji":"☄️","tier":10},
      'combo-2-8-5': {"id":"cosmic-heart-wind","name":"Cosmic Heart Wind","emoji":"💎","tier":10},
      'combo-2-8-6': {"id":"cosmic-heart-thunder","name":"Cosmic Heart Thunder","emoji":"👑","tier":10},
      'combo-2-8-7': {"id":"cosmic-heart-lightning","name":"Cosmic Heart Lightning","emoji":"🗝️","tier":10},
      'combo-2-8-8': {"id":"cosmic-heart-shadow","name":"Cosmic Heart Shadow","emoji":"🔑","tier":10},
      'combo-2-8-9': {"id":"cosmic-heart-light","name":"Cosmic Heart Light","emoji":"🎭","tier":10},
      'combo-2-8-10': {"id":"cosmic-heart-darkness","name":"Cosmic Heart Darkness","emoji":"🎨","tier":10},
      'combo-2-8-11': {"id":"cosmic-heart-radiance","name":"Cosmic Heart Radiance","emoji":"🎪","tier":10},
      'combo-2-8-12': {"id":"cosmic-heart-brilliance","name":"Cosmic Heart Brilliance","emoji":"🎢","tier":10},
      'combo-2-8-13': {"id":"cosmic-heart-glory","name":"Cosmic Heart Glory","emoji":"🎡","tier":10},
      'combo-2-8-14': {"id":"cosmic-heart-majesty","name":"Cosmic Heart Majesty","emoji":"🎠","tier":10},
      'combo-2-8-15': {"id":"cosmic-heart-splendor","name":"Cosmic Heart Splendor","emoji":"🎪","tier":10},
      'combo-2-8-16': {"id":"cosmic-heart-magnificence","name":"Cosmic Heart Magnificence","emoji":"🎭","tier":10},
      'combo-2-8-17': {"id":"cosmic-heart-grandeur","name":"Cosmic Heart Grandeur","emoji":"🎬","tier":10},
      'combo-2-8-18': {"id":"cosmic-heart-nobility","name":"Cosmic Heart Nobility","emoji":"🎤","tier":10},
      'combo-2-8-19': {"id":"cosmic-heart-royalty","name":"Cosmic Heart Royalty","emoji":"🎧","tier":10},
      'combo-2-9-0': {"id":"cosmic-core-flame","name":"Cosmic Core Flame","emoji":"✨","tier":10},
      'combo-2-9-1': {"id":"cosmic-core-frost","name":"Cosmic Core Frost","emoji":"⭐","tier":10},
      'combo-2-9-2': {"id":"cosmic-core-storm","name":"Cosmic Core Storm","emoji":"🌟","tier":10},
      'combo-2-9-3': {"id":"cosmic-core-quake","name":"Cosmic Core Quake","emoji":"💫","tier":10},
      'combo-2-9-4': {"id":"cosmic-core-tide","name":"Cosmic Core Tide","emoji":"🔮","tier":10},
      'combo-2-9-5': {"id":"cosmic-core-wind","name":"Cosmic Core Wind","emoji":"🎆","tier":10},
      'combo-2-9-6': {"id":"cosmic-core-thunder","name":"Cosmic Core Thunder","emoji":"🎇","tier":10},
      'combo-2-9-7': {"id":"cosmic-core-lightning","name":"Cosmic Core Lightning","emoji":"🌈","tier":10},
      'combo-2-9-8': {"id":"cosmic-core-shadow","name":"Cosmic Core Shadow","emoji":"🔥","tier":10},
      'combo-2-9-9': {"id":"cosmic-core-light","name":"Cosmic Core Light","emoji":"💧","tier":10},
      'combo-2-9-10': {"id":"cosmic-core-darkness","name":"Cosmic Core Darkness","emoji":"🌊","tier":10},
      'combo-2-9-11': {"id":"cosmic-core-radiance","name":"Cosmic Core Radiance","emoji":"⚡","tier":10},
      'combo-2-9-12': {"id":"cosmic-core-brilliance","name":"Cosmic Core Brilliance","emoji":"❄️","tier":10},
      'combo-2-9-13': {"id":"cosmic-core-glory","name":"Cosmic Core Glory","emoji":"🌪️","tier":10},
      'combo-2-9-14': {"id":"cosmic-core-majesty","name":"Cosmic Core Majesty","emoji":"☄️","tier":10},
      'combo-2-9-15': {"id":"cosmic-core-splendor","name":"Cosmic Core Splendor","emoji":"💎","tier":10},
      'combo-2-9-16': {"id":"cosmic-core-magnificence","name":"Cosmic Core Magnificence","emoji":"👑","tier":10},
      'combo-2-9-17': {"id":"cosmic-core-grandeur","name":"Cosmic Core Grandeur","emoji":"🗝️","tier":10},
      'combo-2-9-18': {"id":"cosmic-core-nobility","name":"Cosmic Core Nobility","emoji":"🔑","tier":10},
      'combo-2-9-19': {"id":"cosmic-core-royalty","name":"Cosmic Core Royalty","emoji":"🎭","tier":10},
      'combo-2-10-0': {"id":"cosmic-nexus-flame","name":"Cosmic Nexus Flame","emoji":"🎨","tier":10},
      'combo-2-10-1': {"id":"cosmic-nexus-frost","name":"Cosmic Nexus Frost","emoji":"🎪","tier":10},
      'combo-2-10-2': {"id":"cosmic-nexus-storm","name":"Cosmic Nexus Storm","emoji":"🎢","tier":10},
      'combo-2-10-3': {"id":"cosmic-nexus-quake","name":"Cosmic Nexus Quake","emoji":"🎡","tier":10},
      'combo-2-10-4': {"id":"cosmic-nexus-tide","name":"Cosmic Nexus Tide","emoji":"🎠","tier":10},
      'combo-2-10-5': {"id":"cosmic-nexus-wind","name":"Cosmic Nexus Wind","emoji":"🎪","tier":10},
      'combo-2-10-6': {"id":"cosmic-nexus-thunder","name":"Cosmic Nexus Thunder","emoji":"🎭","tier":10},
      'combo-2-10-7': {"id":"cosmic-nexus-lightning","name":"Cosmic Nexus Lightning","emoji":"🎬","tier":10},
      'combo-2-10-8': {"id":"cosmic-nexus-shadow","name":"Cosmic Nexus Shadow","emoji":"🎤","tier":10},
      'combo-2-10-9': {"id":"cosmic-nexus-light","name":"Cosmic Nexus Light","emoji":"🎧","tier":10},
      'combo-2-10-10': {"id":"cosmic-nexus-darkness","name":"Cosmic Nexus Darkness","emoji":"✨","tier":10},
      'combo-2-10-11': {"id":"cosmic-nexus-radiance","name":"Cosmic Nexus Radiance","emoji":"⭐","tier":10},
      'combo-2-10-12': {"id":"cosmic-nexus-brilliance","name":"Cosmic Nexus Brilliance","emoji":"🌟","tier":10},
      'combo-2-10-13': {"id":"cosmic-nexus-glory","name":"Cosmic Nexus Glory","emoji":"💫","tier":10},
      'combo-2-10-14': {"id":"cosmic-nexus-majesty","name":"Cosmic Nexus Majesty","emoji":"🔮","tier":10},
      'combo-2-10-15': {"id":"cosmic-nexus-splendor","name":"Cosmic Nexus Splendor","emoji":"🎆","tier":10},
      'combo-2-10-16': {"id":"cosmic-nexus-magnificence","name":"Cosmic Nexus Magnificence","emoji":"🎇","tier":10},
      'combo-2-10-17': {"id":"cosmic-nexus-grandeur","name":"Cosmic Nexus Grandeur","emoji":"🌈","tier":10},
      'combo-2-10-18': {"id":"cosmic-nexus-nobility","name":"Cosmic Nexus Nobility","emoji":"🔥","tier":10},
      'combo-2-10-19': {"id":"cosmic-nexus-royalty","name":"Cosmic Nexus Royalty","emoji":"💧","tier":10},
      'combo-2-11-0': {"id":"cosmic-vortex-flame","name":"Cosmic Vortex Flame","emoji":"🌊","tier":10},
      'combo-2-11-1': {"id":"cosmic-vortex-frost","name":"Cosmic Vortex Frost","emoji":"⚡","tier":10},
      'combo-2-11-2': {"id":"cosmic-vortex-storm","name":"Cosmic Vortex Storm","emoji":"❄️","tier":10},
      'combo-2-11-3': {"id":"cosmic-vortex-quake","name":"Cosmic Vortex Quake","emoji":"🌪️","tier":10},
      'combo-2-11-4': {"id":"cosmic-vortex-tide","name":"Cosmic Vortex Tide","emoji":"☄️","tier":10},
      'combo-2-11-5': {"id":"cosmic-vortex-wind","name":"Cosmic Vortex Wind","emoji":"💎","tier":10},
      'combo-2-11-6': {"id":"cosmic-vortex-thunder","name":"Cosmic Vortex Thunder","emoji":"👑","tier":10},
      'combo-2-11-7': {"id":"cosmic-vortex-lightning","name":"Cosmic Vortex Lightning","emoji":"🗝️","tier":10},
      'combo-2-11-8': {"id":"cosmic-vortex-shadow","name":"Cosmic Vortex Shadow","emoji":"🔑","tier":10},
      'combo-2-11-9': {"id":"cosmic-vortex-light","name":"Cosmic Vortex Light","emoji":"🎭","tier":10},
      'combo-2-11-10': {"id":"cosmic-vortex-darkness","name":"Cosmic Vortex Darkness","emoji":"🎨","tier":10},
      'combo-2-11-11': {"id":"cosmic-vortex-radiance","name":"Cosmic Vortex Radiance","emoji":"🎪","tier":10},
      'combo-2-11-12': {"id":"cosmic-vortex-brilliance","name":"Cosmic Vortex Brilliance","emoji":"🎢","tier":10},
      'combo-2-11-13': {"id":"cosmic-vortex-glory","name":"Cosmic Vortex Glory","emoji":"🎡","tier":10},
      'combo-2-11-14': {"id":"cosmic-vortex-majesty","name":"Cosmic Vortex Majesty","emoji":"🎠","tier":10},
      'combo-2-11-15': {"id":"cosmic-vortex-splendor","name":"Cosmic Vortex Splendor","emoji":"🎪","tier":10},
      'combo-2-11-16': {"id":"cosmic-vortex-magnificence","name":"Cosmic Vortex Magnificence","emoji":"🎭","tier":10},
      'combo-2-11-17': {"id":"cosmic-vortex-grandeur","name":"Cosmic Vortex Grandeur","emoji":"🎬","tier":10},
      'combo-2-11-18': {"id":"cosmic-vortex-nobility","name":"Cosmic Vortex Nobility","emoji":"🎤","tier":10},
      'combo-2-11-19': {"id":"cosmic-vortex-royalty","name":"Cosmic Vortex Royalty","emoji":"🎧","tier":10},
      'combo-2-12-0': {"id":"cosmic-portal-flame","name":"Cosmic Portal Flame","emoji":"✨","tier":10},
      'combo-2-12-1': {"id":"cosmic-portal-frost","name":"Cosmic Portal Frost","emoji":"⭐","tier":10},
      'combo-2-12-2': {"id":"cosmic-portal-storm","name":"Cosmic Portal Storm","emoji":"🌟","tier":10},
      'combo-2-12-3': {"id":"cosmic-portal-quake","name":"Cosmic Portal Quake","emoji":"💫","tier":10},
      'combo-2-12-4': {"id":"cosmic-portal-tide","name":"Cosmic Portal Tide","emoji":"🔮","tier":10},
      'combo-2-12-5': {"id":"cosmic-portal-wind","name":"Cosmic Portal Wind","emoji":"🎆","tier":10},
      'combo-2-12-6': {"id":"cosmic-portal-thunder","name":"Cosmic Portal Thunder","emoji":"🎇","tier":10},
      'combo-2-12-7': {"id":"cosmic-portal-lightning","name":"Cosmic Portal Lightning","emoji":"🌈","tier":10},
      'combo-2-12-8': {"id":"cosmic-portal-shadow","name":"Cosmic Portal Shadow","emoji":"🔥","tier":10},
      'combo-2-12-9': {"id":"cosmic-portal-light","name":"Cosmic Portal Light","emoji":"💧","tier":10},
      'combo-2-12-10': {"id":"cosmic-portal-darkness","name":"Cosmic Portal Darkness","emoji":"🌊","tier":10},
      'combo-2-12-11': {"id":"cosmic-portal-radiance","name":"Cosmic Portal Radiance","emoji":"⚡","tier":10},
      'combo-2-12-12': {"id":"cosmic-portal-brilliance","name":"Cosmic Portal Brilliance","emoji":"❄️","tier":10},
      'combo-2-12-13': {"id":"cosmic-portal-glory","name":"Cosmic Portal Glory","emoji":"🌪️","tier":10},
      'combo-2-12-14': {"id":"cosmic-portal-majesty","name":"Cosmic Portal Majesty","emoji":"☄️","tier":10},
      'combo-2-12-15': {"id":"cosmic-portal-splendor","name":"Cosmic Portal Splendor","emoji":"💎","tier":10},
      'combo-2-12-16': {"id":"cosmic-portal-magnificence","name":"Cosmic Portal Magnificence","emoji":"👑","tier":10},
      'combo-2-12-17': {"id":"cosmic-portal-grandeur","name":"Cosmic Portal Grandeur","emoji":"🗝️","tier":10},
      'combo-2-12-18': {"id":"cosmic-portal-nobility","name":"Cosmic Portal Nobility","emoji":"🔑","tier":10},
      'combo-2-12-19': {"id":"cosmic-portal-royalty","name":"Cosmic Portal Royalty","emoji":"🎭","tier":10},
      'combo-2-13-0': {"id":"cosmic-gateway-flame","name":"Cosmic Gateway Flame","emoji":"🎨","tier":10},
      'combo-2-13-1': {"id":"cosmic-gateway-frost","name":"Cosmic Gateway Frost","emoji":"🎪","tier":10},
      'combo-2-13-2': {"id":"cosmic-gateway-storm","name":"Cosmic Gateway Storm","emoji":"🎢","tier":10},
      'combo-2-13-3': {"id":"cosmic-gateway-quake","name":"Cosmic Gateway Quake","emoji":"🎡","tier":10},
      'combo-2-13-4': {"id":"cosmic-gateway-tide","name":"Cosmic Gateway Tide","emoji":"🎠","tier":10},
      'combo-2-13-5': {"id":"cosmic-gateway-wind","name":"Cosmic Gateway Wind","emoji":"🎪","tier":10},
      'combo-2-13-6': {"id":"cosmic-gateway-thunder","name":"Cosmic Gateway Thunder","emoji":"🎭","tier":10},
      'combo-2-13-7': {"id":"cosmic-gateway-lightning","name":"Cosmic Gateway Lightning","emoji":"🎬","tier":10},
      'combo-2-13-8': {"id":"cosmic-gateway-shadow","name":"Cosmic Gateway Shadow","emoji":"🎤","tier":10},
      'combo-2-13-9': {"id":"cosmic-gateway-light","name":"Cosmic Gateway Light","emoji":"🎧","tier":10},
      'combo-2-13-10': {"id":"cosmic-gateway-darkness","name":"Cosmic Gateway Darkness","emoji":"✨","tier":10},
      'combo-2-13-11': {"id":"cosmic-gateway-radiance","name":"Cosmic Gateway Radiance","emoji":"⭐","tier":10},
      'combo-2-13-12': {"id":"cosmic-gateway-brilliance","name":"Cosmic Gateway Brilliance","emoji":"🌟","tier":10},
      'combo-2-13-13': {"id":"cosmic-gateway-glory","name":"Cosmic Gateway Glory","emoji":"💫","tier":10},
      'combo-2-13-14': {"id":"cosmic-gateway-majesty","name":"Cosmic Gateway Majesty","emoji":"🔮","tier":10},
      'combo-2-13-15': {"id":"cosmic-gateway-splendor","name":"Cosmic Gateway Splendor","emoji":"🎆","tier":10},
      'combo-2-13-16': {"id":"cosmic-gateway-magnificence","name":"Cosmic Gateway Magnificence","emoji":"🎇","tier":10},
      'combo-2-13-17': {"id":"cosmic-gateway-grandeur","name":"Cosmic Gateway Grandeur","emoji":"🌈","tier":10},
      'combo-2-13-18': {"id":"cosmic-gateway-nobility","name":"Cosmic Gateway Nobility","emoji":"🔥","tier":10},
      'combo-2-13-19': {"id":"cosmic-gateway-royalty","name":"Cosmic Gateway Royalty","emoji":"💧","tier":10},
      'combo-2-14-0': {"id":"cosmic-rift-flame","name":"Cosmic Rift Flame","emoji":"🌊","tier":10},
      'combo-2-14-1': {"id":"cosmic-rift-frost","name":"Cosmic Rift Frost","emoji":"⚡","tier":10},
      'combo-2-14-2': {"id":"cosmic-rift-storm","name":"Cosmic Rift Storm","emoji":"❄️","tier":10},
      'combo-2-14-3': {"id":"cosmic-rift-quake","name":"Cosmic Rift Quake","emoji":"🌪️","tier":10},
      'combo-2-14-4': {"id":"cosmic-rift-tide","name":"Cosmic Rift Tide","emoji":"☄️","tier":10},
      'combo-2-14-5': {"id":"cosmic-rift-wind","name":"Cosmic Rift Wind","emoji":"💎","tier":10},
      'combo-2-14-6': {"id":"cosmic-rift-thunder","name":"Cosmic Rift Thunder","emoji":"👑","tier":10},
      'combo-2-14-7': {"id":"cosmic-rift-lightning","name":"Cosmic Rift Lightning","emoji":"🗝️","tier":10},
      'combo-2-14-8': {"id":"cosmic-rift-shadow","name":"Cosmic Rift Shadow","emoji":"🔑","tier":10},
      'combo-2-14-9': {"id":"cosmic-rift-light","name":"Cosmic Rift Light","emoji":"🎭","tier":10},
      'combo-2-14-10': {"id":"cosmic-rift-darkness","name":"Cosmic Rift Darkness","emoji":"🎨","tier":10},
      'combo-2-14-11': {"id":"cosmic-rift-radiance","name":"Cosmic Rift Radiance","emoji":"🎪","tier":10},
      'combo-2-14-12': {"id":"cosmic-rift-brilliance","name":"Cosmic Rift Brilliance","emoji":"🎢","tier":10},
      'combo-2-14-13': {"id":"cosmic-rift-glory","name":"Cosmic Rift Glory","emoji":"🎡","tier":10},
      'combo-2-14-14': {"id":"cosmic-rift-majesty","name":"Cosmic Rift Majesty","emoji":"🎠","tier":10},
      'combo-2-14-15': {"id":"cosmic-rift-splendor","name":"Cosmic Rift Splendor","emoji":"🎪","tier":10},
      'combo-2-14-16': {"id":"cosmic-rift-magnificence","name":"Cosmic Rift Magnificence","emoji":"🎭","tier":10},
      'combo-2-14-17': {"id":"cosmic-rift-grandeur","name":"Cosmic Rift Grandeur","emoji":"🎬","tier":10},
      'combo-2-14-18': {"id":"cosmic-rift-nobility","name":"Cosmic Rift Nobility","emoji":"🎤","tier":10},
      'combo-2-14-19': {"id":"cosmic-rift-royalty","name":"Cosmic Rift Royalty","emoji":"🎧","tier":10},
      'combo-2-15-0': {"id":"cosmic-void-flame","name":"Cosmic Void Flame","emoji":"✨","tier":10},
      'combo-2-15-1': {"id":"cosmic-void-frost","name":"Cosmic Void Frost","emoji":"⭐","tier":10},
      'combo-2-15-2': {"id":"cosmic-void-storm","name":"Cosmic Void Storm","emoji":"🌟","tier":10},
      'combo-2-15-3': {"id":"cosmic-void-quake","name":"Cosmic Void Quake","emoji":"💫","tier":10},
      'combo-2-15-4': {"id":"cosmic-void-tide","name":"Cosmic Void Tide","emoji":"🔮","tier":10},
      'combo-2-15-5': {"id":"cosmic-void-wind","name":"Cosmic Void Wind","emoji":"🎆","tier":10},
      'combo-2-15-6': {"id":"cosmic-void-thunder","name":"Cosmic Void Thunder","emoji":"🎇","tier":10},
      'combo-2-15-7': {"id":"cosmic-void-lightning","name":"Cosmic Void Lightning","emoji":"🌈","tier":10},
      'combo-2-15-8': {"id":"cosmic-void-shadow","name":"Cosmic Void Shadow","emoji":"🔥","tier":10},
      'combo-2-15-9': {"id":"cosmic-void-light","name":"Cosmic Void Light","emoji":"💧","tier":10},
      'combo-2-15-10': {"id":"cosmic-void-darkness","name":"Cosmic Void Darkness","emoji":"🌊","tier":10},
      'combo-2-15-11': {"id":"cosmic-void-radiance","name":"Cosmic Void Radiance","emoji":"⚡","tier":10},
      'combo-2-15-12': {"id":"cosmic-void-brilliance","name":"Cosmic Void Brilliance","emoji":"❄️","tier":10},
      'combo-2-15-13': {"id":"cosmic-void-glory","name":"Cosmic Void Glory","emoji":"🌪️","tier":10},
      'combo-2-15-14': {"id":"cosmic-void-majesty","name":"Cosmic Void Majesty","emoji":"☄️","tier":10},
      'combo-2-15-15': {"id":"cosmic-void-splendor","name":"Cosmic Void Splendor","emoji":"💎","tier":10},
      'combo-2-15-16': {"id":"cosmic-void-magnificence","name":"Cosmic Void Magnificence","emoji":"👑","tier":10},
      'combo-2-15-17': {"id":"cosmic-void-grandeur","name":"Cosmic Void Grandeur","emoji":"🗝️","tier":10},
      'combo-2-15-18': {"id":"cosmic-void-nobility","name":"Cosmic Void Nobility","emoji":"🔑","tier":10},
      'combo-2-15-19': {"id":"cosmic-void-royalty","name":"Cosmic Void Royalty","emoji":"🎭","tier":10},
      'combo-2-16-0': {"id":"cosmic-chaos-flame","name":"Cosmic Chaos Flame","emoji":"🎨","tier":10},
      'combo-2-16-1': {"id":"cosmic-chaos-frost","name":"Cosmic Chaos Frost","emoji":"🎪","tier":10},
      'combo-2-16-2': {"id":"cosmic-chaos-storm","name":"Cosmic Chaos Storm","emoji":"🎢","tier":10},
      'combo-2-16-3': {"id":"cosmic-chaos-quake","name":"Cosmic Chaos Quake","emoji":"🎡","tier":10},
      'combo-2-16-4': {"id":"cosmic-chaos-tide","name":"Cosmic Chaos Tide","emoji":"🎠","tier":10},
      'combo-2-16-5': {"id":"cosmic-chaos-wind","name":"Cosmic Chaos Wind","emoji":"🎪","tier":10},
      'combo-2-16-6': {"id":"cosmic-chaos-thunder","name":"Cosmic Chaos Thunder","emoji":"🎭","tier":10},
      'combo-2-16-7': {"id":"cosmic-chaos-lightning","name":"Cosmic Chaos Lightning","emoji":"🎬","tier":10},
      'combo-2-16-8': {"id":"cosmic-chaos-shadow","name":"Cosmic Chaos Shadow","emoji":"🎤","tier":10},
      'combo-2-16-9': {"id":"cosmic-chaos-light","name":"Cosmic Chaos Light","emoji":"🎧","tier":10},
      'combo-2-16-10': {"id":"cosmic-chaos-darkness","name":"Cosmic Chaos Darkness","emoji":"✨","tier":10},
      'combo-2-16-11': {"id":"cosmic-chaos-radiance","name":"Cosmic Chaos Radiance","emoji":"⭐","tier":10},
      'combo-2-16-12': {"id":"cosmic-chaos-brilliance","name":"Cosmic Chaos Brilliance","emoji":"🌟","tier":10},
      'combo-2-16-13': {"id":"cosmic-chaos-glory","name":"Cosmic Chaos Glory","emoji":"💫","tier":10},
      'combo-2-16-14': {"id":"cosmic-chaos-majesty","name":"Cosmic Chaos Majesty","emoji":"🔮","tier":10},
      'combo-2-16-15': {"id":"cosmic-chaos-splendor","name":"Cosmic Chaos Splendor","emoji":"🎆","tier":10},
      'combo-2-16-16': {"id":"cosmic-chaos-magnificence","name":"Cosmic Chaos Magnificence","emoji":"🎇","tier":10},
      'combo-2-16-17': {"id":"cosmic-chaos-grandeur","name":"Cosmic Chaos Grandeur","emoji":"🌈","tier":10},
      'combo-2-16-18': {"id":"cosmic-chaos-nobility","name":"Cosmic Chaos Nobility","emoji":"🔥","tier":10},
      'combo-2-16-19': {"id":"cosmic-chaos-royalty","name":"Cosmic Chaos Royalty","emoji":"💧","tier":10},
      'combo-2-17-0': {"id":"cosmic-order-flame","name":"Cosmic Order Flame","emoji":"🌊","tier":10},
      'combo-2-17-1': {"id":"cosmic-order-frost","name":"Cosmic Order Frost","emoji":"⚡","tier":10},
      'combo-2-17-2': {"id":"cosmic-order-storm","name":"Cosmic Order Storm","emoji":"❄️","tier":10},
      'combo-2-17-3': {"id":"cosmic-order-quake","name":"Cosmic Order Quake","emoji":"🌪️","tier":10},
      'combo-2-17-4': {"id":"cosmic-order-tide","name":"Cosmic Order Tide","emoji":"☄️","tier":10},
      'combo-2-17-5': {"id":"cosmic-order-wind","name":"Cosmic Order Wind","emoji":"💎","tier":10},
      'combo-2-17-6': {"id":"cosmic-order-thunder","name":"Cosmic Order Thunder","emoji":"👑","tier":10},
      'combo-2-17-7': {"id":"cosmic-order-lightning","name":"Cosmic Order Lightning","emoji":"🗝️","tier":10},
      'combo-2-17-8': {"id":"cosmic-order-shadow","name":"Cosmic Order Shadow","emoji":"🔑","tier":10},
      'combo-2-17-9': {"id":"cosmic-order-light","name":"Cosmic Order Light","emoji":"🎭","tier":10},
      'combo-2-17-10': {"id":"cosmic-order-darkness","name":"Cosmic Order Darkness","emoji":"🎨","tier":10},
      'combo-2-17-11': {"id":"cosmic-order-radiance","name":"Cosmic Order Radiance","emoji":"🎪","tier":10},
      'combo-2-17-12': {"id":"cosmic-order-brilliance","name":"Cosmic Order Brilliance","emoji":"🎢","tier":10},
      'combo-2-17-13': {"id":"cosmic-order-glory","name":"Cosmic Order Glory","emoji":"🎡","tier":10},
      'combo-2-17-14': {"id":"cosmic-order-majesty","name":"Cosmic Order Majesty","emoji":"🎠","tier":10},
      'combo-2-17-15': {"id":"cosmic-order-splendor","name":"Cosmic Order Splendor","emoji":"🎪","tier":10},
      'combo-2-17-16': {"id":"cosmic-order-magnificence","name":"Cosmic Order Magnificence","emoji":"🎭","tier":10},
      'combo-2-17-17': {"id":"cosmic-order-grandeur","name":"Cosmic Order Grandeur","emoji":"🎬","tier":10},
      'combo-2-17-18': {"id":"cosmic-order-nobility","name":"Cosmic Order Nobility","emoji":"🎤","tier":10},
      'combo-2-17-19': {"id":"cosmic-order-royalty","name":"Cosmic Order Royalty","emoji":"🎧","tier":10},
      'combo-2-18-0': {"id":"cosmic-balance-flame","name":"Cosmic Balance Flame","emoji":"✨","tier":10},
      'combo-2-18-1': {"id":"cosmic-balance-frost","name":"Cosmic Balance Frost","emoji":"⭐","tier":10},
      'combo-2-18-2': {"id":"cosmic-balance-storm","name":"Cosmic Balance Storm","emoji":"🌟","tier":10},
      'combo-2-18-3': {"id":"cosmic-balance-quake","name":"Cosmic Balance Quake","emoji":"💫","tier":10},
      'combo-2-18-4': {"id":"cosmic-balance-tide","name":"Cosmic Balance Tide","emoji":"🔮","tier":10},
      'combo-2-18-5': {"id":"cosmic-balance-wind","name":"Cosmic Balance Wind","emoji":"🎆","tier":10},
      'combo-2-18-6': {"id":"cosmic-balance-thunder","name":"Cosmic Balance Thunder","emoji":"🎇","tier":10},
      'combo-2-18-7': {"id":"cosmic-balance-lightning","name":"Cosmic Balance Lightning","emoji":"🌈","tier":10},
      'combo-2-18-8': {"id":"cosmic-balance-shadow","name":"Cosmic Balance Shadow","emoji":"🔥","tier":10},
      'combo-2-18-9': {"id":"cosmic-balance-light","name":"Cosmic Balance Light","emoji":"💧","tier":10},
      'combo-2-18-10': {"id":"cosmic-balance-darkness","name":"Cosmic Balance Darkness","emoji":"🌊","tier":10},
      'combo-2-18-11': {"id":"cosmic-balance-radiance","name":"Cosmic Balance Radiance","emoji":"⚡","tier":10},
      'combo-2-18-12': {"id":"cosmic-balance-brilliance","name":"Cosmic Balance Brilliance","emoji":"❄️","tier":10},
      'combo-2-18-13': {"id":"cosmic-balance-glory","name":"Cosmic Balance Glory","emoji":"🌪️","tier":10},
      'combo-2-18-14': {"id":"cosmic-balance-majesty","name":"Cosmic Balance Majesty","emoji":"☄️","tier":10},
      'combo-2-18-15': {"id":"cosmic-balance-splendor","name":"Cosmic Balance Splendor","emoji":"💎","tier":10},
      'combo-2-18-16': {"id":"cosmic-balance-magnificence","name":"Cosmic Balance Magnificence","emoji":"👑","tier":10},
      'combo-2-18-17': {"id":"cosmic-balance-grandeur","name":"Cosmic Balance Grandeur","emoji":"🗝️","tier":10},
      'combo-2-18-18': {"id":"cosmic-balance-nobility","name":"Cosmic Balance Nobility","emoji":"🔑","tier":10},
      'combo-2-18-19': {"id":"cosmic-balance-royalty","name":"Cosmic Balance Royalty","emoji":"🎭","tier":10},
      'combo-2-19-0': {"id":"cosmic-harmony-flame","name":"Cosmic Harmony Flame","emoji":"🎨","tier":10},
      'combo-2-19-1': {"id":"cosmic-harmony-frost","name":"Cosmic Harmony Frost","emoji":"🎪","tier":10},
      'combo-2-19-2': {"id":"cosmic-harmony-storm","name":"Cosmic Harmony Storm","emoji":"🎢","tier":10},
      'combo-2-19-3': {"id":"cosmic-harmony-quake","name":"Cosmic Harmony Quake","emoji":"🎡","tier":10},
      'combo-2-19-4': {"id":"cosmic-harmony-tide","name":"Cosmic Harmony Tide","emoji":"🎠","tier":10},
      'combo-2-19-5': {"id":"cosmic-harmony-wind","name":"Cosmic Harmony Wind","emoji":"🎪","tier":10},
      'combo-2-19-6': {"id":"cosmic-harmony-thunder","name":"Cosmic Harmony Thunder","emoji":"🎭","tier":10},
      'combo-2-19-7': {"id":"cosmic-harmony-lightning","name":"Cosmic Harmony Lightning","emoji":"🎬","tier":10},
      'combo-2-19-8': {"id":"cosmic-harmony-shadow","name":"Cosmic Harmony Shadow","emoji":"🎤","tier":10},
      'combo-2-19-9': {"id":"cosmic-harmony-light","name":"Cosmic Harmony Light","emoji":"🎧","tier":10},
      'combo-2-19-10': {"id":"cosmic-harmony-darkness","name":"Cosmic Harmony Darkness","emoji":"✨","tier":10},
      'combo-2-19-11': {"id":"cosmic-harmony-radiance","name":"Cosmic Harmony Radiance","emoji":"⭐","tier":10},
      'combo-2-19-12': {"id":"cosmic-harmony-brilliance","name":"Cosmic Harmony Brilliance","emoji":"🌟","tier":10},
      'combo-2-19-13': {"id":"cosmic-harmony-glory","name":"Cosmic Harmony Glory","emoji":"💫","tier":10},
      'combo-2-19-14': {"id":"cosmic-harmony-majesty","name":"Cosmic Harmony Majesty","emoji":"🔮","tier":10},
      'combo-2-19-15': {"id":"cosmic-harmony-splendor","name":"Cosmic Harmony Splendor","emoji":"🎆","tier":10},
      'combo-2-19-16': {"id":"cosmic-harmony-magnificence","name":"Cosmic Harmony Magnificence","emoji":"🎇","tier":10},
      'combo-2-19-17': {"id":"cosmic-harmony-grandeur","name":"Cosmic Harmony Grandeur","emoji":"🌈","tier":10},
      'combo-2-19-18': {"id":"cosmic-harmony-nobility","name":"Cosmic Harmony Nobility","emoji":"🔥","tier":10},
      'combo-2-19-19': {"id":"cosmic-harmony-royalty","name":"Cosmic Harmony Royalty","emoji":"💧","tier":10},
      'combo-2-20-0': {"id":"cosmic-discord-flame","name":"Cosmic Discord Flame","emoji":"🌊","tier":10},
      'combo-2-20-1': {"id":"cosmic-discord-frost","name":"Cosmic Discord Frost","emoji":"⚡","tier":10},
      'combo-2-20-2': {"id":"cosmic-discord-storm","name":"Cosmic Discord Storm","emoji":"❄️","tier":10},
      'combo-2-20-3': {"id":"cosmic-discord-quake","name":"Cosmic Discord Quake","emoji":"🌪️","tier":10},
      'combo-2-20-4': {"id":"cosmic-discord-tide","name":"Cosmic Discord Tide","emoji":"☄️","tier":10},
      'combo-2-20-5': {"id":"cosmic-discord-wind","name":"Cosmic Discord Wind","emoji":"💎","tier":10},
      'combo-2-20-6': {"id":"cosmic-discord-thunder","name":"Cosmic Discord Thunder","emoji":"👑","tier":10},
      'combo-2-20-7': {"id":"cosmic-discord-lightning","name":"Cosmic Discord Lightning","emoji":"🗝️","tier":10},
      'combo-2-20-8': {"id":"cosmic-discord-shadow","name":"Cosmic Discord Shadow","emoji":"🔑","tier":10},
      'combo-2-20-9': {"id":"cosmic-discord-light","name":"Cosmic Discord Light","emoji":"🎭","tier":10},
      'combo-2-20-10': {"id":"cosmic-discord-darkness","name":"Cosmic Discord Darkness","emoji":"🎨","tier":10},
      'combo-2-20-11': {"id":"cosmic-discord-radiance","name":"Cosmic Discord Radiance","emoji":"🎪","tier":10},
      'combo-2-20-12': {"id":"cosmic-discord-brilliance","name":"Cosmic Discord Brilliance","emoji":"🎢","tier":10},
      'combo-2-20-13': {"id":"cosmic-discord-glory","name":"Cosmic Discord Glory","emoji":"🎡","tier":10},
      'combo-2-20-14': {"id":"cosmic-discord-majesty","name":"Cosmic Discord Majesty","emoji":"🎠","tier":10},
      'combo-2-20-15': {"id":"cosmic-discord-splendor","name":"Cosmic Discord Splendor","emoji":"🎪","tier":10},
      'combo-2-20-16': {"id":"cosmic-discord-magnificence","name":"Cosmic Discord Magnificence","emoji":"🎭","tier":10},
      'combo-2-20-17': {"id":"cosmic-discord-grandeur","name":"Cosmic Discord Grandeur","emoji":"🎬","tier":10},
      'combo-2-20-18': {"id":"cosmic-discord-nobility","name":"Cosmic Discord Nobility","emoji":"🎤","tier":10},
      'combo-2-20-19': {"id":"cosmic-discord-royalty","name":"Cosmic Discord Royalty","emoji":"🎧","tier":10},
      'combo-2-21-0': {"id":"cosmic-unity-flame","name":"Cosmic Unity Flame","emoji":"✨","tier":10},
      'combo-2-21-1': {"id":"cosmic-unity-frost","name":"Cosmic Unity Frost","emoji":"⭐","tier":10},
      'combo-2-21-2': {"id":"cosmic-unity-storm","name":"Cosmic Unity Storm","emoji":"🌟","tier":10},
      'combo-2-21-3': {"id":"cosmic-unity-quake","name":"Cosmic Unity Quake","emoji":"💫","tier":10},
      'combo-2-21-4': {"id":"cosmic-unity-tide","name":"Cosmic Unity Tide","emoji":"🔮","tier":10},
      'combo-2-21-5': {"id":"cosmic-unity-wind","name":"Cosmic Unity Wind","emoji":"🎆","tier":10},
      'combo-2-21-6': {"id":"cosmic-unity-thunder","name":"Cosmic Unity Thunder","emoji":"🎇","tier":10},
      'combo-2-21-7': {"id":"cosmic-unity-lightning","name":"Cosmic Unity Lightning","emoji":"🌈","tier":10},
      'combo-2-21-8': {"id":"cosmic-unity-shadow","name":"Cosmic Unity Shadow","emoji":"🔥","tier":10},
      'combo-2-21-9': {"id":"cosmic-unity-light","name":"Cosmic Unity Light","emoji":"💧","tier":10},
      'combo-2-21-10': {"id":"cosmic-unity-darkness","name":"Cosmic Unity Darkness","emoji":"🌊","tier":10},
      'combo-2-21-11': {"id":"cosmic-unity-radiance","name":"Cosmic Unity Radiance","emoji":"⚡","tier":10},
      'combo-2-21-12': {"id":"cosmic-unity-brilliance","name":"Cosmic Unity Brilliance","emoji":"❄️","tier":10},
      'combo-2-21-13': {"id":"cosmic-unity-glory","name":"Cosmic Unity Glory","emoji":"🌪️","tier":10},
      'combo-2-21-14': {"id":"cosmic-unity-majesty","name":"Cosmic Unity Majesty","emoji":"☄️","tier":10},
      'combo-2-21-15': {"id":"cosmic-unity-splendor","name":"Cosmic Unity Splendor","emoji":"💎","tier":10},
      'combo-2-21-16': {"id":"cosmic-unity-magnificence","name":"Cosmic Unity Magnificence","emoji":"👑","tier":10},
      'combo-2-21-17': {"id":"cosmic-unity-grandeur","name":"Cosmic Unity Grandeur","emoji":"🗝️","tier":10},
      'combo-2-21-18': {"id":"cosmic-unity-nobility","name":"Cosmic Unity Nobility","emoji":"🔑","tier":10},
      'combo-2-21-19': {"id":"cosmic-unity-royalty","name":"Cosmic Unity Royalty","emoji":"🎭","tier":10},
      'combo-2-22-0': {"id":"cosmic-duality-flame","name":"Cosmic Duality Flame","emoji":"🎨","tier":10},
      'combo-2-22-1': {"id":"cosmic-duality-frost","name":"Cosmic Duality Frost","emoji":"🎪","tier":10},
      'combo-2-22-2': {"id":"cosmic-duality-storm","name":"Cosmic Duality Storm","emoji":"🎢","tier":10},
      'combo-2-22-3': {"id":"cosmic-duality-quake","name":"Cosmic Duality Quake","emoji":"🎡","tier":10},
      'combo-2-22-4': {"id":"cosmic-duality-tide","name":"Cosmic Duality Tide","emoji":"🎠","tier":10},
      'combo-2-22-5': {"id":"cosmic-duality-wind","name":"Cosmic Duality Wind","emoji":"🎪","tier":10},
      'combo-2-22-6': {"id":"cosmic-duality-thunder","name":"Cosmic Duality Thunder","emoji":"🎭","tier":10},
      'combo-2-22-7': {"id":"cosmic-duality-lightning","name":"Cosmic Duality Lightning","emoji":"🎬","tier":10},
      'combo-2-22-8': {"id":"cosmic-duality-shadow","name":"Cosmic Duality Shadow","emoji":"🎤","tier":10},
      'combo-2-22-9': {"id":"cosmic-duality-light","name":"Cosmic Duality Light","emoji":"🎧","tier":10},
      'combo-2-22-10': {"id":"cosmic-duality-darkness","name":"Cosmic Duality Darkness","emoji":"✨","tier":10},
      'combo-2-22-11': {"id":"cosmic-duality-radiance","name":"Cosmic Duality Radiance","emoji":"⭐","tier":10},
      'combo-2-22-12': {"id":"cosmic-duality-brilliance","name":"Cosmic Duality Brilliance","emoji":"🌟","tier":10},
      'combo-2-22-13': {"id":"cosmic-duality-glory","name":"Cosmic Duality Glory","emoji":"💫","tier":10},
      'combo-2-22-14': {"id":"cosmic-duality-majesty","name":"Cosmic Duality Majesty","emoji":"🔮","tier":10},
      'combo-2-22-15': {"id":"cosmic-duality-splendor","name":"Cosmic Duality Splendor","emoji":"🎆","tier":10},
      'combo-2-22-16': {"id":"cosmic-duality-magnificence","name":"Cosmic Duality Magnificence","emoji":"🎇","tier":10},
      'combo-2-22-17': {"id":"cosmic-duality-grandeur","name":"Cosmic Duality Grandeur","emoji":"🌈","tier":10},
      'combo-2-22-18': {"id":"cosmic-duality-nobility","name":"Cosmic Duality Nobility","emoji":"🔥","tier":10},
      'combo-2-22-19': {"id":"cosmic-duality-royalty","name":"Cosmic Duality Royalty","emoji":"💧","tier":10},
      'combo-2-23-0': {"id":"cosmic-trinity-flame","name":"Cosmic Trinity Flame","emoji":"🌊","tier":10},
      'combo-2-23-1': {"id":"cosmic-trinity-frost","name":"Cosmic Trinity Frost","emoji":"⚡","tier":10},
      'combo-2-23-2': {"id":"cosmic-trinity-storm","name":"Cosmic Trinity Storm","emoji":"❄️","tier":10},
      'combo-2-23-3': {"id":"cosmic-trinity-quake","name":"Cosmic Trinity Quake","emoji":"🌪️","tier":10},
      'combo-2-23-4': {"id":"cosmic-trinity-tide","name":"Cosmic Trinity Tide","emoji":"☄️","tier":10},
      'combo-2-23-5': {"id":"cosmic-trinity-wind","name":"Cosmic Trinity Wind","emoji":"💎","tier":10},
      'combo-2-23-6': {"id":"cosmic-trinity-thunder","name":"Cosmic Trinity Thunder","emoji":"👑","tier":10},
      'combo-2-23-7': {"id":"cosmic-trinity-lightning","name":"Cosmic Trinity Lightning","emoji":"🗝️","tier":10},
      'combo-2-23-8': {"id":"cosmic-trinity-shadow","name":"Cosmic Trinity Shadow","emoji":"🔑","tier":10},
      'combo-2-23-9': {"id":"cosmic-trinity-light","name":"Cosmic Trinity Light","emoji":"🎭","tier":10},
      'combo-2-23-10': {"id":"cosmic-trinity-darkness","name":"Cosmic Trinity Darkness","emoji":"🎨","tier":10},
      'combo-2-23-11': {"id":"cosmic-trinity-radiance","name":"Cosmic Trinity Radiance","emoji":"🎪","tier":10},
      'combo-2-23-12': {"id":"cosmic-trinity-brilliance","name":"Cosmic Trinity Brilliance","emoji":"🎢","tier":10},
      'combo-2-23-13': {"id":"cosmic-trinity-glory","name":"Cosmic Trinity Glory","emoji":"🎡","tier":10},
      'combo-2-23-14': {"id":"cosmic-trinity-majesty","name":"Cosmic Trinity Majesty","emoji":"🎠","tier":10},
      'combo-2-23-15': {"id":"cosmic-trinity-splendor","name":"Cosmic Trinity Splendor","emoji":"🎪","tier":10},
      'combo-2-23-16': {"id":"cosmic-trinity-magnificence","name":"Cosmic Trinity Magnificence","emoji":"🎭","tier":10},
      'combo-2-23-17': {"id":"cosmic-trinity-grandeur","name":"Cosmic Trinity Grandeur","emoji":"🎬","tier":10},
      'combo-2-23-18': {"id":"cosmic-trinity-nobility","name":"Cosmic Trinity Nobility","emoji":"🎤","tier":10},
      'combo-2-23-19': {"id":"cosmic-trinity-royalty","name":"Cosmic Trinity Royalty","emoji":"🎧","tier":10},
      'combo-2-24-0': {"id":"cosmic-infinity-flame","name":"Cosmic Infinity Flame","emoji":"✨","tier":10},
      'combo-2-24-1': {"id":"cosmic-infinity-frost","name":"Cosmic Infinity Frost","emoji":"⭐","tier":10},
      'combo-2-24-2': {"id":"cosmic-infinity-storm","name":"Cosmic Infinity Storm","emoji":"🌟","tier":10},
      'combo-2-24-3': {"id":"cosmic-infinity-quake","name":"Cosmic Infinity Quake","emoji":"💫","tier":10},
      'combo-2-24-4': {"id":"cosmic-infinity-tide","name":"Cosmic Infinity Tide","emoji":"🔮","tier":10},
      'combo-2-24-5': {"id":"cosmic-infinity-wind","name":"Cosmic Infinity Wind","emoji":"🎆","tier":10},
      'combo-2-24-6': {"id":"cosmic-infinity-thunder","name":"Cosmic Infinity Thunder","emoji":"🎇","tier":10},
      'combo-2-24-7': {"id":"cosmic-infinity-lightning","name":"Cosmic Infinity Lightning","emoji":"🌈","tier":10},
      'combo-2-24-8': {"id":"cosmic-infinity-shadow","name":"Cosmic Infinity Shadow","emoji":"🔥","tier":10},
      'combo-2-24-9': {"id":"cosmic-infinity-light","name":"Cosmic Infinity Light","emoji":"💧","tier":10},
      'combo-2-24-10': {"id":"cosmic-infinity-darkness","name":"Cosmic Infinity Darkness","emoji":"🌊","tier":10},
      'combo-2-24-11': {"id":"cosmic-infinity-radiance","name":"Cosmic Infinity Radiance","emoji":"⚡","tier":10},
      'combo-2-24-12': {"id":"cosmic-infinity-brilliance","name":"Cosmic Infinity Brilliance","emoji":"❄️","tier":10},
      'combo-2-24-13': {"id":"cosmic-infinity-glory","name":"Cosmic Infinity Glory","emoji":"🌪️","tier":10},
      'combo-2-24-14': {"id":"cosmic-infinity-majesty","name":"Cosmic Infinity Majesty","emoji":"☄️","tier":10},
      'combo-2-24-15': {"id":"cosmic-infinity-splendor","name":"Cosmic Infinity Splendor","emoji":"💎","tier":10},
      'combo-2-24-16': {"id":"cosmic-infinity-magnificence","name":"Cosmic Infinity Magnificence","emoji":"👑","tier":10},
      'combo-2-24-17': {"id":"cosmic-infinity-grandeur","name":"Cosmic Infinity Grandeur","emoji":"🗝️","tier":10},
      'combo-2-24-18': {"id":"cosmic-infinity-nobility","name":"Cosmic Infinity Nobility","emoji":"🔑","tier":10},
      'combo-2-24-19': {"id":"cosmic-infinity-royalty","name":"Cosmic Infinity Royalty","emoji":"🎭","tier":10},
      'combo-2-25-0': {"id":"cosmic-eternity-flame","name":"Cosmic Eternity Flame","emoji":"🎨","tier":10},
      'combo-2-25-1': {"id":"cosmic-eternity-frost","name":"Cosmic Eternity Frost","emoji":"🎪","tier":10},
      'combo-2-25-2': {"id":"cosmic-eternity-storm","name":"Cosmic Eternity Storm","emoji":"🎢","tier":10},
      'combo-2-25-3': {"id":"cosmic-eternity-quake","name":"Cosmic Eternity Quake","emoji":"🎡","tier":10},
      'combo-2-25-4': {"id":"cosmic-eternity-tide","name":"Cosmic Eternity Tide","emoji":"🎠","tier":10},
      'combo-2-25-5': {"id":"cosmic-eternity-wind","name":"Cosmic Eternity Wind","emoji":"🎪","tier":10},
      'combo-2-25-6': {"id":"cosmic-eternity-thunder","name":"Cosmic Eternity Thunder","emoji":"🎭","tier":10},
      'combo-2-25-7': {"id":"cosmic-eternity-lightning","name":"Cosmic Eternity Lightning","emoji":"🎬","tier":10},
      'combo-2-25-8': {"id":"cosmic-eternity-shadow","name":"Cosmic Eternity Shadow","emoji":"🎤","tier":10},
      'combo-2-25-9': {"id":"cosmic-eternity-light","name":"Cosmic Eternity Light","emoji":"🎧","tier":10},
      'combo-2-25-10': {"id":"cosmic-eternity-darkness","name":"Cosmic Eternity Darkness","emoji":"✨","tier":10},
      'combo-2-25-11': {"id":"cosmic-eternity-radiance","name":"Cosmic Eternity Radiance","emoji":"⭐","tier":10},
      'combo-2-25-12': {"id":"cosmic-eternity-brilliance","name":"Cosmic Eternity Brilliance","emoji":"🌟","tier":10},
      'combo-2-25-13': {"id":"cosmic-eternity-glory","name":"Cosmic Eternity Glory","emoji":"💫","tier":10},
      'combo-2-25-14': {"id":"cosmic-eternity-majesty","name":"Cosmic Eternity Majesty","emoji":"🔮","tier":10},
      'combo-2-25-15': {"id":"cosmic-eternity-splendor","name":"Cosmic Eternity Splendor","emoji":"🎆","tier":10},
      'combo-2-25-16': {"id":"cosmic-eternity-magnificence","name":"Cosmic Eternity Magnificence","emoji":"🎇","tier":10},
      'combo-2-25-17': {"id":"cosmic-eternity-grandeur","name":"Cosmic Eternity Grandeur","emoji":"🌈","tier":10},
      'combo-2-25-18': {"id":"cosmic-eternity-nobility","name":"Cosmic Eternity Nobility","emoji":"🔥","tier":10},
      'combo-2-25-19': {"id":"cosmic-eternity-royalty","name":"Cosmic Eternity Royalty","emoji":"💧","tier":10},
      'combo-2-26-0': {"id":"cosmic-destiny-flame","name":"Cosmic Destiny Flame","emoji":"🌊","tier":10},
      'combo-2-26-1': {"id":"cosmic-destiny-frost","name":"Cosmic Destiny Frost","emoji":"⚡","tier":10},
      'combo-2-26-2': {"id":"cosmic-destiny-storm","name":"Cosmic Destiny Storm","emoji":"❄️","tier":10},
      'combo-2-26-3': {"id":"cosmic-destiny-quake","name":"Cosmic Destiny Quake","emoji":"🌪️","tier":10},
      'combo-2-26-4': {"id":"cosmic-destiny-tide","name":"Cosmic Destiny Tide","emoji":"☄️","tier":10},
      'combo-2-26-5': {"id":"cosmic-destiny-wind","name":"Cosmic Destiny Wind","emoji":"💎","tier":10},
      'combo-2-26-6': {"id":"cosmic-destiny-thunder","name":"Cosmic Destiny Thunder","emoji":"👑","tier":10},
      'combo-2-26-7': {"id":"cosmic-destiny-lightning","name":"Cosmic Destiny Lightning","emoji":"🗝️","tier":10},
      'combo-2-26-8': {"id":"cosmic-destiny-shadow","name":"Cosmic Destiny Shadow","emoji":"🔑","tier":10},
      'combo-2-26-9': {"id":"cosmic-destiny-light","name":"Cosmic Destiny Light","emoji":"🎭","tier":10},
      'combo-2-26-10': {"id":"cosmic-destiny-darkness","name":"Cosmic Destiny Darkness","emoji":"🎨","tier":10},
      'combo-2-26-11': {"id":"cosmic-destiny-radiance","name":"Cosmic Destiny Radiance","emoji":"🎪","tier":10},
      'combo-2-26-12': {"id":"cosmic-destiny-brilliance","name":"Cosmic Destiny Brilliance","emoji":"🎢","tier":10},
      'combo-2-26-13': {"id":"cosmic-destiny-glory","name":"Cosmic Destiny Glory","emoji":"🎡","tier":10},
      'combo-2-26-14': {"id":"cosmic-destiny-majesty","name":"Cosmic Destiny Majesty","emoji":"🎠","tier":10},
      'combo-2-26-15': {"id":"cosmic-destiny-splendor","name":"Cosmic Destiny Splendor","emoji":"🎪","tier":10},
      'combo-2-26-16': {"id":"cosmic-destiny-magnificence","name":"Cosmic Destiny Magnificence","emoji":"🎭","tier":10},
      'combo-2-26-17': {"id":"cosmic-destiny-grandeur","name":"Cosmic Destiny Grandeur","emoji":"🎬","tier":10},
      'combo-2-26-18': {"id":"cosmic-destiny-nobility","name":"Cosmic Destiny Nobility","emoji":"🎤","tier":10},
      'combo-2-26-19': {"id":"cosmic-destiny-royalty","name":"Cosmic Destiny Royalty","emoji":"🎧","tier":10},
      'combo-2-27-0': {"id":"cosmic-fate-flame","name":"Cosmic Fate Flame","emoji":"✨","tier":10},
      'combo-2-27-1': {"id":"cosmic-fate-frost","name":"Cosmic Fate Frost","emoji":"⭐","tier":10},
      'combo-2-27-2': {"id":"cosmic-fate-storm","name":"Cosmic Fate Storm","emoji":"🌟","tier":10},
      'combo-2-27-3': {"id":"cosmic-fate-quake","name":"Cosmic Fate Quake","emoji":"💫","tier":10},
      'combo-2-27-4': {"id":"cosmic-fate-tide","name":"Cosmic Fate Tide","emoji":"🔮","tier":10},
      'combo-2-27-5': {"id":"cosmic-fate-wind","name":"Cosmic Fate Wind","emoji":"🎆","tier":10},
      'combo-2-27-6': {"id":"cosmic-fate-thunder","name":"Cosmic Fate Thunder","emoji":"🎇","tier":10},
      'combo-2-27-7': {"id":"cosmic-fate-lightning","name":"Cosmic Fate Lightning","emoji":"🌈","tier":10},
      'combo-2-27-8': {"id":"cosmic-fate-shadow","name":"Cosmic Fate Shadow","emoji":"🔥","tier":10},
      'combo-2-27-9': {"id":"cosmic-fate-light","name":"Cosmic Fate Light","emoji":"💧","tier":10},
      'combo-2-27-10': {"id":"cosmic-fate-darkness","name":"Cosmic Fate Darkness","emoji":"🌊","tier":10},
      'combo-2-27-11': {"id":"cosmic-fate-radiance","name":"Cosmic Fate Radiance","emoji":"⚡","tier":10},
      'combo-2-27-12': {"id":"cosmic-fate-brilliance","name":"Cosmic Fate Brilliance","emoji":"❄️","tier":10},
      'combo-2-27-13': {"id":"cosmic-fate-glory","name":"Cosmic Fate Glory","emoji":"🌪️","tier":10},
      'combo-2-27-14': {"id":"cosmic-fate-majesty","name":"Cosmic Fate Majesty","emoji":"☄️","tier":10},
      'combo-2-27-15': {"id":"cosmic-fate-splendor","name":"Cosmic Fate Splendor","emoji":"💎","tier":10},
      'combo-2-27-16': {"id":"cosmic-fate-magnificence","name":"Cosmic Fate Magnificence","emoji":"👑","tier":10},
      'combo-2-27-17': {"id":"cosmic-fate-grandeur","name":"Cosmic Fate Grandeur","emoji":"🗝️","tier":10},
      'combo-2-27-18': {"id":"cosmic-fate-nobility","name":"Cosmic Fate Nobility","emoji":"🔑","tier":10},
      'combo-2-27-19': {"id":"cosmic-fate-royalty","name":"Cosmic Fate Royalty","emoji":"🎭","tier":10},
      'combo-2-28-0': {"id":"cosmic-fortune-flame","name":"Cosmic Fortune Flame","emoji":"🎨","tier":10},
      'combo-2-28-1': {"id":"cosmic-fortune-frost","name":"Cosmic Fortune Frost","emoji":"🎪","tier":10},
      'combo-2-28-2': {"id":"cosmic-fortune-storm","name":"Cosmic Fortune Storm","emoji":"🎢","tier":10},
      'combo-2-28-3': {"id":"cosmic-fortune-quake","name":"Cosmic Fortune Quake","emoji":"🎡","tier":10},
      'combo-2-28-4': {"id":"cosmic-fortune-tide","name":"Cosmic Fortune Tide","emoji":"🎠","tier":10},
      'combo-2-28-5': {"id":"cosmic-fortune-wind","name":"Cosmic Fortune Wind","emoji":"🎪","tier":10},
      'combo-2-28-6': {"id":"cosmic-fortune-thunder","name":"Cosmic Fortune Thunder","emoji":"🎭","tier":10},
      'combo-2-28-7': {"id":"cosmic-fortune-lightning","name":"Cosmic Fortune Lightning","emoji":"🎬","tier":10},
      'combo-2-28-8': {"id":"cosmic-fortune-shadow","name":"Cosmic Fortune Shadow","emoji":"🎤","tier":10},
      'combo-2-28-9': {"id":"cosmic-fortune-light","name":"Cosmic Fortune Light","emoji":"🎧","tier":10},
      'combo-2-28-10': {"id":"cosmic-fortune-darkness","name":"Cosmic Fortune Darkness","emoji":"✨","tier":10},
      'combo-2-28-11': {"id":"cosmic-fortune-radiance","name":"Cosmic Fortune Radiance","emoji":"⭐","tier":10},
      'combo-2-28-12': {"id":"cosmic-fortune-brilliance","name":"Cosmic Fortune Brilliance","emoji":"🌟","tier":10},
      'combo-2-28-13': {"id":"cosmic-fortune-glory","name":"Cosmic Fortune Glory","emoji":"💫","tier":10},
      'combo-2-28-14': {"id":"cosmic-fortune-majesty","name":"Cosmic Fortune Majesty","emoji":"🔮","tier":10},
      'combo-2-28-15': {"id":"cosmic-fortune-splendor","name":"Cosmic Fortune Splendor","emoji":"🎆","tier":10},
      'combo-2-28-16': {"id":"cosmic-fortune-magnificence","name":"Cosmic Fortune Magnificence","emoji":"🎇","tier":10},
      'combo-2-28-17': {"id":"cosmic-fortune-grandeur","name":"Cosmic Fortune Grandeur","emoji":"🌈","tier":10},
      'combo-2-28-18': {"id":"cosmic-fortune-nobility","name":"Cosmic Fortune Nobility","emoji":"🔥","tier":10},
      'combo-2-28-19': {"id":"cosmic-fortune-royalty","name":"Cosmic Fortune Royalty","emoji":"💧","tier":10},
      'combo-2-29-0': {"id":"cosmic-luck-flame","name":"Cosmic Luck Flame","emoji":"🌊","tier":10},
      'combo-2-29-1': {"id":"cosmic-luck-frost","name":"Cosmic Luck Frost","emoji":"⚡","tier":10},
      'combo-2-29-2': {"id":"cosmic-luck-storm","name":"Cosmic Luck Storm","emoji":"❄️","tier":10},
      'combo-2-29-3': {"id":"cosmic-luck-quake","name":"Cosmic Luck Quake","emoji":"🌪️","tier":10},
      'combo-2-29-4': {"id":"cosmic-luck-tide","name":"Cosmic Luck Tide","emoji":"☄️","tier":10},
      'combo-2-29-5': {"id":"cosmic-luck-wind","name":"Cosmic Luck Wind","emoji":"💎","tier":10},
      'combo-2-29-6': {"id":"cosmic-luck-thunder","name":"Cosmic Luck Thunder","emoji":"👑","tier":10},
      'combo-2-29-7': {"id":"cosmic-luck-lightning","name":"Cosmic Luck Lightning","emoji":"🗝️","tier":10},
      'combo-2-29-8': {"id":"cosmic-luck-shadow","name":"Cosmic Luck Shadow","emoji":"🔑","tier":10},
      'combo-2-29-9': {"id":"cosmic-luck-light","name":"Cosmic Luck Light","emoji":"🎭","tier":10},
      'combo-2-29-10': {"id":"cosmic-luck-darkness","name":"Cosmic Luck Darkness","emoji":"🎨","tier":10},
      'combo-2-29-11': {"id":"cosmic-luck-radiance","name":"Cosmic Luck Radiance","emoji":"🎪","tier":10},
      'combo-2-29-12': {"id":"cosmic-luck-brilliance","name":"Cosmic Luck Brilliance","emoji":"🎢","tier":10},
      'combo-2-29-13': {"id":"cosmic-luck-glory","name":"Cosmic Luck Glory","emoji":"🎡","tier":10},
      'combo-2-29-14': {"id":"cosmic-luck-majesty","name":"Cosmic Luck Majesty","emoji":"🎠","tier":10},
      'combo-2-29-15': {"id":"cosmic-luck-splendor","name":"Cosmic Luck Splendor","emoji":"🎪","tier":10},
      'combo-2-29-16': {"id":"cosmic-luck-magnificence","name":"Cosmic Luck Magnificence","emoji":"🎭","tier":10},
      'combo-2-29-17': {"id":"cosmic-luck-grandeur","name":"Cosmic Luck Grandeur","emoji":"🎬","tier":10},
      'combo-2-29-18': {"id":"cosmic-luck-nobility","name":"Cosmic Luck Nobility","emoji":"🎤","tier":10},
      'combo-2-29-19': {"id":"cosmic-luck-royalty","name":"Cosmic Luck Royalty","emoji":"🎧","tier":10},
      'combo-3-0-0': {"id":"divine-crystal-flame","name":"Divine Crystal Flame","emoji":"✨","tier":10},
      'combo-3-0-1': {"id":"divine-crystal-frost","name":"Divine Crystal Frost","emoji":"⭐","tier":10},
      'combo-3-0-2': {"id":"divine-crystal-storm","name":"Divine Crystal Storm","emoji":"🌟","tier":10},
      'combo-3-0-3': {"id":"divine-crystal-quake","name":"Divine Crystal Quake","emoji":"💫","tier":10},
      'combo-3-0-4': {"id":"divine-crystal-tide","name":"Divine Crystal Tide","emoji":"🔮","tier":10},
      'combo-3-0-5': {"id":"divine-crystal-wind","name":"Divine Crystal Wind","emoji":"🎆","tier":10},
      'combo-3-0-6': {"id":"divine-crystal-thunder","name":"Divine Crystal Thunder","emoji":"🎇","tier":10},
      'combo-3-0-7': {"id":"divine-crystal-lightning","name":"Divine Crystal Lightning","emoji":"🌈","tier":10},
      'combo-3-0-8': {"id":"divine-crystal-shadow","name":"Divine Crystal Shadow","emoji":"🔥","tier":10},
      'combo-3-0-9': {"id":"divine-crystal-light","name":"Divine Crystal Light","emoji":"💧","tier":10},
      'combo-3-0-10': {"id":"divine-crystal-darkness","name":"Divine Crystal Darkness","emoji":"🌊","tier":10},
      'combo-3-0-11': {"id":"divine-crystal-radiance","name":"Divine Crystal Radiance","emoji":"⚡","tier":10},
      'combo-3-0-12': {"id":"divine-crystal-brilliance","name":"Divine Crystal Brilliance","emoji":"❄️","tier":10},
      'combo-3-0-13': {"id":"divine-crystal-glory","name":"Divine Crystal Glory","emoji":"🌪️","tier":10},
      'combo-3-0-14': {"id":"divine-crystal-majesty","name":"Divine Crystal Majesty","emoji":"☄️","tier":10},
      'combo-3-0-15': {"id":"divine-crystal-splendor","name":"Divine Crystal Splendor","emoji":"💎","tier":10},
      'combo-3-0-16': {"id":"divine-crystal-magnificence","name":"Divine Crystal Magnificence","emoji":"👑","tier":10},
      'combo-3-0-17': {"id":"divine-crystal-grandeur","name":"Divine Crystal Grandeur","emoji":"🗝️","tier":10},
      'combo-3-0-18': {"id":"divine-crystal-nobility","name":"Divine Crystal Nobility","emoji":"🔑","tier":10},
      'combo-3-0-19': {"id":"divine-crystal-royalty","name":"Divine Crystal Royalty","emoji":"🎭","tier":10},
      'combo-3-1-0': {"id":"divine-essence-flame","name":"Divine Essence Flame","emoji":"🎨","tier":10},
      'combo-3-1-1': {"id":"divine-essence-frost","name":"Divine Essence Frost","emoji":"🎪","tier":10},
      'combo-3-1-2': {"id":"divine-essence-storm","name":"Divine Essence Storm","emoji":"🎢","tier":10},
      'combo-3-1-3': {"id":"divine-essence-quake","name":"Divine Essence Quake","emoji":"🎡","tier":10},
      'combo-3-1-4': {"id":"divine-essence-tide","name":"Divine Essence Tide","emoji":"🎠","tier":10},
      'combo-3-1-5': {"id":"divine-essence-wind","name":"Divine Essence Wind","emoji":"🎪","tier":10},
      'combo-3-1-6': {"id":"divine-essence-thunder","name":"Divine Essence Thunder","emoji":"🎭","tier":10},
      'combo-3-1-7': {"id":"divine-essence-lightning","name":"Divine Essence Lightning","emoji":"🎬","tier":10},
      'combo-3-1-8': {"id":"divine-essence-shadow","name":"Divine Essence Shadow","emoji":"🎤","tier":10},
      'combo-3-1-9': {"id":"divine-essence-light","name":"Divine Essence Light","emoji":"🎧","tier":10},
      'combo-3-1-10': {"id":"divine-essence-darkness","name":"Divine Essence Darkness","emoji":"✨","tier":10},
      'combo-3-1-11': {"id":"divine-essence-radiance","name":"Divine Essence Radiance","emoji":"⭐","tier":10},
      'combo-3-1-12': {"id":"divine-essence-brilliance","name":"Divine Essence Brilliance","emoji":"🌟","tier":10},
      'combo-3-1-13': {"id":"divine-essence-glory","name":"Divine Essence Glory","emoji":"💫","tier":10},
      'combo-3-1-14': {"id":"divine-essence-majesty","name":"Divine Essence Majesty","emoji":"🔮","tier":10},
      'combo-3-1-15': {"id":"divine-essence-splendor","name":"Divine Essence Splendor","emoji":"🎆","tier":10},
      'combo-3-1-16': {"id":"divine-essence-magnificence","name":"Divine Essence Magnificence","emoji":"🎇","tier":10},
      'combo-3-1-17': {"id":"divine-essence-grandeur","name":"Divine Essence Grandeur","emoji":"🌈","tier":10},
      'combo-3-1-18': {"id":"divine-essence-nobility","name":"Divine Essence Nobility","emoji":"🔥","tier":10},
      'combo-3-1-19': {"id":"divine-essence-royalty","name":"Divine Essence Royalty","emoji":"💧","tier":10},
      'combo-3-2-0': {"id":"divine-spirit-flame","name":"Divine Spirit Flame","emoji":"🌊","tier":10},
      'combo-3-2-1': {"id":"divine-spirit-frost","name":"Divine Spirit Frost","emoji":"⚡","tier":10},
      'combo-3-2-2': {"id":"divine-spirit-storm","name":"Divine Spirit Storm","emoji":"❄️","tier":10},
      'combo-3-2-3': {"id":"divine-spirit-quake","name":"Divine Spirit Quake","emoji":"🌪️","tier":10},
      'combo-3-2-4': {"id":"divine-spirit-tide","name":"Divine Spirit Tide","emoji":"☄️","tier":10},
      'combo-3-2-5': {"id":"divine-spirit-wind","name":"Divine Spirit Wind","emoji":"💎","tier":10},
      'combo-3-2-6': {"id":"divine-spirit-thunder","name":"Divine Spirit Thunder","emoji":"👑","tier":10},
      'combo-3-2-7': {"id":"divine-spirit-lightning","name":"Divine Spirit Lightning","emoji":"🗝️","tier":10},
      'combo-3-2-8': {"id":"divine-spirit-shadow","name":"Divine Spirit Shadow","emoji":"🔑","tier":10},
      'combo-3-2-9': {"id":"divine-spirit-light","name":"Divine Spirit Light","emoji":"🎭","tier":10},
      'combo-3-2-10': {"id":"divine-spirit-darkness","name":"Divine Spirit Darkness","emoji":"🎨","tier":10},
      'combo-3-2-11': {"id":"divine-spirit-radiance","name":"Divine Spirit Radiance","emoji":"🎪","tier":10},
      'combo-3-2-12': {"id":"divine-spirit-brilliance","name":"Divine Spirit Brilliance","emoji":"🎢","tier":10},
      'combo-3-2-13': {"id":"divine-spirit-glory","name":"Divine Spirit Glory","emoji":"🎡","tier":10},
      'combo-3-2-14': {"id":"divine-spirit-majesty","name":"Divine Spirit Majesty","emoji":"🎠","tier":10},
      'combo-3-2-15': {"id":"divine-spirit-splendor","name":"Divine Spirit Splendor","emoji":"🎪","tier":10},
      'combo-3-2-16': {"id":"divine-spirit-magnificence","name":"Divine Spirit Magnificence","emoji":"🎭","tier":10},
      'combo-3-2-17': {"id":"divine-spirit-grandeur","name":"Divine Spirit Grandeur","emoji":"🎬","tier":10},
      'combo-3-2-18': {"id":"divine-spirit-nobility","name":"Divine Spirit Nobility","emoji":"🎤","tier":10},
      'combo-3-2-19': {"id":"divine-spirit-royalty","name":"Divine Spirit Royalty","emoji":"🎧","tier":10},
      'combo-3-3-0': {"id":"divine-force-flame","name":"Divine Force Flame","emoji":"✨","tier":10},
      'combo-3-3-1': {"id":"divine-force-frost","name":"Divine Force Frost","emoji":"⭐","tier":10},
      'combo-3-3-2': {"id":"divine-force-storm","name":"Divine Force Storm","emoji":"🌟","tier":10},
      'combo-3-3-3': {"id":"divine-force-quake","name":"Divine Force Quake","emoji":"💫","tier":10},
      'combo-3-3-4': {"id":"divine-force-tide","name":"Divine Force Tide","emoji":"🔮","tier":10},
      'combo-3-3-5': {"id":"divine-force-wind","name":"Divine Force Wind","emoji":"🎆","tier":10},
      'combo-3-3-6': {"id":"divine-force-thunder","name":"Divine Force Thunder","emoji":"🎇","tier":10},
      'combo-3-3-7': {"id":"divine-force-lightning","name":"Divine Force Lightning","emoji":"🌈","tier":10},
      'combo-3-3-8': {"id":"divine-force-shadow","name":"Divine Force Shadow","emoji":"🔥","tier":10},
      'combo-3-3-9': {"id":"divine-force-light","name":"Divine Force Light","emoji":"💧","tier":10},
      'combo-3-3-10': {"id":"divine-force-darkness","name":"Divine Force Darkness","emoji":"🌊","tier":10},
      'combo-3-3-11': {"id":"divine-force-radiance","name":"Divine Force Radiance","emoji":"⚡","tier":10},
      'combo-3-3-12': {"id":"divine-force-brilliance","name":"Divine Force Brilliance","emoji":"❄️","tier":10},
      'combo-3-3-13': {"id":"divine-force-glory","name":"Divine Force Glory","emoji":"🌪️","tier":10},
      'combo-3-3-14': {"id":"divine-force-majesty","name":"Divine Force Majesty","emoji":"☄️","tier":10},
      'combo-3-3-15': {"id":"divine-force-splendor","name":"Divine Force Splendor","emoji":"💎","tier":10},
      'combo-3-3-16': {"id":"divine-force-magnificence","name":"Divine Force Magnificence","emoji":"👑","tier":10},
      'combo-3-3-17': {"id":"divine-force-grandeur","name":"Divine Force Grandeur","emoji":"🗝️","tier":10},
      'combo-3-3-18': {"id":"divine-force-nobility","name":"Divine Force Nobility","emoji":"🔑","tier":10},
      'combo-3-3-19': {"id":"divine-force-royalty","name":"Divine Force Royalty","emoji":"🎭","tier":10},
      'combo-3-4-0': {"id":"divine-energy-flame","name":"Divine Energy Flame","emoji":"🎨","tier":10},
      'combo-3-4-1': {"id":"divine-energy-frost","name":"Divine Energy Frost","emoji":"🎪","tier":10},
      'combo-3-4-2': {"id":"divine-energy-storm","name":"Divine Energy Storm","emoji":"🎢","tier":10},
      'combo-3-4-3': {"id":"divine-energy-quake","name":"Divine Energy Quake","emoji":"🎡","tier":10},
      'combo-3-4-4': {"id":"divine-energy-tide","name":"Divine Energy Tide","emoji":"🎠","tier":10},
      'combo-3-4-5': {"id":"divine-energy-wind","name":"Divine Energy Wind","emoji":"🎪","tier":10},
      'combo-3-4-6': {"id":"divine-energy-thunder","name":"Divine Energy Thunder","emoji":"🎭","tier":10},
      'combo-3-4-7': {"id":"divine-energy-lightning","name":"Divine Energy Lightning","emoji":"🎬","tier":10},
      'combo-3-4-8': {"id":"divine-energy-shadow","name":"Divine Energy Shadow","emoji":"🎤","tier":10},
      'combo-3-4-9': {"id":"divine-energy-light","name":"Divine Energy Light","emoji":"🎧","tier":10},
      'combo-3-4-10': {"id":"divine-energy-darkness","name":"Divine Energy Darkness","emoji":"✨","tier":10},
      'combo-3-4-11': {"id":"divine-energy-radiance","name":"Divine Energy Radiance","emoji":"⭐","tier":10},
      'combo-3-4-12': {"id":"divine-energy-brilliance","name":"Divine Energy Brilliance","emoji":"🌟","tier":10},
      'combo-3-4-13': {"id":"divine-energy-glory","name":"Divine Energy Glory","emoji":"💫","tier":10},
      'combo-3-4-14': {"id":"divine-energy-majesty","name":"Divine Energy Majesty","emoji":"🔮","tier":10},
      'combo-3-4-15': {"id":"divine-energy-splendor","name":"Divine Energy Splendor","emoji":"🎆","tier":10},
      'combo-3-4-16': {"id":"divine-energy-magnificence","name":"Divine Energy Magnificence","emoji":"🎇","tier":10},
      'combo-3-4-17': {"id":"divine-energy-grandeur","name":"Divine Energy Grandeur","emoji":"🌈","tier":10},
      'combo-3-4-18': {"id":"divine-energy-nobility","name":"Divine Energy Nobility","emoji":"🔥","tier":10},
      'combo-3-4-19': {"id":"divine-energy-royalty","name":"Divine Energy Royalty","emoji":"💧","tier":10},
      'combo-3-5-0': {"id":"divine-power-flame","name":"Divine Power Flame","emoji":"🌊","tier":10},
      'combo-3-5-1': {"id":"divine-power-frost","name":"Divine Power Frost","emoji":"⚡","tier":10},
      'combo-3-5-2': {"id":"divine-power-storm","name":"Divine Power Storm","emoji":"❄️","tier":10},
      'combo-3-5-3': {"id":"divine-power-quake","name":"Divine Power Quake","emoji":"🌪️","tier":10},
      'combo-3-5-4': {"id":"divine-power-tide","name":"Divine Power Tide","emoji":"☄️","tier":10},
      'combo-3-5-5': {"id":"divine-power-wind","name":"Divine Power Wind","emoji":"💎","tier":10},
      'combo-3-5-6': {"id":"divine-power-thunder","name":"Divine Power Thunder","emoji":"👑","tier":10},
      'combo-3-5-7': {"id":"divine-power-lightning","name":"Divine Power Lightning","emoji":"🗝️","tier":10},
      'combo-3-5-8': {"id":"divine-power-shadow","name":"Divine Power Shadow","emoji":"🔑","tier":10},
      'combo-3-5-9': {"id":"divine-power-light","name":"Divine Power Light","emoji":"🎭","tier":10},
      'combo-3-5-10': {"id":"divine-power-darkness","name":"Divine Power Darkness","emoji":"🎨","tier":10},
      'combo-3-5-11': {"id":"divine-power-radiance","name":"Divine Power Radiance","emoji":"🎪","tier":10},
      'combo-3-5-12': {"id":"divine-power-brilliance","name":"Divine Power Brilliance","emoji":"🎢","tier":10},
      'combo-3-5-13': {"id":"divine-power-glory","name":"Divine Power Glory","emoji":"🎡","tier":10},
      'combo-3-5-14': {"id":"divine-power-majesty","name":"Divine Power Majesty","emoji":"🎠","tier":10},
      'combo-3-5-15': {"id":"divine-power-splendor","name":"Divine Power Splendor","emoji":"🎪","tier":10},
      'combo-3-5-16': {"id":"divine-power-magnificence","name":"Divine Power Magnificence","emoji":"🎭","tier":10},
      'combo-3-5-17': {"id":"divine-power-grandeur","name":"Divine Power Grandeur","emoji":"🎬","tier":10},
      'combo-3-5-18': {"id":"divine-power-nobility","name":"Divine Power Nobility","emoji":"🎤","tier":10},
      'combo-3-5-19': {"id":"divine-power-royalty","name":"Divine Power Royalty","emoji":"🎧","tier":10},
      'combo-3-6-0': {"id":"divine-aura-flame","name":"Divine Aura Flame","emoji":"✨","tier":10},
      'combo-3-6-1': {"id":"divine-aura-frost","name":"Divine Aura Frost","emoji":"⭐","tier":10},
      'combo-3-6-2': {"id":"divine-aura-storm","name":"Divine Aura Storm","emoji":"🌟","tier":10},
      'combo-3-6-3': {"id":"divine-aura-quake","name":"Divine Aura Quake","emoji":"💫","tier":10},
      'combo-3-6-4': {"id":"divine-aura-tide","name":"Divine Aura Tide","emoji":"🔮","tier":10},
      'combo-3-6-5': {"id":"divine-aura-wind","name":"Divine Aura Wind","emoji":"🎆","tier":10},
      'combo-3-6-6': {"id":"divine-aura-thunder","name":"Divine Aura Thunder","emoji":"🎇","tier":10},
      'combo-3-6-7': {"id":"divine-aura-lightning","name":"Divine Aura Lightning","emoji":"🌈","tier":10},
      'combo-3-6-8': {"id":"divine-aura-shadow","name":"Divine Aura Shadow","emoji":"🔥","tier":10},
      'combo-3-6-9': {"id":"divine-aura-light","name":"Divine Aura Light","emoji":"💧","tier":10},
      'combo-3-6-10': {"id":"divine-aura-darkness","name":"Divine Aura Darkness","emoji":"🌊","tier":10},
      'combo-3-6-11': {"id":"divine-aura-radiance","name":"Divine Aura Radiance","emoji":"⚡","tier":10},
      'combo-3-6-12': {"id":"divine-aura-brilliance","name":"Divine Aura Brilliance","emoji":"❄️","tier":10},
      'combo-3-6-13': {"id":"divine-aura-glory","name":"Divine Aura Glory","emoji":"🌪️","tier":10},
      'combo-3-6-14': {"id":"divine-aura-majesty","name":"Divine Aura Majesty","emoji":"☄️","tier":10},
      'combo-3-6-15': {"id":"divine-aura-splendor","name":"Divine Aura Splendor","emoji":"💎","tier":10},
      'combo-3-6-16': {"id":"divine-aura-magnificence","name":"Divine Aura Magnificence","emoji":"👑","tier":10},
      'combo-3-6-17': {"id":"divine-aura-grandeur","name":"Divine Aura Grandeur","emoji":"🗝️","tier":10},
      'combo-3-6-18': {"id":"divine-aura-nobility","name":"Divine Aura Nobility","emoji":"🔑","tier":10},
      'combo-3-6-19': {"id":"divine-aura-royalty","name":"Divine Aura Royalty","emoji":"🎭","tier":10},
      'combo-3-7-0': {"id":"divine-soul-flame","name":"Divine Soul Flame","emoji":"🎨","tier":10},
      'combo-3-7-1': {"id":"divine-soul-frost","name":"Divine Soul Frost","emoji":"🎪","tier":10},
      'combo-3-7-2': {"id":"divine-soul-storm","name":"Divine Soul Storm","emoji":"🎢","tier":10},
      'combo-3-7-3': {"id":"divine-soul-quake","name":"Divine Soul Quake","emoji":"🎡","tier":10},
      'combo-3-7-4': {"id":"divine-soul-tide","name":"Divine Soul Tide","emoji":"🎠","tier":10},
      'combo-3-7-5': {"id":"divine-soul-wind","name":"Divine Soul Wind","emoji":"🎪","tier":10},
      'combo-3-7-6': {"id":"divine-soul-thunder","name":"Divine Soul Thunder","emoji":"🎭","tier":10},
      'combo-3-7-7': {"id":"divine-soul-lightning","name":"Divine Soul Lightning","emoji":"🎬","tier":10},
      'combo-3-7-8': {"id":"divine-soul-shadow","name":"Divine Soul Shadow","emoji":"🎤","tier":10},
      'combo-3-7-9': {"id":"divine-soul-light","name":"Divine Soul Light","emoji":"🎧","tier":10},
      'combo-3-7-10': {"id":"divine-soul-darkness","name":"Divine Soul Darkness","emoji":"✨","tier":10},
      'combo-3-7-11': {"id":"divine-soul-radiance","name":"Divine Soul Radiance","emoji":"⭐","tier":10},
      'combo-3-7-12': {"id":"divine-soul-brilliance","name":"Divine Soul Brilliance","emoji":"🌟","tier":10},
      'combo-3-7-13': {"id":"divine-soul-glory","name":"Divine Soul Glory","emoji":"💫","tier":10},
      'combo-3-7-14': {"id":"divine-soul-majesty","name":"Divine Soul Majesty","emoji":"🔮","tier":10},
      'combo-3-7-15': {"id":"divine-soul-splendor","name":"Divine Soul Splendor","emoji":"🎆","tier":10},
      'combo-3-7-16': {"id":"divine-soul-magnificence","name":"Divine Soul Magnificence","emoji":"🎇","tier":10},
      'combo-3-7-17': {"id":"divine-soul-grandeur","name":"Divine Soul Grandeur","emoji":"🌈","tier":10},
      'combo-3-7-18': {"id":"divine-soul-nobility","name":"Divine Soul Nobility","emoji":"🔥","tier":10},
      'combo-3-7-19': {"id":"divine-soul-royalty","name":"Divine Soul Royalty","emoji":"💧","tier":10},
      'combo-3-8-0': {"id":"divine-heart-flame","name":"Divine Heart Flame","emoji":"🌊","tier":10},
      'combo-3-8-1': {"id":"divine-heart-frost","name":"Divine Heart Frost","emoji":"⚡","tier":10},
      'combo-3-8-2': {"id":"divine-heart-storm","name":"Divine Heart Storm","emoji":"❄️","tier":10},
      'combo-3-8-3': {"id":"divine-heart-quake","name":"Divine Heart Quake","emoji":"🌪️","tier":10},
      'combo-3-8-4': {"id":"divine-heart-tide","name":"Divine Heart Tide","emoji":"☄️","tier":10},
      'combo-3-8-5': {"id":"divine-heart-wind","name":"Divine Heart Wind","emoji":"💎","tier":10},
      'combo-3-8-6': {"id":"divine-heart-thunder","name":"Divine Heart Thunder","emoji":"👑","tier":10},
      'combo-3-8-7': {"id":"divine-heart-lightning","name":"Divine Heart Lightning","emoji":"🗝️","tier":10},
      'combo-3-8-8': {"id":"divine-heart-shadow","name":"Divine Heart Shadow","emoji":"🔑","tier":10},
      'combo-3-8-9': {"id":"divine-heart-light","name":"Divine Heart Light","emoji":"🎭","tier":10},
      'combo-3-8-10': {"id":"divine-heart-darkness","name":"Divine Heart Darkness","emoji":"🎨","tier":10},
      'combo-3-8-11': {"id":"divine-heart-radiance","name":"Divine Heart Radiance","emoji":"🎪","tier":10},
      'combo-3-8-12': {"id":"divine-heart-brilliance","name":"Divine Heart Brilliance","emoji":"🎢","tier":10},
      'combo-3-8-13': {"id":"divine-heart-glory","name":"Divine Heart Glory","emoji":"🎡","tier":10},
      'combo-3-8-14': {"id":"divine-heart-majesty","name":"Divine Heart Majesty","emoji":"🎠","tier":10},
      'combo-3-8-15': {"id":"divine-heart-splendor","name":"Divine Heart Splendor","emoji":"🎪","tier":10},
      'combo-3-8-16': {"id":"divine-heart-magnificence","name":"Divine Heart Magnificence","emoji":"🎭","tier":10},
      'combo-3-8-17': {"id":"divine-heart-grandeur","name":"Divine Heart Grandeur","emoji":"🎬","tier":10},
      'combo-3-8-18': {"id":"divine-heart-nobility","name":"Divine Heart Nobility","emoji":"🎤","tier":10},
      'combo-3-8-19': {"id":"divine-heart-royalty","name":"Divine Heart Royalty","emoji":"🎧","tier":10},
      'combo-3-9-0': {"id":"divine-core-flame","name":"Divine Core Flame","emoji":"✨","tier":10},
      'combo-3-9-1': {"id":"divine-core-frost","name":"Divine Core Frost","emoji":"⭐","tier":10},
      'combo-3-9-2': {"id":"divine-core-storm","name":"Divine Core Storm","emoji":"🌟","tier":10},
      'combo-3-9-3': {"id":"divine-core-quake","name":"Divine Core Quake","emoji":"💫","tier":10},
      'combo-3-9-4': {"id":"divine-core-tide","name":"Divine Core Tide","emoji":"🔮","tier":10},
      'combo-3-9-5': {"id":"divine-core-wind","name":"Divine Core Wind","emoji":"🎆","tier":10},
      'combo-3-9-6': {"id":"divine-core-thunder","name":"Divine Core Thunder","emoji":"🎇","tier":10},
      'combo-3-9-7': {"id":"divine-core-lightning","name":"Divine Core Lightning","emoji":"🌈","tier":10},
      'combo-3-9-8': {"id":"divine-core-shadow","name":"Divine Core Shadow","emoji":"🔥","tier":10},
      'combo-3-9-9': {"id":"divine-core-light","name":"Divine Core Light","emoji":"💧","tier":10},
      'combo-3-9-10': {"id":"divine-core-darkness","name":"Divine Core Darkness","emoji":"🌊","tier":10},
      'combo-3-9-11': {"id":"divine-core-radiance","name":"Divine Core Radiance","emoji":"⚡","tier":10},
      'combo-3-9-12': {"id":"divine-core-brilliance","name":"Divine Core Brilliance","emoji":"❄️","tier":10},
      'combo-3-9-13': {"id":"divine-core-glory","name":"Divine Core Glory","emoji":"🌪️","tier":10},
      'combo-3-9-14': {"id":"divine-core-majesty","name":"Divine Core Majesty","emoji":"☄️","tier":10},
      'combo-3-9-15': {"id":"divine-core-splendor","name":"Divine Core Splendor","emoji":"💎","tier":10},
      'combo-3-9-16': {"id":"divine-core-magnificence","name":"Divine Core Magnificence","emoji":"👑","tier":10},
      'combo-3-9-17': {"id":"divine-core-grandeur","name":"Divine Core Grandeur","emoji":"🗝️","tier":10},
      'combo-3-9-18': {"id":"divine-core-nobility","name":"Divine Core Nobility","emoji":"🔑","tier":10},
      'combo-3-9-19': {"id":"divine-core-royalty","name":"Divine Core Royalty","emoji":"🎭","tier":10}
    };


    
    // ==================== 生物多样性 (Animals & Creatures - 200+) ====================
    const animalKingdom = {
      // 哺乳动物
      'grass-animal': { id: 'deer', name: 'Deer', emoji: '🦌', tier: 3 },
      'forest-animal': { id: 'bear', name: 'Bear', emoji: '🐻', tier: 4 },
      'mountain-animal': { id: 'goat', name: 'Mountain Goat', emoji: '🐐', tier: 4 },
      'water-animal': { id: 'otter', name: 'Otter', emoji: '🦦', tier: 3 },
      'ocean-animal': { id: 'whale', name: 'Whale', emoji: '🐋', tier: 5 },
      'ocean-big': { id: 'blue-whale', name: 'Blue Whale', emoji: '🐋', tier: 6 },
      'desert-animal': { id: 'camel', name: 'Camel', emoji: '🐫', tier: 4 },
      'ice-animal': { id: 'polar-bear', name: 'Polar Bear', emoji: '🐻‍❄️', tier: 5 },
      'jungle-animal': { id: 'monkey', name: 'Monkey', emoji: '🐵', tier: 4 },
      'jungle-animal-big': { id: 'gorilla', name: 'Gorilla', emoji: '🦍', tier: 5 },
      'savanna-animal': { id: 'lion', name: 'Lion', emoji: '🦁', tier: 5 },
      'savanna-tall': { id: 'giraffe', name: 'Giraffe', emoji: '🦒', tier: 5 },
      'savanna-big': { id: 'elephant', name: 'Elephant', emoji: '🐘', tier: 5 },
      'water-big': { id: 'hippo', name: 'Hippo', emoji: '🦛', tier: 5 },
      'savanna-horn': { id: 'rhino', name: 'Rhino', emoji: '🦏', tier: 5 },
      'forest-stripe': { id: 'tiger', name: 'Tiger', emoji: '🐯', tier: 5 },
      'mountain-cat': { id: 'snow-leopard', name: 'Snow Leopard', emoji: '🐆', tier: 6 },
      'jungle-cat': { id: 'jaguar', name: 'Jaguar', emoji: '🐆', tier: 5 },
      'savanna-fast': { id: 'cheetah', name: 'Cheetah', emoji: '🐆', tier: 5 },
      'forest-howl': { id: 'wolf', name: 'Wolf', emoji: '🐺', tier: 4 },
      'arctic-wolf': { id: 'arctic-wolf', name: 'Arctic Wolf', emoji: '🐺', tier: 5 },
      'desert-howl': { id: 'coyote', name: 'Coyote', emoji: '🐺', tier: 4 },
      'forest-red': { id: 'fox', name: 'Fox', emoji: '🦊', tier: 4 },
      'arctic-fox': { id: 'arctic-fox', name: 'Arctic Fox', emoji: '🦊', tier: 5 },
      'jungle-swing': { id: 'orangutan', name: 'Orangutan', emoji: '🦧', tier: 5 },
      'forest-jump': { id: 'squirrel', name: 'Squirrel', emoji: '🐿️', tier: 3 },
      'forest-climb': { id: 'raccoon', name: 'Raccoon', emoji: '🦝', tier: 4 },
      'forest-spike': { id: 'hedgehog', name: 'Hedgehog', emoji: '🦔', tier: 3 },
      'desert-spike': { id: 'porcupine', name: 'Porcupine', emoji: '🦔', tier: 4 },
      'cave-fly': { id: 'bat', name: 'Bat', emoji: '🦇', tier: 3 },
      'water-playful': { id: 'dolphin', name: 'Dolphin', emoji: '🐬', tier: 5 },
      'ocean-gray': { id: 'seal', name: 'Seal', emoji: '🦭', tier: 4 },
      'ocean-tusk': { id: 'walrus', name: 'Walrus', emoji: '🦭', tier: 5 },
      'ocean-horn': { id: 'narwhal', name: 'Narwhal', emoji: '🐳', tier: 6 },
      'ocean-smart': { id: 'orca', name: 'Orca', emoji: '🐋', tier: 6 },
      'ocean-giant': { id: 'sperm-whale', name: 'Sperm Whale', emoji: '🐋', tier: 6 },
      'farm-animal': { id: 'cow', name: 'Cow', emoji: '🐄', tier: 3 },
      'farm-wool': { id: 'sheep', name: 'Sheep', emoji: '🐑', tier: 3 },
      'farm-pink': { id: 'pig', name: 'Pig', emoji: '🐷', tier: 3 },
      'farm-neigh': { id: 'horse', name: 'Horse', emoji: '🐴', tier: 3 },
      'farm-kick': { id: 'donkey', name: 'Donkey', emoji: '🫏', tier: 3 },
      'farm-hop': { id: 'rabbit', name: 'Rabbit', emoji: '🐰', tier: 3 },
      'australia-hop': { id: 'kangaroo', name: 'Kangaroo', emoji: '🦘', tier: 5 },
      'australia-pouch': { id: 'koala', name: 'Koala', emoji: '🐨', tier: 5 },
      'australia-odd': { id: 'platypus', name: 'Platypus', emoji: '🦫', tier: 6 },
      'bamboo-eat': { id: 'panda', name: 'Panda', emoji: '🐼', tier: 6 },
      'china-panda': { id: 'red-panda', name: 'Red Panda', emoji: '🐼', tier: 5 },
      'africa-neck': { id: 'giraffe', name: 'Giraffe', emoji: '🦒', tier: 5 },
      'africa-stripe': { id: 'zebra', name: 'Zebra', emoji: '🦓', tier: 4 },
      'farm-llama': { id: 'llama', name: 'Llama', emoji: '🦙', tier: 4 },
      'mountain-llama': { id: 'alpaca', name: 'Alpaca', emoji: '🦙', tier: 4 },
      'desert-hump': { id: 'dromedary', name: 'Dromedary', emoji: '🐪', tier: 4 },
      
      // 鸟类 (Birds - 60+)
      'sky-fly': { id: 'bird', name: 'Bird', emoji: '🐦', tier: 3 },
      'bird-small': { id: 'sparrow', name: 'Sparrow', emoji: '🐦', tier: 3 },
      'bird-red': { id: 'cardinal', name: 'Cardinal', emoji: '🐦', tier: 3 },
      'bird-blue': { id: 'bluebird', name: 'Bluebird', emoji: '🐦', tier: 3 },
      'bird-sing': { id: 'nightingale', name: 'Nightingale', emoji: '🐦', tier: 4 },
      'sky-predator': { id: 'eagle', name: 'Eagle', emoji: '🦅', tier: 5 },
      'eagle-bald': { id: 'bald-eagle', name: 'Bald Eagle', emoji: '🦅', tier: 6 },
      'eagle-gold': { id: 'golden-eagle', name: 'Golden Eagle', emoji: '🦅', tier: 6 },
      'sky-hunt': { id: 'hawk', name: 'Hawk', emoji: '🦅', tier: 4 },
      'sky-fast': { id: 'falcon', name: 'Falcon', emoji: '🦅', tier: 5 },
      'falcon-fast': { id: 'peregrine-falcon', name: 'Peregrine Falcon', emoji: '🦅', tier: 6 },
      'night-hunt': { id: 'owl', name: 'Owl', emoji: '🦉', tier: 4 },
      'owl-snow': { id: 'snowy-owl', name: 'Snowy Owl', emoji: '🦉', tier: 5 },
      'owl-barn': { id: 'barn-owl', name: 'Barn Owl', emoji: '🦉', tier: 4 },
      'sky-scavenger': { id: 'vulture', name: 'Vulture', emoji: '🦅', tier: 4 },
      'sky-smart': { id: 'crow', name: 'Crow', emoji: '🐦‍⬛', tier: 4 },
      'crow-smart': { id: 'raven', name: 'Raven', emoji: '🐦‍⬛', tier: 4 },
      'tree-woodpeck': { id: 'woodpecker', name: 'Woodpecker', emoji: '🐦', tier: 3 },
      'flower-hover': { id: 'hummingbird', name: 'Hummingbird', emoji: '🐦', tier: 4 },
      'water-bird': { id: 'duck', name: 'Duck', emoji: '🦆', tier: 3 },
      'duck-wild': { id: 'mallard', name: 'Mallard', emoji: '🦆', tier: 3 },
      'water-honk': { id: 'goose', name: 'Goose', emoji: '🪿', tier: 3 },
      'water-white': { id: 'swan', name: 'Swan', emoji: '🦢', tier: 4 },
      'swan-black': { id: 'black-swan', name: 'Black Swan', emoji: '🦢', tier: 5 },
      'water-pink': { id: 'flamingo', name: 'Flamingo', emoji: '🦩', tier: 5 },
      'water-dive': { id: 'pelican', name: 'Pelican', emoji: '🦢', tier: 4 },
      'ocean-dive': { id: 'seagull', name: 'Seagull', emoji: '🕊️', tier: 3 },
      'ocean-puffin': { id: 'puffin', name: 'Puffin', emoji: '🐧', tier: 4 },
      'ice-bird': { id: 'penguin', name: 'Penguin', emoji: '🐧', tier: 4 },
      'penguin-emperor': { id: 'emperor-penguin', name: 'Emperor Penguin', emoji: '🐧', tier: 5 },
      'farm-cluck': { id: 'chicken', name: 'Chicken', emoji: '🐔', tier: 2 },
      'chicken-rooster': { id: 'rooster', name: 'Rooster', emoji: '🐓', tier: 3 },
      'farm-gobble': { id: 'turkey', name: 'Turkey', emoji: '🦃', tier: 3 },
      'jungle-color': { id: 'parrot', name: 'Parrot', emoji: '🦜', tier: 4 },
      'parrot-blue': { id: 'macaw', name: 'Macaw', emoji: '🦜', tier: 5 },
      'parrot-small': { id: 'parakeet', name: 'Parakeet', emoji: '🦜', tier: 4 },
      'australia-bird': { id: 'cockatoo', name: 'Cockatoo', emoji: '🦜', tier: 5 },
      'jungle-bird-big': { id: 'toucan', name: 'Toucan', emoji: '🦜', tier: 5 },
      'savanna-run': { id: 'ostrich', name: 'Ostrich', emoji: '🦤', tier: 5 },
      'australia-run': { id: 'emu', name: 'Emu', emoji: '🦤', tier: 5 },
      'new-zealand-bird': { id: 'kiwi', name: 'Kiwi', emoji: '🥝', tier: 5 },
      'extinct-bird': { id: 'dodo', name: 'Dodo', emoji: '🦤', tier: 7 },
      'peace-bird': { id: 'dove', name: 'Dove', emoji: '🕊️', tier: 3 },
      'city-bird': { id: 'pigeon', name: 'Pigeon', emoji: '🕊️', tier: 3 },
      'desert-run': { id: 'roadrunner', name: 'Roadrunner', emoji: '🦤', tier: 4 },
      'marsh-wade': { id: 'heron', name: 'Heron', emoji: '🦩', tier: 4 },
      'marsh-crane': { id: 'crane', name: 'Crane', emoji: '🦩', tier: 4 },
      'marsh-stork': { id: 'stork', name: 'Stork', emoji: '🦩', tier: 4 },
      'marsh-ibis': { id: 'ibis', name: 'Ibis', emoji: '🦩', tier: 4 },
      
      // 爬行动物 (Reptiles - 40+)
      'sun-cold': { id: 'lizard', name: 'Lizard', emoji: '🦎', tier: 3 },
      'desert-lizard': { id: 'desert-lizard', name: 'Desert Lizard', emoji: '🦎', tier: 3 },
      'lizard-big': { id: 'iguana', name: 'Iguana', emoji: '🦎', tier: 4 },
      'lizard-change': { id: 'chameleon', name: 'Chameleon', emoji: '🦎', tier: 4 },
      'lizard-gecko': { id: 'gecko', name: 'Gecko', emoji: '🦎', tier: 3 },
      'desert-big': { id: 'komodo-dragon', name: 'Komodo Dragon', emoji: '🦎', tier: 6 },
      'water-reptile': { id: 'crocodile', name: 'Crocodile', emoji: '🐊', tier: 5 },
      'swamp-reptile': { id: 'alligator', name: 'Alligator', emoji: '🐊', tier: 5 },
      'river-croc': { id: 'nile-crocodile', name: 'Nile Crocodile', emoji: '🐊', tier: 6 },
      'ocean-croc': { id: 'saltwater-crocodile', name: 'Saltwater Crocodile', emoji: '🐊', tier: 6 },
      'water-snap': { id: 'snapping-turtle', name: 'Snapping Turtle', emoji: '🐢', tier: 4 },
      'ocean-turtle': { id: 'sea-turtle', name: 'Sea Turtle', emoji: '🐢', tier: 5 },
      'turtle-giant': { id: 'galapagos-tortoise', name: 'Galapagos Tortoise', emoji: '🐢', tier: 6 },
      'slow-shell': { id: 'tortoise', name: 'Tortoise', emoji: '🐢', tier: 4 },
      'grass-slither': { id: 'snake', name: 'Snake', emoji: '🐍', tier: 3 },
      'snake-big': { id: 'python', name: 'Python', emoji: '🐍', tier: 4 },
      'snake-huge': { id: 'anaconda', name: 'Anaconda', emoji: '🐍', tier: 5 },
      'snake-squeeze': { id: 'boa-constrictor', name: 'Boa Constrictor', emoji: '🐍', tier: 5 },
      'snake-poison': { id: 'cobra', name: 'Cobra', emoji: '🐍', tier: 5 },
      'cobra-king': { id: 'king-cobra', name: 'King Cobra', emoji: '🐍', tier: 6 },
      'snake-rattle': { id: 'rattlesnake', name: 'Rattlesnake', emoji: '🐍', tier: 4 },
      'snake-black': { id: 'black-mamba', name: 'Black Mamba', emoji: '🐍', tier: 6 },
      'snake-green': { id: 'green-mamba', name: 'Green Mamba', emoji: '🐍', tier: 5 },
      'snake-water': { id: 'water-moccasin', name: 'Water Moccasin', emoji: '🐍', tier: 4 },
      'snake-sea': { id: 'sea-snake', name: 'Sea Snake', emoji: '🐍', tier: 5 },
      'snake-coral': { id: 'coral-snake', name: 'Coral Snake', emoji: '🐍', tier: 5 },
      'snake-viper': { id: 'viper', name: 'Viper', emoji: '🐍', tier: 4 },
      'snake-pit': { id: 'pit-viper', name: 'Pit Viper', emoji: '🐍', tier: 5 },
      'ancient-reptile': { id: 'dinosaur', name: 'Dinosaur', emoji: '🦕', tier: 7 },
      'dino-big': { id: 't-rex', name: 'T-Rex', emoji: '🦖', tier: 8 },
      'dino-long': { id: 'brachiosaurus', name: 'Brachiosaurus', emoji: '🦕', tier: 7 },
      'dino-three': { id: 'triceratops', name: 'Triceratops', emoji: '🦕', tier: 7 },
      'dino-plate': { id: 'stegosaurus', name: 'Stegosaurus', emoji: '🦕', tier: 7 },
      'dino-fast': { id: 'velociraptor', name: 'Velociraptor', emoji: '🦖', tier: 7 },
      'dino-fly': { id: 'pterodactyl', name: 'Pterodactyl', emoji: '🦅', tier: 7 },
      
      // 两栖动物 (Amphibians - 20+)
      'water-hop': { id: 'frog', name: 'Frog', emoji: '🐸', tier: 3 },
      'frog-tree': { id: 'tree-frog', name: 'Tree Frog', emoji: '🐸', tier: 3 },
      'frog-poison': { id: 'poison-dart-frog', name: 'Poison Dart Frog', emoji: '🐸', tier: 5 },
      'frog-big': { id: 'bullfrog', name: 'Bullfrog', emoji: '🐸', tier: 4 },
      'frog-wood': { id: 'wood-frog', name: 'Wood Frog', emoji: '🐸', tier: 3 },
      'water-toad': { id: 'toad', name: 'Toad', emoji: '🐸', tier: 3 },
      'toad-cane': { id: 'cane-toad', name: 'Cane Toad', emoji: '🐸', tier: 4 },
      'water-salamander': { id: 'salamander', name: 'Salamander', emoji: '🦎', tier: 3 },
      'fire-salamander': { id: 'fire-salamander', name: 'Fire Salamander', emoji: '🦎', tier: 4 },
      'water-newt': { id: 'newt', name: 'Newt', emoji: '🦎', tier: 3 },
      'cave-amphibian': { id: 'olm', name: 'Olm', emoji: '🦎', tier: 5 },
      'water-axolotl': { id: 'axolotl', name: 'Axolotl', emoji: '🦎', tier: 5 },
      'giant-amphibian': { id: 'giant-salamander', name: 'Giant Salamander', emoji: '🦎', tier: 6 },
      
      // 鱼类 (Fish - 50+)
      'water-swim': { id: 'fish', name: 'Fish', emoji: '🐟', tier: 2 },
      'ocean-swim': { id: 'tropical-fish', name: 'Tropical Fish', emoji: '🐠', tier: 3 },
      'fish-color': { id: 'clownfish', name: 'Clownfish', emoji: '🐠', tier: 4 },
      'fish-blue': { id: 'blue-tang', name: 'Blue Tang', emoji: '🐠', tier: 4 },
      'ocean-predator': { id: 'shark', name: 'Shark', emoji: '🦈', tier: 5 },
      'shark-great': { id: 'great-white-shark', name: 'Great White Shark', emoji: '🦈', tier: 6 },
      'shark-tiger': { id: 'tiger-shark', name: 'Tiger Shark', emoji: '🦈', tier: 6 },
      'shark-hammer': { id: 'hammerhead-shark', name: 'Hammerhead Shark', emoji: '🦈', tier: 6 },
      'shark-whale': { id: 'whale-shark', name: 'Whale Shark', emoji: '🦈', tier: 7 },
      'shark-basking': { id: 'basking-shark', name: 'Basking Shark', emoji: '🦈', tier: 6 },
      'shark-bull': { id: 'bull-shark', name: 'Bull Shark', emoji: '🦈', tier: 6 },
      'shark-mako': { id: 'mako-shark', name: 'Mako Shark', emoji: '🦈', tier: 6 },
      'ocean-ray': { id: 'manta-ray', name: 'Manta Ray', emoji: '🦈', tier: 5 },
      'ocean-sting': { id: 'stingray', name: 'Stingray', emoji: '🦈', tier: 4 },
      'ocean-electric': { id: 'electric-ray', name: 'Electric Ray', emoji: '💡', tier: 5 },
      'ocean-flat': { id: 'flounder', name: 'Flounder', emoji: '🐟', tier: 3 },
      'ocean-halibut': { id: 'halibut', name: 'Halibut', emoji: '🐟', tier: 4 },
      'river-catfish': { id: 'catfish', name: 'Catfish', emoji: '🐟', tier: 3 },
      'river-bass': { id: 'bass', name: 'Bass', emoji: '🐟', tier: 3 },
      'river-trout': { id: 'trout', name: 'Trout', emoji: '🐟', tier: 3 },
      'river-salmon': { id: 'salmon', name: 'Salmon', emoji: '🐟', tier: 4 },
      'ocean-tuna': { id: 'tuna', name: 'Tuna', emoji: '🐟', tier: 4 },
      'ocean-swordfish': { id: 'swordfish', name: 'Swordfish', emoji: '🐟', tier: 5 },
      'ocean-marlin': { id: 'marlin', name: 'Marlin', emoji: '🐟', tier: 5 },
      'ocean-barracuda': { id: 'barracuda', name: 'Barracuda', emoji: '🐟', tier: 4 },
      'ocean-eel': { id: 'eel', name: 'Eel', emoji: '🐟', tier: 4 },
      'ocean-moray': { id: 'moray-eel', name: 'Moray Eel', emoji: '🐟', tier: 5 },
      'ocean-electric-eel': { id: 'electric-eel', name: 'Electric Eel', emoji: '💡', tier: 5 },
      'ocean-puffer': { id: 'pufferfish', name: 'Pufferfish', emoji: '🐡', tier: 4 },
      'ocean-blowfish': { id: 'blowfish', name: 'Blowfish', emoji: '🐡', tier: 4 },
      'ocean-seahorse': { id: 'seahorse', name: 'Seahorse', emoji: '🐴', tier: 4 },
      'ocean-jellyfish': { id: 'jellyfish', name: 'Jellyfish', emoji: '🪼', tier: 3 },
      'ocean-box': { id: 'box-jellyfish', name: 'Box Jellyfish', emoji: '🪼', tier: 6 },
      'deep-angler': { id: 'anglerfish', name: 'Anglerfish', emoji: '🐡', tier: 6 },
      'deep-viperfish': { id: 'viperfish', name: 'Viperfish', emoji: '🐟', tier: 6 },
      'ocean-piranha': { id: 'piranha', name: 'Piranha', emoji: '🐟', tier: 5 },
      'ancient-fish': { id: 'coelacanth', name: 'Coelacanth', emoji: '🥫', tier: 7 },
      'gold-fish': { id: 'goldfish', name: 'Goldfish', emoji: '🐟', tier: 2 },
      'koi-fish': { id: 'koi', name: 'Koi', emoji: '🐟', tier: 4 },
      'beta-fish': { id: 'betta-fish', name: 'Betta Fish', emoji: '🐟', tier: 3 },
      'guppy-fish': { id: 'guppy', name: 'Guppy', emoji: '🐟', tier: 2 },
      
      // 海洋无脊椎动物 (Marine Invertebrates - 40+)
      'ocean-tentacle': { id: 'octopus', name: 'Octopus', emoji: '🐙', tier: 5 },
      'octopus-giant': { id: 'giant-pacific-octopus', name: 'Giant Pacific Octopus', emoji: '🐙', tier: 6 },
      'ocean-squid': { id: 'squid', name: 'Squid', emoji: '🦑', tier: 4 },
      'deep-giant': { id: 'giant-squid', name: 'Giant Squid', emoji: '🦑', tier: 7 },
      'deep-colossal': { id: 'colossal-squid', name: 'Colossal Squid', emoji: '🦑', tier: 8 },
      'ocean-shell': { id: 'clam', name: 'Clam', emoji: '🦪', tier: 2 },
      'ocean-giant-clam': { id: 'giant-clam', name: 'Giant Clam', emoji: '🦪', tier: 5 },
      'ocean-oyster': { id: 'oyster', name: 'Oyster', emoji: '🦪', tier: 3 },
      'ocean-pearl': { id: 'pearl-oyster', name: 'Pearl Oyster', emoji: '🦪', tier: 4 },
      'ocean-mussel': { id: 'mussel', name: 'Mussel', emoji: '🦪', tier: 3 },
      'ocean-scallop': { id: 'scallop', name: 'Scallop', emoji: '🦪', tier: 3 },
      'ocean-snail': { id: 'sea-snail', name: 'Sea Snail', emoji: '🐌', tier: 2 },
      'ocean-cone': { id: 'cone-snail', name: 'Cone Snail', emoji: '🐌', tier: 5 },
      'ocean-slug': { id: 'sea-slug', name: 'Sea Slug', emoji: '🐌', tier: 3 },
      'ocean-nudi': { id: 'nudibranch', name: 'Nudibranch', emoji: '🐌', tier: 4 },
      'ocean-crab': { id: 'crab', name: 'Crab', emoji: '🦀', tier: 3 },
      'ocean-king-crab': { id: 'king-crab', name: 'King Crab', emoji: '🦀', tier: 5 },
      'ocean-spider-crab': { id: 'spider-crab', name: 'Spider Crab', emoji: '🦀', tier: 5 },
      'ocean-hermit': { id: 'hermit-crab', name: 'Hermit Crab', emoji: '🦀', tier: 3 },
      'ocean-lobster': { id: 'lobster', name: 'Lobster', emoji: '🦞', tier: 4 },
      'ocean-spiny': { id: 'spiny-lobster', name: 'Spiny Lobster', emoji: '🦞', tier: 4 },
      'ocean-shrimp': { id: 'shrimp', name: 'Shrimp', emoji: '🦐', tier: 2 },
      'ocean-prawn': { id: 'prawn', name: 'Prawn', emoji: '🦐', tier: 3 },
      'ocean-mantis': { id: 'mantis-shrimp', name: 'Mantis Shrimp', emoji: '🦐', tier: 6 },
      'ocean-star': { id: 'starfish', name: 'Starfish', emoji: '🌟', tier: 3 },
      'ocean-crown': { id: 'crown-of-thorns', name: 'Crown of Thorns', emoji: '⭐', tier: 5 },
      'ocean-urchin': { id: 'sea-urchin', name: 'Sea Urchin', emoji: '🦔', tier: 3 },
      'ocean-cucumber': { id: 'sea-cucumber', name: 'Sea Cucumber', emoji: '🥒', tier: 3 },
      'ocean-sponge': { id: 'sponge', name: 'Sponge', emoji: '🧽', tier: 2 },
      'ocean-coral': { id: 'coral', name: 'Coral', emoji: '🪸', tier: 3 },
      'coral-reef': { id: 'coral-reef', name: 'Coral Reef', emoji: '🪸', tier: 5 },
      'ocean-anemone': { id: 'sea-anemone', name: 'Sea Anemone', emoji: '🪸', tier: 3 },
      'ocean-plankton': { id: 'plankton', name: 'Plankton', emoji: '🦠', tier: 1 },
      'ocean-krill': { id: 'krill', name: 'Krill', emoji: '🦐', tier: 2 },
      'ocean-barnacle': { id: 'barnacle', name: 'Barnacle', emoji: '🪨', tier: 2 },
      
      // 昆虫 (Insects - 60+)
      'flower-buzz': { id: 'bee', name: 'Bee', emoji: '🐝', tier: 2 },
      'bee-queen': { id: 'queen-bee', name: 'Queen Bee', emoji: '🐝', tier: 4 },
      'bee-bumble': { id: 'bumblebee', name: 'Bumblebee', emoji: '🐝', tier: 3 },
      'bee-honey': { id: 'honeybee', name: 'Honeybee', emoji: '🐝', tier: 3 },
      'bee-carpenter': { id: 'carpenter-bee', name: 'Carpenter Bee', emoji: '🐝', tier: 3 },
      'bee-sting': { id: 'wasp', name: 'Wasp', emoji: '🐝', tier: 3 },
      'wasp-yellow': { id: 'yellow-jacket', name: 'Yellow Jacket', emoji: '🐝', tier: 4 },
      'wasp-hornet': { id: 'hornet', name: 'Hornet', emoji: '🐝', tier: 4 },
      'wasp-giant': { id: 'giant-hornet', name: 'Giant Hornet', emoji: '🐝', tier: 5 },
      'garden-fly': { id: 'butterfly', name: 'Butterfly', emoji: '🦋', tier: 3 },
      'butterfly-monarch': { id: 'monarch-butterfly', name: 'Monarch Butterfly', emoji: '🦋', tier: 4 },
      'butterfly-blue': { id: 'blue-morpho', name: 'Blue Morpho', emoji: '🦋', tier: 4 },
      'butterfly-swallowtail': { id: 'swallowtail', name: 'Swallowtail', emoji: '🦋', tier: 4 },
      'night-fly': { id: 'moth', name: 'Moth', emoji: '🦋', tier: 3 },
      'moth-luna': { id: 'luna-moth', name: 'Luna Moth', emoji: '🦋', tier: 4 },
      'moth-atlas': { id: 'atlas-moth', name: 'Atlas Moth', emoji: '🦋', tier: 5 },
      'garden-crawl': { id: 'caterpillar', name: 'Caterpillar', emoji: '🐛', tier: 2 },
      'silk-worm': { id: 'silkworm', name: 'Silkworm', emoji: '🐛', tier: 3 },
      'garden-bug': { id: 'ladybug', name: 'Ladybug', emoji: '🐞', tier: 2 },
      'garden-beetle': { id: 'beetle', name: 'Beetle', emoji: '🪲', tier: 2 },
      'beetle-stag': { id: 'stag-beetle', name: 'Stag Beetle', emoji: '🪲', tier: 4 },
      'beetle-rhino': { id: 'rhinoceros-beetle', name: 'Rhinoceros Beetle', emoji: '🪲', tier: 4 },
      'beetle-goliath': { id: 'goliath-beetle', name: 'Goliath Beetle', emoji: '🪲', tier: 5 },
      'beetle-hercules': { id: 'hercules-beetle', name: 'Hercules Beetle', emoji: '🪲', tier: 5 },
      'beetle-firefly': { id: 'firefly', name: 'Firefly', emoji: '🪰', tier: 3 },
      'beetle-glow': { id: 'glowworm', name: 'Glowworm', emoji: '🐛', tier: 3 },
      'beetle-dung': { id: 'dung-beetle', name: 'Dung Beetle', emoji: '🪲', tier: 3 },
      'garden-ant': { id: 'ant', name: 'Ant', emoji: '🐜', tier: 2 },
      'ant-fire': { id: 'fire-ant', name: 'Fire Ant', emoji: '🐜', tier: 3 },
      'ant-carpenter': { id: 'carpenter-ant', name: 'Carpenter Ant', emoji: '🖊️', tier: 3 },
      'ant-leaf': { id: 'leafcutter-ant', name: 'Leafcutter Ant', emoji: '🐜', tier: 3 },
      'ant-army': { id: 'army-ant', name: 'Army Ant', emoji: '🐜', tier: 4 },
      'ant-bullet': { id: 'bullet-ant', name: 'Bullet Ant', emoji: '🐜', tier: 5 },
      'wood-termite': { id: 'termite', name: 'Termite', emoji: '📌', tier: 3 },
      'garden-cricket': { id: 'cricket', name: 'Cricket', emoji: '🏏', tier: 2 },
      'garden-grasshopper': { id: 'grasshopper', name: 'Grasshopper', emoji: '🦗', tier: 2 },
      'swarm-locust': { id: 'locust', name: 'Locust', emoji: '🦗', tier: 4 },
      'garden-mantis': { id: 'praying-mantis', name: 'Praying Mantis', emoji: '🦗', tier: 4 },
      'stick-insect': { id: 'stick-insect', name: 'Stick Insect', emoji: '🌱', tier: 3 },
      'leaf-insect': { id: 'leaf-insect', name: 'Leaf Insect', emoji: '🍃', tier: 3 },
      'garden-fly-house': { id: 'housefly', name: 'Housefly', emoji: '🪰', tier: 2 },
      'garden-fly-fruit': { id: 'fruit-fly', name: 'Fruit Fly', emoji: '🪰', tier: 2 },
      'garden-fly-dragon': { id: 'dragonfly', name: 'Dragonfly', emoji: '🪰', tier: 3 },
      'garden-fly-damsel': { id: 'damselfly', name: 'Damselfly', emoji: '🪰', tier: 3 },
      'blood-mosquito': { id: 'mosquito', name: 'Mosquito', emoji: '🦟', tier: 3 },
      'disease-mosquito': { id: 'malaria-mosquito', name: 'Malaria Mosquito', emoji: '🦟', tier: 5 },
      'garden-flea': { id: 'flea', name: 'Flea', emoji: '🦟', tier: 2 },
      'blood-tick': { id: 'tick', name: 'Tick', emoji: '🦟', tier: 3 },
      'blood-louse': { id: 'louse', name: 'Louse', emoji: '🦟', tier: 2 },
      'garden-aphid': { id: 'aphid', name: 'Aphid', emoji: '🦟', tier: 2 },
      'plant-cicada': { id: 'cicada', name: 'Cicada', emoji: '🦗', tier: 3 },
      'cicada-17': { id: '17-year-cicada', name: '17 Year Cicada', emoji: '🦗', tier: 5 },
      
      // 蜘蛛和蝎子 (Arachnids - 20+)
      'web-spin': { id: 'spider', name: 'Spider', emoji: '🕷️', tier: 3 },
      'spider-black': { id: 'black-widow', name: 'Black Widow', emoji: '🕷️', tier: 5 },
      'spider-brown': { id: 'brown-recluse', name: 'Brown Recluse', emoji: '🕷️', tier: 5 },
      'spider-tarantula': { id: 'tarantula', name: 'Tarantula', emoji: '🕷️', tier: 5 },
      'spider-wolf': { id: 'wolf-spider', name: 'Wolf Spider', emoji: '🕷️', tier: 4 },
      'spider-jumping': { id: 'jumping-spider', name: 'Jumping Spider', emoji: '📌', tier: 3 },
      'spider-orb': { id: 'orb-weaver', name: 'Orb Weaver', emoji: '🕷️', tier: 3 },
      'spider-garden': { id: 'garden-spider', name: 'Garden Spider', emoji: '🕷️', tier: 3 },
      'spider-funnel': { id: 'funnel-web-spider', name: 'Funnel Web Spider', emoji: '🕷️', tier: 6 },
      'spider-redback': { id: 'redback-spider', name: 'Redback Spider', emoji: '🕷️', tier: 5 },
      'spider-bird': { id: 'bird-eating-spider', name: 'Bird Eating Spider', emoji: '🕷️', tier: 6 },
      'desert-scorpion': { id: 'scorpion', name: 'Scorpion', emoji: '🦂', tier: 4 },
      'scorpion-emperor': { id: 'emperor-scorpion', name: 'Emperor Scorpion', emoji: '🦂', tier: 5 },
      'scorpion-death': { id: 'deathstalker', name: 'Deathstalker', emoji: '🦂', tier: 6 },
      'scorpion-bark': { id: 'bark-scorpion', name: 'Bark Scorpion', emoji: '🦂', tier: 5 },
      'desert-mite': { id: 'mite', name: 'Mite', emoji: '🦟', tier: 1 },
      'harvest-spider': { id: 'daddy-longlegs', name: 'Daddy Longlegs', emoji: '🕷️', tier: 2 },
      
      // 蠕虫和其他无脊椎动物 (Worms & Others - 20+)
      'soil-worm': { id: 'earthworm', name: 'Earthworm', emoji: '🪱', tier: 2 },
      'garden-worm': { id: 'nightcrawler', name: 'Nightcrawler', emoji: '🪱', tier: 2 },
      'water-leech': { id: 'leech', name: 'Leech', emoji: '🪱', tier: 3 },
      'medical-leech': { id: 'medicinal-leech', name: 'Medicinal Leech', emoji: '🪱', tier: 4 },
      'parasite-tapeworm': { id: 'tapeworm', name: 'Tapeworm', emoji: '🪱', tier: 4 },
      'parasite-roundworm': { id: 'roundworm', name: 'Roundworm', emoji: '🪱', tier: 3 },
      'parasite-hookworm': { id: 'hookworm', name: 'Hookworm', emoji: '🪱', tier: 3 },
      'ocean-flatworm': { id: 'flatworm', name: 'Flatworm', emoji: '🪱', tier: 2 },
      'garden-slug': { id: 'slug', name: 'Slug', emoji: '🐌', tier: 2 },
      'garden-snail': { id: 'snail', name: 'Snail', emoji: '🐌', tier: 2 },
      'giant-snail': { id: 'giant-african-snail', name: 'Giant African Snail', emoji: '🐌', tier: 4 },
      'forest-millipede': { id: 'millipede', name: 'Millipede', emoji: '🐛', tier: 2 },
      'giant-millipede': { id: 'giant-millipede', name: 'Giant Millipede', emoji: '🐛', tier: 4 },
      'forest-centipede': { id: 'centipede', name: 'Centipede', emoji: '🐛', tier: 3 },
      'giant-centipede': { id: 'giant-centipede', name: 'Giant Centipede', emoji: '🐛', tier: 5 },
      'pill-bug': { id: 'pill-bug', name: 'Pill Bug', emoji: '🪲', tier: 2 },
      'wood-louse': { id: 'woodlouse', name: 'Woodlouse', emoji: '🪲', tier: 2 },
    };

    // ==================== 植物王国 (Plant Kingdom - 250+) ====================
    const plantKingdom = {
      // 树木 (Trees - 80+)
      'seed-grow': { id: 'tree', name: 'Tree', emoji: '🌲', tier: 2 },
      'forest-oak': { id: 'oak-tree', name: 'Oak Tree', emoji: '🌳', tier: 3 },
      'forest-maple': { id: 'maple-tree', name: 'Maple Tree', emoji: '🍁', tier: 3 },
      'forest-birch': { id: 'birch-tree', name: 'Birch Tree', emoji: '🎄', tier: 3 },
      'forest-ash': { id: 'ash-tree', name: 'Ash Tree', emoji: '🍃', tier: 3 },
      'forest-elm': { id: 'elm-tree', name: 'Elm Tree', emoji: '🌳', tier: 3 },
      'forest-beech': { id: 'beech-tree', name: 'Beech Tree', emoji: '🌳', tier: 3 },
      'forest-hickory': { id: 'hickory-tree', name: 'Hickory Tree', emoji: '🌲', tier: 3 },
      'forest-walnut': { id: 'walnut-tree', name: 'Walnut Tree', emoji: '🌴', tier: 4 },
      'forest-chestnut': { id: 'chestnut-tree', name: 'Chestnut Tree', emoji: '🗃️', tier: 4 },
      'forest-willow': { id: 'willow-tree', name: 'Willow Tree', emoji: '🌾', tier: 3 },
      'water-willow': { id: 'weeping-willow', name: 'Weeping Willow', emoji: '☘️', tier: 4 },
      'swamp-cypress': { id: 'bald-cypress', name: 'Bald Cypress', emoji: '🌲', tier: 4 },
      'swamp-mangrove': { id: 'mangrove-tree', name: 'Mangrove Tree', emoji: '🌴', tier: 4 },
      'mountain-pine': { id: 'pine-tree', name: 'Pine Tree', emoji: '📌', tier: 3 },
      'pine-bristle': { id: 'bristlecone-pine', name: 'Bristlecone Pine', emoji: '📌', tier: 6 },
      'pine-white': { id: 'white-pine', name: 'White Pine', emoji: '📌', tier: 3 },
      'pine-scots': { id: 'scots-pine', name: 'Scots Pine', emoji: '📌', tier: 3 },
      'pine-ponderosa': { id: 'ponderosa-pine', name: 'Ponderosa Pine', emoji: '📌', tier: 4 },
      'mountain-spruce': { id: 'spruce-tree', name: 'Spruce Tree', emoji: '🌲', tier: 3 },
      'spruce-norway': { id: 'norway-spruce', name: 'Norway Spruce', emoji: '🌲', tier: 3 },
      'spruce-blue': { id: 'blue-spruce', name: 'Blue Spruce', emoji: '🌲', tier: 4 },
      'mountain-fir': { id: 'fir-tree', name: 'Fir Tree', emoji: '🎄', tier: 3 },
      'fir-douglas': { id: 'douglas-fir', name: 'Douglas Fir', emoji: '🎄', tier: 4 },
      'fir-balsam': { id: 'balsam-fir', name: 'Balsam Fir', emoji: '🎄', tier: 3 },
      'mountain-cedar': { id: 'cedar-tree', name: 'Cedar Tree', emoji: '🌲', tier: 4 },
      'cedar-lebanon': { id: 'cedar-of-lebanon', name: 'Cedar of Lebanon', emoji: '🌲', tier: 5 },
      'cedar-atlas': { id: 'atlas-cedar', name: 'Atlas Cedar', emoji: '🌲', tier: 4 },
      'mountain-hemlock': { id: 'hemlock-tree', name: 'Hemlock Tree', emoji: '🔒', tier: 3 },
      'mountain-larch': { id: 'larch-tree', name: 'Larch Tree', emoji: '🌳', tier: 3 },
      'giant-redwood': { id: 'redwood-tree', name: 'Redwood Tree', emoji: '🌲', tier: 6 },
      'giant-sequoia-tree': { id: 'sequoia-tree', name: 'Sequoia Tree', emoji: '🌲', tier: 6 },
      'jungle-mahogany': { id: 'mahogany-tree', name: 'Mahogany Tree', emoji: '🌲', tier: 5 },
      'jungle-teak': { id: 'teak-tree', name: 'Teak Tree', emoji: '🍵', tier: 5 },
      'jungle-ebony': { id: 'ebony-tree', name: 'Ebony Tree', emoji: '🌴', tier: 5 },
      'jungle-rosewood': { id: 'rosewood-tree', name: 'Rosewood Tree', emoji: '🌹', tier: 5 },
      'tropical-palm': { id: 'palm-tree', name: 'Palm Tree', emoji: '🌴', tier: 3 },
      'palm-coconut': { id: 'coconut-palm', name: 'Coconut Palm', emoji: '🌴', tier: 4 },
      'palm-date': { id: 'date-palm', name: 'Date Palm', emoji: '🌴', tier: 4 },
      'palm-oil': { id: 'oil-palm', name: 'Oil Palm', emoji: '🌴', tier: 4 },
      'tropical-banana': { id: 'banana-tree', name: 'Banana Tree', emoji: '🍌', tier: 3 },
      'tropical-mango': { id: 'mango-tree', name: 'Mango Tree', emoji: '🍃', tier: 4 },
      'tropical-papaya': { id: 'papaya-tree', name: 'Papaya Tree', emoji: '🌳', tier: 3 },
      'tropical-cacao': { id: 'cacao-tree', name: 'Cacao Tree', emoji: '🌲', tier: 4 },
      'tropical-coffee': { id: 'coffee-tree', name: 'Coffee Tree', emoji: '☕', tier: 4 },
      'tropical-rubber': { id: 'rubber-tree', name: 'Rubber Tree', emoji: '🌴', tier: 4 },
      'fruit-apple': { id: 'apple-tree', name: 'Apple Tree', emoji: '🍎', tier: 3 },
      'fruit-pear': { id: 'pear-tree', name: 'Pear Tree', emoji: '🍃', tier: 3 },
      'fruit-cherry': { id: 'cherry-tree', name: 'Cherry Tree', emoji: '🍒', tier: 3 },
      'fruit-peach': { id: 'peach-tree', name: 'Peach Tree', emoji: '🍑', tier: 3 },
      'fruit-plum': { id: 'plum-tree', name: 'Plum Tree', emoji: '🌳', tier: 3 },
      'fruit-apricot': { id: 'apricot-tree', name: 'Apricot Tree', emoji: '🌲', tier: 3 },
      'fruit-orange': { id: 'orange-tree', name: 'Orange Tree', emoji: '🍊', tier: 3 },
      'fruit-lemon': { id: 'lemon-tree', name: 'Lemon Tree', emoji: '🍋', tier: 3 },
      'fruit-lime': { id: 'lime-tree', name: 'Lime Tree', emoji: '🌴', tier: 3 },
      'fruit-grapefruit': { id: 'grapefruit-tree', name: 'Grapefruit Tree', emoji: '🍇', tier: 3 },
      'fruit-fig': { id: 'fig-tree', name: 'Fig Tree', emoji: '🍃', tier: 3 },
      'fruit-olive': { id: 'olive-tree', name: 'Olive Tree', emoji: '🌳', tier: 4 },
      'nut-almond': { id: 'almond-tree', name: 'Almond Tree', emoji: '🌲', tier: 4 },
      'nut-pecan': { id: 'pecan-tree', name: 'Pecan Tree', emoji: '🥫', tier: 4 },
      'nut-pistachio': { id: 'pistachio-tree', name: 'Pistachio Tree', emoji: '🍃', tier: 4 },
      'nut-cashew': { id: 'cashew-tree', name: 'Cashew Tree', emoji: '🌳', tier: 4 },
      'nut-hazel': { id: 'hazel-tree', name: 'Hazel Tree', emoji: '🌲', tier: 3 },
      'nut-macadamia': { id: 'macadamia-tree', name: 'Macadamia Tree', emoji: '🌴', tier: 4 },
      'asia-bamboo': { id: 'bamboo', name: 'Bamboo', emoji: '🎋', tier: 3 },
      'bamboo-giant': { id: 'giant-bamboo', name: 'Giant Bamboo', emoji: '🎋', tier: 4 },
      'bamboo-lucky': { id: 'lucky-bamboo', name: 'Lucky Bamboo', emoji: '🎋', tier: 3 },
      'asia-ginkgo': { id: 'ginkgo-tree', name: 'Ginkgo Tree', emoji: '🍂', tier: 5 },
      'japan-cherry': { id: 'cherry-blossom-tree', name: 'Cherry Blossom Tree', emoji: '🌸', tier: 4 },
      'japan-maple': { id: 'japanese-maple', name: 'Japanese Maple', emoji: '🍁', tier: 4 },
      'ancient-metasequoia': { id: 'dawn-redwood', name: 'Dawn Redwood', emoji: '🌲', tier: 6 },
      'baobab-tree': { id: 'baobab', name: 'Baobab', emoji: '🍃', tier: 5 },
      'joshua-tree': { id: 'joshua-tree', name: 'Joshua Tree', emoji: '🌵', tier: 4 },
      'banyan-tree': { id: 'banyan-tree', name: 'Banyan Tree', emoji: '🌴', tier: 5 },
      
      // 花卉 (Flowers - 80+)
      'garden-flower': { id: 'flower', name: 'Flower', emoji: '🌸', tier: 2 },
      'garden-rose': { id: 'rose', name: 'Rose', emoji: '🌹', tier: 3 },
      'rose-red': { id: 'red-rose', name: 'Red Rose', emoji: '🌹', tier: 3 },
      'rose-white': { id: 'white-rose', name: 'White Rose', emoji: '🌹', tier: 3 },
      'rose-pink': { id: 'pink-rose', name: 'Pink Rose', emoji: '🌹', tier: 3 },
      'rose-yellow': { id: 'yellow-rose', name: 'Yellow Rose', emoji: '🌹', tier: 3 },
      'rose-black': { id: 'black-rose', name: 'Black Rose', emoji: '🌹', tier: 5 },
      'garden-tulip': { id: 'tulip', name: 'Tulip', emoji: '🌷', tier: 3 },
      'tulip-red': { id: 'red-tulip', name: 'Red Tulip', emoji: '🌷', tier: 3 },
      'tulip-yellow': { id: 'yellow-tulip', name: 'Yellow Tulip', emoji: '🌷', tier: 3 },
      'tulip-pink': { id: 'pink-tulip', name: 'Pink Tulip', emoji: '🌷', tier: 3 },
      'tulip-white': { id: 'white-tulip', name: 'White Tulip', emoji: '🌷', tier: 3 },
      'tulip-black': { id: 'black-tulip', name: 'Black Tulip', emoji: '🌷', tier: 5 },
      'spring-daffodil': { id: 'daffodil', name: 'Daffodil', emoji: '🌼', tier: 3 },
      'spring-crocus': { id: 'crocus', name: 'Crocus', emoji: '🌼', tier: 3 },
      'spring-hyacinth': { id: 'hyacinth', name: 'Hyacinth', emoji: '🌼', tier: 3 },
      'spring-iris': { id: 'iris', name: 'Iris', emoji: '🌼', tier: 3 },
      'summer-sunflower': { id: 'sunflower', name: 'Sunflower', emoji: '🌻', tier: 3 },
      'sunflower-giant': { id: 'giant-sunflower', name: 'Giant Sunflower', emoji: '🌻', tier: 4 },
      'summer-daisy': { id: 'daisy', name: 'Daisy', emoji: '🌼', tier: 2 },
      'daisy-african': { id: 'african-daisy', name: 'African Daisy', emoji: '🌼', tier: 3 },
      'daisy-shasta': { id: 'shasta-daisy', name: 'Shasta Daisy', emoji: '🌼', tier: 3 },
      'garden-lily': { id: 'lily', name: 'Lily', emoji: '🌺', tier: 3 },
      'lily-tiger': { id: 'tiger-lily', name: 'Tiger Lily', emoji: '🌺', tier: 4 },
      'lily-calla': { id: 'calla-lily', name: 'Calla Lily', emoji: '🌷', tier: 3 },
      'lily-water': { id: 'water-lily', name: 'Water Lily', emoji: '🪷', tier: 3 },
      'lily-peace': { id: 'peace-lily', name: 'Peace Lily', emoji: '🌾', tier: 3 },
      'lily-easter': { id: 'easter-lily', name: 'Easter Lily', emoji: '🌸', tier: 3 },
      'pond-lotus': { id: 'lotus', name: 'Lotus', emoji: '🪷', tier: 4 },
      'lotus-sacred': { id: 'sacred-lotus', name: 'Sacred Lotus', emoji: '🪷', tier: 5 },
      'garden-orchid': { id: 'orchid', name: 'Orchid', emoji: '🌸', tier: 4 },
      'orchid-vanilla': { id: 'vanilla-orchid', name: 'Vanilla Orchid', emoji: '🌺', tier: 5 },
      'orchid-moth': { id: 'moth-orchid', name: 'Moth Orchid', emoji: '🌺', tier: 4 },
      'orchid-ghost': { id: 'ghost-orchid', name: 'Ghost Orchid', emoji: '🌺', tier: 6 },
      'garden-peony': { id: 'peony', name: 'Peony', emoji: '🌺', tier: 3 },
      'garden-carnation': { id: 'carnation', name: 'Carnation', emoji: '🌺', tier: 3 },
      'garden-zinnia': { id: 'zinnia', name: 'Zinnia', emoji: '🌼', tier: 3 },
      'garden-marigold': { id: 'marigold', name: 'Marigold', emoji: '🌼', tier: 3 },
      'garden-petunia': { id: 'petunia', name: 'Petunia', emoji: '🌺', tier: 3 },
      'garden-pansy': { id: 'pansy', name: 'Pansy', emoji: '🌼', tier: 3 },
      'garden-violet': { id: 'violet', name: 'Violet', emoji: '🌼', tier: 3 },
      'garden-geranium': { id: 'geranium', name: 'Geranium', emoji: '🌺', tier: 3 },
      'garden-begonia': { id: 'begonia', name: 'Begonia', emoji: '🌺', tier: 3 },
      'garden-impatiens': { id: 'impatiens', name: 'Impatiens', emoji: '🌺', tier: 3 },
      'garden-azalea': { id: 'azalea', name: 'Azalea', emoji: '🌺', tier: 3 },
      'garden-rhododendron': { id: 'rhododendron', name: 'Rhododendron', emoji: '🌺', tier: 3 },
      'garden-camellia': { id: 'camellia', name: 'Camellia', emoji: '🌺', tier: 3 },
      'garden-hibiscus': { id: 'hibiscus', name: 'Hibiscus', emoji: '🌺', tier: 3 },
      'tropical-hibiscus': { id: 'tropical-hibiscus', name: 'Tropical Hibiscus', emoji: '🌺', tier: 4 },
      'garden-magnolia': { id: 'magnolia', name: 'Magnolia', emoji: '🌸', tier: 4 },
      'garden-jasmine': { id: 'jasmine', name: 'Jasmine', emoji: '🌼', tier: 3 },
      'garden-gardenia': { id: 'gardenia', name: 'Gardenia', emoji: '🌼', tier: 3 },
      'garden-lavender': { id: 'lavender', name: 'Lavender', emoji: '🌾', tier: 3 },
      'garden-poppy': { id: 'poppy', name: 'Poppy', emoji: '🌺', tier: 3 },
      'poppy-california': { id: 'california-poppy', name: 'California Poppy', emoji: '🌺', tier: 3 },
      'poppy-oriental': { id: 'oriental-poppy', name: 'Oriental Poppy', emoji: '🌺', tier: 3 },
      'meadow-wildflower': { id: 'wildflower', name: 'Wildflower', emoji: '🌸', tier: 2 },
      'meadow-bluebonnet': { id: 'bluebonnet', name: 'Bluebonnet', emoji: '🌸', tier: 3 },
      'meadow-aster': { id: 'aster', name: 'Aster', emoji: '🌼', tier: 3 },
      'meadow-lupine': { id: 'lupine', name: 'Lupine', emoji: '📌', tier: 3 },
      'meadow-foxglove': { id: 'foxglove', name: 'Foxglove', emoji: '❤️', tier: 3 },
      'meadow-columbine': { id: 'columbine', name: 'Columbine', emoji: '🌸', tier: 3 },
      'meadow-delphinium': { id: 'delphinium', name: 'Delphinium', emoji: '🌸', tier: 3 },
      'meadow-hollyhock': { id: 'hollyhock', name: 'Hollyhock', emoji: '🌸', tier: 3 },
      'meadow-cosmos': { id: 'cosmos', name: 'Cosmos', emoji: '🌸', tier: 3 },
      'meadow-dahlia': { id: 'dahlia', name: 'Dahlia', emoji: '🌸', tier: 3 },
      'meadow-gladiolus': { id: 'gladiolus', name: 'Gladiolus', emoji: '🌸', tier: 3 },
      'meadow-snapdragon': { id: 'snapdragon', name: 'Snapdragon', emoji: '🌸', tier: 3 },
      'meadow-sweet-pea': { id: 'sweet-pea', name: 'Sweet Pea', emoji: '🌸', tier: 3 },
      'meadow-morning-glory': { id: 'morning-glory', name: 'Morning Glory', emoji: '🌸', tier: 3 },
      'vine-wisteria': { id: 'wisteria', name: 'Wisteria', emoji: '🌸', tier: 4 },
      'vine-clematis': { id: 'clematis', name: 'Clematis', emoji: '🧘', tier: 3 },
      'vine-honeysuckle': { id: 'honeysuckle', name: 'Honeysuckle', emoji: '🌸', tier: 3 },
      'vine-bougainvillea': { id: 'bougainvillea', name: 'Bougainvillea', emoji: '🌺', tier: 4 },
      'desert-cactus-flower': { id: 'cactus-flower', name: 'Cactus Flower', emoji: '🌸', tier: 4 },
      'rare-corpse-flower': { id: 'corpse-flower', name: 'Corpse Flower', emoji: '🌸', tier: 7 },
      'rare-rafflesia': { id: 'rafflesia', name: 'Rafflesia', emoji: '🌺', tier: 7 },
      'carnivore-venus': { id: 'venus-flytrap', name: 'Venus Flytrap', emoji: '🌱', tier: 5 },
      'carnivore-pitcher': { id: 'pitcher-plant', name: 'Pitcher Plant', emoji: '🪴', tier: 5 },
      'carnivore-sundew': { id: 'sundew', name: 'Sundew', emoji: '☀️', tier: 5 },
      
      // 其他植物 (Other Plants - 90+)
      'ground-moss': { id: 'moss', name: 'Moss', emoji: '🟢', tier: 1 },
      'tree-moss': { id: 'spanish-moss', name: 'Spanish Moss', emoji: '🟢', tier: 2 },
      'rock-lichen': { id: 'lichen', name: 'Lichen', emoji: '🟢', tier: 2 },
      'wall-ivy': { id: 'ivy', name: 'Ivy', emoji: '🍃', tier: 2 },
      'wall-vine': { id: 'vine', name: 'Vine', emoji: '🍇', tier: 2 },
      'jungle-vine': { id: 'jungle-vine', name: 'Jungle Vine', emoji: '🍇', tier: 3 },
      'ground-fern': { id: 'fern', name: 'Fern', emoji: '🌿', tier: 2 },
      'fern-tree': { id: 'tree-fern', name: 'Tree Fern', emoji: '🌳', tier: 4 },
      'fern-boston': { id: 'boston-fern', name: 'Boston Fern', emoji: '🌿', tier: 2 },
      'fern-sword': { id: 'sword-fern', name: 'Sword Fern', emoji: '⚔️', tier: 2 },
      'fern-maidenhair': { id: 'maidenhair-fern', name: 'Maidenhair Fern', emoji: '🌿', tier: 3 },
      'desert-cactus': { id: 'cactus', name: 'Cactus', emoji: '🌵', tier: 3 },
      'cactus-saguaro': { id: 'saguaro-cactus', name: 'Saguaro Cactus', emoji: '🌵', tier: 4 },
      'cactus-barrel': { id: 'barrel-cactus', name: 'Barrel Cactus', emoji: '🌵', tier: 3 },
      'cactus-prickly-pear': { id: 'prickly-pear', name: 'Prickly Pear', emoji: '🌵', tier: 3 },
      'cactus-christmas': { id: 'christmas-cactus', name: 'Christmas Cactus', emoji: '🌵', tier: 3 },
      'desert-succulent': { id: 'succulent', name: 'Succulent', emoji: '🌵', tier: 2 },
      'succulent-aloe': { id: 'aloe-vera', name: 'Aloe Vera', emoji: '🌵', tier: 3 },
      'succulent-jade': { id: 'jade-plant', name: 'Jade Plant', emoji: '💚', tier: 3 },
      'succulent-echeveria': { id: 'echeveria', name: 'Echeveria', emoji: '🌵', tier: 3 },
      'succulent-agave': { id: 'agave', name: 'Agave', emoji: '🌵', tier: 3 },
      'agave-century': { id: 'century-plant', name: 'Century Plant', emoji: '🌵', tier: 4 },
      'grass-wheat': { id: 'wheat', name: 'Wheat', emoji: '🌾', tier: 2 },
      'grass-rice': { id: 'rice', name: 'Rice', emoji: '🍚', tier: 2 },
      'grass-corn': { id: 'corn', name: 'Corn', emoji: '🌽', tier: 2 },
      'grass-barley': { id: 'barley', name: 'Barley', emoji: '🌾', tier: 2 },
      'grass-oats': { id: 'oats', name: 'Oats', emoji: '🌾', tier: 2 },
      'grass-rye': { id: 'rye', name: 'Rye', emoji: '🌾', tier: 2 },
      'grass-millet': { id: 'millet', name: 'Millet', emoji: '🌾', tier: 2 },
      'grass-sorghum': { id: 'sorghum', name: 'Sorghum', emoji: '🌾', tier: 2 },
      'grass-bamboo-grass': { id: 'bamboo-grass', name: 'Bamboo Grass', emoji: '🎋', tier: 2 },
      'grass-pampas': { id: 'pampas-grass', name: 'Pampas Grass', emoji: '🌾', tier: 3 },
      'herb-basil': { id: 'basil', name: 'Basil', emoji: '🌾', tier: 2 },
      'herb-mint': { id: 'mint', name: 'Mint', emoji: '🌿', tier: 2 },
      'herb-parsley': { id: 'parsley', name: 'Parsley', emoji: '🍃', tier: 2 },
      'herb-cilantro': { id: 'cilantro', name: 'Cilantro', emoji: '🌿', tier: 2 },
      'herb-rosemary': { id: 'rosemary', name: 'Rosemary', emoji: '🌹', tier: 2 },
      'herb-thyme': { id: 'thyme', name: 'Thyme', emoji: '🌱', tier: 2 },
      'herb-oregano': { id: 'oregano', name: 'Oregano', emoji: '☘️', tier: 2 },
      'herb-sage': { id: 'sage', name: 'Sage', emoji: '🌾', tier: 2 },
      'herb-dill': { id: 'dill', name: 'Dill', emoji: '🌿', tier: 2 },
      'herb-chives': { id: 'chives', name: 'Chives', emoji: '🍃', tier: 2 },
      'herb-tarragon': { id: 'tarragon', name: 'Tarragon', emoji: '🌱', tier: 2 },
      'herb-fennel': { id: 'fennel', name: 'Fennel', emoji: '☘️', tier: 2 },
      'spice-ginger': { id: 'ginger', name: 'Ginger', emoji: '🌾', tier: 3 },
      'spice-turmeric': { id: 'turmeric', name: 'Turmeric', emoji: '🌿', tier: 3 },
      'spice-cinnamon': { id: 'cinnamon-tree', name: 'Cinnamon Tree', emoji: '🌲', tier: 4 },
      'spice-clove': { id: 'clove-tree', name: 'Clove Tree', emoji: '❤️', tier: 4 },
      'spice-nutmeg': { id: 'nutmeg-tree', name: 'Nutmeg Tree', emoji: '🌴', tier: 4 },
      'spice-pepper': { id: 'pepper-plant', name: 'Pepper Plant', emoji: '🌶️', tier: 3 },
      'spice-chili': { id: 'chili-pepper', name: 'Chili Pepper', emoji: '🌶️', tier: 3 },
      'spice-vanilla': { id: 'vanilla', name: 'Vanilla', emoji: '🍃', tier: 4 },
      'spice-saffron': { id: 'saffron', name: 'Saffron', emoji: '🌱', tier: 5 },
      'vegetable-tomato': { id: 'tomato', name: 'Tomato', emoji: '🍅', tier: 2 },
      'vegetable-potato': { id: 'potato', name: 'Potato', emoji: '🥔', tier: 2 },
      'vegetable-carrot': { id: 'carrot', name: 'Carrot', emoji: '🥕', tier: 2 },
      'vegetable-onion': { id: 'onion', name: 'Onion', emoji: '🧅', tier: 2 },
      'vegetable-garlic': { id: 'garlic', name: 'Garlic', emoji: '🧄', tier: 2 },
      'vegetable-lettuce': { id: 'lettuce', name: 'Lettuce', emoji: '🥬', tier: 2 },
      'vegetable-cabbage': { id: 'cabbage', name: 'Cabbage', emoji: '🥬', tier: 2 },
      'vegetable-broccoli': { id: 'broccoli', name: 'Broccoli', emoji: '🥦', tier: 2 },
      'vegetable-cauliflower': { id: 'cauliflower', name: 'Cauliflower', emoji: '🥦', tier: 2 },
      'vegetable-cucumber': { id: 'cucumber', name: 'Cucumber', emoji: '🥒', tier: 2 },
      'vegetable-zucchini': { id: 'zucchini', name: 'Zucchini', emoji: '🥒', tier: 2 },
      'vegetable-eggplant': { id: 'eggplant', name: 'Eggplant', emoji: '🍆', tier: 2 },
      'vegetable-pumpkin': { id: 'pumpkin', name: 'Pumpkin', emoji: '🎃', tier: 2 },
      'vegetable-squash': { id: 'squash', name: 'Squash', emoji: '🎃', tier: 2 },
      'vegetable-peas': { id: 'peas', name: 'Peas', emoji: '🌱', tier: 2 },
      'vegetable-beans': { id: 'beans', name: 'Beans', emoji: '🌱', tier: 2 },
      'vegetable-spinach': { id: 'spinach', name: 'Spinach', emoji: '🥬', tier: 2 },
      'vegetable-kale': { id: 'kale', name: 'Kale', emoji: '🥬', tier: 2 },
      'vegetable-celery': { id: 'celery', name: 'Celery', emoji: '🥬', tier: 2 },
      'vegetable-asparagus': { id: 'asparagus', name: 'Asparagus', emoji: '🥬', tier: 2 },
      'vegetable-artichoke': { id: 'artichoke', name: 'Artichoke', emoji: '🥬', tier: 3 },
      'vegetable-brussels': { id: 'brussels-sprouts', name: 'Brussels Sprouts', emoji: '🥬', tier: 2 },
      'vegetable-radish': { id: 'radish', name: 'Radish', emoji: '🥕', tier: 2 },
      'vegetable-beet': { id: 'beet', name: 'Beet', emoji: '🐝', tier: 2 },
      'vegetable-turnip': { id: 'turnip', name: 'Turnip', emoji: '🥕', tier: 2 },
      'berry-strawberry-plant': { id: 'strawberry-plant', name: 'Strawberry Plant', emoji: '🍓', tier: 2 },
      'berry-blueberry': { id: 'blueberry-bush', name: 'Blueberry Bush', emoji: '🚌', tier: 3 },
      'berry-raspberry': { id: 'raspberry-bush', name: 'Raspberry Bush', emoji: '🚌', tier: 3 },
      'berry-blackberry': { id: 'blackberry-bush', name: 'Blackberry Bush', emoji: '🚌', tier: 3 },
      'berry-cranberry': { id: 'cranberry-bush', name: 'Cranberry Bush', emoji: '🚌', tier: 3 },
      'berry-gooseberry': { id: 'gooseberry-bush', name: 'Gooseberry Bush', emoji: '🚌', tier: 3 },
      'fruit-watermelon': { id: 'watermelon', name: 'Watermelon', emoji: '🍉', tier: 3 },
      'fruit-cantaloupe': { id: 'cantaloupe', name: 'Cantaloupe', emoji: '🍈', tier: 3 },
      'fruit-honeydew': { id: 'honeydew', name: 'Honeydew', emoji: '🍈', tier: 3 },
      'fruit-pineapple': { id: 'pineapple-plant', name: 'Pineapple Plant', emoji: '🍍', tier: 3 },
      'tropical-avocado': { id: 'avocado-tree', name: 'Avocado Tree', emoji: '🍃', tier: 4 },
      'tropical-guava': { id: 'guava-tree', name: 'Guava Tree', emoji: '🌳', tier: 3 },
      'tropical-passion-fruit': { id: 'passion-fruit', name: 'Passion Fruit', emoji: '🌲', tier: 3 },
      'tropical-dragon-fruit': { id: 'dragon-fruit', name: 'Dragon Fruit', emoji: '🌵', tier: 4 },
      'tropical-lychee': { id: 'lychee-tree', name: 'Lychee Tree', emoji: '🌴', tier: 4 },
      'tropical-durian': { id: 'durian-tree', name: 'Durian Tree', emoji: '🍃', tier: 4 },
      'tropical-jackfruit': { id: 'jackfruit-tree', name: 'Jackfruit Tree', emoji: '🌳', tier: 4 },
    };

    // ==================== 天文宇宙 (Astronomy & Space - 150+) ====================
    const astronomySpace = {
      // 太阳系 (Solar System)
      'fire-space': { id: 'sun', name: 'Sun', emoji: '☀️', tier: 6 },
      'sun-planet': { id: 'mercury', name: 'Mercury', emoji: '☿️', tier: 6 },
      'cloud-planet': { id: 'venus', name: 'Venus', emoji: '♀️', tier: 6 },
      'water-planet': { id: 'earth-planet', name: 'Earth', emoji: '🌍', tier: 6 },
      'red-planet': { id: 'mars', name: 'Mars', emoji: '♂️', tier: 6 },
      'giant-planet': { id: 'jupiter', name: 'Jupiter', emoji: '♃', tier: 7 },
      'ring-planet': { id: 'saturn', name: 'Saturn', emoji: '♄', tier: 7 },
      'ice-planet': { id: 'uranus', name: 'Uranus', emoji: '♅', tier: 7 },
      'blue-planet': { id: 'neptune', name: 'Neptune', emoji: '♆', tier: 7 },
      'dwarf-planet': { id: 'pluto', name: 'Pluto', emoji: '♇', tier: 6 },
      'planet-ceres': { id: 'ceres', name: 'Ceres', emoji: '⚳', tier: 5 },
      'planet-eris': { id: 'eris', name: 'Eris', emoji: '⚴', tier: 6 },
      'planet-makemake': { id: 'makemake', name: 'Makemake', emoji: '⚵', tier: 6 },
      'planet-haumea': { id: 'haumea', name: 'Haumea', emoji: '⚶', tier: 6 },
      
      // 卫星 (Moons)
      'earth-moon': { id: 'moon', name: 'Moon', emoji: '🌙', tier: 5 },
      'moon-phase': { id: 'full-moon', name: 'Full Moon', emoji: '🌕', tier: 5 },
      'moon-new': { id: 'new-moon', name: 'New Moon', emoji: '🌑', tier: 5 },
      'moon-crescent': { id: 'crescent-moon', name: 'Crescent Moon', emoji: '🌙', tier: 5 },
      'mars-moon': { id: 'phobos', name: 'Phobos', emoji: '🌑', tier: 6 },
      'mars-moon2': { id: 'deimos', name: 'Deimos', emoji: '🌑', tier: 6 },
      'jupiter-moon': { id: 'io', name: 'Io', emoji: '🌑', tier: 6 },
      'jupiter-moon2': { id: 'europa', name: 'Europa', emoji: '🌑', tier: 6 },
      'jupiter-moon3': { id: 'ganymede', name: 'Ganymede', emoji: '🌑', tier: 6 },
      'jupiter-moon4': { id: 'callisto', name: 'Callisto', emoji: '🌑', tier: 6 },
      'saturn-moon': { id: 'titan', name: 'Titan', emoji: '🌑', tier: 6 },
      'saturn-moon2': { id: 'enceladus', name: 'Enceladus', emoji: '🌑', tier: 6 },
      'saturn-moon3': { id: 'mimas', name: 'Mimas', emoji: '🌑', tier: 6 },
      'uranus-moon': { id: 'miranda', name: 'Miranda', emoji: '🌑', tier: 6 },
      'neptune-moon': { id: 'triton', name: 'Triton', emoji: '🌑', tier: 6 },
      
      // 小行星和彗星 (Asteroids & Comets)
      'space-rock': { id: 'asteroid', name: 'Asteroid', emoji: '☄️', tier: 5 },
      'asteroid-belt': { id: 'asteroid-belt', name: 'Asteroid Belt', emoji: '☄️', tier: 6 },
      'ice-rock': { id: 'comet', name: 'Comet', emoji: '☄️', tier: 5 },
      'comet-tail': { id: 'comet-tail', name: 'Comet Tail', emoji: '☄️', tier: 5 },
      'comet-halley': { id: 'halleys-comet', name: "Halley's Comet", emoji: '☄️', tier: 6 },
      'space-meteor': { id: 'meteor', name: 'Meteor', emoji: '☄️', tier: 4 },
      'meteor-shower': { id: 'meteor-shower', name: 'Meteor Shower', emoji: '☄️', tier: 5 },
      'meteor-ground': { id: 'meteorite', name: 'Meteorite', emoji: '🪨', tier: 5 },
      
      // 星星和星云 (Stars & Nebulae)
      'fire-huge': { id: 'star', name: 'Star', emoji: '⭐', tier: 6 },
      'star-red': { id: 'red-dwarf', name: 'Red Dwarf', emoji: '🔴', tier: 6 },
      'star-white': { id: 'white-dwarf', name: 'White Dwarf', emoji: '⚪', tier: 7 },
      'star-blue': { id: 'blue-giant', name: 'Blue Giant', emoji: '🔵', tier: 7 },
      'star-red-giant': { id: 'red-giant', name: 'Red Giant', emoji: '🔴', tier: 7 },
      'star-super': { id: 'supergiant', name: 'Supergiant', emoji: '🌠', tier: 8 },
      'star-hyper': { id: 'hypergiant', name: 'Hypergiant', emoji: '🟡', tier: 9 },
      'star-two': { id: 'binary-star', name: 'Binary Star', emoji: '✨', tier: 7 },
      'star-pulse': { id: 'pulsar', name: 'Pulsar', emoji: '💫', tier: 8 },
      'star-neutron': { id: 'neutron-star', name: 'Neutron Star', emoji: '💫', tier: 8 },
      'star-magnetar': { id: 'magnetar', name: 'Magnetar', emoji: '🧲', tier: 9 },
      'star-quasar': { id: 'quasar', name: 'Quasar', emoji: '🔯', tier: 9 },
      'gas-cloud': { id: 'nebula', name: 'Nebula', emoji: '☁️', tier: 7 },
      'nebula-eagle': { id: 'eagle-nebula', name: 'Eagle Nebula', emoji: '☁️', tier: 8 },
      'nebula-crab': { id: 'crab-nebula', name: 'Crab Nebula', emoji: '☁️', tier: 8 },
      'nebula-orion': { id: 'orion-nebula', name: 'Orion Nebula', emoji: '☁️', tier: 8 },
      'nebula-horsehead': { id: 'horsehead-nebula', name: 'Horsehead Nebula', emoji: '☁️', tier: 8 },
      'nebula-ring': { id: 'ring-nebula', name: 'Ring Nebula', emoji: '☁️', tier: 8 },
      'nebula-planetary': { id: 'planetary-nebula', name: 'Planetary Nebula', emoji: '☁️', tier: 7 },
      'star-nova': { id: 'nova', name: 'Nova', emoji: '💥', tier: 7 },
      'star-supernova': { id: 'supernova-star', name: 'Supernova', emoji: '💥', tier: 8 },
      'star-hypernova': { id: 'hypernova', name: 'Hypernova', emoji: '💥', tier: 9 },
      
      // 星系 (Galaxies)
      'stars-many': { id: 'galaxy', name: 'Galaxy', emoji: '🌟', tier: 8 },
      'galaxy-spiral': { id: 'spiral-galaxy', name: 'Spiral Galaxy', emoji: '🌀', tier: 8 },
      'galaxy-elliptical': { id: 'elliptical-galaxy', name: 'Elliptical Galaxy', emoji: '⭕', tier: 8 },
      'galaxy-irregular': { id: 'irregular-galaxy', name: 'Irregular Galaxy', emoji: '🌟', tier: 8 },
      'galaxy-milky': { id: 'milky-way', name: 'Milky Way', emoji: '🌌', tier: 9 },
      'galaxy-andromeda': { id: 'andromeda', name: 'Andromeda', emoji: '🌀', tier: 9 },
      'galaxy-cluster': { id: 'galaxy-cluster', name: 'Galaxy Cluster', emoji: '✨', tier: 9 },
      'galaxy-supercluster': { id: 'supercluster', name: 'Supercluster', emoji: '✨', tier: 10 },
      
      // 黑洞和极端天体 (Black Holes & Extreme Objects)
      'gravity-extreme': { id: 'black-hole', name: 'Black Hole', emoji: '🕳️', tier: 9 },
      'black-hole-super': { id: 'supermassive-black-hole', name: 'Supermassive Black Hole', emoji: '⚫', tier: 10 },
      'black-hole-stellar': { id: 'stellar-black-hole', name: 'Stellar Black Hole', emoji: '⚫', tier: 9 },
      'space-hole': { id: 'wormhole', name: 'Wormhole', emoji: '🕳️', tier: 10 },
      'space-horizon': { id: 'event-horizon', name: 'Event Horizon', emoji: '⚫', tier: 9 },
      'space-singularity': { id: 'singularity', name: 'Singularity', emoji: '⚫', tier: 10 },
      'space-dark-matter': { id: 'dark-matter', name: 'Dark Matter', emoji: '🧘', tier: 9 },
      'space-dark-energy': { id: 'dark-energy', name: 'Dark Energy', emoji: '🌠', tier: 9 },
      'space-antimatter': { id: 'antimatter', name: 'Antimatter', emoji: '⚛️', tier: 9 },
      
      // 宇宙现象 (Cosmic Phenomena)
      'star-explosion': { id: 'gamma-ray-burst', name: 'Gamma Ray Burst', emoji: '💥', tier: 9 },
      'space-wave': { id: 'gravitational-wave', name: 'Gravitational Wave', emoji: '🌊', tier: 9 },
      'space-radiation': { id: 'cosmic-radiation', name: 'Cosmic Radiation', emoji: '☢️', tier: 7 },
      'space-wind': { id: 'solar-wind', name: 'Solar Wind', emoji: '💨', tier: 6 },
      'sun-flare': { id: 'solar-flare', name: 'Solar Flare', emoji: '💥', tier: 7 },
      'sun-storm': { id: 'solar-storm', name: 'Solar Storm', emoji: '☀️', tier: 7 },
      'space-aurora': { id: 'aurora', name: 'Aurora', emoji: '🌌', tier: 6 },
      'aurora-north': { id: 'aurora-borealis', name: 'Aurora Borealis', emoji: '🌈', tier: 6 },
      'aurora-south': { id: 'aurora-australis', name: 'Aurora Australis', emoji: '🌈', tier: 6 },
      
      // 星座 (Constellations)
      'stars-pattern': { id: 'constellation', name: 'Constellation', emoji: '⭐', tier: 6 },
      'constellation-orion': { id: 'orion', name: 'Orion', emoji: '✴️', tier: 6 },
      'constellation-ursa': { id: 'ursa-major', name: 'Ursa Major', emoji: '🌟', tier: 6 },
      'constellation-ursa-minor': { id: 'ursa-minor', name: 'Ursa Minor', emoji: '🌟', tier: 6 },
      'constellation-cassiopeia': { id: 'cassiopeia', name: 'Cassiopeia', emoji: '💫', tier: 6 },
      'constellation-leo': { id: 'leo', name: 'Leo', emoji: '♌', tier: 6 },
      'constellation-scorpio': { id: 'scorpio', name: 'Scorpio', emoji: '♏', tier: 6 },
      'constellation-sagittarius': { id: 'sagittarius', name: 'Sagittarius', emoji: '♐', tier: 6 },
      'constellation-aquarius': { id: 'aquarius', name: 'Aquarius', emoji: '♒', tier: 6 },
      'constellation-pisces': { id: 'pisces', name: 'Pisces', emoji: '♓', tier: 6 },
      'constellation-aries': { id: 'aries', name: 'Aries', emoji: '♈', tier: 6 },
      'constellation-taurus': { id: 'taurus', name: 'Taurus', emoji: '♉', tier: 6 },
      'constellation-gemini': { id: 'gemini', name: 'Gemini', emoji: '💎', tier: 6 },
      'constellation-cancer': { id: 'cancer', name: 'Cancer', emoji: '♋', tier: 6 },
      'constellation-virgo': { id: 'virgo', name: 'Virgo', emoji: '♍', tier: 6 },
      'constellation-libra': { id: 'libra', name: 'Libra', emoji: '♎', tier: 6 },
      'constellation-capricorn': { id: 'capricorn', name: 'Capricorn', emoji: '🌽', tier: 6 },
      
      // 太空探索 (Space Exploration)
      'metal-fly': { id: 'spacecraft', name: 'Spacecraft', emoji: '🚀', tier: 5 },
      'spacecraft-moon': { id: 'lunar-lander', name: 'Lunar Lander', emoji: '🛸', tier: 6 },
      'spacecraft-rover': { id: 'mars-rover', name: 'Mars Rover', emoji: '♂️', tier: 6 },
      'spacecraft-voyager': { id: 'voyager', name: 'Voyager', emoji: '🛸', tier: 7 },
      'spacecraft-hubble': { id: 'hubble-telescope', name: 'Hubble Telescope', emoji: '🔭', tier: 7 },
      'spacecraft-james': { id: 'james-webb-telescope', name: 'James Webb Telescope', emoji: '🔭', tier: 8 },
      'spacecraft-iss': { id: 'space-station', name: 'Space Station', emoji: '🛰️', tier: 7 },
      'spacecraft-satellite': { id: 'satellite', name: 'Satellite', emoji: '🛰️', tier: 5 },
      'spacecraft-shuttle': { id: 'space-shuttle', name: 'Space Shuttle', emoji: '🚀', tier: 6 },
      'human-space': { id: 'astronaut', name: 'Astronaut', emoji: '👨‍🚀', tier: 6 },
      'astronaut-walk': { id: 'spacewalk', name: 'Spacewalk', emoji: '👨‍🚀', tier: 7 },
      
      // 外星生命 (Alien Life)
      'space-life': { id: 'alien', name: 'Alien', emoji: '👽', tier: 7 },
      'alien-ship': { id: 'ufo', name: 'UFO', emoji: '🛸', tier: 7 },
      'alien-gray': { id: 'grey-alien', name: 'Grey Alien', emoji: '👽', tier: 7 },
      'alien-nordic': { id: 'nordic-alien', name: 'Nordic Alien', emoji: '👽', tier: 7 },
      'alien-reptilian': { id: 'reptilian-alien', name: 'Reptilian Alien', emoji: '👽', tier: 7 },
      'space-encounter': { id: 'close-encounter', name: 'Close Encounter', emoji: '🛸', tier: 8 },
      'space-contact': { id: 'first-contact', name: 'First Contact', emoji: '👽', tier: 9 },
      'alien-civilization': { id: 'alien-civilization', name: 'Alien Civilization', emoji: '🏙️', tier: 9 },
      'space-signal': { id: 'alien-signal', name: 'Alien Signal', emoji: '📡', tier: 8 },
    };

    // ==================== 天气与气候 (Weather & Climate - 100+) ====================
    const weatherClimate = {
      // 基础天气 (Basic Weather)
      'water-sky': { id: 'rain', name: 'Rain', emoji: '🌧️', tier: 3 },
      'rain-heavy': { id: 'heavy-rain', name: 'Heavy Rain', emoji: '🌧️', tier: 4 },
      'rain-light': { id: 'drizzle', name: 'Drizzle', emoji: '🌦️', tier: 3 },
      'rain-ice': { id: 'sleet', name: 'Sleet', emoji: '🌧️', tier: 4 },
      'water-freeze': { id: 'snow', name: 'Snow', emoji: '❄️', tier: 3 },
      'snow-heavy': { id: 'blizzard', name: 'Blizzard', emoji: '❄️', tier: 5 },
      'snow-light': { id: 'snow-flurry', name: 'Snow Flurry', emoji: '❄️', tier: 3 },
      'rain-freeze': { id: 'freezing-rain', name: 'Freezing Rain', emoji: '🌧️', tier: 4 },
      'ice-fall': { id: 'hail', name: 'Hail', emoji: '🧊', tier: 4 },
      'hail-large': { id: 'hailstorm', name: 'Hailstorm', emoji: '🧊', tier: 5 },
      'water-fog': { id: 'fog', name: 'Fog', emoji: '🌫️', tier: 3 },
      'fog-thick': { id: 'dense-fog', name: 'Dense Fog', emoji: '🌫️', tier: 4 },
      'fog-ice': { id: 'freezing-fog', name: 'Freezing Fog', emoji: '🌫️', tier: 4 },
      'water-mist': { id: 'mist', name: 'Mist', emoji: '🌫️', tier: 2 },
      'water-haze': { id: 'haze', name: 'Haze', emoji: '🌫️', tier: 3 },
      
      // 风 (Wind)
      'air-move': { id: 'wind', name: 'Wind', emoji: '🌬️', tier: 3 },
      'wind-light': { id: 'breeze', name: 'Breeze', emoji: '🍃', tier: 2 },
      'wind-strong': { id: 'gale', name: 'Gale', emoji: '🌪️', tier: 4 },
      'wind-storm': { id: 'windstorm', name: 'Windstorm', emoji: '💨', tier: 5 },
      'wind-spin': { id: 'tornado', name: 'Tornado', emoji: '🌪️', tier: 6 },
      'tornado-super': { id: 'super-tornado', name: 'Super Tornado', emoji: '🌪️', tier: 7 },
      'ocean-tornado': { id: 'waterspout', name: 'Waterspout', emoji: '🌪️', tier: 5 },
      'fire-tornado': { id: 'fire-tornado', name: 'Fire Tornado', emoji: '🌪️', tier: 7 },
      'desert-wind': { id: 'dust-devil', name: 'Dust Devil', emoji: '🌪️', tier: 4 },
      'sand-storm': { id: 'sandstorm', name: 'Sandstorm', emoji: '🌪️', tier: 5 },
      'sand-haboob': { id: 'haboob', name: 'Haboob', emoji: '🌪️', tier: 5 },
      
      // 风暴 (Storms)
      'rain-wind': { id: 'storm', name: 'Storm', emoji: '⛈️', tier: 4 },
      'storm-electric': { id: 'thunderstorm', name: 'Thunderstorm', emoji: '⛈️', tier: 5 },
      'storm-severe': { id: 'severe-storm', name: 'Severe Storm', emoji: '⛈️', tier: 6 },
      'storm-supercell': { id: 'supercell', name: 'Supercell', emoji: '⛈️', tier: 7 },
      'ocean-storm': { id: 'tropical-storm', name: 'Tropical Storm', emoji: '🌀', tier: 6 },
      'tropical-spin': { id: 'hurricane', name: 'Hurricane', emoji: '🌀', tier: 7 },
      'hurricane-category5': { id: 'category-5-hurricane', name: 'Category 5 Hurricane', emoji: '🌀', tier: 8 },
      'pacific-hurricane': { id: 'typhoon', name: 'Typhoon', emoji: '🌀', tier: 7 },
      'indian-hurricane': { id: 'cyclone', name: 'Cyclone', emoji: '🌀', tier: 7 },
      'winter-storm': { id: 'winter-storm', name: 'Winter Storm', emoji: '❄️', tier: 5 },
      'ice-storm': { id: 'ice-storm', name: 'Ice Storm', emoji: '🧊', tier: 5 },
      'snow-storm': { id: 'snowstorm', name: 'Snowstorm', emoji: '❄️', tier: 5 },
      'snow-nor-easter': { id: 'nor-easter', name: "Nor'easter", emoji: '❄️', tier: 6 },
      
      // 闪电和雷声 (Lightning & Thunder)
      'storm-light': { id: 'lightning', name: 'Lightning', emoji: '⚡', tier: 5 },
      'lightning-bolt': { id: 'lightning-bolt', name: 'Lightning Bolt', emoji: '⚡', tier: 5 },
      'lightning-sheet': { id: 'sheet-lightning', name: 'Sheet Lightning', emoji: '⚡', tier: 5 },
      'lightning-fork': { id: 'forked-lightning', name: 'Forked Lightning', emoji: '⚡', tier: 5 },
      'lightning-ball': { id: 'ball-lightning', name: 'Ball Lightning', emoji: '⚡', tier: 6 },
      'lightning-sound': { id: 'thunder', name: 'Thunder', emoji: '🔊', tier: 4 },
      'thunder-boom': { id: 'thunderclap', name: 'Thunderclap', emoji: '💥', tier: 5 },
      
      // 云 (Clouds)
      'water-float': { id: 'cloud', name: 'Cloud', emoji: '☁️', tier: 2 },
      'cloud-fluffy': { id: 'cumulus', name: 'Cumulus', emoji: '☁️', tier: 3 },
      'cloud-tall': { id: 'cumulonimbus', name: 'Cumulonimbus', emoji: '☁️', tier: 4 },
      'cloud-layer': { id: 'stratus', name: 'Stratus', emoji: '☁️', tier: 3 },
      'cloud-high': { id: 'cirrus', name: 'Cirrus', emoji: '☁️', tier: 3 },
      'cloud-alto': { id: 'altocumulus', name: 'Altocumulus', emoji: '☁️', tier: 3 },
      'cloud-nimbus': { id: 'nimbus', name: 'Nimbus', emoji: '☁️', tier: 3 },
      'cloud-mammatus': { id: 'mammatus-cloud', name: 'Mammatus Cloud', emoji: '🧘', tier: 4 },
      'cloud-lenticular': { id: 'lenticular-cloud', name: 'Lenticular Cloud', emoji: '☁️', tier: 4 },
      
      // 彩虹和光学现象 (Rainbow & Optical)
      'rain-sun': { id: 'rainbow', name: 'Rainbow', emoji: '🌈', tier: 4 },
      'rainbow-double': { id: 'double-rainbow', name: 'Double Rainbow', emoji: '🌈', tier: 5 },
      'sun-halo': { id: 'sun-halo', name: 'Sun Halo', emoji: '☀️', tier: 5 },
      'moon-halo': { id: 'moon-halo', name: 'Moon Halo', emoji: '🌙', tier: 5 },
      'sun-dog': { id: 'sun-dog', name: 'Sun Dog', emoji: '☀️', tier: 5 },
      'light-pillar': { id: 'light-pillar', name: 'Light Pillar', emoji: '💡', tier: 5 },
      'mirage-desert': { id: 'mirage', name: 'Mirage', emoji: '🏜️', tier: 5 },
      'mirage-fata': { id: 'fata-morgana', name: 'Fata Morgana', emoji: '🏰', tier: 6 },
      
      // 气候现象 (Climate Phenomena)
      'ocean-warm': { id: 'el-nino', name: 'El Niño', emoji: '💦', tier: 7 },
      'ocean-cold': { id: 'la-nina', name: 'La Niña', emoji: '🏞️', tier: 7 },
      'wind-jet': { id: 'jet-stream', name: 'Jet Stream', emoji: '💨', tier: 6 },
      'air-high': { id: 'high-pressure', name: 'High Pressure', emoji: '☀️', tier: 4 },
      'air-low': { id: 'low-pressure', name: 'Low Pressure', emoji: '☁️', tier: 4 },
      'air-front': { id: 'cold-front', name: 'Cold Front', emoji: '❄️', tier: 4 },
      'air-warm': { id: 'warm-front', name: 'Warm Front', emoji: '☀️', tier: 4 },
      'wind-trade': { id: 'trade-winds', name: 'Trade Winds', emoji: '💨', tier: 5 },
      'wind-monsoon': { id: 'monsoon', name: 'Monsoon', emoji: '🌧️', tier: 6 },
      'rain-monsoon': { id: 'monsoon-season', name: 'Monsoon Season', emoji: '🌧️', tier: 6 },
      
      // 极端天气 (Extreme Weather)
      'heat-extreme': { id: 'heat-wave', name: 'Heat Wave', emoji: '🌊', tier: 6 },
      'cold-extreme': { id: 'cold-snap', name: 'Cold Snap', emoji: '🥶', tier: 6 },
      'dry-extreme': { id: 'drought', name: 'Drought', emoji: '🏜️', tier: 6 },
      'flood-rain': { id: 'flood', name: 'Flood', emoji: '💧', tier: 6 },
      'flood-flash': { id: 'flash-flood', name: 'Flash Flood', emoji: '💦', tier: 7 },
      'rain-acid': { id: 'acid-rain', name: 'Acid Rain', emoji: '🌧️', tier: 7 },
      'fire-wild': { id: 'wildfire', name: 'Wildfire', emoji: '🏔️', tier: 7 },
      'fire-crown': { id: 'crown-fire', name: 'Crown Fire', emoji: '🔥', tier: 7 },
      'fire-firestorm': { id: 'firestorm', name: 'Firestorm', emoji: '🔥', tier: 8 },
      
      // 季节 (Seasons)
      'spring-season': { id: 'spring', name: 'Spring', emoji: '💍', tier: 4 },
      'summer-season': { id: 'summer', name: 'Summer', emoji: '☀️', tier: 4 },
      'autumn-season': { id: 'autumn', name: 'Autumn', emoji: '🍂', tier: 4 },
      'winter-season': { id: 'winter', name: 'Winter', emoji: '❄️', tier: 4 },
      'day-night': { id: 'sunrise', name: 'Sunrise', emoji: '🌄', tier: 3 },
      'night-day': { id: 'sunset', name: 'Sunset', emoji: '🌅', tier: 3 },
      'sun-noon': { id: 'noon', name: 'Noon', emoji: '☀️', tier: 3 },
      'night-dark': { id: 'midnight', name: 'Midnight', emoji: '🌃', tier: 3 },
      'day-long': { id: 'midnight-sun', name: 'Midnight Sun', emoji: '☀️', tier: 6 },
      'night-long': { id: 'polar-night', name: 'Polar Night', emoji: '🌃', tier: 6 },
    };

    // ==================== 地质地理 (Geology & Geography - 150+) ====================
    const geologyGeography = {
      // 岩石和矿物 (Rocks & Minerals)
      'earth-hard': { id: 'rock', name: 'Rock', emoji: '🪨', tier: 2 },
      'rock-sediment': { id: 'sedimentary-rock', name: 'Sedimentary Rock', emoji: '🪨', tier: 3 },
      'rock-igneous': { id: 'igneous-rock', name: 'Igneous Rock', emoji: '🪨', tier: 3 },
      'rock-metamorphic': { id: 'metamorphic-rock', name: 'Metamorphic Rock', emoji: '🪨', tier: 3 },
      'rock-granite': { id: 'granite', name: 'Granite', emoji: '⬛', tier: 3 },
      'rock-basalt': { id: 'basalt', name: 'Basalt', emoji: '⬜', tier: 3 },
      'rock-limestone': { id: 'limestone', name: 'Limestone', emoji: '🟨', tier: 3 },
      'rock-sandstone': { id: 'sandstone', name: 'Sandstone', emoji: '🟧', tier: 3 },
      'rock-shale': { id: 'shale', name: 'Shale', emoji: '🪨', tier: 3 },
      'rock-slate': { id: 'slate', name: 'Slate', emoji: '⬛', tier: 3 },
      'rock-marble': { id: 'marble', name: 'Marble', emoji: '⬜', tier: 4 },
      'rock-obsidian': { id: 'obsidian', name: 'Obsidian', emoji: '⚫', tier: 4 },
      'rock-pumice': { id: 'pumice', name: 'Pumice', emoji: '🟤', tier: 3 },
      'rock-quartz': { id: 'quartz', name: 'Quartz', emoji: '💎', tier: 4 },
      'quartz-rose': { id: 'rose-quartz', name: 'Rose Quartz', emoji: '🌹', tier: 4 },
      'quartz-smoky': { id: 'smoky-quartz', name: 'Smoky Quartz', emoji: '💎', tier: 4 },
      'quartz-citrine': { id: 'citrine', name: 'Citrine', emoji: '💎', tier: 4 },
      'quartz-amethyst': { id: 'amethyst', name: 'Amethyst', emoji: '🟣', tier: 4 },
      'rock-emerald': { id: 'emerald', name: 'Emerald', emoji: '🟢', tier: 5 },
      'rock-ruby': { id: 'ruby', name: 'Ruby', emoji: '🔴', tier: 5 },
      'rock-sapphire': { id: 'sapphire', name: 'Sapphire', emoji: '🔵', tier: 5 },
      'rock-topaz': { id: 'topaz', name: 'Topaz', emoji: '🟡', tier: 4 },
      'rock-turquoise': { id: 'turquoise', name: 'Turquoise', emoji: '💎', tier: 4 },
      'rock-opal': { id: 'opal', name: 'Opal', emoji: '🌈', tier: 5 },
      'rock-pearl': { id: 'pearl', name: 'Pearl', emoji: '📿', tier: 5 },
      'rock-amber': { id: 'amber', name: 'Amber', emoji: '🟠', tier: 4 },
      'rock-coal': { id: 'coal', name: 'Coal', emoji: '⬛', tier: 3 },
      'coal-pressure': { id: 'diamond', name: 'Diamond', emoji: '💎', tier: 6 },
      'diamond-rare': { id: 'rare-diamond', name: 'Rare Diamond', emoji: '💎', tier: 7 },
      'rock-gold': { id: 'gold', name: 'Gold', emoji: '🟨', tier: 5 },
      'rock-silver': { id: 'silver', name: 'Silver', emoji: '⚪', tier: 4 },
      'rock-copper': { id: 'copper', name: 'Copper', emoji: '🟫', tier: 3 },
      'rock-iron': { id: 'iron-ore', name: 'Iron Ore', emoji: '⚙️', tier: 3 },
      'rock-platinum': { id: 'platinum', name: 'Platinum', emoji: '⚪', tier: 6 },
      'rock-titanium-ore': { id: 'titanium-ore', name: 'Titanium Ore', emoji: '🪨', tier: 5 },
      'rock-aluminum': { id: 'aluminum-ore', name: 'Aluminum Ore', emoji: '🪨', tier: 3 },
      'rock-uranium': { id: 'uranium', name: 'Uranium', emoji: '☢️', tier: 6 },
      'rock-plutonium': { id: 'plutonium', name: 'Plutonium', emoji: '☢️', tier: 7 },
      
      // 地形 (Landforms - 80+)
      'earth-rise': { id: 'hill', name: 'Hill', emoji: '⛰️', tier: 2 },
      'hill-high': { id: 'mountain', name: 'Mountain', emoji: '⛰️', tier: 3 },
      'mountain-tall': { id: 'mountain-peak', name: 'Mountain Peak', emoji: '⛰️', tier: 4 },
      'mountain-everest': { id: 'mount-everest', name: 'Mount Everest', emoji: '🏔️', tier: 7 },
      'mountain-k2': { id: 'k2', name: 'K2', emoji: '🏔️', tier: 7 },
      'mountain-kilimanjaro': { id: 'kilimanjaro', name: 'Kilimanjaro', emoji: '🏔️', tier: 6 },
      'mountain-denali': { id: 'denali', name: 'Denali', emoji: '🏔️', tier: 6 },
      'mountain-matterhorn': { id: 'matterhorn', name: 'Matterhorn', emoji: '🧘', tier: 6 },
      'mountain-fire': { id: 'volcano', name: 'Volcano', emoji: '🥫', tier: 5 },
      'volcano-active': { id: 'active-volcano', name: 'Active Volcano', emoji: '🥫', tier: 6 },
      'volcano-dormant': { id: 'dormant-volcano', name: 'Dormant Volcano', emoji: '🥫', tier: 5 },
      'volcano-extinct': { id: 'extinct-volcano', name: 'Extinct Volcano', emoji: '🥫', tier: 5 },
      'volcano-supervolcano': { id: 'supervolcano', name: 'Supervolcano', emoji: '🥫', tier: 8 },
      'mountain-range': { id: 'mountain-range', name: 'Mountain Range', emoji: '⛰️', tier: 5 },
      'mountain-rockies': { id: 'rocky-mountains', name: 'Rocky Mountains', emoji: '⛰️', tier: 6 },
      'mountain-alps': { id: 'alps', name: 'Alps', emoji: '⛰️', tier: 6 },
      'mountain-andes': { id: 'andes', name: 'Andes', emoji: '⛰️', tier: 6 },
      'mountain-himalayas': { id: 'himalayas', name: 'Himalayas', emoji: '🏔️', tier: 7 },
      'earth-low': { id: 'valley', name: 'Valley', emoji: '🏞️', tier: 3 },
      'valley-deep': { id: 'canyon', name: 'Canyon', emoji: '🏜️', tier: 4 },
      'canyon-grand': { id: 'grand-canyon', name: 'Grand Canyon', emoji: '🏜️', tier: 7 },
      'valley-rift': { id: 'rift-valley', name: 'Rift Valley', emoji: '🏜️', tier: 5 },
      'earth-flat': { id: 'plain', name: 'Plain', emoji: '🏞️', tier: 2 },
      'plain-grass': { id: 'grassland', name: 'Grassland', emoji: '🌾', tier: 3 },
      'plain-prairie': { id: 'prairie', name: 'Prairie', emoji: '🌾', tier: 3 },
      'plain-steppe': { id: 'steppe', name: 'Steppe', emoji: '🌾', tier: 3 },
      'plain-savanna': { id: 'savanna', name: 'Savanna', emoji: '🌾', tier: 3 },
      'plain-high': { id: 'plateau', name: 'Plateau', emoji: '🍵', tier: 4 },
      'plateau-tibetan': { id: 'tibetan-plateau', name: 'Tibetan Plateau', emoji: '🍵', tier: 6 },
      'plateau-colorado': { id: 'colorado-plateau', name: 'Colorado Plateau', emoji: '🍵', tier: 5 },
      'earth-sink': { id: 'basin', name: 'Basin', emoji: '🏜️', tier: 3 },
      'earth-crater': { id: 'crater', name: 'Crater', emoji: '🐀', tier: 4 },
      'crater-impact': { id: 'impact-crater', name: 'Impact Crater', emoji: '🐀', tier: 5 },
      'crater-volcanic': { id: 'volcanic-crater', name: 'Volcanic Crater', emoji: '🐀', tier: 5 },
      'crater-caldera': { id: 'caldera', name: 'Caldera', emoji: '🌋', tier: 6 },
      'earth-cave': { id: 'cave', name: 'Cave', emoji: '🕳️', tier: 3 },
      'cave-deep': { id: 'cavern', name: 'Cavern', emoji: '🕳️', tier: 4 },
      'cave-ice': { id: 'ice-cave', name: 'Ice Cave', emoji: '🧊', tier: 5 },
      'cave-lava': { id: 'lava-tube', name: 'Lava Tube', emoji: '🌋', tier: 5 },
      'cave-stalactite': { id: 'stalactite', name: 'Stalactite', emoji: '🪨', tier: 4 },
      'cave-stalagmite': { id: 'stalagmite', name: 'Stalagmite', emoji: '🪨', tier: 4 },
      'earth-arch': { id: 'natural-arch', name: 'Natural Arch', emoji: '🪨', tier: 5 },
      'earth-pillar': { id: 'rock-pillar', name: 'Rock Pillar', emoji: '🪨', tier: 4 },
      'earth-spire': { id: 'rock-spire', name: 'Rock Spire', emoji: '🪨', tier: 4 },
      'earth-pinnacle': { id: 'pinnacle', name: 'Pinnacle', emoji: '📌', tier: 4 },
      'earth-mesa': { id: 'mesa', name: 'Mesa', emoji: '🏜️', tier: 4 },
      'earth-butte': { id: 'butte', name: 'Butte', emoji: '🏜️', tier: 4 },
      'earth-cliff': { id: 'cliff', name: 'Cliff', emoji: '⛰️', tier: 3 },
      'cliff-sea': { id: 'sea-cliff', name: 'Sea Cliff', emoji: '🪨', tier: 4 },
      
      // 水体地形 (Water Landforms)
      'water-move': { id: 'river', name: 'River', emoji: '🏞️', tier: 3 },
      'river-big': { id: 'major-river', name: 'Major River', emoji: '🏞️', tier: 4 },
      'river-amazon': { id: 'amazon-river', name: 'Amazon River', emoji: '🏞️', tier: 6 },
      'river-nile': { id: 'nile-river', name: 'Nile River', emoji: '🏞️', tier: 6 },
      'river-mississippi': { id: 'mississippi-river', name: 'Mississippi River', emoji: '🏞️', tier: 5 },
      'river-yangtze': { id: 'yangtze-river', name: 'Yangtze River', emoji: '🏞️', tier: 5 },
      'river-small': { id: 'stream', name: 'Stream', emoji: '💧', tier: 2 },
      'stream-small': { id: 'brook', name: 'Brook', emoji: '🏞️', tier: 2 },
      'stream-tiny': { id: 'creek', name: 'Creek', emoji: '💦', tier: 2 },
      'river-channel': { id: 'tributary', name: 'Tributary', emoji: '🏞️', tier: 3 },
      'river-mouth': { id: 'delta', name: 'Delta', emoji: 'Δ', tier: 4 },
      'river-split': { id: 'estuary', name: 'Estuary', emoji: '🏞️', tier: 4 },
      'river-drop': { id: 'waterfall', name: 'Waterfall', emoji: '💦', tier: 4 },
      'waterfall-big': { id: 'niagara-falls', name: 'Niagara Falls', emoji: '💦', tier: 7 },
      'waterfall-victoria': { id: 'victoria-falls', name: 'Victoria Falls', emoji: '💦', tier: 7 },
      'waterfall-angel': { id: 'angel-falls', name: 'Angel Falls', emoji: '💦', tier: 7 },
      'water-still': { id: 'pond', name: 'Pond', emoji: '🐸', tier: 2 },
      'pond-big': { id: 'lake', name: 'Lake', emoji: '🏞️', tier: 3 },
      'lake-big': { id: 'great-lake', name: 'Great Lake', emoji: '🏞️', tier: 5 },
      'lake-salt': { id: 'salt-lake', name: 'Salt Lake', emoji: '🏞️', tier: 4 },
      'lake-crater': { id: 'crater-lake', name: 'Crater Lake', emoji: '📦', tier: 5 },
      'lake-lava': { id: 'lava-lake', name: 'Lava Lake', emoji: '🏞️', tier: 6 },
      'water-reservoir': { id: 'reservoir', name: 'Reservoir', emoji: '🏞️', tier: 3 },
      'water-swamp': { id: 'swamp', name: 'Swamp', emoji: '🐊', tier: 3 },
      'water-marsh': { id: 'marsh', name: 'Marsh', emoji: '🦆', tier: 3 },
      'water-bog': { id: 'bog', name: 'Bog', emoji: '☘️', tier: 3 },
      'water-wetland': { id: 'wetland', name: 'Wetland', emoji: '🌊', tier: 3 },
      'water-bayou': { id: 'bayou', name: 'Bayou', emoji: '🌾', tier: 4 },
      'water-lagoon': { id: 'lagoon', name: 'Lagoon', emoji: '🏝️', tier: 4 },
      
      // 海洋地形 (Ocean Landforms)
      'water-sea': { id: 'sea', name: 'Sea', emoji: '🌊', tier: 4 },
      'water-ocean': { id: 'ocean', name: 'Ocean', emoji: '🌊', tier: 5 },
      'ocean-pacific': { id: 'pacific-ocean', name: 'Pacific Ocean', emoji: '🌊', tier: 6 },
      'ocean-atlantic': { id: 'atlantic-ocean', name: 'Atlantic Ocean', emoji: '🌊', tier: 6 },
      'ocean-indian': { id: 'indian-ocean', name: 'Indian Ocean', emoji: '🌊', tier: 6 },
      'ocean-arctic': { id: 'arctic-ocean', name: 'Arctic Ocean', emoji: '🌊', tier: 6 },
      'ocean-southern': { id: 'southern-ocean', name: 'Southern Ocean', emoji: '🌊', tier: 6 },
      'ocean-deep': { id: 'deep-ocean', name: 'Deep Ocean', emoji: '🌊', tier: 5 },
      'ocean-trench': { id: 'ocean-trench', name: 'Ocean Trench', emoji: '🌊', tier: 6 },
      'trench-mariana': { id: 'mariana-trench', name: 'Mariana Trench', emoji: '💦', tier: 8 },
      'ocean-ridge': { id: 'mid-ocean-ridge', name: 'Mid-Ocean Ridge', emoji: '🌊', tier: 6 },
      'ocean-mount': { id: 'seamount', name: 'Seamount', emoji: '🌊', tier: 5 },
      'ocean-guyot': { id: 'guyot', name: 'Guyot', emoji: '💧', tier: 5 },
      'ocean-plateau': { id: 'oceanic-plateau', name: 'Oceanic Plateau', emoji: '🍵', tier: 6 },
      'ocean-canyon': { id: 'submarine-canyon', name: 'Submarine Canyon', emoji: '💦', tier: 5 },
      'ocean-shelf': { id: 'continental-shelf', name: 'Continental Shelf', emoji: '📚', tier: 5 },
      'ocean-slope': { id: 'continental-slope', name: 'Continental Slope', emoji: '🌊', tier: 5 },
      'ocean-floor': { id: 'abyssal-plain', name: 'Abyssal Plain', emoji: '💧', tier: 5 },
      
      // 海岸地形 (Coastal Landforms)
      'ocean-land': { id: 'coast', name: 'Coast', emoji: '🏖️', tier: 3 },
      'coast-sand': { id: 'beach', name: 'Beach', emoji: '🏖️', tier: 3 },
      'beach-white': { id: 'white-sand-beach', name: 'White Sand Beach', emoji: '🏖️', tier: 4 },
      'beach-black': { id: 'black-sand-beach', name: 'Black Sand Beach', emoji: '🏖️', tier: 4 },
      'beach-pink': { id: 'pink-sand-beach', name: 'Pink Sand Beach', emoji: '🏖️', tier: 5 },
      'coast-high': { id: 'headland', name: 'Headland', emoji: '🪨', tier: 4 },
      'coast-bay': { id: 'bay', name: 'Bay', emoji: '⚓', tier: 3 },
      'coast-cove': { id: 'cove', name: 'Cove', emoji: '🏖️', tier: 3 },
      'coast-fjord': { id: 'fjord', name: 'Fjord', emoji: '🏔️', tier: 5 },
      'coast-inlet': { id: 'inlet', name: 'Inlet', emoji: '🏖️', tier: 3 },
      'coast-peninsula': { id: 'peninsula', name: 'Peninsula', emoji: '🖊️', tier: 4 },
      'coast-cape': { id: 'cape', name: 'Cape', emoji: '🏖️', tier: 4 },
      'coast-spit': { id: 'spit', name: 'Spit', emoji: '🏖️', tier: 4 },
      'coast-barrier': { id: 'barrier-island', name: 'Barrier Island', emoji: '🏝️', tier: 4 },
      'coast-atoll': { id: 'atoll', name: 'Atoll', emoji: '🏝️', tier: 5 },
    };

// 合并所有配方
    Object.assign(recipes, 
      selfCombinations,
      tier1Basic,
      tier2WithBase,
      naturalPhenomena,
      lifeSystem,
      chemistry,
      technology,
      culture,
      abstractConcepts,
      mythology,
      easternCulture,
      americanCulture,
      animalKingdom,
      plantKingdom,
      astronomySpace,
      weatherClimate,
      geologyGeography,
      modernTech,
      musicArtEntertainment,
      quickExpansions,
      darkElements,
      elementStackingSystem,
      fiveElementsExpansions,
      commonWordsExpansion
    );

    // 为每个元素自动生成颜色
    Object.keys(recipes).forEach(key => {
      const recipe = recipes[key];
      if (!recipe.color) {
        const tier = recipe.tier || 1;
        const colorSchemes = [
          'from-gray-400 via-slate-500 to-gray-600',
          'from-blue-400 via-cyan-500 to-teal-600',
          'from-green-400 via-emerald-500 to-lime-600',
          'from-purple-400 via-violet-500 to-indigo-600',
          'from-pink-400 via-rose-500 to-red-600',
          'from-yellow-400 via-amber-500 to-orange-600',
          'from-indigo-400 via-purple-500 to-fuchsia-600',
          'from-cyan-400 via-blue-500 to-sky-600',
          'from-emerald-400 via-teal-500 to-green-600',
          'from-orange-400 via-red-500 to-rose-600',
        ];
        recipe.color = colorSchemes[tier % 10];
        recipe.ring = `ring-${['gray', 'blue', 'green', 'purple', 'pink', 'yellow', 'indigo', 'cyan', 'emerald', 'orange'][tier % 10]}-500`;
      }
    });

    return recipes;
  };

  const recipes = generateMegaRecipes();
  
  // 计算唯一元素总数（去重）
  const uniqueRecipeElements = new Set(Object.values(recipes).map(r => r.id));
  const totalPossibleElements = baseElements.length + uniqueRecipeElements.size;

  // 状态管理
  const [discovered, setDiscovered] = useState(new Set(baseElements.map(e => e.id)));
  const [workArea, setWorkArea] = useState([]);
  const [draggedElement, setDraggedElement] = useState(null);
  const [showEffect, setShowEffect] = useState(false);
  const [effectPos, setEffectPos] = useState({ x: 0, y: 0 });
  const [effectType, setEffectType] = useState('success'); // 'success' or 'fail'
  const [newDiscovery, setNewDiscovery] = useState(null);
  const [comboCount, setComboCount] = useState(0);
  const [isPanelOpen, setIsPanelOpen] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [aiHint, setAiHint] = useState(null);
  const [showAiPanel, setShowAiPanel] = useState(false);
  const [filterTier, setFilterTier] = useState(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [showAchievements, setShowAchievements] = useState(false);
  const [unlockedAchievements, setUnlockedAchievements] = useState(new Set());
  const [newAchievement, setNewAchievement] = useState(null);
  const workAreaRef = useRef(null);

  const progressPercent = Math.round((discovered.size / totalPossibleElements) * 100);

  // 成就系统定义
  const achievements = {
    // 探索者成就
    'beginner': { id: 'beginner', name: 'Beginner', desc: 'Discover 10 elements', emoji: '🔰', tier: 'bronze', check: () => discovered.size >= 10 },
    'explorer': { id: 'explorer', name: 'Explorer', desc: 'Discover 50 elements', emoji: '🧭', tier: 'bronze', check: () => discovered.size >= 50 },
    'adventurer': { id: 'adventurer', name: 'Adventurer', desc: 'Discover 100 elements', emoji: '🗺️', tier: 'silver', check: () => discovered.size >= 100 },
    'scholar': { id: 'scholar', name: 'Scholar', desc: 'Discover 250 elements', emoji: '📚', tier: 'silver', check: () => discovered.size >= 250 },
    'master': { id: 'master', name: 'Master', desc: 'Discover 500 elements', emoji: '🎓', tier: 'gold', check: () => discovered.size >= 500 },
    'legend': { id: 'legend', name: 'Legend', desc: 'Discover 1000 elements', emoji: '👑', tier: 'gold', check: () => discovered.size >= 1000 },
    'omniscient': { id: 'omniscient', name: 'Omniscient', desc: 'Discover all elements', emoji: '🌟', tier: 'diamond', check: () => discovered.size >= totalPossibleElements },
    
    // 炼金术成就
    'combo-10': { id: 'combo-10', name: 'Combo 10', desc: 'Achieve 10 combo', emoji: '⚡', tier: 'bronze', check: () => comboCount >= 10 },
    'combo-50': { id: 'combo-50', name: 'Combo 50', desc: 'Achieve 50 combo', emoji: '💫', tier: 'silver', check: () => comboCount >= 50 },
    'combo-100': { id: 'combo-100', name: 'Combo 100', desc: 'Achieve 100 combo', emoji: '🌠', tier: 'gold', check: () => comboCount >= 100 },
    
    // 创造者成就
    'collector': { id: 'collector', name: 'Collector', desc: 'Have 50 elements on workspace at once', emoji: '🎁', tier: 'silver', check: () => workArea.length >= 50 },
    'artist': { id: 'artist', name: 'Artist', desc: 'Have 100 elements on workspace at once', emoji: '🖼️', tier: 'gold', check: () => workArea.length >= 100 },
    
    // 隐藏成就
    'five-elements': { id: 'five-elements', name: 'Five Elements', desc: 'Place all 5 base elements on workspace at once', emoji: '☯️', tier: 'rainbow', 
      check: () => {
        const ids = workArea.map(e => e.originalId || e.id);
        return ['metal', 'wood', 'water', 'fire', 'earth'].every(id => ids.includes(id));
      }
    },
    'ash-master': { id: 'ash-master', name: 'Ash Master', desc: 'Create Ash 50 times', emoji: '🔥', tier: 'silver', check: () => false }, // Counter needed
    'time-traveler': { id: 'time-traveler', name: 'Time Traveler', desc: 'Create "Time" element', emoji: '⏰', tier: 'rainbow', 
      check: () => discovered.has('time')
    },
    'dragon-heir': { id: 'dragon-heir', name: 'Dragon Heir', desc: 'Create "Dragon" element', emoji: '🐉', tier: 'rainbow', 
      check: () => discovered.has('dragon')
    },
    'phoenix-rebirth': { id: 'phoenix-rebirth', name: 'Phoenix Rebirth', desc: 'Create the Phoenix element', emoji: '🔥', tier: 'rainbow', 
      check: () => discovered.has('phoenix')
    },
  };

  // 检查成就解锁
  const checkAchievements = () => {
    Object.values(achievements).forEach(achievement => {
      if (!unlockedAchievements.has(achievement.id) && achievement.check()) {
        setUnlockedAchievements(new Set([...unlockedAchievements, achievement.id]));
        setNewAchievement(achievement);
        setTimeout(() => setNewAchievement(null), 4000);
        playSound('achievement');
      }
    });
  };

  // 每次状态更新时检查成就
  React.useEffect(() => {
    checkAchievements();
  }, [discovered.size, comboCount, workArea.length]);

  // 音效播放函数
  const playSound = (type) => {
    if (!soundEnabled) return;
    
    // 使用Web Audio API创建简单音效
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    switch(type) {
      case 'place':
        oscillator.frequency.value = 400;
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.1);
        break;
      case 'success':
        oscillator.frequency.value = 600;
        gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(800, audioContext.currentTime + 0.2);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.2);
        break;
      case 'fail':
        oscillator.frequency.value = 200;
        gainNode.gain.setValueAtTime(0.15, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.15);
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.15);
        break;
      case 'discovery':
        // 上升音阶
        const notes = [523, 587, 659, 698, 784];
        notes.forEach((freq, i) => {
          const osc = audioContext.createOscillator();
          const gain = audioContext.createGain();
          osc.connect(gain);
          gain.connect(audioContext.destination);
          osc.frequency.value = freq;
          gain.gain.setValueAtTime(0.15, audioContext.currentTime + i * 0.1);
          gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + i * 0.1 + 0.15);
          osc.start(audioContext.currentTime + i * 0.1);
          osc.stop(audioContext.currentTime + i * 0.1 + 0.15);
        });
        break;
      case 'achievement':
        // 胜利号角
        const victoryNotes = [523, 659, 784, 1047];
        victoryNotes.forEach((freq, i) => {
          const osc = audioContext.createOscillator();
          const gain = audioContext.createGain();
          osc.connect(gain);
          gain.connect(audioContext.destination);
          osc.frequency.value = freq;
          gain.gain.setValueAtTime(0.2, audioContext.currentTime + i * 0.15);
          gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + i * 0.15 + 0.3);
          osc.start(audioContext.currentTime + i * 0.15);
          osc.stop(audioContext.currentTime + i * 0.15 + 0.3);
        });
        break;
    }
  };

  // 保存进度
  const saveProgress = () => {
    const saveData = {
      discovered: Array.from(discovered),
      workArea: workArea.map(el => ({ 
        id: el.originalId || el.id, 
        x: el.x, 
        y: el.y 
      })),
      unlockedAchievements: Array.from(unlockedAchievements),
      comboCount,
      timestamp: Date.now()
    };
    
    const dataStr = JSON.stringify(saveData);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `wuxing-save-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    playSound('success');
  };

  // 加载进度
  const loadProgress = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const saveData = JSON.parse(e.target.result);
        
        setDiscovered(new Set(saveData.discovered));
        setUnlockedAchievements(new Set(saveData.unlockedAchievements || []));
        setComboCount(saveData.comboCount || 0);
        
        // 重建工作区元素
        if (saveData.workArea) {
          const restoredWorkArea = saveData.workArea.map(item => {
            const elementData = Object.values(recipes).find(r => r.id === item.id) || 
                              baseElements.find(e => e.id === item.id);
            if (elementData) {
              return {
                ...elementData,
                id: `${item.id}-${Date.now()}-${Math.random()}`,
                originalId: item.id,
                x: item.x,
                y: item.y
              };
            }
            return null;
          }).filter(Boolean);
          
          setWorkArea(restoredWorkArea);
        }
        
        playSound('achievement');
        alert('Progress loaded successfully!');
      } catch (error) {
        alert('Load failed: Invalid file format');
      }
    };
    reader.readAsText(file);
  };

  // AI提示功能
  const getAiHint = async () => {
    setShowAiPanel(true);
    
    setTimeout(() => {
      const discoveredElements = getAllDiscovered();
      const undiscoveredRecipes = Object.entries(recipes).filter(([key, recipe]) => 
        !discovered.has(recipe.id)
      );

      if (undiscoveredRecipes.length === 0) {
        setAiHint({
          type: 'complete',
          message: '🎉 Congratulations! You discovered all elements! True Master Alchemist!',
          suggestions: []
        });
        return;
      }

      const possibleRecipes = undiscoveredRecipes.filter(([key, recipe]) => {
        const [el1, el2] = key.split('-');
        return discovered.has(el1) && discovered.has(el2);
      });

      if (possibleRecipes.length > 0) {
        const suggestions = possibleRecipes
          .sort(() => Math.random() - 0.5)
          .slice(0, 3)
          .map(([key, recipe]) => {
            const [el1Id, el2Id] = key.split('-');
            const el1 = discoveredElements.find(e => e.id === el1Id) || baseElements.find(e => e.id === el1Id);
            const el2 = discoveredElements.find(e => e.id === el2Id) || baseElements.find(e => e.id === el2Id);
            return {
              element1: el1,
              element2: el2,
              result: recipe,
              hint: `Try ${el1?.name || el1Id} + ${el2?.name || el2Id} → ${recipe.name}`
            };
          });

        setAiHint({
          type: 'suggestion',
          message: `💡 AI found ${possibleRecipes.length}  possible combinations!`,
          suggestions,
          totalPossible: possibleRecipes.length
        });
      } else {
        const nextTierElements = discoveredElements
          .sort((a, b) => (b.tier || 0) - (a.tier || 0))
          .slice(0, 3);
        
        setAiHint({
          type: 'explore',
          message: '🔍 Try combining advanced elements, or look for missing basic combinations!',
          suggestions: nextTierElements.map(el => ({
            element1: el,
            hint: `Try combining ${el.name} with other elements`
          }))
        });
      }
    }, 1000);
  };

  const getAllDiscovered = () => {
    const elements = [];
    discovered.forEach(id => {
      const base = baseElements.find(e => e.id === id);
      if (base) {
        elements.push({ ...base, tier: 0 });
      } else {
        Object.values(recipes).forEach(recipe => {
          if (recipe.id === id && !elements.find(e => e.id === id)) {
            elements.push(recipe);
          }
        });
      }
    });
    return elements.sort((a, b) => (a.tier || 0) - (b.tier || 0));
  };

  const handleDragStart = (e, element, fromWorkArea = false, index = null) => {
    setDraggedElement({ ...element, fromWorkArea, index });
    e.dataTransfer.effectAllowed = 'move';
    e.currentTarget.style.opacity = '0.5';
    
    // 记录鼠标相对于元素的偏移量
    const rect = e.currentTarget.getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleDragEnd = (e) => {
    e.currentTarget.style.opacity = '1';
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  // 通用降级和灰烬系统
  const getDegradationResult = (el1Id, el2Id) => {
    // 火焰灰烬系统：很多东西+火 = 灰烬
    const ashConversions = [
      'wood', 'plant', 'tree', 'forest', 'grass', 'flower', 'leaf', 'paper', 'book',
      'cloth', 'cotton', 'silk', 'wool', 'leather', 'plastic', 'rubber',
      'human', 'animal', 'bird', 'insect', 'fish', 'corpse', 'zombie',
      'house', 'building', 'city', 'village', 'castle', 'temple',
      'food', 'meat', 'bread', 'vegetable', 'fruit', 'furniture', 'table', 'chair'
    ];
    
    if (el1Id === 'fire' || el2Id === 'fire') {
      const otherId = el1Id === 'fire' ? el2Id : el1Id;
      
      // 灰烬+火 = 彻底消失（灰飞烟灭）
      if (otherId === 'ash') {
        return { id: 'nothing', name: 'Nothing', emoji: '💨', tier: 0, color: 'from-gray-200 via-slate-300 to-gray-400', ring: 'ring-gray-300', message: '灰烬彻底消散了...' };
      }
      
      if (ashConversions.some(item => otherId.includes(item))) {
        return { id: 'ash', name: 'Ash', emoji: '🌫️', tier: 1, color: 'from-gray-400 via-slate-500 to-gray-600', ring: 'ring-gray-500' };
      }
    }

    // 灰烬的转化
    if (el1Id === 'ash' || el2Id === 'ash') {
      const otherId = el1Id === 'ash' ? el2Id : el1Id;
      
      // 灰烬+水 = 肥料
      if (otherId === 'water' || otherId.includes('rain')) {
        return { id: 'fertilizer', name: 'Fertilizer', emoji: '🌱', tier: 2, color: 'from-green-700 via-emerald-800 to-green-900', ring: 'ring-green-700' };
      }
      
      // 灰烬+风 = 尘埃
      if (otherId === 'wind' || otherId.includes('air')) {
        return { id: 'dust', name: 'Dust', emoji: '💨', tier: 1, color: 'from-gray-300 via-slate-400 to-gray-500', ring: 'ring-gray-400' };
      }
      
      // 灰烬+压力 = 煤
      if (otherId === 'pressure' || otherId.includes('compress')) {
        return { id: 'coal', name: 'Coal', emoji: '⬛', tier: 2, color: 'from-gray-800 via-black to-gray-900', ring: 'ring-gray-800' };
      }
      
      // 灰烬+土 = 肥沃土壤
      if (otherId === 'earth' || otherId === 'soil') {
        return { id: 'fertile-soil', name: 'Fertile Soil', emoji: '🟫', tier: 2, color: 'from-amber-800 via-brown-900 to-yellow-900', ring: 'ring-amber-800' };
      }
    }

    // 水循环系统
    const waterDegrades = ['earth', 'dirt', 'sand', 'dust', 'ash', 'ground', 'soil'];
    if ((el1Id === 'water' && waterDegrades.some(item => el2Id.includes(item))) ||
        (el2Id === 'water' && waterDegrades.some(item => el1Id.includes(item)))) {
      return { id: 'mud', name: 'Mud', emoji: '🟫', tier: 1, color: 'from-amber-700 via-yellow-800 to-orange-900', ring: 'ring-amber-700' };
    }

    // 泥的转化
    if (el1Id === 'mud' || el2Id === 'mud') {
      const otherId = el1Id === 'mud' ? el2Id : el1Id;
      
      // 泥+火 = 砖/陶器
      if (otherId === 'fire' || otherId.includes('heat')) {
        return { id: 'brick', name: 'Brick', emoji: '🧱', tier: 2, color: 'from-red-700 via-orange-800 to-red-900', ring: 'ring-red-700' };
      }
      
      // 泥+时间 = 石头（沉积）
      if (otherId === 'time') {
        return { id: 'stone', name: 'Stone', emoji: '🗿', tier: 2, color: 'from-gray-600 via-slate-700 to-gray-800', ring: 'ring-gray-600' };
      }
    }

    // 石头系统
    if (el1Id === 'stone' || el2Id === 'stone' || el1Id === 'rock' || el2Id === 'rock') {
      const otherId = (el1Id === 'stone' || el1Id === 'rock') ? el2Id : el1Id;
      
      // 石头+火 = 熔岩
      if (otherId === 'fire' || otherId.includes('heat')) {
        return { id: 'lava', name: 'Lava', emoji: '🌋', tier: 2, color: 'from-orange-600 via-red-700 to-yellow-600', ring: 'ring-orange-600' };
      }
      
      // 石头+压力 = 宝石
      if (otherId === 'pressure') {
        return { id: 'gem', name: 'Gem', emoji: '💎', tier: 3, color: 'from-purple-500 via-pink-600 to-blue-500', ring: 'ring-purple-500' };
      }
    }

    // 熔岩+水 = 黑曜石/石头（循环）
    if ((el1Id === 'lava' && el2Id === 'water') || (el2Id === 'lava' && el1Id === 'water')) {
      return { id: 'obsidian', name: 'Obsidian', emoji: '⚫', tier: 3, color: 'from-gray-900 via-black to-purple-900', ring: 'ring-gray-900' };
    }

    // 水灭火
    if ((el1Id === 'water' && (el2Id === 'fire' || el2Id.includes('flame') || el2Id.includes('inferno'))) ||
        (el2Id === 'water' && (el1Id === 'fire' || el1Id.includes('flame') || el1Id.includes('inferno')))) {
      return { id: 'steam', name: 'Steam', emoji: '💨', tier: 1, color: 'from-gray-300 via-slate-400 to-gray-500', ring: 'ring-gray-400' };
    }

    // 蒸汽+冷 = 水（循环）
    if ((el1Id === 'steam' && (el2Id === 'cold' || el2Id === 'ice')) ||
        (el2Id === 'steam' && (el1Id === 'cold' || el1Id === 'ice'))) {
      return { id: 'water', name: 'Water', emoji: '💧', tier: 0, color: 'from-cyan-400 via-blue-500 to-indigo-600', ring: 'ring-blue-500' };
    }

    // 时间侵蚀系统
    if (el1Id === 'time' || el2Id === 'time') {
      const otherId = el1Id === 'time' ? el2Id : el1Id;
      
      // 尸体+时间 = 骨头
      if (otherId === 'corpse' || otherId.includes('dead')) {
        return { id: 'bones', name: 'Bones', emoji: '🦴', tier: 3, color: 'from-gray-300 via-slate-400 to-gray-500', ring: 'ring-gray-400' };
      }
      
      // 骨头+时间 = 化石
      if (otherId === 'bones' || otherId === 'bone') {
        return { id: 'fossil', name: 'Fossil', emoji: '🦴', tier: 4, color: 'from-amber-700 via-yellow-800 to-orange-900', ring: 'ring-amber-700' };
      }
      
      // 其他+时间 = 腐朽
      return { id: 'decay', name: 'Decay', emoji: '💀', tier: 2, color: 'from-gray-600 via-slate-700 to-gray-800', ring: 'ring-gray-600' };
    }

    // 尸体/腐败的转化
    if (el1Id === 'corpse' || el2Id === 'corpse' || el1Id === 'decay' || el2Id === 'decay') {
      const otherId = (el1Id === 'corpse' || el1Id === 'decay') ? el2Id : el1Id;
      
      // 尸体+土 = 肥料（生命循环）
      if (otherId === 'earth' || otherId === 'soil' || otherId === 'dirt') {
        return { id: 'fertilizer', name: 'Fertilizer', emoji: '🌱', tier: 2, color: 'from-green-700 via-emerald-800 to-green-900', ring: 'ring-green-700' };
      }
    }

    // 肥料+植物 = 生长/繁盛
    if ((el1Id === 'fertilizer' && el2Id.includes('plant')) ||
        (el2Id === 'fertilizer' && el1Id.includes('plant'))) {
      return { id: 'growth', name: 'Growth', emoji: '🌿', tier: 3, color: 'from-green-400 via-emerald-500 to-teal-600', ring: 'ring-green-500' };
    }

    // 虚空吞噬：虚空+任何东西 = 虚无（终点）
    if (el1Id === 'void' || el2Id === 'void') {
      return { id: 'nothing', name: 'Nothing', emoji: '⚫', tier: 3, color: 'from-black via-gray-900 to-black', ring: 'ring-black', message: '被虚空吞噬了...' };
    }

    // 虚无系统（无法再合成）
    if (el1Id === 'nothing' || el2Id === 'nothing') {
      return { id: 'nothing', name: 'Nothing', emoji: '⚫', tier: 3, color: 'from-black via-gray-900 to-black', ring: 'ring-black', message: '什么都没有...' };
    }

    // 死亡降级：生命+死亡 = 尸体
    if ((el1Id === 'death' && (el2Id.includes('life') || el2Id.includes('human') || el2Id.includes('animal'))) || 
        (el2Id === 'death' && (el1Id.includes('life') || el1Id.includes('human') || el1Id.includes('animal')))) {
      return { id: 'corpse', name: 'Corpse', emoji: '⚰️', tier: 2, color: 'from-gray-500 via-slate-600 to-gray-700', ring: 'ring-gray-500' };
    }

    // 爆炸系统：炸弹+任何东西 = 爆炸
    if ((el1Id.includes('bomb') || el1Id.includes('explosive') || el1Id.includes('dynamite')) ||
        (el2Id.includes('bomb') || el2Id.includes('explosive') || el2Id.includes('dynamite'))) {
      return { id: 'explosion', name: 'Explosion', emoji: '💥', tier: 3, color: 'from-orange-500 via-red-600 to-yellow-500', ring: 'ring-orange-500' };
    }

    // 污染系统：污染+自然 = 破坏
    if ((el1Id === 'pollution' || el1Id === 'toxic-waste' || el1Id.includes('poison')) && 
        (el2Id.includes('plant') || el2Id.includes('water') || el2Id.includes('life') || el2Id.includes('forest'))) {
      return { id: 'contaminated', name: 'Contaminated', emoji: '☣️', tier: 2, color: 'from-green-900 via-gray-700 to-black', ring: 'ring-green-900' };
    }

    // 冰冻系统：冰+生命 = 冻结
    if ((el1Id === 'ice' || el1Id === 'cold' || el1Id.includes('freeze')) && 
        (el2Id.includes('life') || el2Id.includes('plant') || el2Id.includes('water') || el2Id.includes('liquid'))) {
      return { id: 'frozen', name: 'Frozen', emoji: '🧊', tier: 2, color: 'from-cyan-300 via-blue-400 to-indigo-500', ring: 'ring-cyan-400' };
    }

    // 熔化系统：火+冰 = 水（循环）
    if ((el1Id === 'fire' && (el2Id === 'ice' || el2Id.includes('frozen'))) ||
        (el2Id === 'fire' && (el1Id === 'ice' || el1Id.includes('frozen')))) {
      return { id: 'water', name: 'Water', emoji: '💧', tier: 0, color: 'from-cyan-400 via-blue-500 to-indigo-600', ring: 'ring-blue-500' };
    }

    // 腐蚀系统：酸+金属 = 腐蚀
    if ((el1Id.includes('acid') && el2Id.includes('metal')) ||
        (el2Id.includes('acid') && el1Id.includes('metal'))) {
      return { id: 'corroded-metal', name: 'Corroded Metal', emoji: '🦠', tier: 2, color: 'from-green-800 via-gray-700 to-brown-800', ring: 'ring-green-800' };
    }

    // 风化系统：风+石头 = 沙
    if ((el1Id === 'wind' && (el2Id.includes('stone') || el2Id.includes('rock'))) ||
        (el2Id === 'wind' && (el1Id.includes('stone') || el1Id.includes('rock')))) {
      return { id: 'sand', name: 'Sand', emoji: '🏜️', tier: 1, color: 'from-yellow-600 via-amber-700 to-orange-800', ring: 'ring-yellow-600' };
    }

    // 雷击系统：闪电+树 = 火
    if ((el1Id === 'lightning' && el2Id.includes('tree')) ||
        (el2Id === 'lightning' && el1Id.includes('tree'))) {
      return { id: 'fire', name: 'Fire', emoji: '🔥', tier: 0, color: 'from-orange-400 via-red-500 to-rose-600', ring: 'ring-red-500' };
    }

    // 光暗系统
    if ((el1Id === 'darkness' && el2Id === 'light') ||
        (el2Id === 'darkness' && el1Id === 'light')) {
      return { id: 'twilight', name: 'Twilight', emoji: '🌆', tier: 2, color: 'from-orange-600 via-purple-700 to-blue-900', ring: 'ring-purple-700' };
    }

    // 混沌与秩序
    if ((el1Id === 'chaos' && el2Id === 'order') ||
        (el2Id === 'chaos' && el1Id === 'order')) {
      return { id: 'balance', name: 'Balance', emoji: '⚖️', tier: 5, color: 'from-purple-400 via-pink-500 to-purple-600', ring: 'ring-purple-500' };
    }

    // 黑洞系统（终点吞噬者）
    if (el1Id === 'black-hole' || el2Id === 'black-hole') {
      const otherId = el1Id === 'black-hole' ? el2Id : el1Id;
      // 黑洞+黑洞 = 超大黑洞
      if (otherId === 'black-hole') {
        return { id: 'supermassive-black-hole', name: 'Supermassive Black Hole', emoji: '⚫', tier: 10, color: 'from-black via-purple-900 to-black', ring: 'ring-purple-900' };
      }
      // 黑洞吞噬其他物质还是黑洞（不变但提示）
      return { id: 'black-hole', name: 'Black Hole', emoji: '🕳️', tier: 9, color: 'from-black via-gray-900 to-purple-900', ring: 'ring-purple-900', message: '被黑洞吞噬了...' };
    }

    return null;
  };

  const handleDrop = (e, targetElement = null, targetIndex = null) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!draggedElement) return;

    // 如果是放到空白区域 - 自由放置
    if (!targetElement && workAreaRef.current) {
      const rect = workAreaRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - dragOffset.x;
      const y = e.clientY - rect.top - dragOffset.y;
      
      playSound('place');
      
      // 如果是从工作台拖动，先删除原位置
      if (draggedElement.fromWorkArea) {
        const newWorkArea = workArea.filter((_, i) => i !== draggedElement.index);
        
        // 检查是否与其他元素重叠（碰撞合成）
        const collidedElement = newWorkArea.find(el => {
          const dx = Math.abs(el.x - x);
          const dy = Math.abs(el.y - y);
          return dx < 50 && dy < 50; // 50px碰撞范围
        });
        
        if (collidedElement) {
          // 发生碰撞，尝试合成
          const element1WithPosition = {
            ...draggedElement,
            x: x,
            y: y,
          };
          // el1在工作区中(true)，使用workArea作为基础
          attemptCombination(element1WithPosition, collidedElement, true, workArea, { x: collidedElement.x, y: collidedElement.y });
        } else {
          // 没有碰撞，移动到新位置
          setWorkArea([...newWorkArea, { 
            ...draggedElement, 
            id: draggedElement.id, 
            originalId: draggedElement.originalId || draggedElement.id,
            x, 
            y 
          }]);
        }
      } else {
        // 从侧边栏拖入
        // 检查是否与现有元素重叠
        const collidedElement = workArea.find(el => {
          const dx = Math.abs(el.x - x);
          const dy = Math.abs(el.y - y);
          return dx < 50 && dy < 50;
        });
        
        if (collidedElement) {
          const element1WithPosition = {
            ...draggedElement,
            x: x,
            y: y,
          };
          // el1不在工作区(false)，使用workArea作为基础
          attemptCombination(element1WithPosition, collidedElement, false, workArea, { x: collidedElement.x, y: collidedElement.y });
        } else {
          setWorkArea([...workArea, { 
            ...draggedElement, 
            id: `${draggedElement.id}-${Date.now()}`, 
            originalId: draggedElement.id,
            x, 
            y 
          }]);
        }
      }
      
      setDraggedElement(null);
      return;
    }

    // 如果拖到另一个元素上 - 直接合成
    if (targetElement) {
      const element1WithPosition = {
        ...draggedElement,
        x: targetElement.x,
        y: targetElement.y,
      };
      
      // 判断el1是否在工作区
      const el1InWorkArea = draggedElement.fromWorkArea === true;
      
      attemptCombination(element1WithPosition, targetElement, el1InWorkArea, workArea, { x: targetElement.x, y: targetElement.y });
    }

    setDraggedElement(null);
  };

  // 尝试合成的辅助函数
  // 参数说明：
  // - el1: 第一个元素（拖动的元素）
  // - el2: 第二个元素（目标元素）
  // - el1InWorkArea: 第一个元素是否已在工作区（如果是，需要从workArea中删除）
  // - baseWorkArea: 基础工作区数组
  // - position: 合成发生的位置
  const attemptCombination = (el1, el2, el1InWorkArea, baseWorkArea, position) => {
    const el1Id = el1.originalId || el1.id;
    const el2Id = el2.originalId || el2.id;

    const key1 = `${el1Id}-${el2Id}`;
    const key2 = `${el2Id}-${el1Id}`;
    
    let result = recipes[key1] || recipes[key2];

    // 如果没有找到配方，尝试降级系统
    if (!result) {
      result = getDegradationResult(el1Id, el2Id);
    }

    // ✅ 如果找到结果（成功合成）
    if (result) {
      setEffectType('success');
      setShowEffect(true);
      
      if (workAreaRef.current) {
        const rect = workAreaRef.current.getBoundingClientRect();
        setEffectPos({ x: rect.left + position.x + 30, y: rect.top + position.y + 30 });
      }
      
      setTimeout(() => setShowEffect(false), 1200);

      const isNew = !discovered.has(result.id);
      if (isNew) {
        setNewDiscovery(result);
        setComboCount(prev => prev + 1);
        setTimeout(() => setNewDiscovery(null), 3000);
        playSound('discovery');
      } else {
        playSound('success');
      }

      setDiscovered(new Set([...discovered, result.id]));

      // ✅ 成功合成：移除两个元素，创建新元素
      let finalWorkArea = baseWorkArea;
      
      // 如果el1在工作区中，需要删除它
      if (el1InWorkArea) {
        finalWorkArea = finalWorkArea.filter(e => e.id !== el1.id);
      }
      
      // 删除el2（目标元素）
      finalWorkArea = finalWorkArea.filter(e => e.id !== el2.id);
      
      // 在中间位置创建新元素
      finalWorkArea = [...finalWorkArea, { 
        ...result, 
        id: `${result.id}-${Date.now()}`, 
        originalId: result.id,
        x: position.x,
        y: position.y
      }];
      
      setWorkArea(finalWorkArea);
      
    } else {
      // ❌ 无法合成：保留两个元素在工作台上
      playSound('fail');
      
      setEffectType('fail');
      setShowEffect(true);
      
      if (workAreaRef.current) {
        const rect = workAreaRef.current.getBoundingClientRect();
        setEffectPos({ x: rect.left + position.x + 30, y: rect.top + position.y + 30 });
      }
      
      setTimeout(() => setShowEffect(false), 800);

      // CRITICAL: 两个元素都要保留！
      let finalWorkArea = baseWorkArea;
      
      // 如果el1不在工作区（从侧边栏拖入），需要添加它
      if (!el1InWorkArea) {
        finalWorkArea = [...finalWorkArea, {
          ...el1,
          id: `${el1.originalId || el1.id}-${Date.now()}`,
          originalId: el1.originalId || el1.id,
          x: position.x + 80, // 放在旁边
          y: position.y,
        }];
      }
      // 如果el1已在工作区，它已经在baseWorkArea中了，不需要额外操作
      
      // el2（目标元素）已经在baseWorkArea中，不需要额外操作
      
      setWorkArea(finalWorkArea);
    }
  };

  const removeFromWorkArea = (index) => {
    setWorkArea(workArea.filter((_, i) => i !== index));
  };

  const clearWorkArea = () => {
    setWorkArea([]);
  };

  const filteredElements = getAllDiscovered().filter(e => {
    const notBase = !baseElements.find(base => base.id === e.id);
    const matchesSearch = e.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         e.emoji.includes(searchTerm);
    const matchesTier = filterTier === null || e.tier === filterTier;
    return notBase && matchesSearch && matchesTier;
  });

  // 统计各层级元素数量
  const tierStats = {};
  getAllDiscovered().forEach(el => {
    const tier = el.tier || 0;
    tierStats[tier] = (tierStats[tier] || 0) + 1;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100 text-gray-900 overflow-hidden relative">
      {/* 装饰性背景元素 - Supercell风格 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-orange-400/20 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute w-96 h-96 bg-red-400/20 rounded-full blur-3xl top-1/2 left-1/2 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* 合成特效 */}
      {showEffect && (
        <div 
          className="fixed pointer-events-none z-50"
          style={{ 
            left: effectPos.x, 
            top: effectPos.y,
            transform: 'translate(-50%, -50%)'
          }}
        >
          {effectType === 'success' ? (
            <div className="relative">
              <Sparkles className="w-16 h-16 text-yellow-300 animate-ping" />
              <Zap className="w-16 h-16 text-purple-400 absolute inset-0 animate-spin" />
              <Star className="w-12 h-12 text-pink-400 absolute inset-0 animate-bounce" />
            </div>
          ) : (
            <div className="relative flex items-center justify-center opacity-60">
              <div className="text-2xl">✖️</div>
            </div>
          )}
        </div>
      )}

      {/* 新发现提示 */}
      {newDiscovery && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 animate-bounce">
          <div className={`bg-gradient-to-r ${newDiscovery.color} px-6 py-4 rounded-2xl shadow-2xl border-2 border-white/30 backdrop-blur`}>
            <div className="flex items-center gap-3">
              <Star className="w-6 h-6 text-yellow-300 animate-spin" />
              <div>
                <div className="text-sm font-bold text-white/90">✨ {t('newDiscovery')} Tier {newDiscovery.tier}</div>
                <div className="text-2xl font-bold flex items-center gap-2">
                  <span>{newDiscovery.emoji}</span>
                  <span>{newDiscovery.name}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 成就解锁提示 */}
      {newAchievement && (
        <div className="fixed top-40 left-1/2 -translate-x-1/2 z-50 animate-bounce">
          <div className={`px-8 py-5 rounded-2xl shadow-2xl border-2 border-white/30 backdrop-blur ${
            newAchievement.tier === 'bronze' ? 'bg-gradient-to-r from-orange-700 to-amber-600' :
            newAchievement.tier === 'silver' ? 'bg-gradient-to-r from-gray-400 to-slate-500' :
            newAchievement.tier === 'gold' ? 'bg-gradient-to-r from-yellow-500 to-amber-600' :
            newAchievement.tier === 'diamond' ? 'bg-gradient-to-r from-cyan-400 to-blue-500' :
            'bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500'
          }`}>
            <div className="flex items-center gap-4">
              <div className="text-6xl">{newAchievement.emoji}</div>
              <div>
                <div className="text-xl font-bold text-white/90 flex items-center gap-2">
                  <Trophy className="w-6 h-6 text-yellow-300 animate-spin" />
                  {t('achievementUnlocked')}
                </div>
                <div className="text-3xl font-black text-white mt-1">{newAchievement.name}</div>
                <div className="text-sm text-white/80 mt-1">{newAchievement.desc}</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 成就面板 */}
      {showAchievements && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setShowAchievements(false)}>
          <div className="bg-slate-900/95 rounded-2xl border-2 border-yellow-500/50 shadow-2xl max-w-4xl w-full max-h-[80vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="p-6 bg-gradient-to-r from-yellow-900/30 to-orange-900/30 border-b border-yellow-500/30 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <Trophy className="w-8 h-8 text-yellow-400 animate-bounce" />
                <div>
                  <h2 className="text-2xl font-bold text-yellow-300">{t('achievements')}</h2>
                  <p className="text-sm text-gray-400">Unlocked {unlockedAchievements.size}/{Object.keys(achievements).length}</p>
                </div>
              </div>
              <button
                onClick={() => setShowAchievements(false)}
                className="text-gray-400 hover:text-white text-3xl font-bold"
              >
                ×
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto max-h-[calc(80vh-100px)] custom-scrollbar">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {Object.values(achievements).map(achievement => {
                  const isUnlocked = unlockedAchievements.has(achievement.id);
                  const tierColors = {
                    bronze: 'from-orange-700 to-amber-600',
                    silver: 'from-gray-400 to-slate-500',
                    gold: 'from-yellow-500 to-amber-600',
                    diamond: 'from-cyan-400 to-blue-500',
                    rainbow: 'from-purple-500 via-pink-500 to-orange-500'
                  };
                  
                  return (
                    <div
                      key={achievement.id}
                      className={`relative rounded-xl p-4 border-2 transition-all ${
                        isUnlocked
                          ? `bg-gradient-to-br ${tierColors[achievement.tier]} border-white/30 shadow-lg hover:scale-105`
                          : 'bg-slate-800/50 border-slate-700 opacity-50'
                      }`}
                    >
                      <div className="text-center">
                        <div className={`text-5xl mb-2 ${isUnlocked ? 'animate-pulse' : 'grayscale'}`}>
                          {isUnlocked ? achievement.emoji : '❓'}
                        </div>
                        <div className="text-lg font-bold text-white mb-1">
                          {isUnlocked ? achievement.name : '???'}
                        </div>
                        <div className="text-xs text-white/70">
                          {isUnlocked ? achievement.desc : 'Locked'}
                        </div>
                      </div>
                      {isUnlocked && achievement.tier === 'rainbow' && (
                        <div className="absolute -top-1 -right-1 bg-yellow-400 rounded-full p-1">
                          <Star className="w-3 h-3 text-yellow-900" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* AI提示面板 */}
      {showAiPanel && aiHint && (
        <div className="fixed top-32 right-4 z-40 w-96 bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-purple-500/50 shadow-2xl p-4 animate-fade-in max-h-[600px] overflow-y-auto">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-purple-400 animate-pulse" />
              <h3 className="font-bold text-purple-300">AI Alchemy Assistant</h3>
            </div>
            <button onClick={() => setShowAiPanel(false)} className="text-gray-400 hover:text-white text-xl">
              ×
            </button>
          </div>
          
          <p className="text-sm text-gray-300 mb-3">{aiHint.message}</p>
          
          {aiHint.totalPossible && (
            <div className="text-xs text-purple-400 mb-2">
              🎯 {aiHint.totalPossible} possible combinations waiting to be discovered
            </div>
          )}
          
          {aiHint.suggestions.length > 0 && (
            <div className="space-y-2">
              {aiHint.suggestions.map((sug, idx) => (
                <div key={idx} className="bg-slate-800/50 rounded-lg p-3 text-sm hover:bg-slate-800/70 transition-all">
                  {sug.element1 && sug.element2 ? (
                    <>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl">{sug.element1.emoji}</span>
                        <span className="text-sm text-gray-400">{sug.element1.name}</span>
                        <span className="text-gray-400">+</span>
                        <span className="text-2xl">{sug.element2.emoji}</span>
                        <span className="text-sm text-gray-400">{sug.element2.name}</span>
                      </div>
                      <div className="flex items-center gap-2 text-purple-300">
                        <span className="text-gray-400">→</span>
                        <span className="text-3xl">{sug.result.emoji}</span>
                        <span className="font-bold">{sug.result.name}</span>
                        <span className="text-xs bg-purple-500/30 px-2 py-1 rounded">T{sug.result.tier}</span>
                      </div>
                    </>
                  ) : (
                    <p className="text-xs text-gray-400">{sug.hint}</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      <div className="relative z-10 p-4 md:p-6">
        {/* 顶部状态栏 */}
        <div className="max-w-7xl mx-auto mb-6">
          {/* 单行紧凑布局 */}
          <div className="bg-white rounded-3xl p-6 border-4 border-amber-400 shadow-2xl">
            <div className="flex items-center justify-between gap-8">
              {/* 左：标题 */}
              <div className="flex items-center gap-4">
                <div>
                  <h1 className="text-5xl font-black bg-gradient-to-r from-orange-600 via-red-500 to-pink-500 bg-clip-text text-transparent mb-1" style={{ textShadow: '2px 2px 0px rgba(251, 191, 36, 0.3)' }}>
                    {t('title')}
                  </h1>
                  <p className="text-xs text-orange-700 font-bold">{t('subtitle', { count: totalPossibleElements })}</p>
                </div>
                
                {/* 语言切换 */}
                <div className="flex gap-1 bg-amber-100 rounded-xl p-1 border-2 border-amber-300">
                  <button
                    onClick={() => setLanguage('en')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-black transition-all ${
                      language === 'en' 
                        ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg' 
                        : 'text-orange-600 hover:bg-amber-200'
                    }`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => setLanguage('zh')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-black transition-all ${
                      language === 'zh' 
                        ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg' 
                        : 'text-orange-600 hover:bg-amber-200'
                    }`}
                  >
                    ZH
                  </button>
                  <button
                    onClick={() => setLanguage('fi')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-black transition-all ${
                      language === 'fi' 
                        ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg' 
                        : 'text-orange-600 hover:bg-amber-200'
                    }`}
                  >
                    FI
                  </button>
                </div>
              </div>

              {/* 中：进度 */}
              <div className="flex-1 max-w-md">
                <div className="text-center mb-2">
                  <span className="text-6xl font-black bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent" style={{ textShadow: '3px 3px 0px rgba(251, 191, 36, 0.2)' }}>
                    {discovered.size}
                  </span>
                  <span className="text-2xl text-orange-400 ml-1 font-bold">/ {totalPossibleElements}</span>
                </div>
                <div className="w-full h-3 bg-amber-200 rounded-full overflow-hidden border-2 border-amber-400">
                  <div 
                    className="h-full bg-gradient-to-r from-green-500 via-yellow-500 to-orange-500 transition-all duration-500 rounded-full relative"
                    style={{ width: `${progressPercent}%` }}
                  >
                    <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                  </div>
                </div>
                <div className="text-center text-xs text-orange-600 mt-1 font-black">{progressPercent}%</div>
              </div>

              {/* 右：连击 */}
              {comboCount > 0 && (
                <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl px-6 py-3 border-4 border-white shadow-xl">
                  <Trophy className="w-8 h-8 mx-auto text-white mb-1 animate-bounce drop-shadow-lg" />
                  <div className="text-4xl font-black text-white text-center" style={{ textShadow: '2px 2px 0px rgba(0,0,0,0.3)' }}>{comboCount}</div>
                  <div className="text-xs text-white font-black text-center">{t('combo')}</div>
                </div>
              )}
            </div>
          </div>

          {/* 功能控制区 - 紧凑版 */}
          <div className="mt-4 flex gap-4">
            {/* 左：分类筛选 */}
            <div className="flex-1 bg-white rounded-2xl p-4 border-3 border-orange-300 shadow-lg">
              <div className="text-[10px] text-orange-700 font-black mb-2 uppercase">{t('quickFilter')}</div>
              <div className="flex flex-wrap gap-2">
                <button className="px-3 py-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 rounded-xl transition-all border-2 border-white text-xs font-black text-white shadow-md">
                  🔬 {t('tech')}
                </button>
                <button className="px-3 py-1.5 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 rounded-xl transition-all border-2 border-white text-xs font-black text-white shadow-md">
                  🎨 {t('culture')}
                </button>
                <button className="px-3 py-1.5 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 rounded-xl transition-all border-2 border-white text-xs font-black text-white shadow-md">
                  🌿 {t('nature')}
                </button>
                <button className="px-3 py-1.5 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 rounded-xl transition-all border-2 border-white text-xs font-black text-white shadow-md">
                  🐉 {t('myth')}
                </button>
                <button className="px-3 py-1.5 bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-black rounded-xl transition-all border-2 border-white text-xs font-black text-white shadow-md">
                  💀 {t('dark')}
                </button>
              </div>
            </div>

            {/* 右：功能按钮 */}
            <div className="bg-white rounded-2xl p-4 border-3 border-orange-300 shadow-lg">
              <div className="flex gap-2">
                <button
                  onClick={() => setShowAchievements(!showAchievements)}
                  className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 rounded-xl font-black text-xs flex items-center gap-1.5 transition-all shadow-lg relative text-white border-2 border-white"
                >
                  <Trophy className="w-3.5 h-3.5" />
                  {t('achievements')}
                  {unlockedAchievements.size > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full w-5 h-5 flex items-center justify-center font-black border-2 border-white">
                      {unlockedAchievements.size}
                    </span>
                  )}
                </button>

                <button
                  onClick={saveProgress}
                  className="px-3 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 rounded-xl font-black transition-all text-xs border-2 border-white shadow-md"
                  title={t('save')}
                >
                  💾
                </button>

                <label className="px-3 py-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 rounded-xl font-black transition-all cursor-pointer text-xs border-2 border-white shadow-md" title={t('load')}>
                  📁
                  <input
                    type="file"
                    accept=".json"
                    onChange={loadProgress}
                    className="hidden"
                  />
                </label>

                <button
                  onClick={() => setSoundEnabled(!soundEnabled)}
                  className={`px-3 py-2 rounded-xl font-black transition-all text-xs border-2 border-white shadow-md ${
                    soundEnabled 
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700' 
                      : 'bg-gradient-to-r from-gray-400 to-gray-600 hover:from-gray-500 hover:to-gray-700'
                  }`}
                  title={soundEnabled ? t('soundOn') : t('soundOff')}
                >
                  {soundEnabled ? '🔊' : '🔇'}
                </button>
              </div>
            </div>
          </div>

          {/* 层级统计 - 折叠式 */}
          <div className="mt-4 bg-slate-900/40 backdrop-blur-xl rounded-xl border border-purple-500/20 overflow-hidden">
            <button 
              onClick={() => setIsPanelOpen(!isPanelOpen)}
              className="w-full px-4 py-2.5 flex items-center justify-between hover:bg-slate-800/50 transition-all"
            >
              <div className="flex items-center gap-2">
                <div className="text-xs font-bold text-purple-300">📊 {t('tierDistribution')}</div>
                {filterTier !== null && (
                  <span className="text-[10px] bg-purple-500/30 px-2 py-0.5 rounded">T{filterTier}</span>
                )}
              </div>
              <div className="flex items-center gap-2">
                {filterTier !== null && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setFilterTier(null);
                    }}
                    className="text-[10px] text-purple-400 hover:text-white px-2 py-1 bg-purple-500/20 rounded"
                  >
                    ✕
                  </button>
                )}
                <div className={`text-xs transform transition-transform ${isPanelOpen ? 'rotate-180' : ''}`}>
                  ▼
                </div>
              </div>
            </button>
            
            {isPanelOpen && (
              <div className="px-4 pb-3">
                <div className="grid grid-cols-11 gap-2">
                  {[0,1,2,3,4,5,6,7,8,9,10].map(tier => (
                    <button
                      key={tier}
                      onClick={() => setFilterTier(filterTier === tier ? null : tier)}
                      className={`text-center p-2 rounded-lg transition-all ${
                        filterTier === tier 
                          ? 'bg-purple-500/50 ring-2 ring-purple-400 scale-105' 
                          : 'bg-slate-800/40 hover:bg-slate-700/60'
                      }`}
                    >
                      <div className="text-[10px] text-gray-400 mb-1">T{tier}</div>
                      <div className="text-lg font-bold text-white">{tierStats[tier] || 0}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="max-w-[1800px] mx-auto grid grid-cols-12 gap-4 md:gap-6">
          {/* 主工作区 */}
          <div className="col-span-12 md:col-span-9">
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-3xl border-4 border-amber-400 shadow-2xl overflow-hidden">
              <div className="p-4 bg-gradient-to-r from-orange-400 to-red-400 border-b-4 border-amber-500 flex justify-between items-center">
                <h2 className="text-xl font-black text-white flex items-center gap-2" style={{ textShadow: '2px 2px 0px rgba(0,0,0,0.3)' }}>
                  <Zap className="w-6 h-6 drop-shadow-lg" />
                  {t('freeCanvas')}
                </h2>
                
                <div className="flex items-center gap-3">
                  {workArea.length > 0 && (
                    <button
                      onClick={clearWorkArea}
                      className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-xl text-sm text-white font-black border-2 border-white shadow-lg transition-all"
                    >
                      {t('clear')} ({workArea.length})
                    </button>
                  )}
                  
                  {/* AI提示按钮 - 右侧位置 */}
                  <button
                    onClick={getAiHint}
                    className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-xl font-black text-base flex items-center gap-2 transition-all shadow-xl text-white border-3 border-white animate-pulse hover:animate-none hover:scale-105"
                    style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}
                  >
                    <Brain className="w-5 h-5" />
                    🤖 {t('aiHintButton')}
                  </button>
                </div>
              </div>
              
              <div 
                ref={workAreaRef}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e)}
                className="p-6 min-h-[600px] md:min-h-[700px] lg:min-h-[800px] relative bg-gradient-to-br from-yellow-50 to-amber-50"
                style={{ 
                  backgroundImage: 'radial-gradient(circle, rgba(251, 191, 36, 0.15) 1px, transparent 1px)',
                  backgroundSize: '30px 30px'
                }}
              >
                {workArea.map((element, index) => (
                  <div
                    key={element.id}
                    draggable
                    onDragStart={(e) => handleDragStart(e, element, true, index)}
                    onDragEnd={handleDragEnd}
                    onDragOver={handleDragOver}
                    onDrop={(e) => handleDrop(e, element, index)}
                    className={`absolute bg-gradient-to-br ${element.color} rounded-2xl p-2 cursor-move hover:scale-110 active:scale-95 transition-all shadow-xl hover:shadow-2xl ${element.ring} hover:ring-4 group border-3 border-white`}
                    style={{ 
                      left: `${element.x}px`, 
                      top: `${element.y}px`,
                      width: '55px',
                      height: '55px'
                    }}
                  >
                    <button
                      onClick={() => removeFromWorkArea(index)}
                      className="absolute -top-2 -right-2 bg-red-500 hover:bg-red-600 text-white rounded-full w-6 h-6 text-xs font-black opacity-0 group-hover:opacity-100 transition-all shadow-xl z-10 border-2 border-white"
                    >
                      ×
                    </button>
                    {element.tier >= 5 && (
                      <div className="absolute -top-1 -left-1 bg-yellow-400 rounded-full p-1 border-2 border-white shadow-lg">
                        <Star className="w-2 h-2 text-yellow-900" />
                      </div>
                    )}
                    {element.tier >= 8 && (
                      <div className="absolute -bottom-1 -right-1 bg-red-500 rounded-full p-1 animate-pulse border-2 border-white shadow-lg">
                        <Flame className="w-2 h-2 text-white" />
                      </div>
                    )}
                    <div className="text-xl text-center mb-0.5 drop-shadow-lg">{element.emoji}</div>
                    <div className="text-center font-black text-[7px] text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] leading-[8px] break-words px-0.5 max-h-[16px] overflow-hidden">{element.name}</div>
                  </div>
                ))}
                
                {workArea.length === 0 && (
                  <div className="h-full flex flex-col items-center justify-center text-orange-700 min-h-[400px]">
                    <div className="text-6xl mb-4 opacity-50 animate-bounce">✨</div>
                    <p className="text-xl font-black mb-2">{t('freeCanvas')}</p>
                    <p className="text-sm font-bold mb-2">{t('dragElements')}</p>
                    <div className="flex gap-2 mt-2 text-xs">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-xl font-black border-2 border-white shadow-md">💡 {t('getInspiration')}</span>
                      <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-xl font-black border-2 border-white shadow-md">🎨 {t('placeFreely')}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* 右侧元素面板 */}
          <div className="col-span-12 md:col-span-3">
            <div className="space-y-4 sticky top-4">
              {/* 统一的元素图鉴 */}
              <div className="bg-white rounded-3xl border-4 border-blue-400 shadow-2xl overflow-hidden">
                <button
                  onClick={() => setIsPanelOpen(!isPanelOpen)}
                  className="w-full p-4 bg-gradient-to-r from-blue-500 to-cyan-500 border-b-4 border-blue-600 flex items-center justify-between hover:from-blue-600 hover:to-cyan-600 transition-all"
                >
                  <h2 className="text-lg font-black text-white flex items-center gap-2" style={{ textShadow: '2px 2px 0px rgba(0,0,0,0.3)' }}>
                    <BookOpen className="w-5 h-5 drop-shadow-lg" />
                    {t('elementLibrary')} ({discovered.size})
                  </h2>
                  <ChevronDown className={`w-5 h-5 text-white transition-transform drop-shadow-lg ${isPanelOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isPanelOpen && (
                  <>
                    <div className="p-4 border-b border-purple-500/30 space-y-2">
                      <div className="relative">
                        <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          placeholder={t('search')}
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="w-full pl-10 pr-4 py-2 bg-slate-800/50 rounded-lg text-sm text-white placeholder-gray-500 border border-purple-500/30 focus:border-purple-500 focus:outline-none"
                        />
                      </div>
                      {filterTier !== null && (
                        <div className="flex items-center justify-between bg-purple-500/20 px-3 py-2 rounded-lg">
                          <span className="text-xs text-purple-300">{t('filter')}: Tier {filterTier}</span>
                          <button
                            onClick={() => setFilterTier(null)}
                            className="text-xs text-purple-400 hover:text-white"
                          >
                            {t('clear')}
                          </button>
                        </div>
                      )}
                    </div>

                    <div className="p-4 max-h-[600px] overflow-y-auto custom-scrollbar">
                      {/* 基础五行 - 始终显示在顶部 */}
                      <div className="mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Star className="w-4 h-4 text-yellow-500 animate-spin drop-shadow-lg" style={{ animationDuration: '3s' }} />
                          <div className="text-sm font-black text-orange-600">{t('baseElements')}</div>
                        </div>
                        <div className="flex gap-1.5 p-2 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl border-3 border-yellow-400">
                          {baseElements.map(element => (
                            <div
                              key={element.id}
                              draggable
                              onDragStart={(e) => handleDragStart(e, element)}
                              onDragEnd={handleDragEnd}
                              className={`bg-gradient-to-br ${element.color} rounded-xl p-1.5 cursor-move hover:scale-105 active:scale-95 transition-all shadow-lg hover:shadow-xl ${element.ring} hover:ring-4 relative border-2 border-white flex-1`}
                              title={element.name}
                              style={{ width: '55px', height: '55px', minWidth: '55px' }}
                            >
                              <div className="text-xl text-center mb-0.5 drop-shadow-lg">{element.emoji}</div>
                              <div className="text-center font-black text-[7px] text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] leading-[8px] break-words px-0.5 max-h-[16px] overflow-hidden">{element.name}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* 已发现元素 */}
                      {filteredElements.length > 0 && (
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Sparkles className="w-4 h-4 text-blue-500 drop-shadow-lg" />
                            <div className="text-sm font-black text-blue-600">
                              {t('discovered')} ({filteredElements.length})
                            </div>
                          </div>
                          <div className="grid grid-cols-4 gap-1.5">
                            {filteredElements.map(element => (
                              <div
                                key={element.id}
                                draggable
                                onDragStart={(e) => handleDragStart(e, element)}
                                onDragEnd={handleDragEnd}
                                className={`bg-gradient-to-br ${element.color} rounded-xl p-1.5 cursor-move hover:scale-105 active:scale-95 transition-all shadow-lg hover:shadow-xl ${element.ring} hover:ring-4 relative group border-2 border-white`}
                                title={`${element.name} - Tier ${element.tier}`}
                                style={{ width: '55px', height: '55px' }}
                              >
                                {element.tier >= 5 && (
                                  <div className="absolute -top-1 -right-1 bg-yellow-400 rounded-full p-0.5 border-2 border-white shadow-lg">
                                    <Star className="w-2 h-2 text-yellow-900" />
                                  </div>
                                )}
                                {element.tier >= 8 && (
                                  <div className="absolute -bottom-1 -left-1 bg-red-500 rounded-full p-0.5 animate-pulse border-2 border-white shadow-lg">
                                    <Flame className="w-1.5 h-1.5 text-white" />
                                  </div>
                                )}
                                <div className="text-xl text-center mb-0.5 drop-shadow-lg">{element.emoji}</div>
                                <div className="text-center font-black text-[7px] text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] leading-[8px] break-words px-0.5 max-h-[16px] overflow-hidden">{element.name}</div>
                                <div className="text-center text-[6px] text-white/90 mt-0.5 font-bold drop-shadow">T{element.tier}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* 空状态提示 */}
                      {filteredElements.length === 0 && !searchTerm && (
                        <div className="text-center text-orange-600 py-8">
                          <div className="text-4xl mb-2 opacity-50">✨</div>
                          <p className="text-sm font-black">{t('startCrafting')}</p>
                          <p className="text-xs text-orange-500 mt-1 font-bold">{t('infiniteUse')}</p>
                        </div>
                      )}

                      {filteredElements.length === 0 && searchTerm && (
                        <div className="text-center text-orange-600 py-4 text-sm font-black">
                          {t('noMatch')}
                        </div>
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 完成庆祝 */}
      {discovered.size === totalPossibleElements && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600 p-12 rounded-3xl text-center max-w-md shadow-2xl border-4 border-white/30 animate-bounce">
            <Trophy className="w-32 h-32 mx-auto mb-6 text-yellow-300 animate-spin" style={{ animationDuration: '3s' }} />
            <h2 className="text-6xl font-black mb-4 text-white drop-shadow-lg">{t('completionTitle')}</h2>
            <p className="text-3xl mb-6 text-white/90">{t('completionMessage').replace('{count}', totalPossibleElements)}</p>
            <div className="text-7xl mb-4">🎉✨🎊🌟💫🔥</div>
            <p className="text-2xl text-white/80 mb-2">{t('completionSubtitle')}</p>
            <p className="text-lg text-white/70">{t('completionDescription')}</p>
          </div>
        </div>
      )}

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(168, 85, 247, 0.5);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(168, 85, 247, 0.8);
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        
        /* 自定义网格列数 */
        @media (min-width: 1024px) {
          .lg\\:grid-cols-16 {
            grid-template-columns: repeat(16, minmax(0, 1fr));
          }
        }
        @media (min-width: 1280px) {
          .xl\\:grid-cols-20 {
            grid-template-columns: repeat(20, minmax(0, 1fr));
          }
        }
        @media (min-width: 1536px) {
          .xl\\:grid-cols-20 {
            grid-template-columns: repeat(24, minmax(0, 1fr));
          }
        }
      `}</style>
    </div>
  );
};

export default WuXingGame;