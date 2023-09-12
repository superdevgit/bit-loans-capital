"use client";
import moment from 'moment-timezone';
import { FormEvent, useEffect, useState } from "react";
import { Heading } from "../components/shared";

const ContactUs = () => {
  const [communicationType, setCommunicationType] = useState("skype");
  const [countries, setCountries] = useState([]);
  const [timeZones, setTimeZones] = useState<string[]>([]);

  // fetch countries
  useEffect(() => {
    const getCountries = async () => {
      console.log("Loading...");
      try {
        const res = await fetch("https://restcountries.com/v3.1/all");
        const data = await res.json();
        // console.log(data);

        // countries
        const countries = data
          .map((item: { name: { common: any }; cca2: any }) => ({
            name: item.name.common,
            code: item.cca2,
          }))
          .sort((a: { name: string }, b: { name: any }) =>
            a.name.localeCompare(b.name)
          );

        setCountries(countries);
      } catch (error) {
        console.log(error);
        alert("Failed to fetch countries");
      }
    };
    getCountries();
  }, []);

  // fetch timezones
  useEffect(() => {
    const fetchTimeZones = async () => {
      try {
        const allTimeZones = moment.tz.names();
        setTimeZones(allTimeZones);

      } catch (error) {
        console.error('Error fetching time zones:', error);
      }
    };

    fetchTimeZones();
  }, []);
  return (
    <div>
      <Heading title="Contact us" />
      {/* contact htmlFm  */}
      <div className="p-5 pb-20 ">
        <form className="space-y-4 md:w-3/5">
          {/* select communicationType */}
          <div className="space-y-1">
            <label
              htmlFor="communicationType"
              className="block  font-medium text-gray-700"
            >
              {" "}
              Select CommunicationType
            </label>
            <select
              name="communicationType"
              id="communicationType"
              className="p-3 border shadow-sm block w-full sm: border-gray-300 focus:border-[#0f3a70] focus:outline-none rounded-md"
              value={communicationType}
              onChange={e => setCommunicationType(e.target.value)}
            >
              <option value="skype">Skype</option>
              <option value="zoom">Zoom</option>
              <option value="phone">Phone</option>
              <option value="email">Email</option>
            </select>
          </div>
          {/* skype fields  */}
          {communicationType === "skype" && (
            <SkypeFields timeZones={timeZones} />
          )}
          {/* zoom fields  */}
          {communicationType === "zoom" && <ZoomFields timeZones={timeZones} />}
          {/* phone fields  */}
          {communicationType === "phone" && (
            <PhoneFields countries={countries} timeZones={timeZones} />
          )}
          {/* email fields  */}
          {communicationType === "email" && <EmailFields />}
        </form>
      </div>
    </div>
  );
};

export default ContactUs;

const SkypeFields = ({ timeZones }: { timeZones: any[] }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [time, setTime] = useState("");
  const [timezone, setTimezone] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="space-y-2">
      <div className="space-y-1">
        <label
          className="block  font-medium text-gray-700"
          htmlFor="skype-name"
        >
          Skype Name:
        </label>
        <input
          className="p-3 border shadow-sm block w-full sm: border-gray-300 focus:border-[#0f3a70] focus:outline-none rounded-md"
          type="text"
          id="skype-name"
          name="skype-name"
          placeholder="live:.cid.139f41f8df3e3f1d"
          required
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>

      <div className="space-y-1">
        <label
          className="block  font-medium text-gray-700"
          htmlFor="skype-email"
        >
          Email:
        </label>
        <input
          className="p-3 border shadow-sm block w-full sm: border-gray-300 focus:border-[#0f3a70] focus:outline-none rounded-md"
          type="email"
          id="skype-email"
          name="skype-email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>

      <div className="space-y-1">
        <label
          className="block  font-medium text-gray-700"
          htmlFor="skype-time"
        >
          Time when available:
        </label>
        <input
          className="p-3 border shadow-sm block w-full sm: border-gray-300 focus:border-[#0f3a70] focus:outline-none rounded-md"
          type="time"
          id="skype-time"
          name="skype-time"
          required
          value={time}
          onChange={e => setTime(e.target.value)}
        />
      </div>

      <div className="space-y-1">
        <label
          className="block  font-medium text-gray-700"
          htmlFor="skype-timezone"
        >
          Time Zone:
        </label>
        <select
          className="p-3 border shadow-sm block w-full sm: border-gray-300 focus:border-[#0f3a70] focus:outline-none rounded-md"
          value={timezone}
          onChange={e => setTimezone(e.target.value)}
          id="skype-timezone"
          name="skype-timezone"
        >
          {timeZones.map((timezone:  string ) => (
            <option key={timezone} value={timezone}>
              {timezone}
            </option>
          ))}
        </select>
      </div>
      <div className="space-y-1">
        <label
          className="block  font-medium text-gray-700"
          htmlFor="skype-date"
        >
          Date:
        </label>
        <input
          className="p-3 border shadow-sm block w-full sm: border-gray-300 focus:border-[#0f3a70] focus:outline-none rounded-md"
          type="date"
          id="skype-date"
          name="skype-date"
          required
          value={date}
          onChange={e => setDate(e.target.value)}
        />
      </div>

      <div className="">
        <a
          className="!mt-4"
          href="https://join.skype.com/invite/CKOdCbBYl2tj"
          target="_blank"
        >
          Click here to join the chat
        </a>
      </div>

      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          id="privacy-checkbox"
          name="privacy-checkbox"
          required
        />
        <label htmlFor="privacy-checkbox">
          I agree to the Privacy Policy or Terms of Service.
        </label>
      </div>

      <div
        className="g-recaptcha"
        data-sitekey="6LfCi5ImAAAAALMER__5KJVXvJbY1OPTE5Gt1iUg"
      ></div>

      {/* button  */}
      <button
        onClick={handleSubmit}
        className="text-white bg-[#052131] px-4 !mt-4 py-2 rounded-lg text-xl"
      >
        Submit
      </button>
    </div>
  );
};

