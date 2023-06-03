# Homepage
magnum opus

## Frontend
### Deployment
The React app is hosted on AWS Amplify at https://main.dawqj0vyeni7s.amplifyapp.com.
A new instance is set to deploy every time the `main` branch is updated.

I used Amplify's built-in domain management tool to enable HTTPS and connect the instance to https://www.scottlai.tech.
This involved creating a CNAME record in my DNS provider with the name set to www.scottlai.tech and the value set to an AWS-provided link in the form of \<id>.cloudfront.net.
I also created several A records--one to associate scottlai.tech to each IP address associated with my Amplify instance.

scottlai.tech is configured to redirect to www.scottlai.tech.

## Backend
### Deployment
The Express app is hosted on AWS Elastic Beanstalk (EB) at http://homepage3-dev.eba-f8fxthz6.us-east-2.elasticbeanstalk.com/.
I have disabled automatic deployment, and I deploy a new instance manually by running `eb deploy` in the EB CLI.

In order to access the EB instance at my custom domain name, I created a CNAME record in my DNS provider with the name set to api.scottlai.tech and the value set to the instance's domain.

To enable HTTPS, I first created an SSL certificate for api.scottlai.tech using AWS Certificate Manager (ACM), which involved creating a CNAME record to verify I own the domain name.

I then navigated to the instance's load balancer and created a listener on port 443 with the HTTPS protocol and the SSL certificate I just created.
This allows the instance to be accessed at https://api.scottlai.tech.

### API
The frontend uses the backend's API to query data from the database.
It features the following endpoints, each with some options/query parameters to narrow down results. Separate multiple options with an ampersand (`&`).

#### Courses: `/courses?[OPTIONS]` - classes I've taken at UT
* `page=PAGE_NUMBER`
    * the API is paginated based on the page size
    * default: `1`
* `perPage=PAGE_SIZE`
    * the number of courses to show per page
    * default: `5`
* `department=DEPARTMENT_1,DEPARTMENT_2,...`
    * filter the courses by the departments they belong to
    * separate multiple departments with a comma (`,`)
    * options:
        Value        | Equivalent Department
        -------------|-------------------------------
        `ACC`        | Accounting
        `ANS`        | Asian Studies
        `CH`         | Chemistry
        `CS`         | Computer Science
        `GOV`        | Government
        `HIS`        | History
        `LEB`        | Legal Environment of Business
        `M`          | Mathematics
        `MAN`        | Management
        `MIS`        | Management Information Systems
        `MUS`        | Music
        `SDS`        | Statistics and Data Sciences
        `UGS`        | Undergraduate Studies
    * default: all
* `term=TERM1,TERM2,...`
    * filter the courses by the semesters I took them in
    * separate multiple terms with a comma (`,`)
    * options:
        Value        | Equivalent Term
        -------------|----------------
        `f20`        | Fall 2020
        `s21`        | Spring 2021
        `f21`        | Fall 2021
        `s22`        | Spring 2022
        `f22`        | Fall 2022
        `s23`        | Spring 2023
    * default: all
* `minGrade=MIN_GRADE`
    * filter the courses by the grades I got in them
    * sets the lower bound of the grade range to query for
    * options:
        Value    | Equivalent Grade
        ---------|-----------------
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
        `Bminus` | B-
        `B`      | B
        `Bplus`  | B+
        `Aminus` | A-
        `A`      | A
    * default: A

## Database
The data used in this project is stored across several collections of a MongoDB instance.

I chose to use NoSQL, specifically a document-oriented database, for the flexibility it provides in planning and development. Having a dynamic schema was important, because I was working on all parts of the website at the same time and frequently changed how the data was structured.

As for the database management system (DBMS), I chose MongoDB out of familiarity. I enjoyed using its products before in my data management class.

I imported the data by creating a JSON file containing data for each collection and uploading them with MongoDB Compass. If I need to update the data, I edit the relevant JSON file(s), and reupload to the corresponding collection(s).