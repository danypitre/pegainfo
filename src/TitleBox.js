import { useState } from 'react'

import bgImage from './art/backtitle.jpg'
import logo from './art/logo.png'
import anydesk from './art/anydesk.png'
import WIN95 from './art/WIN95.png'
import WIN10 from './art/WIN10.png'
import pierre from './art/pierre.png'

import fujtsu from './art/partenaires/fujtsu.png'
import geotronics from './art/partenaires/geotronics.png'
import ibm from './art/partenaires/ibm.jpeg'
import intel from './art/partenaires/intel.png'
import lenovo from './art/partenaires/lenovo.png'
import inso from './art/partenaires/inso.webp'
import lexmark from './art/partenaires/lexmark.jpeg'
import xerox from './art/partenaires/xerox.png'


export const TitleBox = () => {

    

    const [isScrolled, setIsScrolled] = useState(0)

        window.addEventListener('scroll', viewCheck)
        window.addEventListener('keydown', function (e) {

            document.getElementById("services-key").classList.remove("key-pressed")
            document.getElementById("partenaires-key").classList.remove("key-pressed")
            document.getElementById("support-key").classList.remove("key-pressed")
            document.getElementById("historique-key").classList.remove("key-pressed")
            document.getElementById("contact-key").classList.remove("key-pressed")


            if (e.key == "q") { 
                showServices('services')
                document.getElementById("services-key").classList.add("key-pressed")
            }
            else if (e.key == "w") { 
                showServices('partenaires')

                document.getElementById("partenaires-key").classList.add("key-pressed")
            }
            else if (e.key == "e") { 
                showServices('support')

                document.getElementById("support-key").classList.add("key-pressed")
            }
            else if (e.key == "r") { 
                showServices('historique')
                document.getElementById("historique-key").classList.add("key-pressed")
            }
            else if (e.key == "t") { 
                showServices('contact')

                document.getElementById("contact-key").classList.add("key-pressed")
            }
 
          }, false);


    function viewCheck() { 
        let navbar = document.getElementById("navbar");
        setIsScrolled(isScrolled +1)

        // if (isScrolled > 30) { 
        //     navbar.classList.add("fade-in")
        // }
        
        
    }

    function blink(element) { 

        let toBlink = document.getElementById(element)
        let blinkables = ['blink1', 'blink2', 'blink3']

        blinkables.forEach((div) => {  
            console.log(div)
            let thisDiv = document.getElementById(div)
            if(div == element) { 
                thisDiv.classList.add("blink")
                thisDiv.classList.remove('hidden')

            } else { 
                thisDiv.classList.remove("blink")
                thisDiv.classList.add('hidden')

            }
            
        })

        

    }

    function showServices(element) { 

        var allTabs = ['services', 'historique', 'support', 'partenaires', 'contact']

        document.getElementById(element).classList.remove("hidden")
        document.getElementById(element).classList.add("fade-in")

        allTabs.forEach((tab) => { 
            let tabDiv = document.getElementById(tab)

            if (tab != element) {
                if (tabDiv.classList.contains('fade-in')){
                    console.log(tabDiv)

                    document.getElementById(tab).classList.remove("fade-in")
                     document.getElementById(tab).classList.add('hidden')
                }
            }
            
        })
 

    }

    function downloadAnyDesk() { 
        let link = 'https://get.anydesk.com/HWSafGTZ/PEGA-Controladistance.exe'
        window.open(link, '_blank').focus();   
     }




    function showInfos(element) { 
        let toShow = document.getElementById(element)
        let showables = ['SI1', 'SI2', 'SI3']
        let showablesP = ['SIP1', 'SIP2', 'SIP3']


        showables.forEach((div) => {  
            console.log()
            let thisDiv = document.getElementById(div)
            if(div == element) { 
                thisDiv.classList.add("service-infos-clicked")
                let divChilds = thisDiv.childNodes
                divChilds.forEach((child) => { 
                    if (child.tagName == 'P') { 
                        child.classList.remove("hidden")
                        child.classList.add("fade-in")
                        child.classList.add("slide-in")

                    }
                })


            } else { 
                thisDiv.classList.remove("service-infos-clicked")


            }

            
            
        })

    
    }
    function show95() { 
        let div = document.getElementById("windows")
        let now = document.getElementById("2022")
        if (div.classList.contains("hidden")) { 
            div.classList.remove("hidden")
            div.classList.add("fade-in")
            now.classList.add('hidden')
            now.classList.remove("fade-in")
        }
    }
    function show22() { 
        let div = document.getElementById("2022")
        let past = document.getElementById("windows")
        if (div.classList.contains("hidden")) { 
            div.classList.remove("hidden")
            div.classList.add("fade-in")
            past.classList.add('hidden')
            past.classList.remove("fade-in")
        }
    }

    function sendMail(email) { 
        window.location.href = `mailto:${email}`;
    
    }

    function goToPega() { 
        window.location = 'geo:48.86871160249054, -72.23217897894386'

    }



    return ( 
        <div id='wholePage'>
            <div className="flexWhole">

                    <div className='splitbox'>



                        <div className='title startleft'>
                                    
                            <h1>P??Ga</h1>
                            <h1 style={{paddingLeft:"50px"}}> Informatique inc.</h1>
                            <h1 style={{fontSize:"100%", fontWeight:"100", animationDelay:'5s'}}>Sp??cialistes en solution informatique d'affaire.</h1>

                        </div>


                        <div className='logo fade-in' >

                            <img src={logo}></img>
                        
                        </div>
                



                    </div>
                

{/* 
             <img className='bgTitle' src={bgImage}></img>  */}


            </div>


                    <div id='navbar' className='keyboard fade-in'>

                        <div className='f-lines'> 

                        <div className='esc'>esc</div>
                        <div className='fs'>F1</div>
                        <div className='fs'>F2</div>
                        <div className='fs'>F3</div>
                        <div className='fs'>F4</div>


                    </div>

                    <div className='f-lines'> 

                        <div id='services-key' onClick={() => showServices('services')} className='anchors'>Q | Services</div>
                        <div id='partenaires-key' onClick={() => showServices('partenaires')} className='anchors'>W | Partenaires</div>
                        <div id='support-key'className='anchors' onClick={() => showServices('support')}>E | Support</div>
                        <div id='historique-key' onClick={() => showServices('historique')} className='anchors'>R | Historique</div>
                        <div id='contact-key' onClick={() => showServices('contact')} className='anchors'>T | Nous joindre</div>
                    </div>
                        
                    
                    <div style={{marginLeft:'50px'}} className='f-lines'> 

                        <div className='anchors end'></div>
                        <div className='anchors end'></div>
                        <div className='anchors end'></div>
                        <div className='anchors end'></div>
                        <div className='anchors end'> </div>
                    </div>
                        

                            
      
                    </div> 


                    <div id='services' className='services-box hidden'>
                        <div  onClick={() => {blink('blink1'); showInfos('SI1')}}  className='service'>
                            <div className='flxRow line'><h1 style={{color:'white'}}> Entretient & Reparation</h1> <h1 id='blink1' className='blink' style={{color:'white', marginLeft:'12px'}} >|</h1>  </div>
                            <div id='SI1' className='service-infos'>
                            <p id='SIP1' className='hidden' style={{marginBottom:'20px'}}> {"{"} Gardez votre ??quipement ?? jour et en sant?? pour longtemps. {"}"}</p>

                                <ul> 
                                    <li> 
                                    Diagnostique
                                    </li>
                                    <li>
                                    R??paration d???ordinateur, imprimante, photocopieur ou autre p??riph??rique
                                    </li>
                                    <li>
                                    Nettoyage d???ordinateur (virus, spywares)
                                    </li>
                                    <li>
                                    Mise ?? niveau de composantes d'ordinateurs
                                    </li>
                                    <li>
                                    Installation et configuration de logiciels
                                    </li>
                                    <li>Sauvegarde et r??cup??ration de donn??es</li>
                                    <li>Recuperation de mot de passe</li>

                                </ul>
                                </div> 
                        </div>
                        
                        <div  onClick={() => {blink('blink2'); showInfos('SI2')}}  className='service'>
                        <div className='flxRow line'><h1 style={{color:'white'}}> Reseau</h1> <h1 id='blink2' className='blink hidden' style={{color:'white', marginLeft:'12px'}} >|</h1>  </div>
                        <div id='SI2' className='service-infos'>
                        <p id='SIP2' className='hidden' style={{marginBottom:'20px'}}> {"{"} Pour que l'information voyage en s??curit?? et ?? haute vitesse. {"}"}</p>

                                <ul> 
                                    <li> 
                                    Gestion de parc informatique et r??seau
                                    </li>
                                    <li>
                                    Installation et configuration de serveur
                                    </li>
                                    <li>
                                    Installation et configuration de r??seau domestique
                                    </li>
                                    <li>
                                    S??curisation de r??seau et syst??me
                                    </li>
                                    <li>
                                    Plan de maintenance pr??ventive avec banque d???heure
                                    </li>
                                    <li>Support ?? distance</li>

                                </ul>
                                </div> 
                        </div>

                        <div  onClick={() => {blink('blink3'); showInfos('SI3')}}  className='service'>
                        <div className='flxRow line'><h1 style={{color:'white'}}>Developpement</h1> <h1 id='blink3' className='blink hidden' style={{color:'white', marginLeft:'12px'}} >|</h1>  </div>
                        <div  id='SI3' className='service-infos'>
                            <p id='SIP3' className='hidden' style={{marginBottom:'20px'}}> {"{"} Vous avez de grandes id??es pour am??liorer votre entreprise? Nous sommes pr??t ?? vous aider ?? les r??aliser. {"}"}</p>
                            
                                <ul> 
                                    <li> 
                                    D??veloppement Web
                                    </li>
                                        <li>
                                            D??veloppement Windows
                                    </li>
                                    <li>
                                    Normes universelles et standards ??lev??s
                                    </li>
                                    <li>
                                    Comptabilit?? Acomba
                                    </li>
                                    <li>
                                    Utilisation des plus r??centes technologies
                                    </li>

                                </ul>
                                </div> 
                        </div>
                    </div> 

                    <div id='historique' className='historique hidden'>

                        <div style={{marginBottom:'60px'}} className='select-year'><div onClick={() => show95()}>1995</div><div  onClick={() => show22()}>2022</div></div>
           

                        <div id='windows' className='window hidden'> 

                        <img className='win95 floating' src={WIN95}></img>
                        </div>

                        <div id='2022' className='window hidden'> 
                        <img className='win95 floating' src={WIN10}></img>

\
                        </div>


                       
                                        


                    </div>


                    <div id='support' className='support hidden'>

                        <div>Le support en ligne permet ?? nos techniciennes et tehniciens de se connecter de fa??on s??curis??e sur votre ordinateur afin de vous aider. </div>

                        <div>Avant de t??l??charger l'assistant de connection AnyDesk, assurez-vous d'avoir contact?? une technicienne ou technicien.</div>

                        <div onClick={() => downloadAnyDesk()}className='anyDesk'><img src={anydesk} className='anyLogo' alt='Telecharger assistant de connection'></img> <h1>T??l??charger AnyDesk</h1> </div>

                        <span style={{color:'white'}}>Le partage de connection ne s'activera que lorsque vous aurez fourni les informations de connection a la personne ressource</span>
                        
                    </div>
                    <div id='partenaires' className='contact hidden'>

                        <div className='partenaires-box'>
                        <div className='title'>
                        Fort de notre exp??rience dans le domaine des serveurs Microsoft et dans la mise en place de r??seaux complexes et inter- bureaux, nous avons su ??tablir des alliances strat??giques avec des entreprises d???envergure.
                        </div>
                        <br />

                        <div className='title'>
                        Nous sommes partenaire ?? PLATINE ?? et centre de service de r??f??rence pour Lexmark Canada et nous sommes fiers d???avoir pris une part importante de notre march?? r??gional.
                        </div>

                        <div className='partenaires-logos'>

                            <div> <img className='partenaire' src={fujtsu}></img></div>
                            <div> <img className='partenaire' src={geotronics}></img></div>

                            <div> <img className='partenaire' src={ibm}></img></div>
                            <div> <img className='partenaire' src={inso}></img></div>
                            <div> <img className='partenaire' src={intel}></img></div>
                            <div> <img className='partenaire' src={lenovo}></img></div>
                            <div> <img className='partenaire' src={lexmark}></img></div>
                            <div> <img className='partenaire' src={xerox}></img></div>




                        </div>

                        
                        </div>


                        

                        
                    </div>

                <div id='contact' className='contact hidden'>

                    <div className='contact-split'>


                        <div name='text'>
                            <h1>P??Ga Informatique inc.</h1>
                            <h3 onClick={() => goToPega()}>747 boul. V??zina, Dolbeau-Mistassini (Qu??bec) G8L 2V5</h3>
                            <h4 className='email'> ?????? &nbsp; 418.276.2108</h4>
                            <h4 className='email'> ???? &nbsp; 418.276.9315</h4>
                        </div>


                        <div name='text'>
                            <h1>Boutique Telus</h1>
                            <h3>1535 boul. Wallberg, Dolbeau-Mistassini (Qu??bec)
                            G8L 1H5</h3>
                            <h4 className='email'> ?????? &nbsp;  418.276.2148</h4>
                        </div>


                        <div name='text'>
                            <h1>M. Pierre Gagnon</h1>
                            <h3>Proprietaire</h3>
                            <h4 className='email' onClick={() => sendMail('pierreg@pegainfo.com')}> ???? &nbsp; pierreg@pegainfo.com</h4>

                        </div> 


                        <div name='text'>
                            <h1>Mme. Denise Hebert</h1>
                            <h3>Repr??sentante aux ventes externes</h3>
                            <h4 className='email' onClick={() => sendMail('deniseh@pegainfo.com')}> ???? &nbsp; deniseh@pegainfo.com</h4>

                        </div> 



                     </div>
                                <div style={{marginLeft:'20px'}} className="flxRow">
                                <img src={logo}></img>

                            <div className='title'>
                                    
                                    <h1>P??Ga</h1>
                                    <h1 style={{paddingLeft:"50px"}}> Informatique inc.</h1>
                                    <h1 style={{fontSize:"100%", fontWeight:"100", animationDelay:'5s'}}>Sp??cialistes en solution informatique d'affaire.</h1>
        
                                </div>

                                </div>
                            

                </div>

                <footer className='footer'>
                    2022 - Christophe Chouinard pour PeGa Informatique Inc.
                    
                </footer>
        </div>
     );
}
 
