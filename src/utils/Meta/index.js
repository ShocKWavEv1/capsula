import Head from "next/head";
import PropTypes from "prop-types";

const Meta = (props) => {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <meta content={props.title} key="title" property="og:title" />
      </Head>
    </div>
  );
};

Meta.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Meta;