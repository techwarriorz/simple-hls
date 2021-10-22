import {Transcoder} from '../index';
import fs from 'fs';
import path from 'path';

jest.setTimeout(500000);

test('Transcode', async () => {
    const t = new Transcoder(`${__dirname}/test.mp4`, `${__dirname}/output`, {showLogs:false});
    const hlsPath = await t.transcode();
    await clearOutputFolder(`${__dirname}/output`)
    expect(hlsPath).toContain('index.m3u8');
})


const clearOutputFolder = (directory: string) =>  {
    return new Promise((resolve, reject) =>  {
        fs.readdir(directory, (err, files) => {
            if (err) throw err;
          
            for (const file of files) {
              fs.unlinkSync(path.join(directory, file));
            }
        });
        return resolve(true);
    })
}