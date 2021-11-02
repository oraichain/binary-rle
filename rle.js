import { encode, decode } from 'https://cdn.skypack.dev/@thi.ng/rle-pack';
const decoder = new TextDecoder('utf-8');
const data = await Deno.readFile('src.json');
// prepare dummy data
const src = new Uint8Array(JSON.parse(decoder.decode(data)));

// pack data
const packed = encode(src, src.length);

console.log('pack', '[' + packed.join(', ') + ']');

// 30 => 2.93% of original

// pack with custom word size (3 bits, i.e. our value range is only 0-7)
// and use custom repeat group sizes suitable for our data
// const alt = encode(src, src.length, 3, [1, 2, 3, 9]);

// 20 => 1.95% of original, 66% of default config

// unpack
const unpacked = new Uint8Array(decode(packed));

console.log('unpack', '[' + unpacked.subarray(512, 541).join(', ') + ']');
