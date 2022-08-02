//leetcode.com/problems/two-sum/submissions/

// ans 1

function twoSum(nums: number[], target: number): number[] {
  if (nums.length == 2) {
    return [0, 1];
  }

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  // fix for tslint
  return [];
}

// ans 2
function twoSum_2(nums: number[], target: number): number[] {
  if (nums.length == 2) {
    return [0, 1];
  }

  const m = {};

  for (let i = 0; i < nums.length; i++) {
    if (!m[nums[i]]) {
      m[nums[i]] = [];
    }
    m[nums[i]].push(i);
  }

  for (const key in m) {
    const curr = parseInt(key, 10);
    const pair = target - curr;

    if (m[pair] === undefined) {
      continue;
    }

    if (curr == pair) {
      return m[key];
    }

    return [m[key][0], m[pair][0]];
  }

  // fix for tslint
  return [];
}
