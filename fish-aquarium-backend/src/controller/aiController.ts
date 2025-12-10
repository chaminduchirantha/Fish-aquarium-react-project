import axios from "axios"
import { Request, Response } from "express"

export const generateContent = async (req: Request, res: Response) => {
  try {
    const { text } = req.body

    // Check if text is provided
    if (!text) {
      return res.status(400).json({ message: "Text is required" })
    }

    const apiKey = process.env.AI_API_KEY

    const aiResponse = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        contents: [
          {
            parts: [{ text }]
          }
        ],
      },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    )

    const generatedContent =
      aiResponse.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No response generated"

    res.status(200).json({
      message: "Content generated successfully",
      data: generatedContent
    })
  } catch (err: any) {
    console.error("AI generation error:", err.response?.data || err.message)
    res.status(500).json({ 
      message: "AI generation failed",
      error: err.response?.data?.error?.message || err.message 
    })
  }
}