import React from 'react'

function Rules() {
  return (
    
    <div className="flex flex-col items-center p-6 bg-background min-h-screen">
      <h1 className="font-secondary text-text-primary text-4xl font-bold mb-6">Rules for MSU Chan</h1>
      
      <ul className="font-secondary text-text-primary text-lg space-y-4">
        <li>1. Have Fun</li>
        <li>2. Don't take anything seriously</li>
        <li>3. Avoid posting content that could be harmful, offensive, or controversial, as it may cause trouble for you or others.</li>
        <li>
          4. For updates related to the website, follow:{" "}
          <a
            href="https://www.instagram.com/anshuman.cpp?igsh=emlhanMwZGc3dWE5"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            Instagram Profile
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Rules