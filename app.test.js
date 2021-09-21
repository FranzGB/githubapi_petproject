import * as App from './app.js';
import moment from 'moment';

beforeEach(() => {
    fetch.resetMocks();
  });
const mockRepos = 
    [
        {
          "id": 1176286,
          "name": "pivotal_planning_poker",
          "stargazers_count": 6,
          "updated_at": "2017-05-21T04:36:44Z",
          "pushed_at": "2012-02-21T13:57:13Z"
        },
        {
          "id": 1493846,
          "name": "hackchange_demo",
          "stargazers_count": 0,
          "updated_at": "2014-12-15T12:18:33Z",
          "pushed_at": "2011-04-22T00:16:16Z"
        },
        {
          "id": 1673657,
          "name": "propel",
          "stargazers_count": 9,
          "updated_at": "2019-08-13T14:44:41Z",
          "pushed_at": "2012-02-05T02:13:23Z"
        },
        {
          "id": 3148847,
          "name": "stub_shell",
          "stargazers_count": 7,
          "updated_at": "2017-06-05T19:58:59Z",
          "pushed_at": "2012-02-05T02:29:35Z"
        },
        {
          "id": 3434667,
          "name": "pull_panel",
          "stargazers_count": 2,
          "updated_at": "2014-05-05T05:03:07Z",
          "pushed_at": "2012-06-26T21:24:13Z"
        },
        {
          "id": 3631804,
          "name": "hubot",
          "stargazers_count": 2,
          "updated_at": "2013-01-08T02:42:37Z",
          "pushed_at": "2020-05-19T18:18:45Z"
        },
        {
          "id": 3631889,
          "name": "hubot-scripts",
          "stargazers_count": 1,
          "updated_at": "2013-01-08T02:42:44Z",
          "pushed_at": "2012-03-05T18:28:13Z"
        },
        {
          "id": 3955597,
          "name": "railblazer",
          "stargazers_count": 18,
          "updated_at": "2019-08-13T15:00:22Z",
          "pushed_at": "2015-12-01T17:48:27Z"
        },
        {
          "id": 7785888,
          "name": "conway-cljs",
          "stargazers_count": 1,
          "updated_at": "2013-10-02T06:10:12Z",
          "pushed_at": "2013-02-05T20:36:34Z"
        },
        {
          "id": 14761232,
          "name": "cuarenta",
          "stargazers_count": 1,
          "updated_at": "2019-12-05T06:33:09Z",
          "pushed_at": "2013-11-27T23:36:42Z"
        },
        {
          "id": 16807465,
          "name": "discourse",
          "stargazers_count": 0,
          "updated_at": "2014-02-17T22:40:22Z",
          "pushed_at": "2014-02-17T22:40:22Z"
        },
        {
          "id": 16866406,
          "name": "twitter-feed",
          "stargazers_count": 17,
          "updated_at": "2021-01-14T20:58:48Z",
          "pushed_at": "2019-05-12T18:52:32Z"
        },
        {
          "id": 17161901,
          "name": "inflections-hs",
          "stargazers_count": 34,
          "updated_at": "2020-09-26T19:03:57Z",
          "pushed_at": "2020-09-11T13:44:31Z"
        },
        {
          "id": 18574310,
          "name": "dbmigrations",
          "stargazers_count": 1,
          "updated_at": "2019-12-05T06:33:20Z",
          "pushed_at": "2014-05-27T19:39:58Z"
        },
        {
          "id": 18971098,
          "name": "plpgunit",
          "stargazers_count": 0,
          "updated_at": "2014-04-20T23:54:08Z",
          "pushed_at": "2014-04-20T23:54:09Z"
        },
        {
          "id": 19701230,
          "name": "haskell-deploy",
          "stargazers_count": 1,
          "updated_at": "2015-06-14T12:33:25Z",
          "pushed_at": "2014-05-12T14:10:00Z"
        },
        {
          "id": 19947816,
          "name": "valid_data",
          "stargazers_count": 5,
          "updated_at": "2019-12-19T01:18:06Z",
          "pushed_at": "2015-10-07T09:01:54Z"
        },
        {
          "id": 20001143,
          "name": "hapistrano",
          "stargazers_count": 94,
          "updated_at": "2021-08-24T06:03:44Z",
          "pushed_at": "2021-07-16T18:17:42Z"
        },
        {
          "id": 20531838,
          "name": "Shelly.hs",
          "stargazers_count": 1,
          "updated_at": "2019-12-05T06:33:26Z",
          "pushed_at": "2014-06-05T16:22:01Z"
        },
        {
          "id": 21290520,
          "name": "clockwork",
          "stargazers_count": 0,
          "updated_at": "2016-10-27T17:28:54Z",
          "pushed_at": "2014-06-27T22:36:32Z"
        },
        {
          "id": 23109583,
          "name": "capistrano-db-tasks",
          "stargazers_count": 0,
          "updated_at": "2017-01-11T19:09:24Z",
          "pushed_at": "2017-05-19T21:41:56Z"
        },
        {
          "id": 23751510,
          "name": "token-bucket",
          "stargazers_count": 2,
          "updated_at": "2019-12-05T06:33:34Z",
          "pushed_at": "2014-09-10T03:53:51Z"
        },
        {
          "id": 24041218,
          "name": "corasick-park",
          "stargazers_count": 1,
          "updated_at": "2019-12-05T06:33:35Z",
          "pushed_at": "2014-09-29T23:01:24Z"
        },
        {
          "id": 25698483,
          "name": "weak-strong",
          "stargazers_count": 2,
          "updated_at": "2018-06-13T19:22:09Z",
          "pushed_at": "2014-12-07T20:15:52Z"
        },
        {
          "id": 27134978,
          "name": "just-haskell",
          "stargazers_count": 0,
          "updated_at": "2015-04-02T22:26:01Z",
          "pushed_at": "2014-11-27T15:14:12Z"
        },
        {
          "id": 28968951,
          "name": "reverse",
          "stargazers_count": 0,
          "updated_at": "2015-06-04T16:33:36Z",
          "pushed_at": "2015-06-04T16:49:46Z"
        },
        {
          "id": 29714233,
          "name": "passenger-check",
          "stargazers_count": 2,
          "updated_at": "2019-12-05T06:33:47Z",
          "pushed_at": "2015-03-25T23:39:22Z"
        },
        {
          "id": 29879491,
          "name": "keyword-args",
          "stargazers_count": 1,
          "updated_at": "2019-12-05T06:33:48Z",
          "pushed_at": "2015-04-23T18:55:40Z"
        },
        {
          "id": 29879757,
          "name": "sshd-lint",
          "stargazers_count": 5,
          "updated_at": "2020-07-13T06:32:35Z",
          "pushed_at": "2015-09-08T14:16:21Z"
        },
        {
          "id": 30319478,
          "name": "github",
          "stargazers_count": 1,
          "updated_at": "2019-12-05T06:33:48Z",
          "pushed_at": "2015-02-06T19:29:17Z"
        }
];

