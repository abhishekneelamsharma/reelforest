export async function GET(request) {
    return new Response(JSON.stringify({ message: "GET request successful!" }), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        },
    });
}
