// File updated to handle missing image and use relative paths
import React from 'react';

// Try to load the chairman image
let chairmanImage;
try {
  chairmanImage = require("../assets/charmn.jpg");
} catch (error) {
  // Image will be undefined if not found
}

function ChairmanPage() {
  return (
    <div style={{ display: 'flex', padding: '20px' }}>
      <div style={{ flex: 1 }}>
        <h2>From the Chairman's Desk</h2>
        
        {chairmanImage ? (
          <img src={chairmanImage} alt="Chairman" style={{ width: '100%', maxWidth: '500px', margin: '0 auto', display: 'block' }} />
        ) : (
          <div style={{ 
            width: '100%', 
            maxWidth: '500px', 
            height: '300px', 
            background: '#f0f0f0', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            margin: '0 auto'
          }}>
            <span>Chairman Image</span>
          </div>
        )}

        <p style={{ fontWeight: 'bold' }}><center>Chhagan Bhujbal</center></p>
        <p><center>Chairman, Mumbai Educational Trust</center></p>

        <div style={{ textAlign: 'justify', lineHeight: '1.6' }}>
          <p>
            As our socialist-democratic-republic waltzes past the diamond jubilee mark, the global economies with their think-tanks, academicians, statesmen and core market players are constantly observing this journey. In spite of being the second most populous nation and the largest democracy, driven by 300 million GenNext youth, we may appear as a minor blip on the global economic radar. But, given the 8 - 9 per cent GDP growth rate, a mature democracy, a multitasking, flexi-mindset driven global workforce with the synergistic combination of sharp-nosed dynamic innovator/investor/entrepreneurial business barons, we have the potential to reach 'commanding heights', in the global scenario. We weathered the 2008 meltdown, through some astute fiscal policies and strong arm central banking interventions. But just as we seem to be gaining some momentum, rising prices, falling output and a yawning current account deficit seem to be dragging us into the long shadow cast by the Euro zone crisis. No wonder, there is a call for all hands to report to the battle stations!!
          </p>
          <p>
            A closer scrutiny of our journey of six decades reveals that despite adversities and limitations, we have been able to develop pockets of affluence, not necessarily out of choice, but through the proactive dynamism of beneficiaries. And, undoubtedly, there are some common factors responsible for this phenomenon – the standard ingredients to success like: good access, abundance of relevant infrastructure and an investor-friendly socio-political set-up. But the most critical single component has been that all such pockets have high levels of literacy, especially functional literacy. This single dominating factor stands out, when you compare Kerala to Goa or the metro cities of Delhi, Mumbai, Bangalore, Hyderabad and Chennai. Access to education from the primary to post-graduation levels, in all these areas, appears to be the critical differentiator, between the developed and developing/under-developed areas of the country.
          </p>
          <p>
            Visionary leaders and statesmen have always emphasised on the value of education and meritocracy, in our country. Pandit Jawaharlal Nehru laid the foundation by establishing IITs/Institutes of Science/BARC/AIMS and many such schools of excellence, so as to help build a firm foundation for a knowledge society. In subsequent plans, increasing emphasis was given to primary and secondary education, to keep up with the ever-expanding population. Now, there are 13.64 million students, in about 200 universities and 30,000 colleges, across the country. The expenditure on education is expected to reach a 4 per cent plus in the 12th plan, achieving a growth rate exceeding 25 per cent per annum in higher education. While the Central government outlays have increased, private sector investments as well as the entry of the corporate sector is expected to achieve the target.
          </p>
          <p>
            In keeping with the motto of the high-powered commission, appointed for fulfilling statutory obligations, which says, ‘Expansion, Inclusion and Excellence’, there is an attempt to offer opportunities to all sections of society, including the underprivileged. Thus, more and more institutions are being promoted in the rural and remote areas, while allowing established institutions to broaden their base. The National Knowledge Commission in its report has suggested setting up almost 3500 universities, both at the Central and State levels, which is a daunting task by all standards.
          </p>
          <p>
            We at MET are conscious of the task at hand. Having established a premier educational complex at Mumbai in the last two decades, we have moved consciously to Nashik, thus attempting to deliver excellence to the rural and remote areas. Our institutions offer programmes in the spheres of Engineering, Information Technology, Pharmacy, Management, Mass Media, as well as quality primary and secondary education, to shape professionals. We believe that varied classroom learning has to be proactively supplemented with a continuous dialogue and partnership with the industry and the marketplace. And this, we are trying to achieve, through e-empowered learning processes, extensive internship with the industry, case studies, scenario building, terrain appreciation, strategic response building exercises, and experiential learning, thus consciously attempting to bridge the gap between knowledge and skills.
          </p>
          <p>
            At MET, students are being trained to take on the challenge, at home and abroad, without being unduly burdened by the negativities encountered in performing the task, in the line of duty. They have to be wary of the pitfalls of public-private partnerships, the typical bottlenecks heightened by the oft agonizing story of Indian logistics, the frequently powerless power system, the now surfacing menace of eco-socio-terrorism and, last but not the least, RTI empowered consumerism. They often surface as stark realities haunting the dynamic prime movers of our double-digit growth story.
          </p>
          <p>
            The edge that all this gives the students is furthermore tempered by work-experience with an NGO, sharing the sensitivities of underprivileged sections of society, thus making them complete human beings - sharp and sensitive. This has in fact inspired our students to take up voluntary work opportunities with UN ECOSOC in New York, resulting in earning global acclaim. The involvement with the MET SEVA project, for uplifting the tribals at Waliv and Nandgaon, as they struggle to eke out a meal-a-day, undoubtedly brings them closer to the ‘litmus test’ of Mahatma Gandhi, who urged us to help ‘the most downtrodden/poorest.’ We have no doubt that once exposed and sensitized to the sorrow of the poorest-of-the-poor, our committed professionals would work life-long, to reach out to them and help build an inclusive society.
          </p>
          <p>
            We continue our process of sharing knowledge, for the enlightenment of GenNext, as we believe in the underlying journey, which reiterates what Allan Bloom says - 'Education is the movement from darkness to light.'
          </p>
          <p style={{ fontWeight: 'bold', textAlign: 'right' }}>Chhagan Bhujbal</p>
<p style={{ textAlign: 'right' }}>Chairman, Mumbai Educational Trust</p>

        </div>
      </div>
    </div>
  );
}

export default ChairmanPage;
