export async function callGenerateTextAPI(componentCode) {
  const response = await fetch("http://localhost:8007/generate-text", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ componentCode }),
  });

  if (response.ok) {
    const result = await response.json();
    console.log("Generated Text:", result?.results[0]?.generated_text);
    return result?.results[0]?.generated_text;
  } else {
    const error = await response.json();
    console.error("Error:", error);
  }
}