const ZoomFields = ({ timeZones }: { timeZones: any[] }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [time, setTime] = useState("");
  const [timezone, setTimezone] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="space-y-2">
      <div className="space-y-1">
        <label className="block  font-medium text-gray-700" htmlFor="zoom-name">
          Name:
        </label>
        <input
          className="p-3 border shadow-sm block w-full sm: border-gray-300 focus:border-[#0f3a70] focus:outline-none rounded-md"
          type="text"
          id="zoom-name"
          name="zoom-name"
          placeholder="joe doe"
          required
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>

      <div className="space-y-1">
        <label
          className="block  font-medium text-gray-700"
          htmlFor="zoom-email"
        >
          Email:
        </label>
        <input
          className="p-3 border shadow-sm block w-full sm: border-gray-300 focus:border-[#0f3a70] focus:outline-none rounded-md"
          type="email"
          id="zoom-email"
          name="zoom-email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>

      <div className="space-y-1">
        <label className="block  font-medium text-gray-700" htmlFor="zoom-time">
          Time when available:
        </label>
        <input
          className="p-3 border shadow-sm block w-full sm: border-gray-300 focus:border-[#0f3a70] focus:outline-none rounded-md"
          type="time"
          id="zoom-time"
          name="zoom-time"
          required
          value={time}
          onChange={e => setTime(e.target.value)}
        />
      </div>

      <div className="space-y-1">
        <label
          className="block  font-medium text-gray-700"
          htmlFor="zoom-timezone"
        >
          Time Zone:
        </label>
        <select
          className="p-3 border shadow-sm block w-full sm: border-gray-300 focus:border-[#0f3a70] focus:outline-none rounded-md"
          value={timezone}
          onChange={e => setTimezone(e.target.value)}
          id="zoom-timezone"
          name="zoom-timezone"
        >
          {timeZones.map((timezone:  string ) => (
            <option key={timezone} value={timezone}>
              {timezone}
            </option>
          ))}
        </select>
      </div>
      <div className="space-y-1">
        <label className="block  font-medium text-gray-700" htmlFor="zoom-date">
          Date:
        </label>
        <input
          className="p-3 border shadow-sm block w-full sm: border-gray-300 focus:border-[#0f3a70] focus:outline-none rounded-md"
          type="date"
          id="zoom-date"
          name="zoom-date"
          required
          value={date}
          onChange={e => setDate(e.target.value)}
        />
      </div>

      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          id="privacy-checkbox"
          name="privacy-checkbox"
          required
        />
        <label htmlFor="privacy-checkbox">
          I agree to the Privacy Policy or Terms of Service.
        </label>
      </div>

      <div
        className="g-recaptcha"
        data-sitekey="6LfCi5ImAAAAALMER__5KJVXvJbY1OPTE5Gt1iUg"
      ></div>

      {/* button  */}
      <button
        onClick={handleSubmit}
        className="text-white bg-[#052131] px-4 !mt-4 py-2 rounded-lg text-xl"
      >
        Submit
      </button>
    </div>
  );
};

