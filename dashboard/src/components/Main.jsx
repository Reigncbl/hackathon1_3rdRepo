import React from 'react';
import Cards from '../Cards/DataCard';

const Main = () => {
  return (
    <div className='flex flex-row gap-6 h-full w-full text-gray-900 rounded-xl'>
      <div className='w-2/3'>
        <h1 className='text-4xl font-semibold pb-4'>Dashboard</h1>
        <p className='py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta necessitatib</p>
        <div className='mb-8'>
          <Cards />
        </div>
        {/* Sample table
        <div>
          <h2 className='text-2xl font-semibold '>Sample table</h2>
          <p className='pb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta necessitatib</p>
          <div className='rounded-xl bg-white bg-opacity-50 shadow-md p-2'>
            <table class="table-auto w-full">
              <thead>
                <tr>
                  <th>Song</th>
                  <th>Artist</th>
                  <th>Year</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                  <td>Malcolm Lockyer</td>
                  <td>1961</td>
                </tr>
                <tr>
                  <td>Witchy Woman</td>
                  <td>The Eagles</td>
                  <td>1972</td>
                </tr>
                <tr>
                  <td>Shining Star</td>
                  <td>Earth, Wind, and Fire</td>
                  <td>1975</td>
                </tr>
              </tbody>
            </table>
          </div> 
        </div> */}
        {/* sample paragraph
        <div>
          <h1 className='text-2xl font-semibold pt-4 pb-2'>Sample Paragraph</h1>
          <p className='pb-5 indent-8 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, dicta nesciunt! Dicta, ad fuga recusandae illum qui rem vel incidunt cupiditate quae deserunt obcaecati itaque libero iusto minima omnis laborum. cupiditate quae deserunt obcaecati itaque libero iusto minima omnis laborum.</p>
          <p className='pb-5 indent-8 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, dicta nesciunt! Dicta, ad fuga recusandae illum qui rem vel incidunt </p>
        </div> */}
      </div>
      <div className='w-1/3 h-full pr-2'>
        {/* sample announcement
        <div className='flex flex-col pb-4'>
          <h2 className='text-2xl font-semibold '>sample announcement</h2>
          <p className='py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta necessitatib</p>
          <div className='w-full h-96 rounded-xl bg-white bg-opacity-50 shadow-md p-2'>
            
          </div>
        </div> */}
        {/* sample graph
        <div className='flex flex-col'>
          <h2 className='text-2xl font-semibold '>sample graph</h2>
          <p className='py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta necessitatib</p>
          <div className='w-full h-56 rounded-xl bg-white bg-opacity-50 shadow-md p-2'>
            
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Main;