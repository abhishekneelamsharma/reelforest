// export async function GET(request) {
//     return new Response(JSON.stringify({ message: "GET request successful!" }), {
//         status: 200,
//         headers: {
//             "Content-Type": "application/json",
//         },
//     });
// }

export async function GET(request) {
    return new Response(JSON.stringify({
      NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
      // NEXTAUTH_SECRET_NEW: process.env.NEXTAUTH_SECRET,
    }), { status: 200 });
  }