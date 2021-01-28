# My Thought Process Log

- I’ve setup my Git repository locally and make my initial push.
- I need to design a dashboard layout to display the given data; on some grid paper, I’m going to start a rough sketch to get an idea of how the project will look and function.
- I’d like to have two views: the dashboard and a node details page. The details page would be used to view specific information about the selected node.
- Now that I have an idea of how it will look and function, I’m going to start my React application.
- I’m going to write a hook, useAxiosGet, to fetch data from the endpoint. Then I’ll log the data as a table in the console to debug. I’m using the useEffect hook to only make a single request for the time being; I’ll make it self-updating soon. I don’t want to spam requests while I’m developing the project.
- The hook is working and fetching data. I’m taking mockAPI’s page and limit parameters into account.
- I’ve created a Switch and my views; now I’m going to work on adding some components. I’ll start with NodeItem first.
- I’ve created a container for my NodeItems and I’m sorting them with Bootstrap’s grid system.
- I’ve created a nice design for the overall application and have added a button to each NodeItem that links to the NodeDetails eventual view. I’ve also added progress bars to visually indicate their stats.
- I've added a spinning loader for when making API requests. Now the user will understand the content is being loaded, especially if they’re using a slow connection. It’s a simple but essential component.
- With the new hook I wrote called useInterval, the useAxiosGet hook now makes a request every five minutes. Unfortunately, JavaScript’s setInterval function calls the callback after the timeout, so the initial request will be delayed by five minutes. To get around this, I used the same code wrapped in the useEffect hook. However, this goes against the DRY principle, so I will have to clean this up later.
- It’s time to start adding the pagination and a way to limit the amount of results on the NodeDashboard view. I’m going to put these in their own separate component called DashboardToolbar.
- I had to write a hook, useAxiosGetTotalNodes, to query the amount of nodes in endpoint’s response. I need this for my method of pagination.
- I need the pagination dropdown to be scalable. Right now it lists every possible page. If we had even as little as 20 pages, the dropdown would look bloated. I'm going to take a slightly different approach to this.
- I'm having troubles accessing the endpoint. I’m nearly done; I just want to finish the NodeDetails view and polish the project a bit. However, I think this my cue to take a break.