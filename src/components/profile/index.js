import React from "react";
import useGithub from "../../hooks/github-hooks";
import * as S from "./styled";

const Profile = () => {
  const { githubState } = useGithub();

  return (
    <S.Wrapper>
      <S.WrapperImage src={githubState.user.avatar} alt="Avatar of user" />
      <S.WrapperInfoUser>
        {/* <div> */}
          <h1>{githubState.user.name}</h1>
          <S.WrapperUserGeneric>
            <h3>Username:</h3>
            <a
              href={githubState.user.html_url}
              target="_blank"
              rel="noreferrer"
            >
              {githubState.user.login || 'Não fornecido'}
            </a>
          </S.WrapperUserGeneric>
          <S.WrapperUserGeneric>
            <h3>Company:</h3>
            <span>{githubState.user.company || 'Não fornecido'}</span>
          </S.WrapperUserGeneric>
          <S.WrapperUserGeneric>
            <h3>Location:</h3>
            <span>{githubState.user.location || 'Não fornecido'}</span>
          </S.WrapperUserGeneric>
          <S.WrapperUserGeneric>
            <h3>Blog:</h3>
            <a href={githubState.user.blog || '#'} target={githubState.user.blog && "_blank"} rel="noreferrer">
              {githubState.user.blog || 'Não fornecido'}
            </a>
          </S.WrapperUserGeneric>
        {/* </div> */}
        <S.WrapperStatusCount>
          <div>
            <h4>Followers</h4>
            <span> {githubState.user.followers || 'N/A'}</span>
          </div>
          <div>
            <h4>Followings</h4>
            <span> {githubState.user.following || 'N/A'}</span>
          </div>
          <div>
            <h4>Gists</h4>
            <span> {githubState.user.public_gists || 'N/A'}</span>
          </div>
          <div>
            <h4>Repos</h4>
            <span> {githubState.user.public_repos || 'N/A'}</span>
          </div>
        </S.WrapperStatusCount>
      </S.WrapperInfoUser>
    </S.Wrapper>
  );
};

export default Profile;
