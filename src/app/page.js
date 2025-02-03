'use client';

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* হেডলাইন */}
      <h1 className="text-5xl font-bold text-center mb-8">
        Redux Toolkit, Firebase ও Next.js সমন্বিত পূর্ণাঙ্গ অ্যাপ
      </h1>

      {/* বিস্তৃত আর্টিকেল */}
      <article className="prose lg:prose-xl">
        <section>
          <h2>পরিচিতি</h2>
          <p>
            স্বাগতম! এই অ্যাপটি তৈরি করা হয়েছে আধুনিক ওয়েব ডেভেলপমেন্টের বিভিন্ন
            উন্নত টুলস যেমন <strong>Redux Toolkit</strong>,{' '}
            <strong>Firebase</strong> ও <strong>Next.js</strong> ব্যবহার করে। এই
            প্ল্যাটফর্মটি আপনাকে একটি পূর্ণাঙ্গ CRUD (Create, Read, Update,
            Delete) সিস্টেমের উদাহরণ হিসেবে দেখাবে, যেখানে ব্যবহারকারীরা সহজেই
            ডাটা যোগ, পড়া, আপডেট এবং মুছে ফেলতে পারবেন।
          </p>
        </section>

        <section>
          <h2>প্রযুক্তির বিবরণ</h2>
          <p>এই অ্যাপে আমরা নিম্নলিখিত প্রযুক্তিগুলো ব্যবহার করেছি:</p>
          <ul>
            <li>
              <strong>Redux Toolkit:</strong> Redux-এর ব্যবহারের জন্য আধুনিক ও
              সহজ উপায়, যা স্টেট ম্যানেজমেন্টকে কমপ্লেক্সিটি থেকে মুক্তি দেয়।
            </li>
            <li>
              <strong>Firebase:</strong> একটি ক্লাউড ভিত্তিক ব্যাকএন্ড সার্ভিস
              যা Authentication, Firestore (ডাটাবেস) সহ বিভিন্ন সার্ভিস প্রদান
              করে।
            </li>
            <li>
              <strong>Next.js (App Router):</strong> React ভিত্তিক একটি
              ফ্রেমওয়ার্ক, যা সার্ভার সাইড রেন্ডারিং এবং ক্লায়েন্ট সাইড
              নেভিগেশনের জন্য উপযুক্ত।
            </li>
          </ul>
        </section>

        <section>
          <h2>অ্যাপের বৈশিষ্ট্যসমূহ</h2>
          <p>এই অ্যাপের মূল বৈশিষ্ট্যসমূহ নিম্নরূপ:</p>
          <ul>
            <li>
              <strong>Authentication:</strong> Firebase ব্যবহার করে Sign Up,
              Login ও Logout ফিচার।
            </li>
            <li>
              <strong>Firestore CRUD:</strong> Firestore ডাটাবেসে ডাটা যোগ,
              পড়া, আপডেট ও মুছে ফেলার কার্যক্রম।
            </li>
            <li>
              <strong>Redux Integration:</strong> Redux Toolkit-এর মাধ্যমে
              অ্যাপের স্টেট ম্যানেজমেন্ট সহজ ও সুসংগঠিত করা হয়েছে।
            </li>
            <li>
              <strong>Responsive Design:</strong> Tailwind CSS বা আপনার পছন্দের
              CSS ফ্রেমওয়ার্ক ব্যবহার করে সুন্দর ও মোবাইল ফ্রেন্ডলি UI তৈরি করা।
            </li>
          </ul>
        </section>

        <section>
          <h2>কিভাবে কাজ করে?</h2>
          <p>
            প্রথমে ব্যবহারকারী Firebase Authentication দিয়ে সাইন ইন বা সাইন আপ
            করবে। সফলভাবে লগ ইন হলে, ব্যবহারকারীকে একটি ড্যাশবোর্ড পেজে নিয়ে
            যাওয়া হবে, যেখানে Firestore-এ সংরক্ষিত ডাটা দেখানো হবে। এখানে Redux
            Toolkit-এর createAsyncThunk ব্যবহার করে ডাটা ফেচ, অ্যাড, আপডেট ও
            ডিলিট করার অপারেশনগুলো পরিচালিত হবে।
          </p>
          <p>
            <em>
              Header কম্পোনেন্টের মাধ্যমে আপনি সহজেই Home, Signup, Login,
              Dashboard ও Firestore CRUD পেজগুলির মধ্যে নেভিগেট করতে পারবেন।
            </em>
          </p>
        </section>

        <section>
          <h2>কেন এই অ্যাপটি বিশেষ?</h2>
          <p>
            এই অ্যাপটি শুধু একটি সাধারণ CRUD সিস্টেম নয়, বরং এটি আধুনিক ওয়েব
            ডেভেলপমেন্টের বিভিন্ন গুরুত্বপূর্ণ ধারণাকে একত্রিত করেছে। Redux
            Toolkit-এর মাধ্যমে স্টেট ম্যানেজমেন্ট সহজ হয়েছে, Firebase দ্বারা
            ব্যাকএন্ড সাপোর্ট প্রদান করা হয়েছে, এবং Next.js-এর App Router
            ব্যবহার করে রেসপন্সিভ ও দ্রুত নেভিগেশন নিশ্চিত করা হয়েছে।
          </p>
        </section>

        <section>
          <h2>উপসংহার</h2>
          <p>
            এই অ্যাপের মাধ্যমে আপনি Redux, Firebase এবং Next.js-এর মজবুত
            ইন্টিগ্রেশন নিয়ে কাজ করার অভিজ্ঞতা অর্জন করবেন। আশা করি এই
            টিউটোরিয়ালটি আপনার জন্য উপকারী হবে। আরও উন্নত ফিচার ও কাস্টমাইজেশন
            করতে আপনি আপনার প্রয়োজন অনুযায়ী কোড পরিবর্তন করতে পারবেন।
          </p>
        </section>
      </article>
    </div>
  );
}
