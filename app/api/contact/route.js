export async function POST(req) {
  try {
    const body = await req.json();

    console.log("📩 Contact Form Data:", body);
    return new Response(
      JSON.stringify({
        message: "Message received successfully",
      }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: "Server error",
      }),
      { status: 500 }
    );
  }
}