const PhoneFields = ({
  countries,
  timeZones,
}: {
  countries: any[];
  timeZones: any[];
}) => {
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [time, setTime] = useState("");
  const [timezone, setTimezone] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="space-y-2">
      <div className="space-y-1">
        <label className="block  font-medium text-gray-700" htmlFor="country">
          Country:
        </label>

        <select
          id="country"
          name="country"
          value={country}
          className="p-3 border shadow-sm block w-full sm: border-gray-300 focus:border-[#0f3a70] focus:outline-none rounded-md"
          onChange={e => setCountry(e.target.value)}
        >
          {countries.map((country: { name: string; code: string }) => (
            <option key={country.code} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>
      </div>
      <div className="space-y-1">
        <label className="block  font-medium text-gray-700" htmlFor="phone">
          Phone:
        </label>
        <input
          className="p-3 border shadow-sm block w-full sm: border-gray-300 focus:border-[#0f3a70] focus:outline-none rounded-md"
          type="text"
          id="phone"
          name="phone"
          placeholder=""
          required
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
      </div>

      <div className="space-y-1">
        <label className="block  font-medium text-gray-700" htmlFor="name">
          Name:
        </label>
        <input
          className="p-3 border shadow-sm block w-full sm: border-gray-300 focus:border-[#0f3a70] focus:outline-none rounded-md"
          type="text"
          id="name"
          name="name"
          placeholder="joe doe"
          required
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>

      <div className="space-y-1">
        <label className="block  font-medium text-gray-700" htmlFor="email">
          Email:
        </label>
        <input
          className="p-3 border shadow-sm block w-full sm: border-gray-300 focus:border-[#0f3a70] focus:outline-none rounded-md"
          type="email"
          id="email"
          name="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>

      <div className="space-y-1">
        <label className="block  font-medium text-gray-700" htmlFor="time">
          Time when available:
        </label>
        <input
          className="p-3 border shadow-sm block w-full sm: border-gray-300 focus:border-[#0f3a70] focus:outline-none rounded-md"
          type="time"
          id="time"
          name="time"
          required
          value={time}
          onChange={e => setTime(e.target.value)}
        />
      </div>

      <div className="space-y-1">
        <label className="block  font-medium text-gray-700" htmlFor="timezone">
          Time Zone:
        </label>
        <select
          className="p-3 border shadow-sm block w-full sm: border-gray-300 focus:border-[#0f3a70] focus:outline-none rounded-md"
          value={timezone}
          onChange={e => setTimezone(e.target.value)}
          id="timezone"
          name="timezone"
        >
          {timeZones.map((timezone:  string ) => (
            <option key={timezone} value={timezone}>
              {timezone}
            </option>
          ))}
        </select>
      </div>
      <div className="space-y-1">
        <label className="block  font-medium text-gray-700" htmlFor="date">
          Date:
        </label>
        <input
          className="p-3 border shadow-sm block w-full sm: border-gray-300 focus:border-[#0f3a70] focus:outline-none rounded-md"
          type="date"
          id="date"
          name="date"
          required
          value={date}
          onChange={e => setDate(e.target.value)}
        />
      </div>

      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          id="privacy-checkbox"
          name="privacy-checkbox"
          required
        />
        <label htmlFor="privacy-checkbox">
          I agree to the Privacy Policy or Terms of Service.
        </label>
      </div>

      <div
        className="g-recaptcha"
        data-sitekey="6LfCi5ImAAAAALMER__5KJVXvJbY1OPTE5Gt1iUg"
      ></div>

      {/* button  */}
      <button
        onClick={handleSubmit}
        className="text-white bg-[#052131] px-4 !mt-4 py-2 rounded-lg text-xl"
      >
        Submit
      </button>
    </div>
  );
};

const EmailFields = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="space-y-2">
      <div className="space-y-1">
        <label className="block  font-medium text-gray-700" htmlFor="name">
          Name:
        </label>
        <input
          className="p-3 border shadow-sm block w-full sm: border-gray-300 focus:border-[#0f3a70] focus:outline-none rounded-md"
          type="text"
          id="name"
          name="name"
          placeholder="joe doe"
          required
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>

      <div className="space-y-1">
        <label className="block  font-medium text-gray-700" htmlFor="email">
          Email:
        </label>
        <input
          className="p-3 border shadow-sm block w-full sm: border-gray-300 focus:border-[#0f3a70] focus:outline-none rounded-md"
          type="email"
          id="email"
          name="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>

      <div className="space-y-1">
        <label className="block  font-medium text-gray-700" htmlFor="message">
          Message:
        </label>
        <textarea
          className="p-3 border shadow-sm block w-full sm: border-gray-300 focus:border-[#0f3a70] focus:outline-none rounded-md"
          id="message"
          name="message"
          required
          rows={6}
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
      </div>

      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          id="privacy-checkbox"
          name="privacy-checkbox"
          required
        />
        <label htmlFor="privacy-checkbox">
          I agree to the Privacy Policy or Terms of Service.
        </label>
      </div>

      <div
        className="g-recaptcha"
        data-sitekey="6LfCi5ImAAAAALMER__5KJVXvJbY1OPTE5Gt1iUg"
      ></div>

      {/* button  */}
      <button
        onClick={handleSubmit}
        className="text-white bg-[#052131] px-4 !mt-4 py-2 rounded-lg text-xl"
      >
        Submit
      </button>
    </div>
  );
};
