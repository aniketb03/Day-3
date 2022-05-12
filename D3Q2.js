
var resume={
  "basics": {
    "Name": "Aniket Prakash Bagul",
    "Label":"Seek a challanging position in the organization where I can enrich and apply my knowledge to contribute towards the growth and success of the Organization with seld Development",
    "email": "apbagul03@gmail.com",
    "phone": "+91 8766677501",
    "degree": "BE Electronics and Telecommunication",
    "location": {
      "address": "Matrumangal,Durga Nagar,peth road,near RTO office,Nashik",
      "postalCode": "422004",
      "city": "Nashik",
      "State":"Maharashtra",
      "countryCode": "India"
    },
    "profiles": [
      {
        "network": "LinkedIn",
        "Your Profile": "Aniket Bagul",
        "url": "https://www.linkedin.com/in/aniket-bagul-3508281b1?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BAw5LIIOCSdGfpqTVIuR8xA%3D%3D"
      }
    ]
  },
  "volunteer": [
    {
      "organization": "National Social Service(NSS)",
      "position": "Group Member",
      "startDate": "21-04-2019",
      "endDate": "31-08-2020",
      "summary": "National Service Scheme (NSS) was introduced in 1969 with the primary objective of developing the personality and character of the student youth through voluntary community service",
      "highlights": [
       "Tree plantation,Donation in kholhapur flood"
      ]
    }
  ],
  "education": [
    {
      "Institution": "Pune Institute of computer technology",
      "area": "Electronics and Telecommunication",
      "startDate": "22-06-2018",
      "endDate": "30-07-2021",
      "gpa": "7.0",
      "courses": [
        "Basics in c/cpp,basics in SQL "
      ]
    }
  ],
  "skills": [
    {
      "name": "C/CPP,HTML,SQL,",
      "level": "Basics",
      
    }
  ],
  "languages": [
    {
      "language": "Marathi,Hindi,English",
      "fluency": "Intermediate"
    }
  ],
  "interests": [
    {
      "name": "Sports,Gaming",
      "keywords": [
        "Cricket,Badminton"
      ]
    }
  ]
}

var res=Object.keys(resume);
for(var i=0;i<res.length;i++)
console.log(res[i],resume[res[i]]);
