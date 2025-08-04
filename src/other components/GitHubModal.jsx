const GitHubModal = ({ user }) => {
  return (
    <div className="modal fade" id="githubProfile" tabIndex="-1" aria-labelledby="githubProfileLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg">
        <div className="modal-content text-light bg-dark">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="githubProfileLabel">Mon profil GitHub</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body d-flex flex-column flex-lg-row gap-4">
            {user && (
              <>
                <div className="w-100 w-lg-50">
                  <img src="/images/doraemon-profile.png" alt="doraemon" style={{ width: '100%' }}/>
                </div>
                <div className="d-flex flex-column w-100 w-lg-50 text-start">
                  <div><i className="bi bi-person pe-2"></i>{user.name}</div>
                  <hr />
                  <div><i className="bi bi-geo-alt pe-2"></i>{user.location}</div>
                  <hr />
                  <div><i className="bi bi-card-text pe-2"></i>{user.bio}</div>
                  <hr />
                  <div><i className="bi bi-box pe-2"></i>Repositories : {user.public_repos}</div>
                  <hr />
                  <div><i className="bi bi-people pe-2"></i>Followers : {user.followers}</div>
                  <hr />
                  <div><i className="bi bi-people pe-2"></i>Following : {user.following}</div>
                </div>
              </>
            )}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitHubModal;