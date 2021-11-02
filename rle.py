from binary_rle import encode, decode

if __name__ == "__main__":
    import json

    f = open('src.json',)
    src = json.load(f)
    pack = encode.encode(src)
    unpack = decode.decode(pack)
    print('pack', pack.tolist())
    print('unpack', unpack[512:541].tolist())
