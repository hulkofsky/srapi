import React from 'react'

const CMS_URL = 'http://localhost:1337/content';

const fetchContent = (id) => fetch(id ? `${CMS_URL}?location=${id}` : CMS_URL)
  .then((res) => {
    if (!res.status || res.status !== 200) {
      return Promise.reject(new Error('Unable to connect to the CMS'));
    }
    return res;
  })
  .then(res => res.json())
  .then(data => data.map(({ identifier, text_value }) => ({ identifier, text_value })))
  .then((rows) => {
    const obj = {};
    rows.forEach(({ identifier, text_value }) => {
      obj[identifier] = {
        identifier,
        text_value
      };
    });
    return obj;
  })
  .catch(() => {
    console.log('Unable to connect to the CMS, please check the network and try again');
    return Promise.resolve({});
  });


export default (Child) => {
	return class Higher extends React.Component {
		static async getInitialProps(ctx) {
      const childInitialProps = Child.getInitialProps ? await Child.getInitialProps(ctx) : {}
      const content = await fetchContent(ctx.query.id || undefined)

			return {
        ...childInitialProps,
        content
      }
		}

    render() {
      return <Child {...this.props}/>
    }
	}
}

export const ContentFactory = (edit = false) => {
  if (edit) {
    return (content) => content ? <span><span className='content-edit-button'></span>{content.text_value}</span> : null
  } else {
    return (content) => content ? content.text_value : null
  }
}
