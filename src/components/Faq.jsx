/* eslint-disable react/prop-types */
import FaqQuestions from "./FaqQuestions";


function Faq() {


  return (
    <>
      <section className="bg-[#F2F5F9]">
        <div className="flex items-center justify-center flex-col px-5 py-20 mt-16 ">
          <div className="text-center">
            <h2 className="pb-4 text-3xl font-semibold">
              Frequently asked questions
            </h2>
            <p className="font-light">
              Need help with something? Here are our most frequently asked
              questions.
            </p>
          </div>
        </div>
        <div className="pb-10">
        <FaqQuestions title={'Question 1'} description={'lorem ipsum sdfoimfoisdfomi sdfnsdoifnsdoif sdfj weiornweiormwej kwmfd wjef iweunwjf fnweifk o'}/>
        <FaqQuestions title={'Question 2'} description={'lorem ipsum sdfoimfoisdfomi sdfnsdoifnsdoif sdfj weiornweiormwej kwmfd wjef iweunwjf fnweifk o'}/>
        <FaqQuestions title={'Question 3'} description={'lorem ipsum sdfoimfoisdfomi sdfnsdoifnsdoif sdfj weiornweiormwej kwmfd wjef iweunwjf fnweifk o'}/>
        <FaqQuestions title={'Question 4'} description={'lorem ipsum sdfoimfoisdfomi sdfnsdoifnsdoif sdfj weiornweiormwej kwmfd wjef iweunwjf fnweifk o'}/>
        </div>
      </section>
    </>
  );
}

export default Faq;
