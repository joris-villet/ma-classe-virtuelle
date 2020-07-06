/* eslint-disable max-len */
import React from 'react';
import imageInfoOne from '../../../assets/images/img-section-1.png';
import imageInfoTwo from '../../../assets/images/img-section-2.png';
import imageInfoThree from '../../../assets/images/img-section-3.png';
// import PropTypes from 'prop-types';
import './styles.scss';

const InfosInHome = () => (
  <>
  <section className="section">
  <article className="InfosInHome">
    <div className="InfosInHome-paragraphe">
        <h2 className="InfosInHome-title">Ma classe virtuelle</h2>
        <p>
          Durant cette récente période de confinement nous sommes arrivés à un constat simple, quand un enfant ne peut se rendre à l'école, les échanges d'informations deviennent très difficiles.<br></br><br></br>
          C'est pourquoi nous avons decidé de créer <strong>"Ma classe virtuelle"</strong> qui permet d'établir une passerelle entre l'enseignant et ses élèves.<br></br><br></br>
          Elle est construite pour les professeurs des écoles et leurs élèves. Elle permet un suivi en classe et à la maison.
          c'est un outil pour les professeurs de primaire accessible sur ordinateur et tablette via un navigateur web.
        </p> 
    </div>
    <div className="InfosInHome-image">
      <img className="InfosInHome-imageOne" src={imageInfoOne} alt="imageInfoOne" />
    </div> 
    </article>
  </section>
    <section>
      <article className="InfosInHome">
        <div className="InfosInHome-image">
          <img className="InfosInHome-imageTwo" src={imageInfoTwo} alt="imageInfoTwo" />
        </div>
        <div className="InfosInHome-paragrapheTwo">
          <h2 className="InfosInHome-title--white">Enseignant</h2>
          <p>
            Une fois inscrit, vous aurez accès à une interface qui vous est dédié et vous pourrez créer une ou plusieurs classes virtuelles et y inviter vos élèves. <br></br><br></br>Sur l'interface, la semaine en cours est representée sous forme d'agenda et vous permet de créer des cartes qui seront visibles uniquement par les éleves de cette classe.
            Vous pourrez vous créez plusieurs classes et basculer d'une classe à l'autre très simplement.
          </p>
        </div>
      </article>
    </section>
    
    <section className="section--last">
      <article className="InfosInHome">
        <div className="InfosInHome-paragraphe">
          <h2 className="InfosInHome-title">Elèves</h2>
          <p>
            Vous avez été invité par votre enseignant sur "Ma classe virtuelle"?<br></br><br></br> 
            Bienvenue !! Vous allez decouvrir une interface très simple d'utilisation sous forme d'agenda qui vous permettra de visualiser les devoirs et informations transmises par votre enseignant.
          </p>
        </div>
        <div className="InfosInHome-image">
          <img className="InfosInHome-imageThree" src={imageInfoThree} alt="imageInfoThree" />
        </div>
      </article>
    </section>
    
  </>
);

export default InfosInHome;
