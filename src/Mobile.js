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
import menu from './art/mobile.jpeg'

export const Mobile = () => {

    



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





    function sendMail(email) { 
        window.location.href = `mailto:${email}`;
    
    }

    function goToPega() { 
        window.location = 'geo:48.86871160249054, -72.23217897894386'

    }


    function showMenu() { 

        let menu = document.getElementById("menu")
        if (menu.classList.contains("dropdown")){
            menu.classList.remove("dropdown")
        } else { 
            menu.classList.add("dropdown")
        }


    }

    function goTo(link) { 
        let div = document.getElementById(link)
        div.classList.remove("hidden")
        let options = ['services', 'historique', 'support', 'contact', 'partenaires']


        document.getElementById("menu").classList.remove("dropdown")

        options.forEach((tag) => { 
            let anchor = document.getElementById(tag)
            if (anchor){
                if (tag != link) { 
                    if (!anchor.classList.contains("hidden"))
                    anchor.classList.add("hidden")
                }
            } else{
                anchor.classList.remove("hidden")
            }
        })
    }



    return ( 

        <div className='app'>
            <div className='menu' id='menu'> 
            <ul className='menu-list'>
                <li onClick={() => goTo('services')} >Services</li>
                <li onClick={() => goTo('support')} >Support</li>
                <li onClick={() => goTo('historique')}>Historique</li>
                <li onClick={() => goTo('partenaires')}>Partenaires</li>
                <li onClick={() => goTo('contact')}>Nous contacter</li>

            </ul>
            </div>

            <div className='navbar'>
        <img className='logo-nav' src={logo}></img>

        
        <div className='title'><h1>PeGa</h1>Informatique Inc.</div>

<img onClick={() => showMenu()} className='logo-nav' src={menu}></img>

            </div>

            <div id='services' className='services-mobile hidden'>

                <div className='single-service'> 

                <h1>Developpement</h1>
                <p>
                    <ul className='service-list'>
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
                </p>

                </div>


                <div className='single-service'> 

                <h1>Reseau</h1>
                <p>
                    <ul className='service-list'>
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
                </p>

                </div>


                <div className='single-service'> 

                <h1>Entretient & Reparation</h1>
                <p>
                    <ul className='service-list'>
                        <li>R??paration d???ordinateur, imprimante, photocopieur ou autre p??riph??rique</li>
                        <li>Nettoyage d???ordinateur (virus, spywares)</li>
                        <li>Mise ?? niveau de composantes d'ordinateurs</li>
                        <li>Installation et configuration de logiciels</li>
                        <li>Sauvegarde et r??cup??ration de donn??es et de mots de passe</li>
                    </ul>
                </p>

                </div>



            </div>
            <div id='support' className='contact-mobile hidden'>

                <h1 className='title'>Pour avoir acc??s au support ?? distance, connectez-vous avec un ordinateur !</h1>

            </div>
            <div  id='historique' className='services-mobile hidden'>

                <h1 className='title' style={{marginBottom:'30px'}}>
                    De 1995 ?? 2022
                </h1>

                <h1 className='title'  style={{marginBottom:'15px'}}>1995</h1>

                

                <div className='flxRow white'>
                Cr????e en 1995 et employant deux personnes, P??Ga Informatique Inc. s?????tait donn?? comme objectif d?????uvrer dans le domaine de l???informatique municipal, pour lequel nous sommes rapidement devenu la r??f??rence r??gionale.
                </div>

                <h1 className='title' style={{marginBottom:'15px'}} >2022</h1>

                <div className='flxRow white'>
                Notre ??quipe de plus de 10 personnes rejoint autant les milieux municipaux que les petites et moyennes entreprises.
                <br />
                Parmi nos clients, nous pouvons nommer plusieurs villes et municipalit??s, des compagnies financi??res et d???assurances, des PME ainsi que plusieurs industries.
                </div>




                <h1 className='title'>
                </h1>


            </div>
            <div id='partenaires' className='services-mobile hidden'>

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

            <div id='contact' className='contact-mobile hidden'>





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


            </div>
    





  
     ); 
}
 
