import React from 'react';
import {useParams} from 'react-router-dom';
import Users from "../modales/Users"
import { Link } from 'react-router-dom';

function UserNameAll(){
    const{username}=useParams("username");
    const oneData=Users.find((use) =>{
        return use.author==username;
    });
    return (
        <div className="border-b border-[1px] border-solid border-[#2F3336] ml-20 mr-8 flex-1 flex-shrink-0 basis-800">
          <Link to="/">
            <div className="flex">
              {/* <img
                className="w-8 h-4  m-5  relative bottom-1"
                src={backIcone}
                alt=""
              /> */}
              <div className="flex gap-2 relative top-2">
                <h1 className="text-lg font-bold">{oneData.author}</h1>
    
                <img
                  className="w-5 h-5 relative top-1 "
                  src={oneData.authorAvatar}
                  alt=""
                />
              </div>
            </div>
          </Link>
          <div className="relative bottom-6">
            <img src={oneData.imageCover} alt="" />
          </div>
          {/* <div className="relative bottom-28 left-6 w-40 h-20">
            <img src={oneData.imageSrc} alt="" />
          </div> */}
          <div className="flex gap-3 relative bottom-4 left-3">
            <h1 className="text-lg font-bold">{oneData.author}</h1>
    
            <img
              className="w-5 h-5 relative top-1 "
              src={oneData.authorAvatar}
              alt=""
            />
          </div>
    
          <div>
            <p className="relative bottom-4 left-3 text-gray-500 ">
              {oneData.authorDetails}
            </p>
          </div>
          <div className="relative bottom-2 left-3">
            <p>{oneData.description}</p>
          </div>
          <div className="relative bottom-2 left-3 text-blue-500">
            <button>{oneData.languageTradiction} </button>
          </div>
          <div className="relative top-1 left-3 text-gray-500">
            <p>{oneData.dateOfInscription} </p>
          </div>
          <div className="flex gap-2 relative top-4 left-3">
            <div>{oneData.numberOfSubscriptions}</div>
            <div>{oneData.NumberOfSubscribers}</div>
          </div>
          <div className="relative top-4 left-3 text-gray-500">
            {oneData.followedBy}{" "}
          </div>
        </div>
      );
    }
    

export default UserNameAll 