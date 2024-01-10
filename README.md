# Homepage
My magnum opus&mdash;the biggest project I've set out to do alone.

This portfolio is a full-stack web app meant to replace my current personal website.

## Frontend
### Deployment
The React app is hosted on [AWS Amplify](https://aws.amazon.com/amplify/) at [https://main.dawqj0vyeni7s.amplifyapp.com](https://main.dawqj0vyeni7s.amplifyapp.com).
A new instance is set to deploy every time the `main` branch is updated.

I used Amplify's built-in domain management tool to enable HTTPS and connect the instance to [https://www.scottlai.tech](https://www.scottlai.tech).
This involved creating a `CNAME` record in my DNS provider with the name set to `www.scottlai.tech` and the value set to an AWS-provided link in the form of `<id>.cloudfront.net`.
I also created several `A` records--one to associate [scottlai.tech](https://www.scottlai.tech) to each IP address associated with my Amplify instance.

[scottlai.tech](https://www.scottlai.tech) is configured to redirect to [www.scottlai.tech](https://www.scottlai.tech).

## Backend
### Deployment
The Express app is hosted on [AWS Elastic Beanstalk](https://aws.amazon.com/elasticbeanstalk/) (EB) at [http://homepage3-dev.eba-f8fxthz6.us-east-2.elasticbeanstalk.com/](http://homepage3-dev.eba-f8fxthz6.us-east-2.elasticbeanstalk.com/).
I have disabled automatic deployment, and I deploy a new instance manually by running `eb deploy` in the EB Command Line Interface (CLI).

In order to access the EB instance at my custom domain name, I created a `CNAME` record in my DNS provider with the name set to `api.scottlai.tech` and the value set to the instance's domain.

To enable HTTPS, I first created an SSL certificate for [api.scottlai.tech](https://api.scottlai.tech) using [AWS Certificate Manager](https://aws.amazon.com/certificate-manager/) (ACM), which involved creating a `CNAME` record to verify I own the domain name.

I then navigated to the instance's load balancer and created a listener on port 443 with the HTTPS protocol and the SSL certificate I just created.
This allows the instance to be accessed at [https://api.scottlai.tech](https://api.scottlai.tech).

### API
The frontend uses the backend's API to query data from the database.
It features the following endpoints, each with some options/query parameters to narrow down results. Separate multiple options with an ampersand (`&`).

#### Education: `/education` - universities I've attended (just [UT](https://www.utexas.edu/), for now)

#### Courses: `/courses?[QUERY]` - classes I've taken in residence
* `page=PAGE_NUMBER`
    * the API is paginated based on the page size
    * default: `1`
* `perPage=PAGE_SIZE`
    * the number of courses to show per page
    * default: `10`
* `department=DEPARTMENT_1,DEPARTMENT_2,...`
    * filter the courses by the departments they belong to
    * separate multiple departments with a comma (`,`)
    * options:
        Value        | Equivalent Department
        -------------|-------------------------------
        `ACC`        | Accounting
        `ANS`        | Asian Studies
        `CH`         | Chemistry
        `C S`        | Computer Science
        `FIN`        | Finance
        `GOV`        | Government
        `HIS`        | History
        `LEB`        | Legal Environment of Business
        `M`          | Mathematics
        `MAN`        | Management
        `MIS`        | Management Information Systems
        `MUS`        | Music
        `PED`        | Physical Education
        `RTF`        | Radio-Television-Film
        `SDS`        | Statistics and Data Sciences
        `UGS`        | Undergraduate Studies
    * default: all
* `semester=SEMESTER_1,SEMESTER_2,...`
    * filter the courses by the semesters I took them in
    * separate multiple semesters with a comma (`,`)
    * options:
        Value        | Equivalent Semester
        -------------|--------------------
        `fa20`       | Fall 2020
        `sp21`       | Spring 2021
        `fa21`       | Fall 2021
        `sp22`       | Spring 2022
        `fa22`       | Fall 2022
        `sp23`       | Spring 2023
        `su23`       | Summer 2023
        `fa23`       | Fall 2023
        `sp24`       | Spring 2024
    * default: all
* `minGrade=MIN_GRADE`
    * filter the courses by the grades I got in them
    * sets the lower bound of the grade range to query for
    * options:
        Value    | Equivalent Grade
        ---------|-----------------
        `CR`     | CR (credit)
        `Bminus` | B-
        `B`      | B
        `Bplus`  | B+
        `Aminus` | A-
        `A`      | A
    * default: Bminus
* `maxGrade=MAX_GRADE`
    * filter the courses by the grades I got in them
    * sets the upper bound of the grade range to query for
    * options:
        Value    | Equivalent Grade
        ---------|-----------------
        `CR`     | CR (credit)
        `Bminus` | B-
        `B`      | B
        `Bplus`  | B+
        `Aminus` | A-
        `A`      | A
    * default: A

#### Skills: `/skills?[QUERY]` - skills I've developed
* `category=CATEGORY_1,CATEGORY_2,...`
    * filter the skills by their category
    * separate multiple categories with a comma (`,`)
    * options:
        * `Main` - select few I chose to display on the front page
        * `Programming Languages`
        * `Other Languages`
        * `Tools`
        * `Database`
        * `Cloud`
        * `Frameworks / Libraries`
        * `Digital Media Production`
    * default: all

#### Projects: `/projects?[QUERY]` - projects I've done
* `limit=N`
    * limits the query to the `N` most recent projects
    * default: the total number of projects

#### Experience: `/experience` - work experience I've attained

#### Honors: `/honors` - honors I've been awarded

#### Certifications: `/certifications?[QUERY]` - certifications I've gotten
* `limit=N`
    * limits the query to the `N` most recent certifications
    * default: the total number of certifications

## Database
The data used in this project is stored across several collections of a [MongoDB](https://www.mongodb.com/) instance.

I chose to use [NoSQL](https://www.mongodb.com/nosql-explained), specifically a document-oriented database, for the flexibility it provides in planning and development. Having a dynamic schema was important, because I was working on all parts of the website at the same time and frequently changed how the data was structured.

As for the database management system (DBMS), I chose MongoDB out of familiarity. I enjoyed using its products before in my data management class.

I imported the data by creating a JSON file containing data for each collection and uploading them with [MongoDB Compass](https://www.mongodb.com/products/tools/compass). If I need to update the data, I edit the relevant JSON file(s), and reupload to the corresponding collection(s).