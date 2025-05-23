import { describe, it, expect } from 'vitest';
import { getIcon } from '../src/utils/getIcon.js';

describe('getIcon', () => {
  it('returns svg for known icons', () => {
    const names = ['tools', 'tool', 'check-circle', 'alert-circle'];
    for (const name of names) {
      const svg = getIcon(name);
      expect(typeof svg).toBe('string');
      expect(svg.length).toBeGreaterThan(0);
    }
  });

  it('returns empty string for unknown icon', () => {
    expect(getIcon('unknown')).toBe('');
  });
});
