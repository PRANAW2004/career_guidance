const express = require("express");
const parser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const http = require("https");
const app = express();
app.use(parser.urlencoded({extended: true}));

const aboutPageContent= "The main motive of this Career guidance is to guide the stduents who are confused about career to choose and where to start. It is a free guidance to students who are thinking to start from scratch. We thrive to give our best guidance for free and support the people who are thriving for success in every possible way.";
const img = ['ai.jpg','fullStack.png','cloud.webp','cyberSecurity.jpg','dataScience.jpg','networking.jpg'];
const para = ['Artificial Intelligence', 'Full Stack Development', 'Cloud Computing','Cyber Security','Data Science','Networking'];
const addCareer = [];
const personName = [];
const careerDesc = [];
const outline = []
const links = ['https://www.youtube.com/watch?v=wnqkfpCpK1g','https://www.youtube.com/@NetNinja','https://www.youtube.com/watch?v=EN4fEbcFZ_E','https://www.youtube.com/watch?v=hXSFdwIOfnE','https://www.youtube.com/watch?v=-ETQ97mXXF0']

let ai = "Artificial intelligence is a broad field of computer science and engineering that focuses on the development of intelligent machines that can perform tasks that typically require human intelligence, such as visual perception, speech recognition, decision-making, and natural language processing. AI systems are designed to learn from experience, adapt to new situations, and perform tasks autonomously.The field of AI is divided into two main categories: narrow or weak AI and general or strong AI. Narrow AI is designed to perform a specific task or set of tasks, such as recognizing objects in images or playing chess, while general AI is intended to be able to perform any intellectual task that a human can.Machine learning is a subfield of AI that involves the development of algorithms and statistical models that enable machines to learn from data and make predictions or decisions without being explicitly programmed to do so. Machine learning algorithms use statistical techniques to identify patterns and relationships in data, which can then be used to make predictions or decisions about new data.There are several types of machine learning algorithms, including supervised learning, unsupervised learning, and reinforcement learning. In supervised learning, the machine is trained on labeled data, meaning that the correct answer or outcome is already known. The machine then uses this labeled data to make predictions about new, unlabeled data. Unsupervised learning, on the other hand, involves training the machine on unlabeled data and allowing it to identify patterns and relationships on its own. Reinforcement learning involves training a machine to make decisions based on feedback in the form of rewards or punishments.One of the key benefits of AI and machine learning is their ability to automate tasks and processes that would otherwise require human intervention. For example, AI-powered chatbots can handle customer service inquiries, while machine learning algorithms can be used to identify fraudulent transactions or predict equipment failure in manufacturing settings.However, there are also concerns about the impact of AI and machine learning on the workforce, as these technologies have the potential to automate many jobs and tasks currently performed by humans. Additionally, there are ethical concerns related to the use of AI and machine learning, particularly around issues such as bias, privacy, and accountability.Overall, artificial intelligence and machine learning are rapidly evolving fields with a wide range of potential applications and implications for society. As these technologies continue to develop, it will be important to carefully consider their potential benefits and risks, and to ensure that they are developed and deployed in an ethical and responsible manner."
let fullstack = "Full stack development refers to the process of designing, developing, and maintaining the entire technology stack of a web application. This includes both the front-end, or client-side, and back-end, or server-side, components of the application. A full stack developer is responsible for creating and integrating all of the necessary software layers and infrastructure required to build a functional and robust web application.Front-end development involves creating the user interface of a web application, which includes designing and coding the HTML, CSS, and JavaScript code that the user interacts with. This can include creating responsive layouts, designing intuitive user experiences, and ensuring cross-browser compatibility.Back-end development involves designing and developing the server-side of a web application. This includes creating and maintaining the application's database, developing the server-side logic and algorithms that drive the application, and implementing security measures to protect sensitive user data.In addition to front-end and back-end development, a full stack developer is also responsible for configuring and deploying the application's infrastructure. This includes setting up and configuring web servers, deploying and managing databases, and integrating third-party APIs and services.To become a full stack developer, one must have a strong understanding of multiple programming languages, such as HTML, CSS, JavaScript, Ruby, Python, and Java, as well as various frameworks and libraries. They must also be familiar with server-side technologies such as Node.js, PHP, and Ruby on Rails, and have experience working with databases like MySQL, MongoDB, and PostgreSQL.In summary, full stack development is the process of creating and integrating all the necessary components required to build a web application. It requires a diverse set of skills and expertise, and a full stack developer must be able to handle everything from designing user interfaces to managing server infrastructure. As web applications become increasingly complex, the need for full stack developers will continue to grow"
let cloud = "Cloud computing is a technology that allows users to access computing resources over the internet, such as servers, storage, applications, and databases, without the need for on-premises hardware or infrastructure. This technology has revolutionized the way businesses and individuals store and access data, as it provides a scalable, reliable, and cost-effective alternative to traditional on-premises computing.At its core, cloud computing relies on a network of remote servers that are hosted in data centers around the world. These servers are connected to the internet and provide users with access to a variety of computing resources on-demand. Users can request and provision these resources as needed, without the need for physical infrastructure or hardware.There are three main types of cloud computing models: Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS). IaaS provides users with access to virtualized computing resources, such as servers, storage, and networking, while PaaS provides a platform for developers to build, test, and deploy applications. SaaS, on the other hand, allows users to access software applications over the internet, without the need for installation or maintenance.Some of the key benefits of cloud computing include scalability, reliability, and cost-effectiveness. With cloud computing, users can easily scale up or down their computing resources to meet changing demand, without the need for costly hardware upgrades or infrastructure changes. Cloud computing also provides a highly reliable infrastructure, with redundant systems and data backups that ensure data is always available, even in the event of a hardware failure or outage. Finally, cloud computing can be cost-effective, as users only pay for the resources they use, and do not have to invest in expensive hardware or infrastructure upfront.However, there are also some potential challenges and risks associated with cloud computing. These include concerns around data privacy and security, as well as the potential for vendor lock-in, where users become reliant on a specific cloud provider and are unable to easily migrate to another provider or to an on-premises infrastructure. Additionally, cloud computing can introduce performance issues if the network connectivity or bandwidth is insufficient, or if the cloud provider's servers are located far from the user's location.Overall, cloud computing is a powerful technology that has transformed the way we access and use computing resources. With its scalability, reliability, and cost-effectiveness, cloud computing has become an essential technology for businesses of all sizes, as well as for individuals who need to store and access data on-demand."
let cyber = "Cybersecurity refers to the practice of protecting computer systems, networks, and digital information from unauthorized access, theft, damage, or other malicious activity. As the use of technology continues to expand in our daily lives, the importance of cybersecurity has become increasingly critical to protect sensitive information, personal data, and intellectual property.Cybersecurity encompasses a range of technologies, processes, and practices designed to safeguard computer systems and networks from cyber threats, such as viruses, malware, phishing attacks, and data breaches. This includes implementing security measures such as firewalls, antivirus software, intrusion detection systems, and encryption technologies to prevent unauthorized access or theft of sensitive information.Another important aspect of cybersecurity is risk management, which involves identifying potential security threats and vulnerabilities, assessing their impact, and implementing appropriate security measures to mitigate them. This includes developing policies and procedures for data security, employee training, and incident response planning.Cybersecurity also plays a critical role in protecting national security and critical infrastructure, such as power grids, transportation systems, and financial institutions. Government agencies and organizations often work closely with cybersecurity experts to identify and prevent potential cyber threats and attacks.In addition to traditional cybersecurity measures, there are also emerging technologies such as artificial intelligence (AI) and machine learning that are being used to detect and prevent cyber attacks. These technologies can analyze large amounts of data and identify patterns of behavior that may indicate a potential cyber attack, allowing organizations to respond quickly and effectively.Overall, cybersecurity is a constantly evolving field that requires ongoing education, training, and awareness to stay ahead of emerging threats and vulnerabilities. As technology continues to advance, the need for strong cybersecurity measures will only continue to grow, and it will be up to individuals, organizations, and governments to work together to protect against cyber threats and maintain a safe and secure digital environment."
let data = "Data science is an interdisciplinary field that combines statistical analysis, machine learning, and computer science to extract insights and knowledge from complex data sets. It involves collecting, processing, and analyzing large amounts of data to identify patterns and trends that can be used to inform decision-making and drive business value.At the heart of data science is the ability to extract meaningful insights from data. This involves using statistical methods to identify correlations and relationships between different variables, and machine learning algorithms to identify patterns and predict future outcomes.Data scientists typically use a range of tools and technologies to collect, process, and analyze data, including programming languages such as Python and R, data visualization tools such as Tableau and Power BI, and big data processing frameworks such as Apache Spark and Hadoop.Data science is used in a wide range of industries, from finance and healthcare to marketing and social media. Some of the key applications of data science include predictive modeling, sentiment analysis, fraud detection, and recommendation systems.One of the key challenges in data science is dealing with the sheer volume and complexity of data. This requires data scientists to have strong analytical skills, as well as expertise in data management, data cleaning, and data wrangling to ensure that the data is accurate and can be effectively analyzed.Another challenge is ensuring that the insights extracted from data are relevant and useful. This requires a deep understanding of the business problem and the data being analyzed, as well as the ability to communicate complex findings in a clear and actionable way to stakeholders.Overall, data science is a rapidly growing field that is becoming increasingly important in today's data-driven world. With the ability to extract insights and knowledge from complex data sets, data science has the potential to drive innovation and improve decision-making in a wide range of industries and applications."
let network = "Networking refers to the communication and exchange of information between multiple devices, such as computers, servers, and other electronic devices. It involves the use of hardware, software, and protocols to enable devices to connect and communicate with each other, as well as with the internet and other external networks.Networking is essential in modern computing, enabling individuals and organizations to share data, resources, and services across multiple devices and locations. It enables the transfer of information and data, the ability to remotely access files, and the ability to collaborate on projects with others.There are several different types of networks, including local area networks (LANs), wide area networks (WANs), and wireless networks. LANs are typically used in small businesses and homes, while WANs are used to connect multiple LANs across large geographical areas. Wireless networks use radio waves to transmit data and are commonly used in public spaces, such as airports and coffee shops.Networks are made up of several different components, including network interfaces, routers, switches, and firewalls. Network interfaces are used to connect devices to the network, while routers are used to connect different networks together. Switches are used to manage the flow of data within a network, while firewalls are used to protect networks from unauthorized access and malicious activity.Networking protocols are also an essential component of networking. Protocols are sets of rules and standards that govern how devices communicate and exchange information over a network. Examples of networking protocols include TCP/IP, HTTP, and FTP.As networking continues to evolve, new technologies and trends are emerging, such as software-defined networking (SDN), network functions virtualization (NFV), and the internet of things (IoT). These technologies are changing the way networks are managed and deployed, enabling greater flexibility, scalability, and automation.Overall, networking is a fundamental aspect of modern computing, enabling individuals and organizations to communicate and collaborate across multiple devices and locations. As technology continues to evolve, networking will continue to play a critical role in enabling new forms of communication and collaboration, and ensuring the security and reliability of digital networks."

