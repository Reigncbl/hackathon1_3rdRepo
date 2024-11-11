import React from 'react'

const About = () => {
  return (
    <div>

      {/*
      <h1 className="text-4xl font-semibold pb-4">About</h1>
      */}

      <br></br>
      <p className="indent-8 text-justify ml-4 mr-10">Our website gives you an insight about the patterns 
        and trends of MSMEs through data visualizations using the data provided by the Bank of the 
        Philippine Islands (BPI).  the contestants of BPI D.A.T.A. WAVE Hackathon gathered the data 
        from the .parquet files provided by BPI. </p>
      <br></br>
    
      <p className="indent-8 text-justify ml-4 mr-10"> Using the data visualizations created in Tableau, 
        the developers  found out a lot of information about the MSMEs. They have separated the Micro, Small
        and Medium business owner categories to different pages. By navigating these pages, the business owners
        will have insights on what are the benefits of taking loans, how much loans are the best for them and what
        kind of business transactions will assist them in achieving success.</p>
      <br></br>

      <p className="indent-8 text-justify ml-4 mr-10">With the different business categories in the sidebar, the
        business owners belonging to either micro/small/medium businesses will see that taking loans and getting assistance from
        the bank is beneficial for them. This will create a smooth and good relationship between the MSMEs and the Philippine banks.</p>
      <br></br>

      <p className="indent-8 text-justify ml-4 mr-10">If the business owners are unsure if they will take a loan from the bank, there
        is a "Loan Calculator" page for them to use which will compute their desired loan amount and will measure how much will it be
        within the given loan tenure (how long they plan on paying the loan) which has a scope of 1–5 years.</p>

      
      <br></br>
      <h2 className="text-2xl font-semibold">About Us</h2>
      <br></br>

      <p className="indent-8 text-justify ml-4 mr-10">The development team consists of 4 developers which 
        are  divided into 2 sections — frontend and backend.</p>
        <br></br>

      <p className="indent-8 text-justify ml-4 mr-10"><b>Kenzo C. Ragundiaz</b> is the team leader of the 
        Eizhel group in the BPI D.A.T.A. WAVE Hackathon. He is the project manager and  in charge of the 
        front end (website interface), data visualization specialist and assigning the tasks of the members.</p>
        <br></br>

      <p className="indent-8 text-justify ml-4 mr-10"><b>Reigniel Cabela</b> is part of the front end 
        team. He is the one that designed the sidebar, the light and dark mode themes, the user interface 
        and user experience (UI/UX) and the dashboard of the data visualization 
        page. He also gave feedbacks and assisted in the data visualizations.</p><br></br>

      <p className="indent-8 text-justify ml-4 mr-10"><b>John Carlo Lorieta</b> is also a front end designer, 
      the back end developer, the data scientist in charge of creating the data visualization charts using Tableau.
      He also created the "Loan Calculator."</p><br></br>


      <p className="indent-8 text-justify ml-4 mr-10"><b>Renze Torino</b> is a back end developer ensuring the quality 
      and the efficiency of the back end portion of the website. He also used Tableau to clean the data and create</p><br></br>

      <div className="flex text-center justify-center">
        
        <div>
          <img src="/img/Kenzo.jpg" class="image mr-10"/>
          <p className="font-bold mr-10">Kenzo Ragundiaz</p>
          <p className="mr-10">Project Mngr.</p>
        </div>

        <div>
          <img src="/img/Reigniel.jpg" class="image mr-10"/>
          <p className="font-bold mr-10">Reigniel Cabela</p>
          <p className="mr-10">Front End Developer</p>
        </div>
        
        <div>
          <img src="/img/JohnCarlo.jpg" class="image mr-10"/>
          <p className="font-bold mr-10">John Carlo Lorieta</p>
          <p className="mr-10">Back End Developer</p>
        </div>

        <div>
          <img src="/img/Renze.png" class="image mr-10"/>
          <p className="font-bold mr-10">Renze Torino</p>
          <p className="mr-10">Data Scientist</p>
        </div>
      
      </div>
      
    </div>
  )
}

export default About;