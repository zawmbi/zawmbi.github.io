import React from 'react';
import '../rosalind.css';

function Rosalind() {
    return (
    <div>

    <main className = "rosalind-text">
        <h1 className = "rosalind-header">Rosalind Problems and Solutions</h1>
        <p> 
        <hr className="faint-divider" />
        <br/> <br/>
            <strong>What is rosalind?</strong><br /> 
            <span class="custom-line"></span> <br/>
            <a href="https://rosalind.info/problems/tree-view/" target="_blank" rel="noopener noreferrer"> Rosalind
          </a>{" "} 
          is a website that contains a variety of programming problems in bioinformatics. These problems range from
          simple topics like string & graph algorithms to more complex topics such as phylogeny. This is pretty much
          the Leetcode of bioinformatics.{" "} <br/>
          <a href="https://rosalind.info/users/oceanlion/" target="_blank" rel="noopener noreferrer">
            Here is my profile!
          </a>
        </p>


        <div class="progress-container">
            <label htmlFor="rosalind-progress">  <br/> <br/> <br/> 
            <strong>12 out of 284 problems solved</strong>  <br/> <br/>
            <progress id="rosalind-progress" value="12" max="284"></progress> <span>
  <br /> <strong style={{ color: 'darkgreen' }}>4.23% complete</strong> </span>

       
 
            </label>
        <br/><br/><br/>
        </div> 
    </main>
    </div>
    )
}

export default Rosalind;









