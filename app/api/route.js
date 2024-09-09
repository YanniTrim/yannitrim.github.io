import { AzureOpenAI } from "openai";
import { NextResponse } from "next/server";

const endpoint = process.env.AZURE_OPENAI_ENDPOINT;
const apiKey = process.env.AZURE_OPENAI_API_KEY;
const deployment = process.env.AZURE_OPENAI_MODEL;
const apiVersion = process.env.AZURE_OPENAI_APIVERSION;

export async function POST(req) {
    try {
        const client = new AzureOpenAI({
            apiKey,
            endpoint,
            deployment,
            apiVersion
        });
            
        console.log(endpoint, apiKey, deployment, apiVersion);

        const requestBody = await req.json();
        const messages = requestBody.messages || [];

        messages.unshift({
            role: "system",
            content: `You are PortfolioGPT, answering only questions based on the resume provided.
            Resume: ${DATA_RESUME}
            Help users learn more about Yanni by asking questions about the resume.`
        });
        
        const result = await client.chat.completions.create({
            messages,
            model: "",
        });

        return NextResponse.json({
            message: result.choices[0].message.content,
        });
    } catch (error) {
        console.error("route.js error:", error);
        console.error("Error fetching chat completions:", error);
        return NextResponse.json({
            error: "Failed to fetch response from OpenAI.",
        });
    }
}

const DATA_RESUME =
    `Yanni Trimikliniotis
Location: New York, NY
Phone: (813) 928-3376
Email: yt2575@nyu.edu
GitHub: YanniTrim
Education
University: New York University
Current GPA: 3.96 
Honors: Presidential Honors Scholar
Major: Computer Science and History with Honors
Year: Junior
Graduation Date: May 2026
Relevant Coursework: Basic Algorithms, Applied Internet Technology, Computer Systems Organization, Data Structures, Discrete Math, Linear Algebra, Calculus 1, Calculus 2
Employment History
NYU University Learning Center - Supplemental Instructor [Sept 2024 – Present] 
 Conduct and lead 3 weekly Supplemental Instruction sessions a week for Calculus 1
 Prepare weekly Supplemental Instruction session material and handouts
 Facilitates interactive learning activities that integrate metacognition practices with Calculus course content
 Mantain 4-8 hours of drop-in tutoring per week for Calculus, Computer Science, Economics, and Writing
Juni Learning - Computer Science Instructor [May 2024 – Present] 
 Teach grade-school students various computer languages: Python, Java, JavaScript, HTML, and CSS 
 Review programming projects and test bugs to ensure that the student assignments are completed correctly 
and modularly 
 Explain data structures and various frameworks to students to apply in open-ended projects

NYU Tandon School Of Engineering - Teaching Assistant [July 2024 – September 2024] 
 Lead recitation sections to teach and review material with students based on prepared worksheets 
 Grade assignments and exams and provide feedback to students based on their performance with content
NYU University Learning Center - Learning Assistant [January 2024 – July 2024]
 Tutored multiple courses including Intro to Computer Science, Data Structures, Calculus, Math for Economics, Introduction to Microeconomics and Macroeconomics, and general writing tutoring 
 Led group drop-in hours for Data Structures and group study sessions in Calculus 
 Reviewed students’ assignments and exams to create study plans with students to further their success 
Leadership Experience
University Hall Parliament New York, NY
Director of Business Administration - September 2022 – May 2023 
 Maintained weekly attendance records and prepared all correspondence for UHall Parliament (UP) 
 Presented all proposal submissions and oversaw the reconciliation process for all approved funding proposals, while managing a budget of over $7,000 
 Developed weekly agendas and prepared slideshows for weekly meetings with the General Assembly 
Projects 
Playlist Enhancer – React and NodeJS - August 2024 – Present 
 Developing a web app where users can import a Spotify playlist and get a playlist cover image tailored to the playlist and generated by DALLE 
 Utilizes the Spotify API’s song data, genres, and moods to generate a prompt that the OpenAI API receives 
Matrix Calculator - Java - November 2023 – February 2024
 Program that takes inputs of up to two matrices and performs operations on them 
 Operations on matrices include transposing, addition, multiplication, and inverting, implementing solving systems of equations through Cramer’s Rule and Gaussian Elimination 
Skills 
Computing: Proficient in HTML, CSS, Java, JavaScript, C, x86 ASM, and Python; certified in Data Structures & 
Algorithms; developed in both Windows and Unix Operating Systems; proficient in LaTeX 
Language: Proficient in Spanish 
Achievements 
Dean’s Undergraduate Research Fund May 2024
Awarded a Training Grant of $750 to build a historiography on the formation of German identity 
Pathways for Discovery: Undergraduate Research and Writing Symposium April 2023
Presented my original paper on the formation of binary polarization and discussed it with other co-panelists`;