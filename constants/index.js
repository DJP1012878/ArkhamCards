import React from 'react';
import { mapValues } from 'lodash';

import ArkhamIcon from '../assets/ArkhamIcon';

export const CORE_FACTION_CODES = [
  'mystic',
  'seeker',
  'guardian',
  'rogue',
  'survivor',
];

export const FACTION_CODES = [
  ...CORE_FACTION_CODES,
  'neutral',
];

export const FACTION_CODE_TO_STRING = {
  mystic: 'Mystic',
  seeker: 'Seeker',
  guardian: 'Guardian',
  rogue: 'Rogue',
  survivor: 'Survivor',
  neutral: 'Neutral',
};

export const SKILLS = [
  'willpower',
  'intellect',
  'combat',
  'agility',
  'wild',
];

export const SKILL_COLORS = {
  willpower: '#003961',
  intellect: '#4e1a45',
  combat: '#661e09',
  agility: '#00543a',
  wild: '#635120',
};

export const FACTION_COLORS = {
  mystic: '#4331b9',
  seeker: '#ec8426',
  guardian: '#2b80c5',
  rogue: '#107116',
  survivor: '#cc3038',
  neutral: '#000000',
};

export const FACTION_BACKGROUND_COLORS = Object.assign(
  {},
  FACTION_COLORS,
  { neutral: '#444444' },
);

export const DIFFICULTY = {
  easy: 0,
  standard: 1,
  hard: 2,
  expert: 3,
};

export const CHAOS_TOKEN_ORDER = {
  '+1': 0,
  '0': 1,
  '-1': 2,
  '-2': 3,
  '-3': 4,
  '-4': 5,
  '-5': 6,
  '-6': 7,
  '-7': 8,
  '-8': 9,
  'skull': 10,
  'cultist': 11,
  'tablet': 12,
  'elder_thing': 13,
  'auto_fail': 14,
  'elder_sign': 15,
};

export const SPECIAL_TOKENS = [
  'skull',
  'cultist',
  'tablet',
  'elder_thing',
  'auto_fail',
  'elder_sign',
];

export const CAMPAIGN_CHAOS_BAGS = {
  'core': [
    { '+1': 2, '0': 3, '-1': 3, '-2': 2, skull: 2, cultist: 1, tablet: 1, auto_fail: 1, elder_sign: 1 },
    { '+1': 1, '0': 2, '-1': 3, '-2': 2, '-3': 1, '-4': 1, skull: 2, cultist: 1, tablet: 1, auto_fail: 1, elder_sign: 1 },
    { '0': 3, '-1': 2, '-2': 2, '-3': 2, '-4': 1, '-5': 1, skull: 2, cultist: 1, tablet: 1, auto_fail: 1, elder_sign: 1 },
    { '0': 1, '-1': 2, '-2': 2, '-3': 2, '-4': 2, '-5': 1, '-6': 1, '-8': 1, skull: 2, cultist: 1, tablet: 1, auto_fail: 1, elder_sign: 1 },
  ],
  'tdl': [
    { '+1': 2, '0': 3, '-1': 3, '-2': 2, skull: 2, cultist: 1, auto_fail: 1, elder_sign: 1 },
    { '+1': 1, '0': 2, '-1': 3, '-2': 2, '-3': 1, '-4': 1, skull: 2, cultist: 1, auto_fail: 1, elder_sign: 1 },
    { '0': 3, '-1': 2, '-2': 2, '-3': 2, '-4': 1, '-5': 1, skull: 2, cultist: 1, auto_fail: 1, elder_sign: 1 },
    { '0': 1, '-1': 2, '-2': 2, '-3': 2, '-4': 2, '-5': 1, '-6': 1, '-8': 1, skull: 2, cultist: 1, auto_fail: 1, elder_sign: 1 },
  ],
  'ptc': [
    { '+1': 2, '0': 3, '-1': 3, '-2': 2, skull: 3, auto_fail: 1, elder_sign: 1 },
    { '+1': 1, '0': 2, '-1': 3, '-2': 2, '-3': 1, '-4': 1, skull: 3, auto_fail: 1, elder_sign: 1 },
    { '0': 3, '-1': 2, '-2': 2, '-3': 3, '-4': 1, '-5': 1, skull: 3, auto_fail: 1, elder_sign: 1 },
    { '0': 1, '-1': 2, '-2': 2, '-3': 3, '-4': 2, '-5': 1, '-6': 1, '-8': 1, skull: 3, auto_fail: 1, elder_sign: 1 },
  ],
};

export const CHAOS_BAG_TOKEN_COUNTS = {
  '+1': 3,
  '0': 4,
  '-1': 5,
  '-2': 4,
  '-3': 3,
  '-4': 2,
  '-5': 2,
  '-6': 1,
  '-7': 1,
  '-8': 1,
  skull: 4,
  cultist: 4,
  tablet: 4,
  elder_thing: 4,
  auto_fail: 1,
  elder_sign: 1,
};

export function createFactionIcons(size, defaultColor) {
  return mapValues(FACTION_COLORS, (color, faction) => {
    return (
      <ArkhamIcon
        name={faction === 'neutral' ? 'elder_sign' : faction}
        size={size}
        color={defaultColor || color}
      />
    );
  });
}
