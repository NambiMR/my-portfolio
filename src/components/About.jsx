import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-auto md:h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-300'>About me!</p>
            </div>
            <p className='text-xl md:mt-20'>Hello! I'm Nambi Muthu Raja, a passionate front-end developer from Tamil Nadu, India. With a strong foundation in web technologies like HTML, CSS, JavaScript, and frameworks such as React, I enjoy creating visually appealing and user-friendly interfaces. I hold a Bachelor of Science in Information Technology, which has equipped me with a comprehensive understanding of the software development lifecycle. Over the past few years, I have honed my skills through various projects, ranging from building interactive web applications to developing responsive layouts that enhance user experience.
            </p>
            <br />
            <p className='text-xl'>My journey in web development has been fueled by a love for problem-solving and a commitment to continuous learning. I thrive on challenges that push me to think creatively and adapt quickly. My experience includes working on projects like a weather monitoring application and a 'Paradise Nursery' shopping app, where I applied my skills in JavaScript and React to build dynamic and responsive web solutions. I am always eager to explore new technologies and frameworks, aiming to create impactful digital experiences that stand out. Outside of coding, I enjoy contributing to open-source projects, learning new programming languages, and staying updated with the latest trends in web development.</p>
        </div>
    </div>
  )
}

export default About