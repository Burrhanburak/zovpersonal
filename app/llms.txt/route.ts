import { NextResponse } from 'next/server';

const BODY = `# ZovPersonal

> International future-oriented personnel placement (ZOV). Recruitment and employer partnership services based in Emden, Germany.

## Contact
- Email: info@zovpersonal.com
- Phone: +49 1512 7027836
- Address: Brückstraße 59, 26725 Emden, Germany
- Website: https://zovpersonal.com

## Languages
- English: https://zovpersonal.com/en
- German: https://zovpersonal.com/de
- Turkish: https://zovpersonal.com/tr
- Dutch: https://zovpersonal.com/nl
- Bulgarian: https://zovpersonal.com/bg
- Croatian: https://zovpersonal.com/hr
- Romanian: https://zovpersonal.com/ro
- Serbian: https://zovpersonal.com/sr

## Key pages
- About: https://zovpersonal.com/en/about
- Services: https://zovpersonal.com/en/services
- Employer: https://zovpersonal.com/en/employer
- Job seeker: https://zovpersonal.com/en/job-seeker
- Contact: https://zovpersonal.com/en/contact
- Blog: https://zovpersonal.com/en/blog

## Focus
ZovPersonal helps skilled professionals find work opportunities abroad and helps employers hire international talent, with process guidance for documentation and placement — without inventing unverifiable statistics.
`;

export function GET() {
  return new NextResponse(BODY, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
    },
  });
}
