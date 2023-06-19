import React from "react";
import FAQ from "../components/FAQ/FAQ";

const FAQPage = () => {
  const faqs = [
    {
      question: "What is the purpose of Kindr?",
      answer:
        "Many people feel like they would like to offer some help in their local area when they have a spare hour or two at the weekends, but don’t always know where this may be most needed. Many people could sometimes benefit from a friendly face assisting them with a task that is too much to complete on their own. Kindr offers a quick and convenient way of connecting volunteers to tasks that need completing in their neighbourhood and helping to spread more kindness within communities.",
    },
    {
      question:
        "What is the difference between ‘post a task’ and ‘volunteer’ on the home page?",
      answer:
        "The ‘post a task’ button is your starting point for asking for help with a task you need assistance with. When you press that button you will be given the chance to select a category for the task and then fill in information to best describe your request. Once you press submit, it will be posted to the site and you will be contacted by a volunteer soon! The ‘volunteer’ button is the way for you to start spreading some kindness in your local area by browsing all of the available tasks. You can filter these by category by clicking on the icons at the top of the page, and scroll through until you see a task you think you can help with. Click on the task for more information and then press ‘accept’ to agree to offer your help for it!",
    },
    {
      question: "What happens once a task has been accepted?",
      answer:
        "All your accepted tasks will move to the My Tasks page, where you can click on each task for more detailed information. The volunteer is able to contact the poster of the task via phone or e-mail and arrange a time to meet to complete the task. Once this has happened, you can both click on the task and press ‘Complete’ to finish and the task will move to the ‘Completed Tasks’ section where you can choose to delete it if you so wish. Time to go and create or volunteer for another task and keep spreading that kindness!",
    },
    {
      question: "What kind of tasks should I post?",
      answer:
        "Anything you like! Whether you need a lift down the shops, someone to help you trim the garden hedge or even just someone to pop over for a chat - Kindr is the place to ask for neighbourhood help. We recommend trying to keep the tasks short and achievable in order to encourage a volunteer to offer their help for them. Try and be as descriptive as possible about the task, and include an accurate estimate for task ‘duration’ and a clear ‘location’ so your volunteer knows exactly how to help you out!",
    },
    {
      question: "What about security?",
      answer:
        "Kindr puts safety as a top priority and we are here to ensure that you feel safe using the site and meeting other users in real life. We believe that most people in the world are kind, but we are aware that occasionally there will be situations where we will need to intervene and take decisive action. Inappropriate behaviour, scams, spam, soliciting, harassment or any other illegal activity will not be tolerated on any level. In all instances, we will conduct an internal review of any complaints received about users either on or off the site. If we decide that this person poses a risk to our community they will be removed from our site permanently. Please do report all instances of antisocial or illegal activity taking place on our site, together we will help create a kinder community.",
    },
  ];

  return (
    <div>
      <FAQ faqs={faqs} />
    </div>
  );
};

export default FAQPage;

