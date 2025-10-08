import { Language } from '@/types/language.type';

export const DEFAULT_CODE_TEMPLATES: Record<Language, string> = {
  'Python': `import sys

input = sys.stdin.read().strip()
print('hello :', input)
`,

  'Java': `import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        String name = reader.readLine();
        System.out.println("hello + " + name);
        reader.close();
    }
}

`,

  'C++': `#include <iostream>
#include <string>
using namespace std;

int main() {
    string a;
    cin >> a;
    cout << a << endl;
    return 0;
}
`,

  'Node.js': `const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim();

console.log('hello : ' + input);
`,
};

export const getDefaultTemplate = (language: Language): string => {
  return DEFAULT_CODE_TEMPLATES[language] || DEFAULT_CODE_TEMPLATES['Python'];
};