const desc = [ai.split(/[.]/),fullstack.split(/[.]/),cloud.split(/[.]/),cyber.split(/[.]/),data.split(/[.]/),network.split(/[.]/)];

app.set("view engine", "ejs");
app.use(express.static("public"));
app.get("/",(req,res)=>{
    res.render("home");
})

app.get("/about", (req,res)=>{
    res.render("about", {aboutContent: aboutPageContent});
})

app.get("/home", (req,res)=>{
    res.redirect("/");
})

app.get("/career", (req,res)=>{
    res.render("career",{careerimg: img,imgpara:para,careerName:addCareer,smallOutline:outline});
})

app.get("/career/:id", (req,res)=>{
    var title = req.params.id;
    console.log(req.params.id);
    // para.forEach(function(i){
    //     if(title === _.lowerCase(i)){
    //         res.render("career1", {imgTitle:title});
    //     }
    // })
    if(title === 'home'){
        res.redirect("/home")
    }
    else if(title === 'about'){
        res.redirect("/about")
    }
    else if(title === 'add'){
        res.render("add");
    }
    else if(title === 'contact'){
        res.redirect("/contact");
    }
    for(var i=0;i<para.length;i++){
        if(_.lowerCase(title) === _.lowerCase(para[i])){
            res.render("career1",{imgTitle:para[i],descpara: desc[i],link:links[i]});
        }
    }
    for(var i=0;i<addCareer.length;i++){
       if(_.lowerCase(title) == _.lowerCase(addCareer[i])){
        res.render("career2", {imgTitle: addCareer[i],domaindesc:careerDesc[i],personName1: personName[i]});
       } 
    }
})

