import { ImageResponse } from 'next/og';
import { readFileSync } from 'fs';
import { join } from 'path';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const fontPlayfair = readFileSync(join(process.cwd(), 'public/fonts/PlayfairDisplay-Bold.ttf'));
const fontIBM = readFileSync(join(process.cwd(), 'public/fonts/IBMPlexSans-Regular.ttf'));

export default async function OGImage() {
  return new ImageResponse(
    (
      <div style={{
        width: 1200, height: 630, display: 'flex', background: '#FDFCFA', position: 'relative',
      }}>
        {/* Logo + wordmark lockup — y=80 */}
        <div style={{
          position: 'absolute', left: 80, top: 110,
          display: 'flex', alignItems: 'center', gap: 16,
        }}>
          <img src="https://noorpath.app/logo.svg" alt="" width={88} height={88} />
          <span style={{
            fontFamily: '"IBM Plex Sans"', fontSize: 36, fontWeight: 900,
            letterSpacing: '0.15em', color: '#291602', textTransform: 'uppercase',
          }}>NOORPATH</span>
        </div>

        {/* Headline — y=200 */}
        <span style={{
          position: 'absolute', left: 80, top: 230,
          fontFamily: '"Playfair Display"', fontWeight: 900, fontSize: 64,
          color: '#291602', lineHeight: 1.15,
        }}>From intention</span>
        <span style={{
          position: 'absolute', left: 80, top: 304,
          fontFamily: '"Playfair Display"', fontWeight: 900, fontSize: 64,
          color: '#291602', lineHeight: 1.15,
        }}>to prayer.</span>

        {/* "Every day." — immediately after headline */}
        <div style={{
          position: 'absolute', left: 80, top: 378,
          fontFamily: '"Playfair Display"', fontWeight: 400, fontStyle: 'italic',
          fontSize: 64, color: '#7BCEC5', lineHeight: 1.15,
        }}>
          Every day.
        </div>

        {/* Tagline — y=540 */}
        <div style={{
          position: 'absolute', left: 80, top: 450,
          fontFamily: '"IBM Plex Sans"', fontWeight: 400, fontSize: 17,
          color: '#7A6E62',
        }}>
          Your daily prayer companion · noorpath.app
        </div>

        {/* Vertical divider */}
        <div style={{
          position: 'absolute', left: 680, top: 80, width: 1, height: 470,
          background: '#E8E2D9', display: 'flex',
        }} />

        {/* === RIGHT COLUMN === */}

        {/* Selling point 1 — y=110 */}
        <div style={{ position: 'absolute', left: 720, top: 110, display: 'flex', alignItems: 'center', gap: 20 }}>
          <div style={{ width: 14, height: 14, background: '#FF8811', display: 'flex' }} />
          <span style={{ fontFamily: '"IBM Plex Sans"', fontWeight: 800, fontSize: 22, color: '#291602' }}>
            Zero ads. Zero tracking.
          </span>
        </div>
        <div style={{
          position: 'absolute', left: 754, top: 145,
          fontFamily: '"IBM Plex Sans"', fontWeight: 400, fontSize: 16, color: '#7A6E62',
        }}>
          No data sold. No distractions. Ever.
        </div>

        {/* Divider — y=200 */}
        <div style={{ position: 'absolute', left: 720, top: 200, right: 80, height: 1, background: '#E8E2D9', display: 'flex' }} />

        {/* Selling point 2 — y=230 */}
        <div style={{ position: 'absolute', left: 720, top: 230, display: 'flex', alignItems: 'center', gap: 20 }}>
          <div style={{ width: 14, height: 14, background: '#AFE4DE', display: 'flex' }} />
          <span style={{ fontFamily: '"IBM Plex Sans"', fontWeight: 800, fontSize: 22, color: '#291602' }}>
            Your practice, completely private.
          </span>
        </div>
        <div style={{
          position: 'absolute', left: 754, top: 265,
          fontFamily: '"IBM Plex Sans"', fontWeight: 400, fontSize: 16, color: '#7A6E62',
        }}>
          Nothing leaves your device.
        </div>

        {/* Divider — y=320 */}
        <div style={{ position: 'absolute', left: 720, top: 320, right: 80, height: 1, background: '#E8E2D9', display: 'flex' }} />

        {/* Selling point 3 — y=350 */}
        <div style={{ position: 'absolute', left: 720, top: 350, display: 'flex', alignItems: 'center', gap: 20 }}>
          <div style={{ width: 14, height: 14, background: '#AFE4DE', display: 'flex' }} />
          <span style={{ fontFamily: '"IBM Plex Sans"', fontWeight: 800, fontSize: 22, color: '#291602' }}>
            Designed for Muslim women.
          </span>
        </div>
        <div style={{
          position: 'absolute', left: 754, top: 385,
          fontFamily: '"IBM Plex Sans"', fontWeight: 400, fontSize: 16, color: '#7A6E62',
        }}>
          Built around how you actually practice.
        </div>

        {/* CTA pill — y=470, centre-aligned in right column */}
        <div style={{
          position: 'absolute', left: 720, right: 80, top: 430,
          display: 'flex', justifyContent: 'center',
        }}>
          <div style={{
            display: 'flex',
            background: '#FF8811', borderRadius: 32, padding: '18px 36px',
          }}>
            <span style={{
              fontFamily: '"IBM Plex Sans"', fontWeight: 900, fontSize: 15,
              color: '#FDFCFA', letterSpacing: '0.1em', textTransform: 'uppercase',
            }}>
              FREE TO DOWNLOAD
            </span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Playfair Display', data: fontPlayfair, weight: 700, style: 'normal' },
        { name: 'IBM Plex Sans', data: fontIBM, weight: 400, style: 'normal' },
      ],
    },
  );
}
