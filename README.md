# React with Isomorphic SSR

feature: Enable ES6 Module & JSX on Nodejs Server for SSR

# file structure
webpack configuration: ```/webpack.config.js```

babel configuration: ```/.babelrc```

material theme: ```/src/theme```

client entry: ```/src/client.js```

server entry: ```/src/server.js```

# Enviorment Setting
Through npm package: ```dotenv```  & config file: ```/.env```

template: ```/src/template.html```

common root Component: ```/src/Component/App```

store: ```src/Components/store.js```

# run & build
~~~
npm run build
~~~

 run SSR server with webpack --watch & nodemon
~~~
npm start
~~~

* run with SSR in production mode:
~~~
npm run server:start
~~~