app.post("/add", (req,res)=>{
    var domainName = req.body.DomainName;
    var YourName = req.body.YourName;
    var descName= (req.body.DescriptionName).split(/[.]/);
    var outline1 = req.body.outline;
    addCareer.push(domainName);
    personName.push(YourName);
    careerDesc.push(descName);
    outline.push(outline1);
    console.log(addCareer,personName,careerDesc);
    res.redirect("/career");
});

app.get("/contact", (req,res)=>{
    res.render("contact");
})

app.post("/contact",(req,res)=>{
    var first_name = req.body.firstName;
    var last_name = req.body.lastName;
    var email = req.body.email;
    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: first_name,
                    LNAME: last_name
                }
            }
        ]
    }
    const data1 = JSON.stringify(data);
    console.log(data1);
    const url = ""
    const options = {
        method: "POST",
        auth:""
    }
    const request = http.request(url, options, (response)=>{
        var responseCode = response.statusCode;
        console.log(responseCode)
        if(responseCode === 200){
            res.render("success");
        }
        else{
            res.render("failure");
        }
        // response.on("data", (d)=>{
        //     console.log(JSON.parse(d));
        // })
    });
    request.write(data1);
    request.end();
});

app.listen(process.env.PORT || 1234, ()=>{
    console.log("Server started at port 1234");
})
