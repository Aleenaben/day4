import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-single',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './single.component.html',
  styleUrl: './single.component.css'
})
export class SingleComponent {
  district=[
     
      {
        id:1,
        title: "Thiruvananthapuram",
        image: "https://img.onmanorama.com/content/dam/mm/en/travel/outside-kerala/images/2022/3/8/sree-padmanabhaswamy-temple.jpg",
        image2:"https://www.keralatourism.org/images/destination/large/shankhumugham_beach_thiruvananthapuram20131031115511_224_1.jpg",
        image3:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Harverting_lotus_leafs.jpg/1000px-Harverting_lotus_leafs.jpg",
        dis: "Sree Padmanabhaswamy Temple  This is a wondrous temple with a shimmering architectural design and an awe-inspiring ambience and one of the best places to see in Trivandrum. This monumental temple also happens to be the richest temple in the world. The temple is dedicated to the Lord Shri Padmanabhswamy who is said to be the lord of the city of Trivandrum.This is also among the most visited religious sites in India and the world. The imposing temple is simply an architectural marvel and each part of the temple is crafted with a lot of care and thought. The temple has an incredibly rich history and heritage. There is a strict dress code – and only traditional dresses are allowed",
        diss:"Shangumugham Beach  Shangumugham Beach is an incredible beach situated very near to the city airport. This beach of clear blue waters and white sand is a ravishing place to relax and spend your time in ethereal surroundings. The beach is extremely clean and has maintained its raw beauty that makes it one of the best places to see in Trivandrum.The beach also houses a little Devi temple. Sunset views are just matchless and very adorable from the beach. The tranquil beach is quite long and very charismatic. The best part of this beach is it isn't as crowded as other popular beaches in the city – except perhaps during the sunset time when a number of people visit to view the enchanting sunset scenes here",
        disss:"Vellayani lake is the largest lake in the city of Trivandrum and amongst the best places to visit in Trivandrum for couples. A great place to hangout – the lake offers some alluring views of the village and the backwaters. Fishing enthusiasts can also try their hands on fishing here in this lake. This is a perfect place for a family picnic. Situated in the rural area of the city, the lake is full of white ducks and lotus flowers. The great atmosphere around the lake will awe inspire you and will make you spend a good amount of time here around this charming lake. There are a lot of things to do in Trivandram or indulge in a boating experience at this lake",
      },
      {
        id:2,
        title: "kottayam",
        image: "https://img.onmanorama.com/content/dam/mm/en/travel/getting-about-kerala/kottayam/images/2020/3/12/vaikom-trip1.jpg",
        image2:"https://keralatouristplaces.in/wp-content/uploads/listing-uploads/cover/2021/01/ilaveezhamala-1-1024x814-1.jpg",
        image3:"https://img.onmanorama.com/content/dam/mm/en/travel/kerala/images/2022/7/24/illikkal-kallu-full-width.jpg.transform/schema-4x3/image.jpg",
        dis:"Vaikom is one of the popular places around Kottayam mainly due to its variety of tourist attractions. It is home to some of the most scenic backwaters of Kerala like Kumarakom and houses rich historical places and heritage temples that add an old-world charm to it. Its serenity and simplistic beauty are unbeatable. If you are looking for some ‘me or us’ time, Kottayam is littered with several secluded, yet calming haunts where you can let sit back and simply enjoy the view",
        diss:"Surrounded by three hills – Mankunnu, Kodayathoormala and Thonippara – Elaveezha Poonchira is a must-see tourist place in Kottayam. Known for its magnificent views and lush greenery, Elaveezha Poonchira is dotted with exquisite waterfalls and secret alcoves. It is famous among trekkers for its terrain and is the perfect picnic spot, hardly an hour away from the main Kottayam town",
        disss:"Nestled at a height of 6,000 feet above sea level in the Western Ghats, Illikkal Kallu is one of the top Kottayam tourist places. People from all over India come to witness this natural tourist attraction as half of the rock has fallen apart and now what is left is the other half part of it which stands sturdy. The place is also surrounded by greenery, panoramic vistas, and a utopian atmosphere. If you are a nature lover and love to explore offbeat places then you must include Illikkal Kallu in your list",
      },
      {
        id:3,
        title: "Alapuzha",
        image: "https://img.onmanorama.com/content/dam/mm/en/travel/hourglass/images/2018/5/12/alappuzha-beach.jpg.transform/schema-4x3/image.jpg",
        image2:"https://www.keralaindiavacation.com/images/page-images/marari-header-m.jpg",
        image3:"https://cdn.tripuntold.com/media/photos/location/2020/03/07/417f438b-10b5-408f-947c-d5a8e32a1866.jpg",
        dis:" With dense palm groves, a beautiful park nearby, an ancient lighthouse, pristine sceneries, & a charming blend of the sea, canals, lagoons, and freshwater rivers all under one roof, the Alappuzha Beach is among the top places to visit in Alleppey. The picturesque beach provides a perfect location for many of the movies shot here time and again. The beach is a paradise for people seeking relaxation as well as for those willing to indulge in adventure activities like parasailing, beach volleyball, & surfing",
        diss:"Located a mere 11 km away from Alleppey in the quaint town of Mararikulam, Marari Beach is the perfect spot for a relaxing, family trip or a romantic stroll with your lover. The seawater is clean and ideal for swimming. A number of lavish yet budgeted holiday resorts and homestay accommodation options present in the area make this beach one of the best tourist places in Alleppey. Tip: Take a stroll down the beach with your beloved under the setting sun and witness the breathtaking beauty that Marari Beach is known for",
        disss:"A coming together of beautiful caves and mesmerising carvings, Pandavan Rock is glorious. It is believed that Pandavas stayed here during the Mahabarata and hence the name so the site is not just pretty  but historical too. One of the most famous tourist places in Alappuzha, Pandavan Rock is something you shouldn’t miss",
      },
      {
        id:4,
        title: "Ernakulam",
        image: "https://www.tourmyindia.com/states/kerala/images/Mattancherry-Palace-Kochi-1.jpg",
        image2:"https://media-cdn.tripadvisor.com/media/photo-s/02/c5/3a/d4/bolgatty-palace.jpg",
        image3:"https://upload.wikimedia.org/wikipedia/commons/1/1d/Musical-walkway.jpg",
        dis:"This historically important palace built by Portuguese is one of the marvellous attractions in Ernakulam. Mattancherry Palace also called as the Dutch palace draws thousands of tourists with its elegant charm. The architectural beauty of this palace is beyond words.The fine collection of mural paintings depicting Hindu epics from Mahabharata and Ramayana decorates the interior of the palace. This wonderful palace displays royal costumes and palanquins.",
        diss:"Bolgatty Palace situated on the Bolgatty Islands is one among the oldest existing palaces built by the Dutch in India. With the spectacular backwaters of Kochi in the background, the scenery around the palace is astounding.There is a fabulous garden surrounding the palace. Today the palace is converted into an esteemed heritage hotel run by KTDC. This palace really worth a visit.",
        disss:"Marine Drive, is a beautiful hangout in Kochi. This walkway in Kochi is built facing the serene backwaters. It is a popular hang out in the city. There are so many shopping malls and food joints in the Marine Drive. Marine Drive offers the spectacular view of backwaters This is an important economic centre in Kochi. In the evening time so many people stroll across this walkaway enjoying the mesmerising sight of Sunset and the cool breeze coming from the Vembanad lake. Do not miss this wonderful hangout in Kochi.",
      },  
      {
        id:5,
        title: "Pathanamthitta",
        image: "https://tripinic.com/wp-content/uploads/2023/04/Perunthenaruvi-Waterfalls.jpg",
        image2:"https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/2159440/807345_398457.jpeg",
        image3:"https://www.keralatourism.org/images/enchanting_kerala/large/konni_elephant_camp_pathanamthitta20220525115509_1186_1.jpg",
        dis:"Perunthenaruvi Waterfall, nestled in the heart of Pathanamthitta, Kerala, is a captivating natural wonder and among the best places to visit in Pathanamthitta. Cascading from a height of approximately 60 meters, the waterfall’s name translates to “The Great Honey Stream,” aptly describing its sweet serenity. Set amidst lush tropical forests and rocky terrain, Perunthenaruvi offers a refreshing escape from the hustle and bustle of city life. The crystal-clear waters invite travelers to take a rejuvenating dip while the picturesque surroundings make it an ideal spot for nature lovers and photographers. This pristine waterfall is a true testament to the untouched beauty of Kerala’s wilderness.",
        diss:"Charalkunnu, situated amidst the scenic beauty of Pathanamthitta district in Kerala, is a hidden gem for nature lovers and solitude seekers. This serene hill station offers respite from the hustle and bustle of city life, with its lush green hills, rolling meadows, and pristine waterfalls. A leisurely trek to the hilltop rewards visitors with panoramic views of the surrounding landscape, making it a haven for photography enthusiasts. Charalkunnu’s calm and soothing ambiance provides an ideal setting for picnics and relaxation. With its unspoiled natural charm, this off-the-beaten-path destination is a perfect retreat for those seeking tranquility and communion with nature",
        disss:"The Konni Elephant Training Center, located in the heart of Pathanamthitta, Kerala, is one of the best tourist spots in Pathanamthitta. This center has been a hub for the gentle giants of the forest for generations. Here, you can witness these majestic creatures up close, as they undergo training, care, and rehabilitation. The center also offers informative sessions on elephant behavior and conservation, making it an educational experience for visitors of all ages. Surrounded by lush greenery and set against the backdrop of the Western Ghats, the Konni Elephant Training Center is a unique opportunity to connect with the awe-inspiring world of elephants while contributing to their welfare and preservation.",
      },
      {
        id:6,
        title: "Idukki",
        image: "https://theholidaysdestination.com/wp-content/uploads/2022/02/thekkady-tour-01.jpg",
        image2:"https://img.onmanorama.com/content/dam/mm/en/travel/getting-about-kerala/kottayam/images/2020/7/30/ilaveezhapoonchira.jpg",
        image3:"https://static.toiimg.com/photo/msid-85515152,width-96,height-65.cms",
        dis:"Thekkady is a naturally beautiful land located on Idukki district of Kerala. It's a place full of surprises. Nature has blessed this place with all beautiful attractions. You will be amused by the scenic spots, clear waterways and the peaceful ambiance of Thekkady. A walk through the spice scented plantations of Thekkady enjoying the green valleys and the chilling weather will be an unforgettable experience.One unique thing about Thekkady is that this is the only place where you can witness wildlife in close quarters. Thekkady is one of the finest natural wildlife reserve in the world. You can see large herd of elephants playing in the lake, tigers and so many other animals and birds in Thekkady. Thekkady is an ideal place for adventure tourism",
        diss:"Ilaveezhapoonchira situated atop Kudayathoor Mala is one of the most excellent places in Idukki district of Kerala to witness the sunrise and sunset. Ilaveezhapoonchira literally means pond of flowers atop a hill where no leaves fall. This is true as there is no trees around and only green grassland. This is a wonderful picnic spot situated in the midst of the fabulous hillocks.The velvet valleys of Ilaveezhapoonchira spreads across thousands of acres.The green landscape punctuated by gigantic hills with enclosed calm and serenity is an ideal place to relax. This beautiful spot is surrounded by three enchanting hillocks Mannakunnu, Kodayathoormala and Thonippara.",
        disss:"Munnar an enchanting hill station with enclosed calm of serenity and beauty draws thousands of tourists from different parts of the world. This heavenly beautiful hill station of Kerala situated at an altitude of about 1600 meter from the sea level was once the summer resort of British government in South India. The colonial Bungalows in Munnar reflects the glorious past of the place.The pleasant climate and the laid back attitude of the hills made it an ideal holiday spot. The cool climate and the romantic ambiance of Munnar made it one of the most preferred honeymoon destination in South India. Munnar lies at Idukki district in the confluence of three rivers Muthirapuzha, Nallathanni and Kundala.",
      },
      {
        id:7,
        title: "kannur",
        image: "https://www.holidify.com/images/cmsuploads/compressed/SIJO_Payyambalam_Beach_20180425181230.jpg",
        image2:"https://lakshmisharath.com/wp-content/uploads/2015/04/kannurfort.jpg",
        image3:"https://www.keralatourism.org/images/picture/large/Kurukkathodu_Aralam_Wildlife_Sanctuary_1941.jpg",
        dis:"Payyambalam Beach, a popular tourist spot in Kannur, makes one feel like the world has just started! It is a secluded beach that shines without any signs of human damage or spoilage. It has beautiful golden sand that sparkles like pearls under the sun. It merges foamy and white water. It won’t be a surprise if you find yourself each evening of your visit on this calm beach. While being one of the best tourist spots in Kannur, this beach also lets you enter the adventure mode when you are done relaxing in its peaceful lap. Go swimming, boating, skiing, parasailing, etc. in its inviting currents..",
        diss:"Situated on the coast of the mesmerising Arabian Sea, St. Angelo Fort is more than just a remarkable structure. A world heritage site, it is brimming with stories about battles to conquer it by the Portuguese and Dutch. When you are at the fort, you can enjoy a breath-taking view of the sea, natural harbour Mopilla Bay and Dharmadam Island. Inside the fort, there are beautiful, well-maintained gardens. The aura of the whole location is very relaxing. Visiting this fort is one of the best things to do in Kannur.",
        disss:"One of the must-visit Kannur attractions, Aaralam Wildlife Sanctuary is simply unmissable for a nature lover. This forest is home to exotic species of birds and animals that turn more distinctly wondrous as you move deeper into it. If you love trekking, you can enjoy it here on its landscape that reaches a height of 1145 metres. It is one of the best wildlife",
      },
      {
        id:8,
        title: "Kozhikode",
        image: "https://www.picnicwale.com/attractions/assets/sightseeing/kerala-pazhassiraja-museum-season.jpg",
        image2:"https://cdn.confident-group.com/wp-content/uploads/2021/09/14192247/Calicut-A-place-with-major-historical-significance-COVER.jpg",
        image3:"https://img.onmanorama.com/content/dam/mm/en/travel/getting-about-kerala/kozhikode/images/2020/10/10/beypore.jpg",
        dis:"For all the history lovers, Calicut is the perfect place to be. The Pazhassi Raja Museum and Art Gallery is one of the best places to visit in Calicut. Named after the famous ruler Pazhassi Raja who fought the British with the help of tribes, the museum displays a variety of monuments, mural paintings, and old coins.",
        diss:" Calicut beach happens to be an ideal location for tourists who want to unwind themselves from the stress and pollution of the city. If you are keen to discover the river in Kerala, this is one of the perfect places to see in Kozhikode that you need to add to your itinerary. The beach not only offers the best sunrise and sunset views but every year in January, the beach also plays a great host to one of the biggest festivals called the Malabar Mahotsavam.",
        disss:" Beypore is a popular ship-building port which is known to be one of the busiest fishing harbours of Kerala. Considered to be one of the best places to visit in Calicut, Beypore Beach also happens to be an important commercial centre for building the ships. While the city is also famed for its unique shipping vessel called “Uru”, do not miss out on going for a ride on the famous two-kilometre-long Pulimoodu bridge.",
      },
      {
        id:9,
        title: "Palakkad",
        image: "https://www.keralatourism.org/images/picture/large/Dhoni_waterfalls_in_Summer_Dhoni_1930.jpg",
        image2:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6F8lSoZJ0awS3bCt5-qc6WmfxcqLgUER5Jw&usqp=CAU",
        image3:"https://www.keralatourism.org/images/malabar/static-banner/large/Nelliyampathy-25102019111300.JPG",
        dis:"Dhoni is a tiny hamlet near Palakkad and is best known for its natural wealth. Paying a visit to these falls is truly one of the magical things to do in Palakkad. The Dhoni waterfalls and the forest combined together offer a reprieve from the heat and humidity of Palakkad. It is one of the best places to visit in Palakkad for a day trip. The forest is a part of western ghats and is ideal for bathing. This is one of the most beautiful waterfalls in Palakkad.",
        diss:"The Malampuzha Dam has become one of the best tourist attractions in Palakkad. Opened in 1955, this beautiful park and dam have manicured lawns and still waters perfect for a visit during the monsoons. It is the only one among Palakkad tourist spots to have a functioning ropeway.",
        disss:"About 60 KM from Palakkad lie the Nelliyampathy Hills, one of the far-off places to visit near Palakkad whose cloud-covered mountains are a delight! The well-laid road and beautiful scenery along the way including the Pothundy Dam and Palakkad Gap make it one of the best tourist places in Kerala for a one day trip.",
      },
      {
        id:10,
        title: "Kollam",
        image: "https://www.theraviz.com/wp-content/uploads/2018/05/palaruvi-waterfalls-2.jpg",
        image2:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfF3mJNIgnahXwUx0D-HP_nfUapT2MswlElvXvsucM52KTcqkqHJBvkDO_6U-Lp1Z5PXM&usqp=CAU",
        image3:"https://www.keralatourism.org/images/destination/large/jatayu_adventure_centre20180919110817_262_1.jpg",
        dis:"Palaruvi translates to “milky streams”. This is a stunning waterfall located on the Kollam-Shencottah Road, which falls from 300 feet. An ideal time to visit this place is from June to January. Even if you visit this place on a low season, it is a beautiful picnic spot. One of the best places to visit in Kollam for couples, this is the 32nd highest waterfall in India and is also known to have Ayurvedic properties.",
        diss:"This village is an important place for shrines and temples and amongst the best tourist places in Kollam. Located at a distance of 10 kms from Kollam, it has nine important temples. It lies on the banks of the Paravur Lake and also the coast of Arabian Sea. The most important one being the Lord Subramaniam Temple. The village has some of the oldest temples of Kollam visited my pilgrims from all across the country is one of the best places to visit near Kollam..",
        disss:"For the best of Kollam sightseeing , this is a very recent construction, the Jatayu Nature Park is a rock-themed park. The adventure park has 6D theatre an audio-visual digital room, cable car and much more. This is built to promote mythology and adventure tourism. This giant bird statue located on a hill top is certainly unique and something that shouldn’t be missed.",
      },
      {
        id:11,
        title: "Kasaragod",
        image: "https://www.keralatourism.org/images/picture/large/Bekal_Fort_1827.jpg",
        image2:"https://img.onmanorama.com/content/dam/mm/en/travel/kerala/images/2021/6/4/chandragiri-fort-3.jpg",
        image3:"https://english.mathrubhumi.com/image/contentid/policy:1.8110001:1670577091/ranipuram%20hills.jpg?$p=779c2bb&f=4x3&w=1080&q=0.8",
        dis:"Bekal Fort is the landmark of Kasaragod. This largest fort in Kerala spreads over 40 acres stands amidst the roaring sea with unending waves. The golden expanse of this fabulous beach surrounding the Bekal fort is called as the Bekal fort beach.The fort seems to have built up from the sea since three fourth of its exterior is drenched. The exciting memories of a bygone era are connected with this fort. It's a major attraction of historians, tourists and nature lovers. The Hanuman temple and the Muslim Mosque in here reflects the age old religious harmony in the area.",
        diss:"Chandragiri is a small beautiful place located on the banks of the Chandragiri river in Kasaragod. Chandragiri is well known for the huge seventeenth century fort and the backwater cruises. The fort offers an amazing view of the river and the Arabian sea. It is also a vantage point to watch the mesmerising sunset.Chandragiri also has the most attractive backwaters in Kasaragod. A houseboat cruise through this backwaters is a relaxing experience. The Chandragiri Boat Club run by the Bekal Resorts Development Corporation offers you boat trips to nearby islands and palm groves on the river. Enjoy the enclosed calm of this backwaters and make your journey a lifetime experience",
        disss:"This beautiful hills in Kasaragod is a favorite haunt of adventure lovers. These hills are the rain forest near Konnakkad north- east of Kanhangad. This hill station offers trekking and hiking. Dense forests, grasslands and medicinal plants in the mountains makes Kottancheri hills a suitable picnic place also.",
      },
      {
        id:12,
        title: "Thrissur",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSadu2sTf-ybGoJZDVCWPqTfmTq74nglN4nUg&usqp=CAU",
        image2:"https://www.keralatourism.org/images/destination/mobile/athirappalli_and_vazhachal_waterfalls_thrissur20131031102422_79_1.jpg",
        image3:"https://tripinic.com/wp-content/uploads/2020/09/Vilangan-Hills.jpg",
        dis:"Located right in the heart of the city, the Thrissur Zoo & Museum is one of the best places to visit in Thrissur. Thrissur zoo is one of the most diverse zoos in Kerala. While the beautiful flora and fauna in the zoo are perfect to calm the wildlife enthusiast within you, the artefacts in the museum are best to treat the history lover in you. This place is also surrounded by some of the best resorts in Thrissur.",
        diss:"Located 60 km from the city, Athirapally Falls is amongst the top places to visit in Thrissur for couples. The 80 feet high and 330 feet wide falls come all the way from the Anamudi Mountains and are often called as the Niagara Falls of India. If you’re looking for a blissful escape, don’t think much and head right to this place.",
        disss:"If you’re looking for surreal places to visit in and around Thrissur, then Vilangankunnu is the ideal spot to be. This beautiful hillock is located 7 km away from the city and has been converted into an amusement park. While there are rides for kids in the park, the gorgeous views make it equally worth visiting for others.",
      },
      {
        id:13,
        title: "Malappuram",
        image: "https://www.digitalkeralam.com/pageimgs/digitalkeralam_page_1000150_img.jpg",
        image2:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/53/d3/9a/falls-on-the-same-stream.jpg?w=1200&h=-1&s=1",
        image3:"https://img.onmanorama.com/content/dam/mm/en/districts/malappuram/images/2020/11/25/malappuram-bharathapuzha.jpg",
        dis:"A remarkable sanctuary hosting more than 100s of native bird species and 60 migratory bird species is widely known for its location. The peculiarity of the place is that the river kadalundi puzha flows into the arabian sea . travellers who are keen to know about such places, Kadalundi bird sanctuary is the best place for them. This is one of the most beautiful places in Malappuram.",
        diss:"It is another fresh experience to get yourself soaked in the pond of fresh Keralamkundu waterfalls . The place is always remains in the hearts of people even thinking about the water and the wonderful surroundings around the waterfall.the waterfalls has always been one of the best places to visit in Malappuram district. It is also said that the water has some medicinal properties.the water flows from western ghats forming a crystal clear water flowing in the base if the waterfalls.",
        disss:"Also known as River Nilsa that provides shelter to 11 reservoirs with Malampuzha dam, it is the second longest river in Kerala. The river has been an integral part of the Malabar district and a sacred river for Hindus as there are mentions of the river in the ancient scriptures. This is one of the few rivers in Kerala with a spiritual and cultural significance for people, especially the famous cultural house of the state Kalamandalam is situated on the banks of the river..",
      },
      {
        id:14,
        title: " Wayanad",
        image: "https://3.bp.blogspot.com/-68yw7VTovuw/VjR-tZIFl3I/AAAAAAAAJ9o/bBTKEdvIEgc/s1600/Meenmutty-Waterfalls.jpg",
        image2:"https://www.holidify.com/images/cmsuploads/compressed/100816080236(BannerImage)SOOCHIPPARAWATERFALLSIMAGE-15_20180118201857.JPG",
        image3:"https://www.banasura.com/resort/styles/fb-image/public/honymoon-resorts-chembrapeak.jpg?itok=ghl3iPQL",
        dis:"Meenmutty derives its name from ‘Meen’ that means fish and ‘Muty’ that means blocked which means blocking the fishes. One of the most splendid Wayanad tourist places, this is amongst the best waterfalls in Kerala. It is located on the Ooty road at a height of 300 meters and, if in Kalpetta then this Wayanad destination is just 29 kilometers. If you are looking for the best waterfalls in Kerala then this should not be missed from  your travel list.",
        diss:"The waterfalls is at a height of around 200 meters which unveils the cliff face. The postcard perfect white water is known as Sentinel Rock Waterfalls which lies in the Vellarimala of Wayanad. Soochipara, the name itself suggests that it is an ideal spot for rock climbing. The clear water joins the Chaliyar River where you can dip your feet and chill for hours. Sentinel Rock waterfalls is also one of the best places to visit in Wayanad.",
        disss:"The Chembra peak is the highest peak in Wayanad and is located at a height of 2100 meters above the sea level. It is the best tourist place for nature lovers to adore its beauty and offers bewildering treks for adventurous souls. The peak is visible from almost all parts of Wayanad and the major attraction is the natural heart-shaped lake atop the hill. You can take a glimpse of Kozhikode, Nilgiris and Malappuram districts from here. This unique lake makes Chembra Peak one of the best tourist places in Wayanad.",
      }
      

  ]


    constructor(public route:ActivatedRoute){}

    ngOnInit(){
      this.getDetails();
    }
    id:any;
    data:any;
    getDetails()
    {
      this.id = this.route.snapshot.params["id"];
      this.data=this.district.filter((d:any)=>d.id==this.id)
      console.log(this.id,this.data);
      
    }
  

}
