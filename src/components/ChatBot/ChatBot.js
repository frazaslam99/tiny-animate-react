// import React, { useState } from 'react';
// import { Typography } from '@material-ui/core';
// import cx from 'classnames';
// import useWebAnimations, { tada } from '@wellyshen/use-web-animations';
// import { 
//     communityAvatar, 
//     corporateAvatar, 
//     technologyAvatar, 
//     luxuryAvatar, 
//     entertainmentAvatar 
// } from '../../images/images';
// import styles from './ChatBot.css';

// const ChatBot = () => {
//     const [ selected, setSelected ] = useState(2);
//     const { ref: communityRef, getAnimation: anim0 } = useWebAnimations({ ...tada, autoPlay: false });
//     const { ref: corporateRef, getAnimation: anim1 } = useWebAnimations({ ...tada, autoPlay: false });
//     const { ref: technologyRef, getAnimation: anim2 } = useWebAnimations({ ...tada, autoPlay: false });
//     const { ref: luxuryRef, getAnimation: anim3 } = useWebAnimations({ ...tada, autoPlay: false });
//     const { ref: entertainmentRef, getAnimation: anim4 } = useWebAnimations({ ...tada, autoPlay: false });
//     const avatars = [ communityAvatar, corporateAvatar, technologyAvatar, luxuryAvatar, entertainmentAvatar ];
//     const avatarTitles = [ 'Community', 'Corporate', 'Technology', 'Luxury', 'Entertainment' ];
//     const avatarRefs = [ communityRef, corporateRef, technologyRef, luxuryRef, entertainmentRef ];
//     const avatarAnims = [ anim0, anim1, anim2, anim3, anim4 ]
//     return (
//         <div className={styles.container}>
//             <div className={styles.title}>
//                 <Typography variant="h5" style={{ color: '#ffffff' }}>
//                     {'Select avatars to switch chatbot voice & tone'}
//                 </Typography>
//             </div>
//             <div className={styles.avatars}>
//                 {[ 0, 1, 2, 3, 4 ].map((i) => (
//                     <div 
//                         key={i} 
//                         onClick={() => { setSelected(i); avatarAnims[i]().play(); }}
//                         className={cx(styles.avatarBox, selected === i ? styles.selectedAvatar : null)}
//                         ref={avatarRefs[i]}
//                     >
//                         <img src={avatars[i]} alt="" className={styles.avatar} />
//                         <div className={cx(styles.avatarTitle, selected === i ? styles.selectedTitle : null)}>
//                             {avatarTitles[i]}
//                         </div>
//                     </div>
//                 ))}            
//             </div>

//             <div className={styles.chatBox}>
//                 <div className={styles.chat}>
//                     <Typography variant="subtitle1">
//                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, quaerat!        
//                     </Typography>
//                 </div>
//                 <div className={styles.chat}>
//                     <Typography variant="subtitle1">
//                         Lorem ipsum dolor sit amet.
//                     </Typography>
//                 </div>
//                 <div className={styles.chat}>
//                     <Typography variant="subtitle1">
//                         Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//                     </Typography>
//                 </div>
//             </div>

//             <div>
//                 <button className={styles.button}>
//                     <Typography variant="subtitle1">
//                         Keep chatting!
//                     </Typography>
//                 </button>
//                 <button className={styles.button}>
//                     <Typography variant="subtitle1">
//                         Get in touch!
//                     </Typography>
//                 </button>
//             </div>
//         </div>
//     )
// }

// export default ChatBot