describe("It fetches all repositories from SB Github and returns all the ones that more or equal to 5 stars",()=>{  
    it('Get all repositories form SB organization',async () => {
        fetch.mockResponseOnce(JSON.stringify(mockRepos));
        const repos = await App.getAllRepos();
        expect(repos).toEqual(mockRepos);
        expect(fetch).toHaveBeenCalledTimes(1);
    })
    
    it("Filters my repo list with only the repositories that have 5 or more stars", ()=>{
        const my5Stars = App.filter5Stars(mockRepos);
        my5Stars.forEach(repo=>expect(repo.stargazers_count).toBeGreaterThanOrEqual(5));
    })
})
describe("It filters the last 5 updated repositories",()=>{
    it("Sorts my repositories by its update date",()=>{
        const mySorted = App.sortByDate(mockRepos);
        mySorted.forEach(
            (currentRepo,idx,repos) =>{
                if (idx +1 == repos.length){

                }
                else
                    expect(moment(currentRepo.pushed_at).isSameOrAfter(moment(repos[idx+1].pushed_at))).toBeTruthy();   
                
            })
    })
    it("filters my repositories to the last 5 updated",()=>{
        const myLastUpdated = App.filterLast5Updated(mockRepos);
        expect(myLastUpdated.length).toEqual(5)
    })
})

describe("Returns the sum of all repositories stars",()=>{
    it("Sums all the repositories stars",()=>{
        expect(App.sumAllStars(mockRepos)).toEqual(214);
    }
    )
})

