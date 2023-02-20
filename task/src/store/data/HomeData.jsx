import computer from '../../assests/images/computer.png'
import paint from '../../assests/images/paint.png'
import domain from '../../assests/images/domain.png'
import mobile from '../../assests/images/mobile.png'
import app from '../../assests/images/app.png'
import repair from '../../assests/images/repair.png'

/**Carousel Imahges */
import First from "../../assests/images/first.png";
import Second from "../../assests/images/second.png";
import Third from "../../assests/images/third.png";
import Fourth from "../../assests/images/fourth.png";
import Fifth from "../../assests/images/fifth.png";
import Sixth from "../../assests/images/sixth.png";
/**Clients  */
import TpLink from "../../assests/images/TpLink.png"
import Digital from "../../assests/images/Digital.png"
import Excel from "../../assests/images/Excel.png"
import Logitech from "../../assests/images/Logitech.png"
import HikVison from "../../assests/images/HikVison.png"
/**end of the clients images  */

/*Blogs Images*/
import Conference from "../../assests/images/conference.png"
import Nordwood from "../../assests/images/nordwood.png"
import Campbell from "../../assests/images/campbell.png"




const ServicesCardData = [
    {
        img : computer,
        title :"Web Design",
        CardColor : "orange-card",
        id : Math.random().toString(),
    },
    {
        img : paint,
        title :"ReDesign",
        CardColor : "lightblue-card",
        id : Math.random().toString(),
    },
    {
        img : domain,
        title :"Application Ui",
        CardColor : "purple-card",
        id : Math.random().toString(),
    },
    {
        img : mobile,
        title :"Mobile App Ui",
        CardColor : "blue-card",
        id : Math.random().toString(),
    },
    {
        img : app,
        title :"Web App Ui",
        CardColor : "lightpurple-card",
        id : Math.random().toString()
    },
    {
        img : repair,
        title :"Web Elements",
        CardColor : "red-card",
        id : Math.random().toString()
    },


]

{/**Carousel Data */}
const carouselImages = [
    {
      img : First,
      id : Math.random().toString()
    },
    {
      img : Second,
      id : Math.random().toString()
    },
    {
      img : Third,
      id : Math.random().toString()
    },
    {
      img : Fourth,
      id : Math.random().toString()
    },
    {
      img : Fifth,
      id : Math.random().toString()
    },
    {
      img : Sixth,
      id : Math.random().toString()
    },

  ]

{/** success */}
const successData = [
    {
        
        title :"PROJECT DONE",
        CardColor : "purble-card",
        number : 137,
        id : Math.random().toString(),
    },
    {
        
        title :"HAPPY CLIENT",
        CardColor : "pink-card",
        number : 137,
        id : Math.random().toString(),
    },
    {
       
        title :"RETURN CLIENT",
        CardColor : "orange-card",
        number : 137,
        id : Math.random().toString(),
    },
  


]

const workFlowData = [
    {
        title :"Your brief",
        itemColor : "navy-blue-item",
        number : "01",
        description : "I always  professional Workflow and provide",
        id : Math.random().toString(),
    },
    {
        title :"Research",
        itemColor : "light-purple-item",
        number : "02",
        description : "I always  professional Workflow and provide",
        id : Math.random().toString(),
    },
    {
        title :"Concept Design",
        itemColor : "orang-item",
        number : "03",
        description : "I always  professional Workflow and provide",
        id : Math.random().toString(),
    },
    {
        title :"Revision #01",
        itemColor : "light-red-item",
        number : "04",
        description : "I always  professional Workflow and provide",
        id : Math.random().toString(),
    },
    {
        title :"Revision #01",
        itemColor : "blue-item",
        number : "05",
        description : "I always  professional Workflow and provide",
        id : Math.random().toString(),
    },
    {
        title :"Revision #01",
        itemColor : "orange-dark-item",
        number : "06",
        description : "I always  professional Workflow and provide",
        id : Math.random().toString(),
    },
   
    {
        title :"Revision #02",
        itemColor : "light-green-item",
        number : "07",
        description : "I always  professional Workflow and provide",
        id : Math.random().toString(),
    },
    {
        title :"Revision #03",
        itemColor : "pink-item",
        number : "08",
        description : "I always  professional Workflow and provide",
        id : Math.random().toString(),
    },
    {
        title :"Final Design",
        itemColor : "red-item",
        number : "09",
        description : "I always  professional Workflow and provide",
        id : Math.random().toString(),
    },
]


const clients = [
    { 
        id : Math.random().toString(),
        client :TpLink
    },
     {
        id : Math.random().toString(),
        client :Digital
    },
     {
        id : Math.random().toString(),
        client :Excel
    },
     {
        id : Math.random().toString(),
        client :Logitech
    },
     {
        id : Math.random().toString(),
        client :HikVison
    }
 ]


 const blogsData = [
    {
        img : Conference,
        title :"Cutting-edge products launched through Logitech-Excel",
        description : "The Managing Director & Cluster Head India & South-West Asia at Logitech Sumanta Datta.",
        id : Math.random().toString(),
    },
    {
        img : Nordwood,
        title :"Cutting-edge products launched through Logitech-Excel",
        description : "The Managing Director & Cluster Head India & South-West Asia at Logitech Sumanta Datta.",
        id : Math.random().toString(),
    },
    {
        img : Campbell,
        title :"Cutting-edge products launched through Logitech-Excel",
        description : "The Managing Director & Cluster Head India & South-West Asia at Logitech Sumanta Datta.",
        id : Math.random().toString(),
    },
 ]

export default {
    ServicesCardData,
     successData
     ,workFlowData,
     clients,
     blogsData,
     carouselImages}
