import { TitleBox } from './TitleBox';

export const HomePage = () => { 
    if(window.screen.width < 600) { 
        window.location.href = '/mobile'
    }
    return(
       <div>

           <TitleBox>

           </TitleBox>
       </div>
    )



}