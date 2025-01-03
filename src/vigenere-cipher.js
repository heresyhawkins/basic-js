const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
    this.ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  encrypt(str, key) {
    if (!str || !key) {
      throw new Error('Incorrect arguments!');
    }

    let encryptStr = '';
    const upperStr = str.toUpperCase();
    const upperKey = key.toUpperCase();

    for (let i = 0, j = 0; i < upperStr.length; i++) {
      const indexCharStr = this.ALPHABET.indexOf(upperStr[i]);
      const indexCharKey = this.ALPHABET.indexOf(upperKey[j % upperKey.length]);

      if (indexCharStr != -1) {
        let encryptIndexCharStr =
          (indexCharStr + indexCharKey) % this.ALPHABET.length;
        encryptStr += this.ALPHABET.charAt(encryptIndexCharStr);
        j++;
      } else {
        encryptStr += upperStr[i];
      }
    }

    return this.direct ? encryptStr : encryptStr.split('').reverse().join('');
  }

  decrypt(str, key) {
    if (!str || !key) {
      throw new Error('Incorrect arguments!');
    }

    let decryptStr = '';
    const upperStr = str.toUpperCase();
    const upperKey = key.toUpperCase();

    for (let i = 0, j = 0; i < upperStr.length; i++) {
      const indexCharStr = this.ALPHABET.indexOf(upperStr[i]);
      const indexCharKey = this.ALPHABET.indexOf(upperKey[j % upperKey.length]);

      if (indexCharStr != -1) {
        let decryptIndexCharStr =
          (indexCharStr - indexCharKey + this.ALPHABET.length) %
          this.ALPHABET.length;
        decryptStr += this.ALPHABET.charAt(decryptIndexCharStr);
        j++;
      } else {
        decryptStr += upperStr[i];
      }
    }

    return this.direct ? decryptStr : decryptStr.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
