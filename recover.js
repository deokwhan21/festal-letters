import fs from 'fs';
const file = 'src/components/FestalLettersComplete.jsx';
let content = fs.readFileSync(file, 'utf8');

const replacements = [
    ["brakkeGwynn: 'pp. 107-112', changes: 'moderate',", "brakkeGwynn: 'pp. 107-118', changes: 'moderate',"],
    ["brakkeGwynn: 'pp. 113-118', changes: 'minimal',", "brakkeGwynn: 'pp. 119-134', changes: 'minimal',"],
    ["brakkeGwynn: 'p. 119 (통지만)', changes: 'clarification',", "brakkeGwynn: 'p. 135 (통지만)', changes: 'clarification',"],
    ["brakkeGwynn: 'pp. 120-130', changes: 'moderate',", "brakkeGwynn: 'pp. 137-143', changes: 'moderate',"],
    ["brakkeGwynn: 'pp. 131-137', changes: 'major',", "brakkeGwynn: 'pp. 144-151', changes: 'major',"],
    ["brakkeGwynn: 'pp. 138-141', changes: 'moderate',", "brakkeGwynn: 'none', changes: 'moderate',"],
    ["brakkeGwynn: 'pp. 142-144', changes: 'minimal',", "brakkeGwynn: 'none', changes: 'minimal',"],
    ["brakkeGwynn: 'pp. 145-150', changes: 'minimal',", "brakkeGwynn: 'p. 152', changes: 'minimal',"],
    ["brakkeGwynn: 'pp. 151-157', changes: 'moderate',", "brakkeGwynn: 'pp. 153-154', changes: 'moderate',"],
    ["brakkeGwynn: 'pp. 158-163', changes: 'moderate',", "brakkeGwynn: 'pp. 159-169', changes: 'moderate',"],
    ["brakkeGwynn: 'pp. 164-170', changes: 'moderate',", "brakkeGwynn: 'pp. 170-172', changes: 'moderate',"],
    ["brakkeGwynn: 'pp. 171-176', changes: 'moderate',", "brakkeGwynn: 'none', changes: 'moderate',"],
    ["brakkeGwynn: 'pp. 177-182', changes: 'minimal',", "brakkeGwynn: 'p. 173', changes: 'minimal',"],
    ["brakkeGwynn: 'pp. 183-187', changes: 'minimal',", "brakkeGwynn: 'none', changes: 'minimal',"],
    ["brakkeGwynn: 'pp. 188-193', changes: 'major',", "brakkeGwynn: 'pp. 174-181', changes: 'major',"],
    ["brakkeGwynn: 'pp. 194-199', changes: 'moderate',", "brakkeGwynn: 'pp. 182-184', changes: 'moderate',"],
    ["brakkeGwynn: 'pp. 200-204', changes: 'minimal',", "brakkeGwynn: 'pp. 185-186', changes: 'minimal',"],
    ["brakkeGwynn: 'pp. 205-211', changes: 'moderate',", "brakkeGwynn: 'pp. 187-190', changes: 'moderate',"],
    ["brakkeGwynn: 'pp. 212-218', changes: 'moderate',", "brakkeGwynn: 'pp. 191-192', changes: 'moderate',"],
    ["brakkeGwynn: 'pp. 219-223', changes: 'moderate',", "brakkeGwynn: 'pp. 198-201', changes: 'moderate',"],
    ["brakkeGwynn: 'p. 224 (색인만)', changes: 'clarification',", "brakkeGwynn: 'none', changes: 'clarification',"],
    ["brakkeGwynn: 'p. 234 (색인만)', changes: 'clarification',", "brakkeGwynn: 'none', changes: 'clarification',"],
    ["brakkeGwynn: 'p. 234-235 (색인만)', changes: 'clarification',", "brakkeGwynn: 'none', changes: 'clarification',"],
    ["brakkeGwynn: 'p. 235 (색인만)', changes: 'clarification',", "brakkeGwynn: 'none', changes: 'clarification',"],
    ["brakkeGwynn: 'pp. 236-241', changes: 'moderate',", "brakkeGwynn: 'none', changes: 'moderate',"],
    ["brakkeGwynn: 'pp. 242-247', changes: 'moderate',", "brakkeGwynn: 'none', changes: 'moderate',"],
    ["brakkeGwynn: 'pp. 248-252', changes: 'minimal',", "brakkeGwynn: 'p. 202', changes: 'minimal',"],
    ["brakkeGwynn: 'pp. 253-257', changes: 'moderate',", "brakkeGwynn: 'pp. 203-204', changes: 'moderate',"],
    ["brakkeGwynn: 'pp. 258-263', changes: 'moderate',", "brakkeGwynn: 'pp. 205-207', changes: 'moderate',"],
    ["brakkeGwynn: 'pp. 264-285 (별도 섹션)', changes: 'major',", "brakkeGwynn: 'pp. 231-245', changes: 'major',"],
    ["brakkeGwynn: 'pp. 286-289', changes: 'moderate',", "brakkeGwynn: 'pp. 208-210', changes: 'moderate',"],
    ["brakkeGwynn: 'pp. 290-293', changes: 'moderate',", "brakkeGwynn: 'pp. 211-217', changes: 'moderate',"],
    ["brakkeGwynn: 'pp. 295-298', changes: 'moderate',", "brakkeGwynn: 'p. 229', changes: 'moderate',"],
    ["brakkeGwynn: 'pp. 299-300 (코스마스 인용만)', changes: 'moderate',", "brakkeGwynn: 'p. 230', changes: 'moderate',"]
];

for (const [target, replacement] of replacements) {
    content = content.replace(target, replacement);
}

// Custom replace for p. 294 (색인만) - it appears twice.
// First occurrence (Letter 42):
content = content.replace("brakkeGwynn: 'p. 294 (색인만)', changes: 'minimal',", "brakkeGwynn: 'pp. 218-221', changes: 'minimal',");
// Second occurrence (Letter 43):
content = content.replace("brakkeGwynn: 'p. 294 (색인만)', changes: 'minimal',", "brakkeGwynn: 'pp. 222-228', changes: 'minimal',");

fs.writeFileSync(file, content);
console.log('Restoration complete!');
