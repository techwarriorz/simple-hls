module.exports = [
    {
        width: 640,
        height: 360,
        profile: 'main',
        hlsTime: '4',
        bv: '800k',
        maxrate: '856k',
        bufsize: '1200k',
        ba: '96k',
        ts_title: '360p',
        master_title: '360p'
    },
    {
        width: 842,
        height: 480,
        profile: 'main',
        hlsTime: '4',
        bv: '1400k',
        maxrate: '1498',
        bufsize: '2100k',
        ba: '128k',
        ts_title: '480p',
        master_title: '480p'
    }
]

/*

  -vf scale=w=1280:h=720:force_original_aspect_ratio=decrease -c:a aac -ar 48000 -c:v h264 -profile:v main -crf 20 -sc_threshold 0 -g 48 -keyint_min 48 -hls_time 4 -hls_playlist_type vod -b:v 2800k -maxrate 2996k -bufsize 4200k -b:a 128k -hls_segment_filename beach/720p_%03d.ts beach/720p.m3u8 \
  -vf scale=w=1920:h=1080:force_original_aspect_ratio=decrease -c:a aac -ar 48000 -c:v h264 -profile:v main -crf 20 -sc_threshold 0 -g 48 -keyint_min 48 -hls_time 4 -hls_playlist_type vod -b:v 5000k -maxrate 5350k -bufsize 7500k -b:a 192k -hls_segment_filename beach/1080p_%03d.ts beach/1080p.m3u8
*/