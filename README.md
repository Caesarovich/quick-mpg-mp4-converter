# Foreword

This is a simple script that converts all **MPG** files in the current directory to **MP4** format. The script uses ffmpeg to convert the files and Bun as a runtime.

The script can be easily modified to convert other file formats as well. I originally wrote this script to convert MPG files for my friend Axel. I am sharing it here in case someone else finds it useful. It is in no way a polished product, but it gets the job done.

# Requirements

- [ffmpeg](https://ffmpeg.org/) must be installed and available in the system path.
- [Bun](https://bun.sh/) is needed to compile the script.

# Compiling

1. Clone the repository.
2. Run the following command in the root directory of the repository to compile the script:

```bash
bun build --compile --outfile=converter index.ts
```

# Usage

1. Place the script/binary in the same directory as the files you want to convert.
2. Run the script/binary.
3. Find the converted files in the `output` directory.

# Aknowledgements

- [Axel](https://www.artstation.com/poungi_art), 3D artist and friend, for whom this script was originally written.
